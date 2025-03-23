"use client"
import { usePathname } from "next/navigation";
import TopbarMobile from "@/components/Navbar/TopbarMobile";
import Navbarbottom from "@/components/Navbar/Navbarbottom";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="relative h-screen w-screen">
      {!isHomePage && <TopbarMobile />}
      {children}
      {!isHomePage && <Navbarbottom />}
    </div>
  );
}
