"use client";
import { useState } from "react";
import Sidebar from "@components/Sidebar/Sidebar";
import Topbar from "@components/Topbar/Topbar";
import { ModalProvider } from "@/contexts/ModalContext/ModalContext";

import "@styles/globals.scss";
import { useResize } from "@/hooks/useResize";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile } = useResize();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => setIsSidebarExpanded((prev) => !prev);

  return (
    <html lang="en">
      <body className={`${isMobile ? "isMobile" : "isDesktop"}`}>
        <ModalProvider>
          <Sidebar
            isExpanded={isSidebarExpanded}
            toggleSidebar={toggleSidebar}
          />
          <Topbar toggleSidebar={toggleSidebar} />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
