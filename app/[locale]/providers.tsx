"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { RouterProvider } from "react-aria-components";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers(props: ProvidersProps) {
  const { children } = props;

  const router = useRouter();

  return <RouterProvider navigate={router.push}>{children}</RouterProvider>;
}
