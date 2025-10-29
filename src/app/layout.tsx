import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Script from "next/script";
import styles from "./layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "박진원 ♡ 강현미 결혼 합니다.",
  description: "박진원 ♡ 강현미 결혼 합니다.",
  openGraph: {
    title: "박진원 ♡ 강현미 결혼 합니다.",
    description: "박진원 ♡ 강현미 결혼 합니다.",
    images: [
      {
        url: "/img/웨딩메인.jpeg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d5b38a623bd2e216765a0660ce1537d1&autoload=false`;

  return (
    <html lang="ko">
      <head>
        <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      </head>
      <body className={`${inter.className} ${styles.container}`}>
        {children}
      </body>
    </html>
  );
}
