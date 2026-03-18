import svgPaths from "./svg-syh49kyrn";
import imgInnerCatImg1MinJpg from "figma:asset/e1886cb1a3038b5a3e557c24ffe13af7ce6ba265.png";

function H4Title() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h4.title">
      <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[34px]">Undergraduate</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] text-center whitespace-nowrap">
        <p className="mb-0">Begin your academic journey with flexible</p>
        <p>entry requirements and application.</p>
      </div>
    </div>
  );
}

function DivPrelementsHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div.prelements-heading">
      <H4Title />
      <P />
    </div>
  );
}

function DivElementorElement1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] pb-[14px] pt-[20px] px-[20px] right-[12px] top-[12px]" data-name="div.elementor-element">
      <DivPrelementsHeading />
    </div>
  );
}

function InnerCatImg1MinJpg() {
  return (
    <div className="h-[242.5px] max-w-[385.6000061035156px] relative rounded-[12px] shrink-0 w-[385.59px]" data-name="inner-cat-img1-min.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgInnerCatImg1MinJpg} />
      </div>
    </div>
  );
}

function DivRsImage() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.rs-image">
      <InnerCatImg1MinJpg />
    </div>
  );
}

function DivElementorElement2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 right-0 top-[-46px]" data-name="div.elementor-element">
      <DivRsImage />
    </div>
  );
}

function DivElementorElementMargin() {
  return (
    <div className="absolute h-[196.5px] left-[12px] right-[12px] top-[234px]" data-name="div.elementor-element:margin">
      <DivElementorElement2 />
    </div>
  );
}

function SpanButtonText() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium h-[18px] items-center justify-center leading-[0] not-italic overflow-clip pb-[1.2px] relative shrink-0 text-[15px]" data-name="span.button-text">
      <div className="flex flex-col justify-center relative shrink-0 text-[transparent] text-center whitespace-nowrap">
        <p className="leading-[18px]">Admission Now</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[18px] justify-center left-0 text-white top-[9px] w-[111.883px]">
        <p className="leading-[18px]">Admission Now</p>
      </div>
    </div>
  );
}

function DivElementorElement3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.26px)] max-w-[409.6000061035156px] top-[164px]" data-name="div.elementor-element">
      <div className="bg-[#0c5776] content-stretch flex gap-[15px] items-center justify-center overflow-clip px-[26px] py-[16px] relative rounded-[30px] shrink-0" data-name="Component 7">
        <SpanButtonText />
        <div className="overflow-clip relative shrink-0 size-[15px]" data-name="Component 1">
          <div className="absolute inset-[41.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 2.5">
              <path d={svgPaths.p2c002f80} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[8.33%] left-[41.67%] right-[41.67%] top-3/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 2.5">
              <path d={svgPaths.p17f42480} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[41.67%_83.33%_41.67%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 2.5">
              <path d={svgPaths.p7513d90} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[41.67%_0_41.67%_83.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 2.5">
              <path d={svgPaths.p3a6c0c40} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-3/4 left-[41.67%] right-[41.67%] top-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 2.5">
              <path d={svgPaths.p25697800} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DivElementorElement() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] size-full" data-name="div.elementor-element">
      <DivElementorElement1 />
      <DivElementorElementMargin />
      <DivElementorElement3 />
    </div>
  );
}