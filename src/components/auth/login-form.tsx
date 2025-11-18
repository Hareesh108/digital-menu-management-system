"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { cn } from "~/lib/utils";

import { api } from "~/trpc/react";

import { VerificationCodeInput } from "~/components/auth/verification-code-input";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";

type Step = "email" | "code";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter();

  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");

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
      toast.success("Login successful!");
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

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    requestCode.mutate({ email });
  };

  const handleCodeComplete = (code: string) => {
    verifyCode.mutate({ email, code });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            {step === "email"
              ? "Enter your email below to login to your account"
              : "Enter the verification code sent to your email"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === "email" ? (
            <form onSubmit={handleEmailSubmit}>
              <FieldGroup>
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
                </Field>

                <Field>
                  <Button type="submit" disabled={requestCode.isPending}>
                    {requestCode.isPending ? "Sending..." : "Send Code"}
                  </Button>
                  <FieldDescription className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-primary underline">
                      Sign up
                    </Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          ) : (
            <div className="space-y-4">
              <Field>
                <FieldLabel>Verification Code</FieldLabel>

                <VerificationCodeInput onComplete={handleCodeComplete} disabled={verifyCode.isPending} />

                <FieldDescription className="text-center">
                  We sent a 6-digit code to <span className="font-medium text-primary">{email || "your email"}</span>.
                  <br />
                  Check your inbox or spam folder.
                </FieldDescription>
              </Field>

              <div className="flex flex-col gap-2">
                <Button
                  variant="ghost"
                  onClick={() => {
                    if (!email) {
                      toast.error("Please enter your email first");
                      return;
                    }
                    requestCode.mutate({ email });
                    toast.info(`Code resent to ${email}`);
                  }}
                  disabled={requestCode.isPending || !email}
                  className="cursor-pointer text-sm"
                >
                  Resend Code
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
