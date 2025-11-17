"use client";

import { Home, RefreshCcw, Bug } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="flex w-full max-w-lg flex-col items-center text-center">
        <Card className="w-full bg-white shadow-sm">
          <CardContent className="p-8">
            <h1 className="mb-3 text-3xl leading-tight font-extrabold text-red-600">Something went wrong</h1>

            <p className="mb-8 text-slate-600">
              An unexpected error occurred while processing your request. Please try again, return home, or report this
              issue.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button onClick={() => reset()} variant="destructive" className="w-full sm:w-auto">
                <RefreshCcw className="mr-2 h-4 w-4" />
                Try again
              </Button>

              <Link href="/" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">
                  <Home className="mr-2 h-4 w-4" />
                  Take me home
                </Button>
              </Link>

              <Button variant="outline" disabled className="w-full sm:w-auto">
                <Bug className="mr-2 h-4 w-4" />
                Report issue
              </Button>
            </div>

            <p className="mt-6 text-xs text-slate-500">Error ID: {error.digest ?? "N/A"}</p>
          </CardContent>
        </Card>

        <p className="mt-8 text-xs text-slate-400">
          © {new Date().getFullYear()} DigitalMenu —{" "}
          <Link href="/" className="text-slate-600 underline">
            Contact us
          </Link>
        </p>
      </div>
    </main>
  );
}
