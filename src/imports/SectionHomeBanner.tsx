import svgPaths from "./svg-skqmeigq1y";
import imgImg from "figma:asset/233f90283b695bb1a0a35b62804867616ecd9a87.png";
import img23714285420260224035427Jpg from "figma:asset/9411083632a695a2b9b96381c339905746b585c3.png";

function Phone() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_206_2337)" id="Phone">
          <path d={svgPaths.p3d16e300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_206_2337">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="h-[20px] relative shrink-0 w-[140.3px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Phone />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[14px] text-white top-[0.6px] whitespace-nowrap">+91 123 456 7890</p>
      </div>
    </div>
  );
}

function Mail() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Mail">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Mail">
          <path d={svgPaths.p583e000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pcd45380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Span1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[171.725px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Mail />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[14px] text-white top-[0.6px] whitespace-nowrap">info@dumricollege.edu</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[336.025px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Span />
        <Span1 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.275px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.6px] whitespace-nowrap">Login</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.6px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.6px] whitespace-nowrap">Apply Now</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[123.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Link />
        <Link1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#2563eb] content-stretch flex h-[36px] items-center justify-between px-[82.4px] relative shrink-0 w-[1124.8px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Img() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Span2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[137.913px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[20px] top-[-0.4px] whitespace-nowrap">Dumri College</p>
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[137.913px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">Excellence in Education</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[137.913px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Span2 />
        <Span3 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[56px] relative shrink-0 w-[205.913px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Img />
        <Div1 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[45.188px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.6px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[45.975px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.6px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[85.088px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.6px] whitespace-nowrap">Academics</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[54.15px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.6px] whitespace-nowrap">Gallery</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[60.313px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#314158] text-[16px] top-[-0.6px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[418.712px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Link2 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80.8px] items-start pb-[0.8px] px-[82.4px] relative shrink-0 w-[1125px]" data-name="nav">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.8px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Div />
    </div>
  );
}

function Component23714285420260224035427Jpg() {
  return (
    <div className="h-[538.42px] max-w-[1115.199951171875px] relative shrink-0 w-[1115.2px]" data-name="237142854_2026-02-24_03-54-27.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-[0.09%]" src={img23714285420260224035427Jpg} />
      </div>
    </div>
  );
}

function A() {
  return (
    <a className="content-stretch cursor-pointer flex h-[539px] items-start justify-center relative shrink-0" data-name="a" href="https://christuniversity.in/view-pdf/nirf-2025">
      <Component23714285420260224035427Jpg />
    </a>
  );
}

function ImageSlide() {
  return (
    <div className="content-stretch flex flex-col h-[681px] items-start overflow-clip relative shrink-0 w-full" data-name="Image Slide">
      <A />
    </div>
  );
}

function ImageFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[32px]" data-name="image fill">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Component 1">
        <div className="absolute inset-[9.37%_28.12%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0036 26.003">
            <path d={svgPaths.p38efdf00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SpanCarouselControlPrevIcon() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[32px]" data-name="span.carousel-control-prev-icon">
      <ImageFill />
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[32px]" data-name="image fill">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Component 1">
        <div className="absolute inset-[9.37%_28.12%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0036 26.003">
            <path d={svgPaths.p306b800} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SpanCarouselControlNextIcon() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[32px]" data-name="span.carousel-control-next-icon">
      <ImageFill1 />
    </div>
  );
}

function DivMediaCarousel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div#mediaCarousel">
      <ImageSlide />
      <div className="absolute content-stretch flex inset-[3px_85%_2.94px_0] items-center justify-center opacity-50 pb-[321.54px] pt-[321.52px]" data-name="Component 2">
        <SpanCarouselControlPrevIcon />
      </div>
      <div className="absolute content-stretch flex inset-[3px_0_2.94px_85%] items-center justify-center opacity-50 pb-[321.54px] pt-[321.52px]" data-name="Component 2">
        <SpanCarouselControlNextIcon />
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2">
      <div className="flex flex-col font-['Heebo:Light',sans-serif] font-light justify-center leading-[28px] relative shrink-0 text-[21px] text-white w-full">
        <p className="mb-0">Register Now:</p>
        <p>Christ University Online Programmes</p>
      </div>
    </div>
  );
}

function DivKnwMmoore() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[2px] relative shrink-0 w-full" data-name="div.knw-mmoore">
      <div className="bg-[#0099d0] content-stretch flex items-start justify-center pb-[4.8px] pt-[2.8px] px-[11.8px] relative rounded-[5px] shrink-0" data-name="Component 3">
        <div aria-hidden="true" className="absolute border border-[#0c4d8b] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <a className="flex flex-col font-['Heebo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" href="https://online.christuniversity.in/">
          <p className="cursor-pointer leading-[24px]">Know More</p>
        </a>
      </div>
    </div>
  );
}

function DivItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.item">
      <H />
      <DivKnwMmoore />
    </div>
  );
}

