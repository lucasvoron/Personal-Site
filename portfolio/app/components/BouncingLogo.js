"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BouncingLogo.module.css";

export default function BouncingLogo({ src = "/dvd.png", size = 80, speed = 0.1 }) {
  const ref = useRef();
  const pos = useRef({ x: Math.random() * 0.6 + 0.1, y: Math.random() * 0.6 + 0.1 });
  const vel = useRef({ x: 0.3 * speed, y: 0.3 * speed });
  const raf = useRef(null);
  const pathname = usePathname();
  // show only on the root index page
  if (typeof pathname === "string" && pathname !== "/") return null;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // convert normalized positions to px
      let x = pos.current.x * (w - size);
      let y = pos.current.y * (h - size);
      x += vel.current.x;
      y += vel.current.y;
      // bounce on edges
  // bounce on edges — invert direction but keep same speed (no boost)
  if (x <= 0) { x = 0; vel.current.x = Math.abs(vel.current.x); }
  if (y <= 0) { y = 0; vel.current.y = Math.abs(vel.current.y); }
  if (x >= w - size) { x = w - size; vel.current.x = -Math.abs(vel.current.x); }
  if (y >= h - size) { y = h - size; vel.current.y = -Math.abs(vel.current.y); }
      el.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
      pos.current.x = x / (w - size);
      pos.current.y = y / (h - size);
      raf.current = requestAnimationFrame(update);
    };
    raf.current = requestAnimationFrame(update);
    const onResize = () => {
      // keep position normalized
      pos.current.x = Math.min(Math.max(pos.current.x, 0), 1);
      pos.current.y = Math.min(Math.max(pos.current.y, 0), 1);
    };
    window.addEventListener("resize", onResize);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", onResize);
    };
  }, [size]);

  return (
    <Link href="/about" className={styles.wrapper} aria-label="About">
      <div ref={ref} className={styles.logo} style={{ width: size, height: size }}>
        <img src={src} alt="dvd logo" draggable="false" />
      </div>
    </Link>
  );
}
