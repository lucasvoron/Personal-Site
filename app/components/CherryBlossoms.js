"use client";
import { useEffect, useRef } from "react";
import styles from "./CherryBlossoms.module.css";

export default function CherryBlossoms() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Mouse tracking for wind effect
    let mouseX = 0;
    let mouseY = 0;

    // Create petals
    const petalCount = 15; // Subtle count
    const flowers = [];

    for (let i = 0; i < petalCount; i++) {
      const flower = document.createElement("div");
      flower.className = styles.flower;
      
      // Random starting position
      const startX = Math.random() * 100;
      flower.style.left = `${startX}%`;
      
      // Random animation delay for staggered effect
      flower.style.animationDelay = `${Math.random() * 10}s`;
      
      // Random animation duration for variety
      flower.style.animationDuration = `${15 + Math.random() * 10}s`;
      
      // Random size variation
      const scale = 0.7 + Math.random() * 0.6;
      flower.dataset.scale = scale;
      flower.style.transform = `scale(${scale})`;
      
      // Store initial data for wind effect
      flower.dataset.baseX = startX;
      flower.dataset.velocityX = 0;
      flower.dataset.velocityY = 0;
      
      // Create 5 petals for this flower
      for (let j = 0; j < 5; j++) {
        const petal = document.createElement("div");
        petal.className = styles.petal;
        petal.style.transform = `rotate(${j * 72}deg)`;
        flower.appendChild(petal);
      }
      
      container.appendChild(flower);
      flowers.push(flower);
    }

    // Track mouse movement
    const handleMouseMove = (e) => {
      const newMouseX = e.clientX;
      const newMouseY = e.clientY;
      
      const deltaX = newMouseX - mouseX;
      const deltaY = newMouseY - mouseY;
      
      mouseX = newMouseX;
      mouseY = newMouseY;
      
      // Immediate reaction - apply wind directly on mouse move
      flowers.forEach((flower, index) => {
        const rect = flower.getBoundingClientRect();
        const flowerCenterX = rect.left + rect.width / 2;
        const flowerCenterY = rect.top + rect.height / 2;
        
        // Calculate distance from mouse
        const distX = mouseX - flowerCenterX;
        const distY = mouseY - flowerCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        // Apply wind force based on proximity (within 200px)
        if (distance < 200 && (Math.abs(deltaX) > 0.5 || Math.abs(deltaY) > 0.5)) {
          const force = (1 - distance / 200);
          let currentVelocityX = parseFloat(flower.dataset.velocityX) || 0;
          let currentVelocityY = parseFloat(flower.dataset.velocityY) || 0;
          
          // Add wind force (very subtle)
          currentVelocityX += (deltaX * force * 0.3);
          currentVelocityY += (deltaY * force * 0.3);
          
          // Clamp velocity
          currentVelocityX = Math.max(-15, Math.min(15, currentVelocityX));
          currentVelocityY = Math.max(-15, Math.min(15, currentVelocityY));
          
          flower.dataset.velocityX = currentVelocityX;
          flower.dataset.velocityY = currentVelocityY;
        }
      });
    };

    // Apply wind effect - just handle damping in the animation loop
    const applyWind = () => {
      flowers.forEach((flower) => {
        // Get current velocity
        let currentVelocityX = parseFloat(flower.dataset.velocityX) || 0;
        let currentVelocityY = parseFloat(flower.dataset.velocityY) || 0;
        
        // Apply stronger damping for smoother motion
        currentVelocityX *= 0.93;
        currentVelocityY *= 0.93;
        
        // Update stored velocity
        flower.dataset.velocityX = currentVelocityX;
        flower.dataset.velocityY = currentVelocityY;
        
        // Apply the visual offset (very subtle)
        const scale = parseFloat(flower.dataset.scale);
        const offsetX = currentVelocityX * 3;
        const offsetY = currentVelocityY * 3;
        
        // Update styles - use separate transform for scale and translate
        flower.style.transform = `scale(${scale})`;
        flower.style.left = `calc(${flower.dataset.baseX}% + ${offsetX}px)`;
        flower.style.marginTop = `${offsetY}px`;
      });

      requestAnimationFrame(applyWind);
    };

    window.addEventListener('mousemove', handleMouseMove);
    applyWind();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      flowers.forEach(flower => {
        if (flower.parentNode) {
          flower.parentNode.removeChild(flower);
        }
      });
    };
  }, []);

  return <div ref={containerRef} className={styles.container} />;
}
