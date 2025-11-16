"use client";

import { QrCode, User, List, MapPin, ImageIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FeatureCard, PreviewCard } from "~/components/landing-page";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export default function LandingPage() {
  const router = useRouter();

  function handleSignIn() {
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-linear-to-tr from-purple-600 to-pink-500 p-2 shadow-sm">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg leading-none font-extrabold">DigitalMenu</h1>
              <p className="text-xs text-slate-500">QR menus & admin for restaurants</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={handleSignIn} className="ml-2">
              Sign in
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge className="mb-4">Built for restaurants</Badge>
            <h2 className="text-4xl leading-tight font-extrabold sm:text-5xl">
              Digital menus that load instantly — <span className="text-indigo-600">QR & shareable links</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Manage restaurants, categories and dishes with spice level, images and organized categories. Customers
              open menus via QR or a link — no app required.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" onClick={handleSignIn}>
                Sign in
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="flex flex-col items-start gap-1">
                <QrCode className="h-6 w-6 text-indigo-600" />
                <span className="text-sm text-slate-600">QR-ready</span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <List className="h-6 w-6 text-indigo-600" />
                <span className="text-sm text-slate-600">Categories</span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <ImageIcon className="h-6 w-6 text-indigo-600" />
                <span className="text-sm text-slate-600">Dish images</span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <User className="h-6 w-6 text-indigo-600" />
                <span className="text-sm text-slate-600">Owner admin</span>
              </div>
            </div>
          </div>

          <PreviewCard />
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold">Features</h3>
          <p className="mt-2 max-w-2xl text-slate-600">
            Everything owners need to manage menus — and customers need to view them.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Email sign-in"
              description="Register & sign in using a verification code sent to your email."
              icon={<User className="h-6 w-6 text-indigo-600" />}
            />
            <FeatureCard
              title="Multiple restaurants"
              description="Create and manage many restaurants from one account."
              icon={<MapPin className="h-6 w-6 text-indigo-600" />}
            />
            <FeatureCard
              title="Categories & dishes"
              description="Organize dishes into categories. A dish can belong to multiple categories."
              icon={<List className="h-6 w-6 text-indigo-600" />}
            />
            <FeatureCard
              title="Dish media"
              description="Add images and spice level to each dish for a better customer experience."
              icon={<ImageIcon className="h-6 w-6 text-indigo-600" />}
            />
            <FeatureCard
              title="QR & share links"
              description="Generate QR codes and shareable links so customers can open menus instantly."
              icon={<QrCode className="h-6 w-6 text-indigo-600" />}
            />
            <FeatureCard
              title="Fast & responsive"
              description="Designed for quick load times and mobile-first use."
              icon={<Sparkles className="h-6 w-6 text-indigo-600" />}
            />
          </div>
        </section>

        <footer className="mt-16 border-t py-8">
          <div className="mx-auto max-w-7xl px-6 text-sm text-slate-500">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p>© {new Date().getFullYear()} DigitalMenu — built with ❤️</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:underline">
                  Privacy
                </Link>
                <Link href="#" className="hover:underline">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
