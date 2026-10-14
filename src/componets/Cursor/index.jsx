import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

export const Cursor = () => {
  const ring = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const onOver = (e) => {
      const el = e.target.closest("a, button, [data-cursor]");
      setHover(!!el);
      setLabel(el?.dataset.cursor || "");
    };

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    // Botões magnéticos
    const magnets = document.querySelectorAll("[data-magnetic]");
    const onMagnet = (e) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${mx * 0.25}px, ${my * 0.35}px)`;
    };
    const resetMagnet = (e) => {
      e.currentTarget.style.transform = "";
    };
    magnets.forEach((el) => {
      el.addEventListener("mousemove", onMagnet);
      el.addEventListener("mouseleave", resetMagnet);
    });

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      magnets.forEach((el) => {
        el.removeEventListener("mousemove", onMagnet);
        el.removeEventListener("mouseleave", resetMagnet);
      });
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ring}
      className={`${styles.ring} ${hover ? styles.hover : ""} ${label ? styles.labeled : ""}`}
      aria-hidden="true"
    >
      <span>{label}</span>
    </div>
  );
};
