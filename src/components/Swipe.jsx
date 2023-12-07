"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Swipe({children, prev, next}) {

  const router = useRouter();
  const [startPosition, setStartPosition] = useState(null);
  const [endPosition, setEndPosition] = useState(null);
  
  const minSwipeDistance = 150;
  
  const onStart = (position) => {
    setEndPosition(null);
    setStartPosition(position);
  };
  
  const onMove = (position) => setEndPosition(position);
  
  const onEnd = () => {
    if (!startPosition || !endPosition) return;
    const distance = startPosition - endPosition;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      router.push(next);
    } else if (isRightSwipe) {
      router.push(prev);
    }
  };
  
  const onTouchStart = (e) => onStart(e.targetTouches[0].clientX);
  const onTouchMove = (e) => onMove(e.targetTouches[0].clientX);
  const onTouchEnd = () => onEnd();
  
  const onMouseDown = (e) => onStart(e.clientX);
  const onMouseMove = (e) => onMove(e.clientX);
  const onMouseUp = () => onEnd();
  
  return (
    <div
      className="flex flex-col text-white"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
        {children}
    </div>
  );
}
