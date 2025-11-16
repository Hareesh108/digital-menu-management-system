"use client";

import { Copy, Download, QrCode } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "~/components/ui/dialog";

interface QRCodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  url: string;
  restaurantName: string;
}

export function QRCodeDialog({ open, onOpenChange, url, restaurantName }: QRCodeDialogProps) {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");

  const generateQRCode = useCallback(async () => {
    try {
      const QRCode = (await import("qrcode")).default;
      const dataUrl = await QRCode.toDataURL(url, {
        width: 300,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      });
      setQrCodeDataUrl(dataUrl);
    } catch (error) {
      console.error("Error generating QR code:", error);
      toast.error("Failed to generate QR code");
    }
  }, [url]);

  useEffect(() => {
    if (open && url) {
      void generateQRCode();
    }
  }, [generateQRCode, open, url]);

  const handleCopyLink = () => {
    void navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
  };

  const handleDownload = () => {
    if (!qrCodeDataUrl) return;

    const link = document.createElement("a");
    link.download = `${restaurantName}-menu-qr.png`;
    link.href = qrCodeDataUrl;
    link.click();
    toast.success("QR code downloaded!");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>QR Code for {restaurantName}</DialogTitle>
          <DialogDescription>Share this QR code with your customers to access your digital menu</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          {qrCodeDataUrl ? (
            <div>
              <div className="rounded-lg border bg-white p-4">
                <Image src={qrCodeDataUrl} alt="QR Code" width={256} height={256} />
              </div>

              <div className="flex w-full flex-col gap-2">
                <div className="bg-muted flex items-center gap-2 rounded-md p-2">
                  <span className="flex-1 truncate text-sm">{url}</span>
                  <Button variant="ghost" size="icon" onClick={handleCopyLink} className="shrink-0">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <Button onClick={handleDownload} variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download QR Code
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex h-64 items-center justify-center">
              <QrCode className="text-muted-foreground h-12 w-12 animate-spin" />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
