const DepthBlur = () => {
  return (
    <svg
      width="1055"
      height="1019"
      viewBox="0 0 1055 1019"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-[-50px] left-[-30px] -z-4"
    >
      <g filter="url(#filter0_f_101_614)">
        <path
          d="M440.148 350.437C395.733 365.461 357.707 393.542 332.55 429.896C307.392 466.25 296.66 508.627 302.18 549.807C307.701 590.987 329.134 628.421 362.826 655.732C396.519 683.043 440.387 698.54 486.955 699.584C533.524 700.627 579.912 687.152 618.216 661.454C656.52 635.756 684.369 599.426 697.018 558.653C709.668 517.88 706.335 475.188 687.588 437.851C668.841 400.513 635.839 370.84 594.206 353.888L502.664 519L440.148 350.437Z"
          fill="url(#paint0_linear_101_614)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_101_614"
          x="-49.2351"
          y="0.436768"
          width="1103.8"
          height="1049.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="175"
            result="effect1_foregroundBlur_101_614"
          />
        </filter>
        <linearGradient
          id="paint0_linear_101_614"
          x1="360.901"
          y1="513.585"
          x2="724.256"
          y2="500.217"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DC00D3" />
          <stop offset="1" stopColor="#0CFAF5" />
          <stop offset="1.0001" stopColor="#0CFAF5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DepthBlur;
