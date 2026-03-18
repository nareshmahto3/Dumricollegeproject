import imgDivElementorElement from "figma:asset/6002cd04081dfc7b58c5ece1c4f0d07c2bcd2bad.png";
import imgBnrArrow11 from "figma:asset/13bec648740b03b5c9d2c72567cc9f3e05c47165.png";

function BnrArrow() {
  return (
    <div className="relative shrink-0 size-[139px]" data-name="bnr-arrow-1-1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBnrArrow11} />
      </div>
    </div>
  );
}

function DivRsImage() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.rs-image">
      <BnrArrow />
    </div>
  );
}

function DivElementorElement1() {
  return (
    <div className="absolute bottom-[60px] content-stretch flex flex-col items-start justify-center max-w-[1528px] right-[140px] w-[139px]" data-name="div.elementor-element">
      <DivRsImage />
    </div>
  );
}

export default function DivElementorElement() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative size-full" data-name="div.elementor-element">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0c5776] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[115.51%]" src={imgDivElementorElement} />
        </div>
      </div>
      <div className="absolute h-[441px] left-[747.4px] top-[164.1px] w-[1517.6px]" data-name="::before">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1517.6 441">
          <path d="M0 0H1517.6V441H0V0Z" fill="url(#paint0_linear_449_2984)" id="::before" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_449_2984" x1="11.4001" x2="11.4001" y1="-164.1" y2="276.9">
              <stop stopColor="#00192C" stopOpacity="0" />
              <stop offset="1" stopColor="#00192C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <DivElementorElement1 />
    </div>
  );
}