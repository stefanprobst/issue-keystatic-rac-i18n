import type { ReactNode } from "react";
import { LocalizedStringProvider } from "react-aria-components/i18n";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  const locale = "en";

  return (
    <html lang={locale}>
      <body>
        <LocalizedStringProvider locale={locale} />
        {children}
      </body>
    </html>
  );
}
