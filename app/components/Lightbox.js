"use client";
import { useEffect, useCallback, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Lightbox.module.css";

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const imageWrapperRef = useRef(null);
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.body.classList.add("lightbox-open");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.classList.remove("lightbox-open");
    };
  }, [handleKeyDown]);

  if (currentIndex === null || !images[currentIndex]) return null;

  function handleImageAreaClick(e) {
    if (!imageWrapperRef.current || !naturalSize.width || !naturalSize.height) {
      e.stopPropagation();
      return;
    }

    const rect = imageWrapperRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Compute the visible image rectangle for object-fit: contain.
    const scale = Math.min(rect.width / naturalSize.width, rect.height / naturalSize.height);
    const displayedWidth = naturalSize.width * scale;
    const displayedHeight = naturalSize.height * scale;
    const offsetX = (rect.width - displayedWidth) / 2;
    const offsetY = (rect.height - displayedHeight) / 2;

    const isInsideRenderedImage =
      clickX >= offsetX &&
      clickX <= offsetX + displayedWidth &&
      clickY >= offsetY &&
      clickY <= offsetY + displayedHeight;

    if (isInsideRenderedImage) {
      e.stopPropagation();
    }
    // Else: allow bubbling to backdrop so it closes.
  }

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true" aria-label="Wireframe viewer">
      <div className={styles.container}>
        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          disabled={images.length <= 1}
        >
          ‹
        </button>

        <div
          ref={imageWrapperRef}
          className={styles.imageWrapper}
          onClick={handleImageAreaClick}
        >
          <Image
            src={images[currentIndex]}
            alt={`Wireframe ${currentIndex + 1} of ${images.length}`}
            fill
            sizes="90vw"
            className={styles.image}
            style={{ objectFit: "contain" }}
            priority
            onLoadingComplete={(img) => {
              setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
            }}
          />
        </div>

        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          disabled={images.length <= 1}
        >
          ›
        </button>

        <div className={styles.counter} onClick={(e) => e.stopPropagation()}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
