export default function IMELogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer exchange circle - inspired by uploaded image */}
      <g>
        {/* Left exchange element - teal */}
        <path
          d="M25 20 C35 15, 45 15, 50 25 L50 45 C45 55, 35 55, 25 50 L25 30 C20 25, 20 20, 25 20 Z"
          fill="hsl(156, 73%, 59%)"
        />
        
        {/* Right exchange element - blue */}
        <path
          d="M75 80 C65 85, 55 85, 50 75 L50 55 C55 45, 65 45, 75 50 L75 70 C80 75, 80 80, 75 80 Z"
          fill="hsl(217, 91%, 60%)"
        />
        
        {/* Medical cross in center */}
        <g transform="translate(50, 50)">
          {/* Horizontal bar */}
          <rect x="-8" y="-2" width="16" height="4" rx="2" fill="hsl(43, 96%, 56%)" />
          {/* Vertical bar */}
          <rect x="-2" y="-8" width="4" height="16" rx="2" fill="hsl(43, 96%, 56%)" />
        </g>
        
        {/* Connection lines showing exchange */}
        <path
          d="M35 35 Q50 30, 65 35"
          stroke="hsl(215, 92%, 27%)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M35 65 Q50 70, 65 65"
          stroke="hsl(215, 92%, 27%)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}