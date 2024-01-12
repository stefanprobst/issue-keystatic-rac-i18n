import { LocalizedStringProvider } from "react-aria-components/i18n";
import KeystaticApp from "@/app/keystatic/keystatic";

export default function RootLayout() {
  const locale = "en";

  return (
    <html lang={locale}>
      <body>
        <LocalizedStringProvider locale={locale} />
        <KeystaticApp />
      </body>
    </html>
  );
}
