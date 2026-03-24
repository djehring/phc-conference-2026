import { useState, useRef, useEffect } from 'react';

interface Video {
  year: number;
  title: string;
  description: string;
  url: string;
}

interface VideoCardProps {
  video: Video;
}

// Helper function to extract YouTube video ID from URL
const extractYouTubeId = (url: string): string | null => {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
};

// Helper function to extract start time from URL
const extractStartTime = (url: string): number => {
  const match = url.match(/[?&]t=(\d+)s?/);
  return match ? parseInt(match[1]) : 0;
};

const VideoCard = ({ video }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isIPhone, setIsIPhone] = useState(false);
  
  useEffect(() => {
    // Detect iPhone/iPad
    const checkIPhone = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      setIsIPhone(/iPhone|iPad|iPod/i.test(userAgent));
    };
    checkIPhone();
  }, []);
  
  const videoId = extractYouTubeId(video.url);
  const startTime = extractStartTime(video.url);
  
  return (
    <div 
      className="relative w-80 sm:w-80 md:w-84 lg:w-96 h-48 sm:h-48 md:h-52 lg:h-56 rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex-shrink-0 bg-gradient-to-br from-phc-light/10 to-phc-dark/10 border border-phc-light/20 will-change-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        {isHovered && videoId ? (
          <div className="w-full h-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&start=${startTime}&modestbranding=1&rel=0`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative w-full h-full">
            {!imageError ? (
              <img 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <img 
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
            )}
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-phc-light to-phc-dark rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200 shadow-2xl">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        )}
        
        {/* Gradient overlay - always present */}
        <div className="absolute inset-0 bg-gradient-to-t from-phc-dark/90 via-phc-dark/40 to-transparent pointer-events-none" />
        
        {/* Content overlay - solid bg for iPhone text area only */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 ${
            isIPhone 
              ? 'bg-phc-dark/95' 
              : ''
          }`}
          style={{ WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        >
          <div className="mb-1">
            <span className="inline-block bg-phc-light text-white px-2 py-0.5 rounded-full text-xs sm:text-xs md:text-sm font-semibold">
              {video.year}
            </span>
          </div>
          <h3 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg mb-0.5 sm:mb-1 line-clamp-1">
            {video.title}
          </h3>
          <p className="text-gray-200 text-xs sm:text-xs md:text-sm line-clamp-3">
            {video.description}
          </p>
        </div>
      </a>
    </div>
  );
};

const ConferenceVideoSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Sample of your conference videos
  const videos = [
    {
      year: 2016,
      title: "Dr David & Dr Jen Unwin Role Play",
      description: "One of the highlights from our very first conference in 2016, featuring Dr David and Dr Jen Unwin demonstrating two very different approaches to treating patients.",
      url: "https://www.youtube.com/watch?v=E2F-3MZYQqE&list=PL1J9GrLlUYVJ0Fy1cXdUtnNomgTCA7Bv9&index=6&pp=gAQBiAQB"
    },
    {
      year: 2017,
      title: "Dr Jason Fung - Most Viewed",
      description: "At our second conference in 2017, we hosted the fantastic Dr Jason Fung, which has become our most viewed video on YouTube.",
      url: "https://www.youtube.com/watch?v=iatPAjf5I_Y&list=PL1J9GrLlUYVKJo8rI0Lhar9h2vzVxj4f8&index=1&pp=gAQBiAQB"
    },
    {
      year: 2018,
      title: "Prof Tim Noakes Standing Ovation",
      description: "In 2018 there was an incredibly heartfelt standing ovation for Prof Tim Noakes.",
      url: "https://www.youtube.com/watch?v=0Es9G2qSna8&list=PL1J9GrLlUYVK0WmGa7wlH9u64qNW6cTQ7&index=3&t=2s&pp=gAQBiAQB"
    },
    {
      year: 2019,
      title: "Giancarlo Caldesi's Remission Story",
      description: "At our fourth conference in 2019 we had the charismatic restaurateur, Giancarlo Caldesi tell his type 2 diabetes remission story.",
      url: "https://www.youtube.com/watch?v=xp4CB6WA_u4&list=PL1J9GrLlUYVKrUbAgKIKc6Benb4kT7bbq&index=7&pp=gAQBiAQB"
    },
    {
      year: 2020,
      title: "Dr Sarah Hallberg - Virtual Conference",
      description: "2020 saw our first virtual conference, where we were honoured to host the stupendous Dr Sarah Hallberg before her untimely death in 2022.",
      url: "https://www.youtube.com/watch?v=zek8xJg2kTQ&list=PL1J9GrLlUYVII3NX6PRSOdwBylw8Vr0dy&index=3&pp=gAQBiAQB"
    },
    {
      year: 2021,
      title: "Dr Unwin's 8-Year Low-Carb Data",
      description: "Our sixth conference in 2021 was also virtual with Dr David Unwin presenting his 8-year low-carb data from Norwood Surgery.",
      url: "https://www.youtube.com/watch?v=XyB-UNjt_V0&list=PL1J9GrLlUYVLe9sMRnnFQsEEghevdZ3RS&index=6&t=86s&pp=gAQBiAQB"
    },
    {
      year: 2022,
      title: "Nina Teicholz - Science Overview",
      description: "Back to being in-person in 2022, Nina Teicholz gave us an incredible overview of the science behind the movement.",
      url: "https://www.youtube.com/watch?v=yIXbnCZ5kGw&list=PL1J9GrLlUYVLmGM8VeHFAZ9NxhMEiA7AU&index=1&t=1s&pp=gAQBiAQB"
    },
    {
      year: 2023,
      title: "Dr Unwin - Lifetime Achievement",
      description: "In 2023 we presented the first Bennett Foundation Lifetime Achievement Award to Dr David Unwin.",
      url: "https://www.youtube.com/watch?v=hmUZgoMcWTo&list=PL1J9GrLlUYVLmhQVhTdOoCRLN46VqGkHX&index=4&t=20s&pp=gAQBiAQB"
    },
    {
      year: 2024,
      title: "Gary Taubes - Lifetime Award",
      description: "The second Bennett Foundation Lifetime Achievement Award in 2024 was given to science journalist, Gary Taubes for his outstanding contribution.",
      url: "https://www.youtube.com/watch?v=MWRtjYdKqns&list=PL1J9GrLlUYVKrBlSWLBJTWKHTMr94Ifwf&index=4&t=5s&pp=gAQBiAQB"
    },
    {
      year: 2025,
      title: "Dr Eric Westman - Lifetime Award",
      description: "At our most recent conference in 2025, the Bennett Foundation Lifetime Achievement Award was given to low-carb pioneer, Dr Eric Westman.",
      url: "https://www.youtube.com/watch?v=imCFYCnQ65I&list=PL1J9GrLlUYVIoj-lR6E0Z7c_hE53sa6ma&index=2&pp=gAQBiAQB"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Get actual card width based on screen size
      const card = scrollContainerRef.current.querySelector('div');
      const cardWidth = card ? card.offsetWidth : 288;
      const gap = 24; // gap-6 = 1.5rem = 24px
      scrollContainerRef.current.scrollBy({ 
        left: -(cardWidth + gap), 
        behavior: 'smooth' 
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Get actual card width based on screen size
      const card = scrollContainerRef.current.querySelector('div');
      const cardWidth = card ? card.offsetWidth : 288;
      const gap = 24; // gap-6 = 1.5rem = 24px
      scrollContainerRef.current.scrollBy({ 
        left: cardWidth + gap, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-phc-dark to-phc-light bg-clip-text text-transparent mb-4">
            Conference Highlights Through the Years
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore the most memorable moments from our annual conferences, featuring world-renowned speakers and groundbreaking presentations.
          </p>
        </div>

        {/* Horizontal scrolling container */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
          >
            {videos.map((video, index) => (
              <VideoCard key={`${video.year}-${index}`} video={video} />
            ))}
          </div>
        </div>
        
        {/* Scroll controls */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gradient-to-r from-phc-light to-phc-dark text-white hover:shadow-lg transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <span className="text-transparent bg-gradient-to-r from-phc-dark to-phc-light bg-clip-text text-xs sm:text-sm font-semibold hidden sm:inline">
              Scroll to see more videos
            </span>
            
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-gradient-to-r from-phc-dark to-phc-light text-white hover:shadow-lg transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ConferenceVideoSlider;