"use client";

import { useCallback, useEffect, useRef } from "react";

import { api } from "~/trpc/react";

export function CurrentUserEmail() {
  const utils = api.useUtils();
  const lastStoredEmailRef = useRef<string | null>(null);

  const getSession = api.auth.getSession.useQuery(undefined, {
    enabled: true,
  });

  const storeEmail = api.dashboard.storeEmail.useMutation({
    onSuccess: () => {
      void utils.auth.getSession.invalidate();
    },
    onError: (error) => {
      console.error("[CurrentUserEmail] storeEmail error:", error);
    },
  });

  const handleStoreEmail = useCallback(
    (email: string) => {
      if (lastStoredEmailRef.current !== email) {
        lastStoredEmailRef.current = email;
        storeEmail.mutate({ email });
      }
    },
    [storeEmail],
  );

  useEffect(() => {
    if (getSession.data?.user?.email) {
      const email = getSession.data.user.email;

      try {
        localStorage.setItem("currentUserEmail", email);
      } catch {}

      handleStoreEmail(email);
    }
  }, [getSession.data?.user?.email, handleStoreEmail]);

  return null;
}
