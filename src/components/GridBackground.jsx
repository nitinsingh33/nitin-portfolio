const GridBackground = () => {
  // Generate a unique ID for this instance to avoid conflicts when used on multiple pages
  const uniqueId = `grid-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0">
          <pattern
            id={uniqueId}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse">
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              className="opacity-60 animate-gridPulse text-gray-500 dark:text-gray-300"
            />
          </pattern>
          <rect width="100%" height="100%" fill={`url(#${uniqueId})`} />
        </svg>
      </div>
    </div>
  );
};

export default GridBackground;
