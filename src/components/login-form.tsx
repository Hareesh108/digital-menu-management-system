"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { cn } from "~/lib/utils";

import { api } from "~/trpc/react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { VerificationCodeInput } from "~/components/verification-code-input";

type Step = "email" | "code";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

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
      await utils.auth.getSession.invalidate();
      router.push("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message || "Invalid verification code");
      setVerificationCode("");
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
    setVerificationCode(code);
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
                <FieldDescription className="text-center">Check your email for the 6-digit code</FieldDescription>
              </Field>

              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setStep("email");
                    setVerificationCode("");
                  }}
                  disabled={verifyCode.isPending}
                >
                  Change Email
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    requestCode.mutate({ email });
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
    </div>
  );
}
