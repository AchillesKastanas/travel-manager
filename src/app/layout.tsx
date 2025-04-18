"use client";
import { useResize } from "@/hooks/useResize";
import Sidebar from "@components/Sidebar/Sidebar";
import Topbar from "@components/Topbar/Topbar";
import { ModalProvider } from "@/contexts/ModalContext/ModalContext";

import "@styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile } = useResize();

  return (
    <html lang="en">
      <body className={`${isMobile ? "isMobile" : "isDesktop"}`}>
        <ModalProvider>
          <Sidebar />
          <Topbar />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
