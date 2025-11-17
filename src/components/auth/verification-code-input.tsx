"use client";

import { useState, useRef, useEffect } from "react";

import { cn } from "~/lib/utils";

import { Input } from "~/components/ui/input";

interface VerificationCodeInputProps {
  length?: number;
  onComplete: (code: string) => void;
  disabled?: boolean;
  className?: string;
}

export function VerificationCodeInput({
  length = 6,
  onComplete,
  disabled = false,
  className,
}: VerificationCodeInputProps) {
  const [codes, setCodes] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (disabled) return;

    const digit = value.replace(/\D/g, "");
    if (digit.length > 1) return;

    const newCodes = [...codes];
    newCodes[index] = digit;
    setCodes(newCodes);

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newCodes.every((c) => c !== "") && newCodes.join("").length === length) {
      onComplete(newCodes.join(""));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);

    if (pastedData.length === length) {
      const newCodes = pastedData.split("");
      setCodes(newCodes);

      inputRefs.current[length - 1]?.focus();

      onComplete(pastedData);
    }
  };

  return (
    <div className={cn("flex justify-center gap-2", className)}>
      {Array.from({ length }).map((_, index) => (
        <Input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={codes[index]}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          disabled={disabled}
          className="h-12 w-12 text-center text-lg font-semibold"
        />
      ))}
    </div>
  );
}
