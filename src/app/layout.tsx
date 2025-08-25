import type {Metadata} from 'next';
import {Noto_Sans_SC} from 'next/font/google';
import './globals.css';
import React from "react";

const notoSans = Noto_Sans_SC({
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: '小方盒の主页',
  description: '这是我的个人主页！请多指教喵~',
  keywords: ['小方盒LSCube', '个人主页', '方盒', 'LSC'],
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥺</text></svg>",
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang='zh-CN'>
    <body
      className={`${notoSans.className} antialiased select-none bg-slate-300 dark:bg-gray-950`}
    >
    {children}
    </body>
    </html>
  );
}
