"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteClose() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;
  return (
    <Link href="/" className="site-close" aria-label="Go home">
      ✕
    </Link>
  );
}
