// import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// const bodoni = Bodoni_Moda({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   // Du kan även ange exempelvis "900" om du behöver den vikten
//   display: "swap",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark w-full overflow-x-hidden">
      <body className="w-full ">{children}</body>
    </html>

  );
}
