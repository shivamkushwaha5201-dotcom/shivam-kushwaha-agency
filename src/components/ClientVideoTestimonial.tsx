import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, RotateCcw, ShieldCheck } from 'lucide-react';

interface ClientVideoTestimonialProps {
  className?: string;
}

export const ClientVideoTestimonial: React.FC<ClientVideoTestimonialProps> = ({ className = '' }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(28);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [isEnded, setIsEnded] = useState<boolean>(false);

  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handlePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
          setIsEnded(false);
        })
        .catch((err) => {
          console.warn('Playback request error:', err);
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.duration && !isNaN(video.duration) && isFinite(video.duration)) {
      setDuration(video.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setIsEnded(true);
    setShowControls(true);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const seekTime = parseFloat(e.target.value);
    video.currentTime = seekTime;
    setCurrentTime(seekTime);
    if (isEnded) setIsEnded(false);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (video) {
      video.volume = val;
      video.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && volume === 0) {
      video.volume = 0.8;
      setVolume(0.8);
    }
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      try {
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if ((container as any).webkitRequestFullscreen) {
          await (container as any).webkitRequestFullscreen();
        }
        setIsFullscreen(true);
      } catch (err) {
        console.warn('Fullscreen request failed:', err);
      }
    } else {
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
        setIsFullscreen(false);
      } catch (err) {
        console.warn('Exit fullscreen failed:', err);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const triggerControlsVisibility = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`w-full max-w-xl mx-auto ${className}`}>
      {/* Outer Card with clean white background, subtle botanical green accents, and soft shadows */}
      <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5E9E5] p-4 sm:p-7 shadow-xl shadow-black/5 hover:border-[#459B45]/50 transition-all duration-300">
        
        {/* Top Category Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#246B32] bg-[#E5F5E5] px-3.5 py-1 rounded-full border border-[#E5E9E5]">
            Social Media Marketing
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#555B55]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#459B45] animate-pulse" />
            <span>0:28 Video</span>
          </div>
        </div>

        {/* Video Player Frame - Portrait aspect ratio matching Tham Yik Foong's original video */}
        <div
          ref={containerRef}
          onMouseMove={triggerControlsVisibility}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => {
            if (isPlaying) setShowControls(false);
          }}
          className="relative aspect-[9/16] max-h-[640px] w-full max-w-sm sm:max-w-md mx-auto rounded-2xl overflow-hidden bg-[#0A0D0B] flex items-center justify-center group select-none shadow-md ring-1 ring-black/5"
        >
          {/* Exact original uploaded video file */}
          <video
            ref={videoRef}
            src="/videos/tham-yik-foong-craft-os-testimonial.mp4"
            poster="/assets/images/tham-yik-foong-craft-os-thumbnail.webp"
            preload="metadata"
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
            onClick={handlePlayPause}
            className="w-full h-full object-contain cursor-pointer"
          />

          {/* Clean Initial Play Overlay (No heavy blur, only clear play button) */}
          {!hasStarted && (
            <div
              onClick={handlePlayPause}
              className="absolute inset-0 bg-black/15 hover:bg-black/25 flex flex-col items-center justify-center cursor-pointer transition-colors duration-250"
              role="button"
              tabIndex={0}
              aria-label="Play original testimonial video by Tham Yik Foong"
            >
              {/* Top pill badge */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 inline-flex items-center gap-2 bg-[#FFFFFF]/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#E5E9E5] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#459B45] animate-pulse" />
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#246B32]">
                  Social Media Marketing · 0:28
                </span>
              </div>

              {/* Clear, Prominent Play Button */}
              <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <div className="absolute w-20 h-20 rounded-full bg-[#459B45]/25 animate-ping" />
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#459B45] hover:bg-[#246B32] text-white flex items-center justify-center shadow-lg shadow-[#459B45]/40 transition-colors">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Subtitle prompt */}
              <div className="absolute bottom-5 inset-x-4 text-center">
                <span className="inline-block bg-black/60 text-white/95 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-xs">
                  Click to play Tham&apos;s testimonial
                </span>
              </div>
            </div>
          )}

          {/* Replay Overlay (ONLY displays AFTER video ends, NEVER before) */}
          {isEnded && (
            <div
              onClick={handlePlayPause}
              className="absolute inset-0 bg-black/65 backdrop-blur-xs flex flex-col items-center justify-center cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Replay testimonial video"
            >
              <div className="w-16 h-16 rounded-full bg-[#459B45] text-white flex items-center justify-center shadow-lg shadow-[#459B45]/40 hover:scale-105 transition-transform duration-200">
                <RotateCcw className="w-7 h-7" />
              </div>
              <span className="mt-3 text-sm font-semibold text-white drop-shadow-md">
                Replay Video
              </span>
            </div>
          )}

          {/* Custom Controls Bar (Appears during playback on hover or tap) */}
          {hasStarted && !isEnded && (
            <div
              className={`absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/55 to-transparent transition-opacity duration-300 flex flex-col gap-2 ${
                showControls || !isPlaying ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Progress Seek Bar */}
              <div className="relative w-full flex items-center py-1">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  step={0.1}
                  value={currentTime}
                  onChange={handleSeek}
                  aria-label="Video timeline"
                  className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#459B45] hover:h-2 transition-all focus:outline-hidden"
                  style={{
                    background: `linear-gradient(to right, #459B45 ${progressPercent}%, rgba(255,255,255,0.3) ${progressPercent}%)`,
                  }}
                />
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between gap-3 text-white">
                {/* Play/Pause & Volume */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={handlePlayPause}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current" />
                    )}
                  </button>

                  {/* Volume Control */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                      className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-5 h-5 text-red-400" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      aria-label="Volume slider"
                      className="w-14 sm:w-18 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#459B45] hidden sm:block focus:outline-hidden"
                    />
                  </div>

                  {/* Time Tracker */}
                  <div className="text-xs font-mono text-white/90 tracking-wider">
                    <span>{formatTime(currentTime)}</span>
                    <span className="mx-1 text-white/50">/</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Fullscreen Button */}
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                  className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {isFullscreen ? (
                    <Minimize className="w-5 h-5" />
                  ) : (
                    <Maximize className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Client Quote Highlight Snippet */}
        <div className="mt-5 p-3.5 sm:p-4 rounded-2xl bg-[#F7F9F7] border border-[#E5E9E5] text-left">
          <p className="text-xs sm:text-sm text-[#111111] font-sans leading-relaxed italic">
            &ldquo;Shivam and his team helped us strengthen our social media presence through consistent marketing support and strategic content distribution. Their efforts helped us improve our brand visibility and connect with our target audience.&rdquo;
          </p>
        </div>

        {/* Client Information: Tham Yik Foong, Founder, Craft OS */}
        <div className="mt-4 pt-4 border-t border-[#E5E9E5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {/* Real Video Frame Avatar with WebP optimization */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#459B45] shrink-0 shadow-xs">
              <picture className="w-full h-full block">
                <source srcSet="/assets/images/tham-avatar.webp" type="image/webp" />
                <img
                  src="/assets/images/tham-avatar.jpg"
                  alt="Tham Yik Foong"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#459B45] border-2 border-white rounded-full" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base sm:text-lg font-bold text-[#111111]">
                  Tham Yik Foong
                </h4>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#246B32] bg-[#E5F5E5] px-2 py-0.5 rounded-full border border-[#459B45]/20 font-semibold">
                  <ShieldCheck className="w-3 h-3 text-[#246B32]" />
                  Verified Client
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#555B55] font-mono mt-0.5">
                Founder, <span className="font-semibold text-[#111111]">Craft OS</span>
              </p>
            </div>
          </div>

          {/* Client Video Testimonial Service Category Label */}
          <div className="sm:text-right">
            <span className="inline-block text-xs font-mono font-medium text-[#246B32] bg-[#E5F5E5] px-3 py-1.5 rounded-full border border-[#E5E9E5]">
              Social Media Marketing
            </span>
            <p className="text-[11px] text-[#555B55] mt-1 font-mono">
              Verified founder review
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
