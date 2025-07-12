export function AccelerateDeliverySection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground overflow-hidden">
      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="content-wrapper text-center lg:text-left max-w-xl animate-in fade-in slide-in-from-left-8 duration-700 ease-out">
          <p className="sub-title text-lg font-semibold text-primary mb-2">Reusable Assets to</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
            Accelerate the Delivery
          </h2>
        </div>
        <div className="svg-wrapper flex-shrink-0 animate-in fade-in slide-in-from-right-8 duration-700 ease-out delay-100">
          <svg
            width="700" // Reduced width
            height="700" // Reduced height
            viewBox="0 0 1050 1050" // Keep viewBox to maintain internal scaling
            fill="none"
            version="1.1"
            id="svg45"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsSvg="http://www.w3.org/2000/svg"
            className="max-w-full h-auto" // Ensure responsiveness
          >
            {/*PATH FOR OUTER CIRCULAR DOTTED LINE*/}
            <circle
              cx="525"
              cy="515"
              fill="#ecefff"
              fillOpacity="0.05"
              stroke="#e4e9ff"
              strokeWidth="2"
              strokeDasharray="11, 11"
              id="circle1"
              style={{ display: "inline" }}
              r="435"
            ></circle>
            {/*PATH FOR INNER CIRCULAR DOTTED LINE*/}
            <circle
              cx="525"
              cy="515"
              fill="#f2f4fc"
              fillOpacity="0.15"
              stroke="#e4e9ff"
              strokeWidth="2"
              strokeDasharray="11, 11"
              id="circle2"
              style={{ display: "inline" }}
              r="315"
            ></circle>
            {/*ROTATING PRODUCT ICONS STARTS HERE*/}
            <g id="g3" style={{ display: "inline" }} transform="translate(-85,-10)">
              <desc id="desc47">animation-path-2</desc>
              <image width="175" height="175" href="/placeholder.svg?height=175&width=175"></image>
            </g>
            <g id="g4" style={{ display: "inline", opacity: 0 }} transform="translate(-85,-10)">
              <image width="175" height="175" href="/placeholder.svg?height=175&width=175"></image>
            </g>
            <g id="g5" style={{ display: "inline", opacity: 0 }} transform="translate(-155,-385)">
              <desc id="desc51">animation-path-1</desc>
              <image x="87" y="373" width="175" height="175" href="/placeholder.svg?height=175&width=175"></image>
            </g>
            <g id="g6" style={{ display: "inline", opacity: 0 }} transform="translate(-155,-385)">
              <desc id="desc50">animation-path-1</desc>
              <image x="87" y="373" width="175" height="175" href="/placeholder.svg?height=175&width=175"></image>
            </g>
            <g id="g7" style={{ display: "inline", opacity: 0 }} transform="translate(-150,-390)">
              <desc id="desc48">animation-path-2</desc>
              <image x="87" y="373" width="175" height="175" href="/placeholder.svg?height=175&width=175"></image>
            </g>
            <g id="g8" style={{ display: "inline", opacity: 0 }} transform="translate(-155,-385)">
              <desc id="desc49">animation-path-1</desc>
              <image x="87" y="373" width="175" height="175" href="/placeholder.svg?height=175&width=175"></image>
            </g>
            {/*ROTATING PRODUCT ICONS ENDS HERE*/}
            {/*PRTNER ICONS TO BE SHOWN IN THE CENTER*/}
            <g id="center-circle" style={{ display: "inline" }} transform="translate(-190,-135)">
              <image x="509" y="449" width="416" height="416" href="/placeholder.svg?height=416&width=416"></image>
            </g>
            {/*PATH FOR INNER CIRCULAR ROTATION*/}
            <g id="layer2" style={{ display: "inline", display: "none" }}>
              <path
                style={{
                  display: "inline",
                  fill: "#000000",
                  fillOpacity: 0,
                  stroke: "#e4e9ff",
                  strokeDasharray: "8, 4",
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                }}
                d="m 193.94804,420.10175 c 7.1934,-76.76461 43.6613,-150.4237 100.34736,-202.68497 56.68607,-52.26126 133.0599,-82.63572 210.15502,-83.58024 80.86835,-0.99075 161.67815,30.53414 220.51247,86.02462 58.83433,55.49047 95.02845,134.31958 98.76593,215.10759 3.98995,86.24519 -29.27615,173.58229 -89.63134,235.31886 -60.35519,61.73657 -146.91726,96.97022 -233.23065,94.93266 C 414.55343,763.1827 329.75036,723.90369 272.37556,659.38792 215.00076,594.87214 185.89289,506.0626 193.94804,420.10175 Z"
                id="animation-path-1"
                transform="translate(16,66)"
              ></path>
            </g>
            {/*PATH FOR OUTER CIRCULAR ROTATION*/}
            <g id="layer3" style={{ display: "none" }}>
              <path
                style={{
                  fill: "#000000",
                  fillOpacity: 0,
                  stroke: "#e4e9ff",
                  strokeDasharray: "8, 4",
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                }}
                d="M 73.92197,445.90886 C 74.767813,332.20415 122.32785,219.54236 203.21796,139.62825 284.10808,59.714132 397.33887,13.525141 511.04547,14.059564 625.18183,14.596007 738.3884,62.218431 818.58633,143.43228 898.78426,224.64612 944.97793,338.44317 944.07765,452.57724 943.17932,566.46388 895.41089,679.27987 814.25463,759.18378 733.09837,839.08768 619.55321,885.096 505.66637,884.22324 391.77953,883.35047 278.95282,835.60737 199.0307,754.46905 119.10857,673.33073 73.074771,559.79589 73.92197,445.90886 Z"
                id="animation-path-2"
                transform="translate(16,66)"
              ></path>
            </g>
            {/*ANIMATION STARTS HERE*/}
            <animateMotion xlinkHref="#g3" dur="12s" begin="0s" fill="freeze" repeatCount="indefinite" id="animation-2">
              <mpath xlinkHref="#animation-path-2"></mpath>
            </animateMotion>
            <animate
              xlinkHref="#g4"
              attributeName="opacity"
              from="0"
              to="1"
              begin="animation-2.begin + 4s"
              fill="freeze"
              dur="1s"
            ></animate>
            <animateMotion
              xlinkHref="#g4"
              dur="12s"
              begin="animation-2.begin + 4s"
              fill="freeze"
              repeatCount="indefinite"
            >
              <mpath xlinkHref="#animation-path-2"></mpath>
            </animateMotion>
            <animate
              xlinkHref="#g7"
              attributeName="opacity"
              from="0"
              to="1"
              begin="animation-2.begin + 8s"
              fill="freeze"
              dur="1s"
            ></animate>
            <animateMotion
              xlinkHref="#g7"
              dur="12s"
              begin="animation-2.begin + 8s"
              fill="freeze"
              repeatCount="indefinite"
            >
              <mpath xlinkHref="#animation-path-2"></mpath>
            </animateMotion>
            <animate
              xlinkHref="#g5"
              attributeName="opacity"
              from="0"
              to="1"
              begin="animation-2.begin + 2s"
              fill="freeze"
              dur="1s"
            ></animate>
            <animateMotion
              xlinkHref="#g5"
              dur="12s"
              begin="animation-2.begin + 2s"
              fill="freeze"
              repeatCount="indefinite"
            >
              <mpath xlinkHref="#animation-path-1"></mpath>
            </animateMotion>
            <animate
              xlinkHref="#g6"
              attributeName="opacity"
              from="0"
              to="1"
              begin="animation-2.begin + 6s"
              fill="freeze"
              dur="1s"
            ></animate>
            <animateMotion
              xlinkHref="#g6"
              dur="12s"
              begin="animation-2.begin + 6s"
              fill="freeze"
              repeatCount="indefinite"
            >
              <mpath xlinkHref="#animation-path-1"></mpath>
            </animateMotion>
            <animate
              xlinkHref="#g8"
              attributeName="opacity"
              from="0"
              to="1"
              begin="animation-2.begin + 10s"
              fill="freeze"
              dur="1s"
            ></animate>
            <animateMotion
              xlinkHref="#g8"
              dur="12s"
              begin="animation-2.begin + 10s"
              fill="freeze"
              repeatCount="indefinite"
            >
              <mpath xlinkHref="#animation-path-1"></mpath>
            </animateMotion>
          </svg>
        </div>
      </div>
    </section>
  )
}