function DivOwlItem() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative shrink-0 w-[456px]" data-name="div.owl-item">
      <DivItem />
    </div>
  );
}

function DivClassItem() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div class='item">
      <DivOwlItem />
    </div>
  );
}

function DivOwlDots() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[8.8px] relative shrink-0 w-full" data-name="div.owl-dots">
      <div className="content-stretch flex items-start px-[7px] py-[5px] relative shrink-0" data-name="Component 4">
        <div className="bg-[#d6d6d6] rounded-[30px] shrink-0 size-[10px]" data-name="span" />
      </div>
      <div className="content-stretch flex items-start px-[7px] py-[5px] relative shrink-0" data-name="Component 4">
        <div className="bg-[#d6d6d6] rounded-[30px] shrink-0 size-[10px]" data-name="span" />
      </div>
      <div className="content-stretch flex items-start px-[7px] py-[5px] relative shrink-0" data-name="Component 4">
        <div className="bg-[#d6d6d6] rounded-[30px] shrink-0 size-[10px]" data-name="span" />
      </div>
      <div className="content-stretch flex items-start px-[7px] py-[5px] relative shrink-0" data-name="Component 4">
        <div className="bg-[#d6d6d6] rounded-[30px] shrink-0 size-[10px]" data-name="span" />
      </div>
      <div className="content-stretch flex items-start px-[7px] py-[5px] relative shrink-0" data-name="Component 4">
        <div className="bg-[#d6d6d6] rounded-[30px] shrink-0 size-[10px]" data-name="span" />
      </div>
      <div className="content-stretch flex items-start px-[7px] py-[5px] relative shrink-0" data-name="Component 4">
        <div className="bg-[#d6d6d6] rounded-[30px] shrink-0 size-[10px]" data-name="span" />
      </div>
      <div className="content-stretch flex items-start px-[7px] py-[5px] relative shrink-0" data-name="Component 4">
        <div className="bg-[#d6d6d6] rounded-[30px] shrink-0 size-[10px]" data-name="span" />
      </div>
      <div className="content-stretch flex items-start px-[7px] py-[5px] relative shrink-0" data-name="Component 4">
        <div className="bg-[#d6d6d6] rounded-[30px] shrink-0 size-[10px]" data-name="span" />
      </div>
      <div className="content-stretch flex items-start px-[7px] py-[5px] relative shrink-0" data-name="Component 4">
        <div className="bg-[#d6d6d6] rounded-[30px] shrink-0 size-[10px]" data-name="span" />
      </div>
      <div className="content-stretch flex items-start px-[7px] py-[5px] relative shrink-0" data-name="Component 4">
        <div className="bg-[#869791] rounded-[30px] shrink-0 size-[10px]" data-name="span" />
      </div>
    </div>
  );
}

function DivOwlDemo() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="div#owl-demo-2">
      <DivClassItem />
      <DivOwlDots />
    </div>
  );
}

function DivBannerAnnouncemnt() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.67)] bottom-[151.87px] content-stretch flex flex-col items-start pb-[6px] pt-[18px] px-[22px] right-[67.73px] rounded-tl-[6px] rounded-tr-[6px] w-[500px]" data-name="div.banner-announcemnt">
      <DivOwlDemo />
    </div>
  );
}

export default function SectionHomeBanner() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="section#home-banner">
      <Container />
      <Nav />
      <DivMediaCarousel />
      <DivBannerAnnouncemnt />
    </div>
  );
}