import { Bodoni_Moda } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  // Du kan även ange exempelvis "900" om du behöver den vikten
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.className} w-full overflow-x-hidden`}>
      <body className="w-full">{children}</body>
    </html>

  );
}
