"use client";

import { countries as COUNTRIES, getEmojiFlag, type TCountryCode } from "countries-list";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { toast } from "sonner";

import { api } from "~/trpc/react";

import { VerificationCodeInput } from "~/components/auth/verification-code-input";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type Step = "info" | "code";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();

  const [step, setStep] = useState<Step>("info");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const utils = api.useUtils();
  const requestCode = api.auth.requestCode.useMutation({
    onSuccess: () => {
      setStep("code");
      toast.success("Verification code sent to your email");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to send verification code");
    },
  });

  const verifyCode = api.auth.verifyCode.useMutation({
    onSuccess: async (data) => {
      toast.success("Account created successfully!");
      if (data.sessionToken) {
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        document.cookie = `session-token=${data.sessionToken}; expires=${expiresAt.toUTCString()}; path=/; SameSite=Lax`;
      }
      await utils.auth.getSession.invalidate();
      router.push("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message || "Invalid verification code");
    },
  });

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !country) {
      toast.error("Please fill in all fields");
      return;
    }
    requestCode.mutate({ email, name, country });
  };

  const handleCodeComplete = (code: string) => {
    verifyCode.mutate({ email, code });
  };

  const countryOptions = useMemo(() => {
    return Object.entries(COUNTRIES)
      .map(([code, data]) => ({ code, name: data.name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          {step === "info"
            ? "Enter your information below to create your account"
            : "Enter the verification code sent to your email"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === "info" ? (
          <form onSubmit={handleInfoSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={requestCode.isPending}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={requestCode.isPending}
                />
                <FieldDescription>
                  We&apos;ll use this to contact you. We will not share your email with anyone else.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="country">Country</FieldLabel>

                <Select value={country} onValueChange={setCountry} disabled={requestCode.isPending}>
                  <SelectTrigger id="country" className="w-full">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>

                  <SelectContent>
                    {countryOptions.map((c) => (
                      <SelectItem key={c.code} value={c.name} className="flex items-center gap-3">
                        <span className="text-lg">{getEmojiFlag(c.code as TCountryCode)}</span>
                        <span>{c.name}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FieldDescription>
                  Select your country. If you prefer, start typing the name to find it faster.
                </FieldDescription>
              </Field>
              <FieldGroup>
                <Field>
                  <Button type="submit" disabled={requestCode.isPending}>
                    {requestCode.isPending ? "Sending..." : "Create Account"}
                  </Button>
                  <FieldDescription className="px-6 text-center">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary underline">
                      Sign in
                    </Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </FieldGroup>
          </form>
        ) : (
          <div className="space-y-4">
            <Field>
              <FieldLabel>Verification Code</FieldLabel>
              <VerificationCodeInput onComplete={handleCodeComplete} disabled={verifyCode.isPending} />
              <FieldDescription className="text-center">Check your email for the 6-digit code</FieldDescription>
            </Field>

            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                onClick={() => {
                  requestCode.mutate({ email, name, country });
                  toast.info("Code resent to your email");
                }}
                disabled={requestCode.isPending}
                className="text-sm"
              >
                Resend Code
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
