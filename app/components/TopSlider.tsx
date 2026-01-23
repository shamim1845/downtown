'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SLIDER_ITEMS } from '../constants/news-constants';

export default function TopSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(3); // Desktop: 3 items
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, SLIDER_ITEMS.length - itemsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Loop back to start
        }
        return prev + 1;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered, isDragging, maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const offset = startX - x;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      // Snap to nearest item based on drag distance
      const threshold = 50; // pixels to trigger slide
      if (Math.abs(dragOffset) > threshold) {
        if (dragOffset > 0) {
          // Dragged left, go next
          setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
        } else {
          // Dragged right, go previous
          setCurrentIndex((prev) => Math.max(0, prev - 1));
        }
      }
      setDragOffset(0);
      setIsDragging(false);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setDragOffset(0);
      setIsDragging(false);
    }
    setIsHovered(false);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const x = e.touches[0].clientX;
    const offset = startX - x;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    // Snap to nearest item based on drag distance
    const threshold = 50; // pixels to trigger slide
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Swiped left, go next
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
      } else {
        // Swiped right, go previous
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      }
    }
    setDragOffset(0);
  };

  return (
    <div
      className="bg-white rounded-sm py-4 px-3 relative select-none"
      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, .08)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-0 bottom-0 z-[1] bg-white text-[#53585c] w-[26px] flex items-center justify-center border border-[#e0e0e0] transition-all duration-200 ease-in-out antialiased ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-gray-50'
            }`}
          style={{ padding: '1px 6px' }}
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Slider Container */}
        <div className="px-10">
          <div className="overflow-hidden" style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>
            <div
              className="flex gap-4 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * 16}px - ${dragOffset}px))`,
                transition: isDragging ? 'none' : 'transform 500ms ease-in-out',
              }}
            >
              {SLIDER_ITEMS.map((item, index) => (
                <Link
                  key={`${item.id}-${index}`}
                  href="#"
                  className="flex gap-3 group/item hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
                  style={{
                    width: `calc((100% - ${(itemsPerView - 1) * 16}px) / ${itemsPerView})`,
                  }}
                >
                  {/* Thumbnail */}
                  <div className="w-[55px] h-[55px] relative overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover absolute inset-0 transition-opacity duration-400 ease-in-out opacity-100"
                      style={{ aspectRatio: 'auto 75 / 75' }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs font-normal font-condensed text-black leading-tight flex-1 antialiased" style={{ letterSpacing: '-0.24px' }}>
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
          className={`absolute right-0 top-0 bottom-0 z-[1] bg-white text-[#53585c] w-[26px] flex items-center justify-center border border-[#e0e0e0] transition-all duration-200 ease-in-out antialiased ${currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-gray-50'
            }`}
          style={{ padding: '1px 6px' }}
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
