import imgDivElementorElement from "figma:asset/5978f08e68df0c3b20a797ddcadc0f9253975076.png";
import imgBnrArrow11 from "figma:asset/13bec648740b03b5c9d2c72567cc9f3e05c47165.png";

export default function DivElementorElement() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative size-full" data-name="div.elementor-element">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0c5776] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[115.51%]" src={imgDivElementorElement} />
        </div>
      </div>
      <div className="absolute h-[441px] left-[1961.06px] top-[913.95px] w-[1517.6px]" data-name="::before">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1517.6 441">
          <path d="M0 0H1517.6V441H0V0Z" fill="url(#paint0_linear_420_2128)" id="::before" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_420_2128" x1="-1202.26" x2="-1202.26" y1="-913.946" y2="-472.946">
              <stop stopColor="#00192C" stopOpacity="0" />
              <stop offset="1" stopColor="#00192C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-[59.62px] content-stretch flex flex-col items-start justify-center max-w-[1528px] right-[140px] w-[139px]" data-name="div.elementor-element">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.rs-image">
          <div className="relative shrink-0 size-[139px]" data-name="bnr-arrow-1-1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBnrArrow11} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}