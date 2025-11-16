"use client";

import { useEffect } from "react";
import { api } from "~/trpc/react";

export function CurrentUserEmail() {
  const utils = api.useUtils();
  const getSession = api.auth.getSession.useQuery(undefined, {
    enabled: true,
  });

  const storeEmail = api.dashboard.storeEmail.useMutation({
    onSuccess: () => {
      void utils.auth.getSession.invalidate();
    },
  });

  useEffect(() => {
    if (getSession.data?.user?.email) {
      const email = getSession.data.user.email;
      console.log("email:", email);

      // store locally
      try {
        localStorage.setItem("currentUserEmail", email);
      } catch {}

      // attempt to store/confirm on the server (will be a no-op if the same)
      storeEmail.mutate({ email });
    }
  }, [getSession.data, storeEmail]);

  return null;
}
