"use client";

import { useState, useEffect } from 'react';
import { Expand, Shrink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FullscreenButtonProps {
  targetRef: React.RefObject<HTMLElement>;
}

export default function FullscreenButton({ targetRef }: FullscreenButtonProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!targetRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await targetRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleFullscreen}
      className="absolute top-2 right-2 z-10"
      title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
    >
      {isFullscreen ? <Shrink className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
    </Button>
  );
}
