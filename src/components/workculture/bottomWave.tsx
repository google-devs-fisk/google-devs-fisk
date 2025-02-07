const BottomWave = () => {
    return (
      <svg
        viewBox="0 0 1304 1074"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 w-full h-[60%] -z-20"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Radial Gradient for a Soft Light Effect */}
          <radialGradient id="waveGlow" cx="50%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#89CFF0" stopOpacity="0.9" />  {/* Light Blue Center */}
            <stop offset="50%" stopColor="#4895EF" stopOpacity="0.5" />  {/* Vibrant Blue Middle */}
            <stop offset="100%" stopColor="#1B1F3A" stopOpacity="0" />  {/* Fade into Dark */}
          </radialGradient>
        </defs>
  
        {/* Main Wave with Soft Glow */}
        <path
          opacity="0.8"
          d="M354.525 501.225C162.429 757.497 0 609.871 0 609.871V1073.99H1304V0C1304 0 1212.09 380.786 995.658 363.581C779.231 346.375 546.622 244.953 354.525 501.225Z"
          fill="url(#waveGlow)"
          filter="url(#blur)"
        />
  
        {/* Additional Layers for Depth */}
        <path
          opacity="0.6"
          d="M354.525 501.225C137.644 719.917 0 609.871 0 609.871V1073.99H1304V0C1304 0 1199.41 340.942 995.658 363.581C791.908 386.22 571.406 282.533 354.525 501.225Z"
          fill="url(#waveGlow)"
        />
  
        {/* Bottom Wave Fading to Darkness */}
        <path
          opacity="0.4"
          d="M405.689 478.586C179.3 665.131 0 609.871 0 609.871V1073.99H1304V0C1304 0 1250.12 384.472 1049.99 339.131C849.864 293.789 632.078 292.042 405.689 478.586Z"
          fill="url(#waveGlow)"
        />
  
        {/* Blur Effect for Glow */}
        <defs>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="50" />
          </filter>
        </defs>
      </svg>
    );
  };
  
  export default BottomWave;
  