"use client";

import { Home, ArrowLeft, Bug } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="flex w-full max-w-lg flex-col items-center text-center">
        <Card className="w-full bg-white shadow-sm">
          <CardContent className="p-8">
            <h1 className="mb-3 text-3xl leading-tight font-extrabold">Page not found</h1>

            <p className="mb-8 text-slate-600">
              Oops — the page you are looking for doesn’t exist or may have been moved. You can go back, return home, or
              tell us about this broken link.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button onClick={() => router.back()} variant="ghost" className="w-full cursor-pointer sm:w-auto">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go back
              </Button>

              <Link href="/" className="w-full sm:w-auto">
                <Button className="w-full cursor-pointer sm:w-auto">
                  <Home className="mr-2 h-4 w-4" />
                  Take me home
                </Button>
              </Link>

              <Button variant="outline" disabled className="w-full sm:w-auto">
                <Bug className="mr-2 h-4 w-4" />
                Report issue
              </Button>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Tip: check the URL for typos, or return home to find what you need.
            </p>
          </CardContent>
        </Card>

        <p className="mt-8 text-xs text-slate-400">
          © {new Date().getFullYear()} DigitalMenu — need help?{" "}
          <Link href="/contact" className="text-slate-600 underline">
            Contact us
          </Link>
        </p>
      </div>
    </main>
  );
}
