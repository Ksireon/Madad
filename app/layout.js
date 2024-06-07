import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MadAd",
  description: "Ваш ключ к эффективному присутствию в социальных сетях! Мы - профессиональное агентство по управлению социальными медиа, стремящееся помочь вашему бизнесу процветать в онлайн-мире.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
