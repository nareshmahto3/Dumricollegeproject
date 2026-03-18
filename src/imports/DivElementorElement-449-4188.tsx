import svgPaths from "./svg-p4vsptam88";
import imgEBlTeam1MinJpg from "figma:asset/a1adb3e4cc61a600187de60fe0db91d01d53e7dc.png";
import imgCapManMin from "figma:asset/9cb091869a92595f861d51ef738437bd7aafa65c.png";
import imgAwardWin1Min from "figma:asset/6c35012f40f1cec33e961cafd30da1aa4f6f338c.png";
import imgAwardWin2Min from "figma:asset/44d160b9127c1374c2c22e310fe22b15598e6417.png";
import imgAwardWin3Min from "figma:asset/28d031cb8ed7fad993a505b823122a14a9dc4e7e.png";
import imgAwardWin4Min from "figma:asset/1da4d1b3bdc122541806c2db61e0bfeeb9456aa7.png";

function EBlTeam1MinJpg() {
  return (
    <div className="h-[405.74px] max-w-[366.6000061035156px] relative rounded-[16px] shrink-0 w-[366.6px]" data-name="e-bl-team-1-min.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEBlTeam1MinJpg} />
      </div>
    </div>
  );
}

function DivElementorElement3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.elementor-element">
      <EBlTeam1MinJpg />
    </div>
  );
}

function H4Title() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h4.title">
      <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[34px]">Leslie Alexander</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Teaching Assistant (TA)</p>
      </div>
    </div>
  );
}

function DivPrelementsHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="div.prelements-heading">
      <H4Title />
      <P />
    </div>
  );
}

function DivElementorElement4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] pt-[6px] relative shrink-0 w-full" data-name="div.elementor-element">
      <DivPrelementsHeading />
    </div>
  );
}

function DivElementorElement2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[12px] relative rounded-[16px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] shrink-0 w-[390.6px]" data-name="div.elementor-element">
      <DivElementorElement3 />
      <DivElementorElement4 />
    </div>
  );
}

function DivElementorElementAlignFlexStart() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="div.elementor-element:align-flex-start">
      <DivElementorElement2 />
    </div>
  );
}

function H3Title() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="h3.title">
      <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[36px] whitespace-nowrap">
        <p className="leading-[46px]">About: Introduction</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="relative shrink-0 w-full" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] w-full">
          <p className="mb-0">Kathryn Murphy is a highly experienced professor in the Department of Computer Science, recognized for</p>
          <p className="mb-0">his expertise in artificial intelligence and data science. He blends academic research with practical industry</p>
          <p className="mb-0">insights, guiding students through hands-on learning and innovative problem-solving. Dr. Doe actively</p>
          <p>publishes in top-tier journals and mentors students at both undergraduate and graduate levels</p>
        </div>
      </div>
    </div>
  );
}

function DivDescripti() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30.8px] relative shrink-0 w-full" data-name="div.descripti">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <P1 />
    </div>
  );
}

function DivPrelementsHeading1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start min-w-[819.4000244140625px] relative shrink-0 w-[819.4px]" data-name="div.prelements-heading">
      <H3Title />
      <DivDescripti />
    </div>
  );
}

function DivPrelementsHeadingAlignFlexStart() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.prelements-heading:align-flex-start">
      <DivPrelementsHeading1 />
    </div>
  );
}

function DivElementorElementMargin1() {
  return (
    <div className="h-[29px] max-w-[399.70001220703125px] relative shrink-0 w-[276.7px]" data-name="div.elementor-element:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Bitter:Thin',sans-serif] font-thin h-[34px] justify-center leading-[0] left-0 text-[#030303] text-[24px] top-[17px] w-[277.008px]">
        <p className="leading-[34px]">Academic Qualifications</p>
      </div>
    </div>
  );
}

function DivElementorElementMarginAlignFlexStart() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.elementor-element:margin:align-flex-start">
      <DivElementorElementMargin1 />
    </div>
  );
}

function SpanElementorIconListIcon() {
  return (
    <div className="content-stretch flex items-start pr-[3.5px] relative shrink-0 z-[2]" data-name="span.elementor-icon-list-icon">
      <div className="overflow-clip relative shrink-0 size-[6px]" data-name="Component 1">
        <div className="absolute inset-[1.56%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8125 5.8125">
            <path d={svgPaths.p2194aa80} fill="var(--fill-0, #4C4C4C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SpanElementorIconListText() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5px] relative shrink-0" data-name="span.elementor-icon-list-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] whitespace-nowrap">
        <p className="leading-[28px]">Ph.D. in Mathematics, University of Cambridge</p>
      </div>
    </div>
  );
}

function SpanElementorIconListTextAlignCenter() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 z-[1]" data-name="span.elementor-icon-list-text:align-center">
      <SpanElementorIconListText />
    </div>
  );
}

function LiElementorIconListItem() {
  return (
    <div className="content-stretch flex isolate items-center pb-[0.5px] relative shrink-0 w-full" data-name="li.elementor-icon-list-item">
      <SpanElementorIconListIcon />
      <div className="flex flex-row items-center self-stretch">
        <SpanElementorIconListTextAlignCenter />
      </div>
    </div>
  );
}

function SpanElementorIconListIcon1() {
  return (
    <div className="content-stretch flex items-start pr-[3.5px] relative shrink-0 z-[2]" data-name="span.elementor-icon-list-icon">
      <div className="overflow-clip relative shrink-0 size-[6px]" data-name="Component 1">
        <div className="absolute inset-[1.56%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8125 5.8125">
            <path d={svgPaths.p2194aa80} fill="var(--fill-0, #4C4C4C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SpanElementorIconListText1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5px] relative shrink-0" data-name="span.elementor-icon-list-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] whitespace-nowrap">
        <p className="leading-[28px]">M.SC. in Mathematics. University of California</p>
      </div>
    </div>
  );
}

function SpanElementorIconListTextAlignCenter1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 z-[1]" data-name="span.elementor-icon-list-text:align-center">
      <SpanElementorIconListText1 />
    </div>
  );
}

function LiElementorIconListItem1() {
  return (
    <div className="content-stretch flex isolate items-center pb-[0.5px] relative shrink-0 w-full" data-name="li.elementor-icon-list-item">
      <SpanElementorIconListIcon1 />
      <div className="flex flex-row items-center self-stretch">
        <SpanElementorIconListTextAlignCenter1 />
      </div>
    </div>
  );
}

function SpanElementorIconListIcon2() {
  return (
    <div className="content-stretch flex items-start pr-[3.5px] relative shrink-0 z-[2]" data-name="span.elementor-icon-list-icon">
      <div className="overflow-clip relative shrink-0 size-[6px]" data-name="Component 1">
        <div className="absolute inset-[1.56%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8125 5.8125">
            <path d={svgPaths.p2194aa80} fill="var(--fill-0, #4C4C4C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SpanElementorIconListText2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5px] relative shrink-0" data-name="span.elementor-icon-list-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] whitespace-nowrap">
        <p className="leading-[28px]">B.Sc. in mathematics, University of Helsinki</p>
      </div>
    </div>
  );
}

function SpanElementorIconListTextAlignCenter2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 z-[1]" data-name="span.elementor-icon-list-text:align-center">
      <SpanElementorIconListText2 />
    </div>
  );
}

function LiElementorIconListItem2() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="li.elementor-icon-list-item">
      <SpanElementorIconListIcon2 />
      <div className="flex flex-row items-center self-stretch">
        <SpanElementorIconListTextAlignCenter2 />
      </div>
    </div>
  );
}

function UlElementorIconListItems() {
  return (
    <div className="content-stretch flex flex-col gap-[0.5px] items-start relative shrink-0 w-[366.5px]" data-name="ul.elementor-icon-list-items">
      <LiElementorIconListItem />
      <LiElementorIconListItem1 />
      <LiElementorIconListItem2 />
    </div>
  );
}

function UlElementorIconListItemsAlignFlexStart() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ul.elementor-icon-list-items:align-flex-start">
      <UlElementorIconListItems />
    </div>
  );
}

function DivElementorElement7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative self-stretch" data-name="div.elementor-element">
      <DivElementorElementMarginAlignFlexStart />
      <UlElementorIconListItemsAlignFlexStart />
    </div>
  );
}

function DivElementorElementMargin2() {
  return (
    <div className="h-[29px] max-w-[399.70001220703125px] relative shrink-0 w-[210.96px]" data-name="div.elementor-element:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Bitter:Thin',sans-serif] font-thin h-[34px] justify-center leading-[0] left-0 text-[#030303] text-[24px] top-[17px] w-[211.324px]">
        <p className="leading-[34px]">Research Interests</p>
      </div>
    </div>
  );
}

function DivElementorElementMarginAlignFlexStart1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.elementor-element:margin:align-flex-start">
      <DivElementorElementMargin2 />
    </div>
  );
}

function SpanElementorIconListIcon3() {
  return (
    <div className="content-stretch flex items-start pr-[3.5px] relative shrink-0 z-[2]" data-name="span.elementor-icon-list-icon">
      <div className="overflow-clip relative shrink-0 size-[6px]" data-name="Component 1">
        <div className="absolute inset-[1.56%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8125 5.8125">
            <path d={svgPaths.p2194aa80} fill="var(--fill-0, #4C4C4C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SpanElementorIconListText3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5px] relative shrink-0" data-name="span.elementor-icon-list-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] whitespace-nowrap">
        <p className="leading-[28px]">Algebraic Geometry</p>
      </div>
    </div>
  );
}

function SpanElementorIconListTextAlignCenter3() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 z-[1]" data-name="span.elementor-icon-list-text:align-center">
      <SpanElementorIconListText3 />
    </div>
  );
}

function LiElementorIconListItem3() {
  return (
    <div className="content-stretch flex isolate items-center pb-[0.5px] relative shrink-0 w-full" data-name="li.elementor-icon-list-item">
      <SpanElementorIconListIcon3 />
      <div className="flex flex-row items-center self-stretch">
        <SpanElementorIconListTextAlignCenter3 />
      </div>
    </div>
  );
}

function SpanElementorIconListIcon4() {
  return (
    <div className="content-stretch flex items-start pr-[3.5px] relative shrink-0 z-[2]" data-name="span.elementor-icon-list-icon">
      <div className="overflow-clip relative shrink-0 size-[6px]" data-name="Component 1">
        <div className="absolute inset-[1.56%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8125 5.8125">
            <path d={svgPaths.p2194aa80} fill="var(--fill-0, #4C4C4C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SpanElementorIconListText4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5px] relative shrink-0" data-name="span.elementor-icon-list-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] whitespace-nowrap">
        <p className="leading-[28px]">Number Theory</p>
      </div>
    </div>
  );
}

function SpanElementorIconListTextAlignCenter4() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 z-[1]" data-name="span.elementor-icon-list-text:align-center">
      <SpanElementorIconListText4 />
    </div>
  );
}

function LiElementorIconListItem4() {
  return (
    <div className="content-stretch flex isolate items-center pb-[0.5px] relative shrink-0 w-full" data-name="li.elementor-icon-list-item">
      <SpanElementorIconListIcon4 />
      <div className="flex flex-row items-center self-stretch">
        <SpanElementorIconListTextAlignCenter4 />
      </div>
    </div>
  );
}

function SpanElementorIconListIcon5() {
  return (
    <div className="content-stretch flex items-start pr-[3.5px] relative shrink-0 z-[2]" data-name="span.elementor-icon-list-icon">
      <div className="overflow-clip relative shrink-0 size-[6px]" data-name="Component 1">
        <div className="absolute inset-[1.56%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8125 5.8125">
            <path d={svgPaths.p2194aa80} fill="var(--fill-0, #4C4C4C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SpanElementorIconListText5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5px] relative shrink-0" data-name="span.elementor-icon-list-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] whitespace-nowrap">
        <p className="leading-[28px]">Discreate Geometry</p>
      </div>
    </div>
  );
}

function SpanElementorIconListTextAlignCenter5() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 z-[1]" data-name="span.elementor-icon-list-text:align-center">
      <SpanElementorIconListText5 />
    </div>
  );
}

function LiElementorIconListItem5() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="li.elementor-icon-list-item">
      <SpanElementorIconListIcon5 />
      <div className="flex flex-row items-center self-stretch">
        <SpanElementorIconListTextAlignCenter5 />
      </div>
    </div>
  );
}

function UlElementorIconListItems1() {
  return (
    <div className="content-stretch flex flex-col gap-[0.5px] items-start relative shrink-0 w-[166.5px]" data-name="ul.elementor-icon-list-items">
      <LiElementorIconListItem3 />
      <LiElementorIconListItem4 />
      <LiElementorIconListItem5 />
    </div>
  );
}

function UlElementorIconListItemsAlignFlexStart1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ul.elementor-icon-list-items:align-flex-start">
      <UlElementorIconListItems1 />
    </div>
  );
}

function DivElementorElement8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative self-stretch" data-name="div.elementor-element">
      <DivElementorElementMarginAlignFlexStart1 />
      <UlElementorIconListItemsAlignFlexStart1 />
    </div>
  );
}

function DivElementorElement6() {
  return (
    <div className="content-stretch flex gap-[20px] h-[135px] items-start justify-center relative shrink-0 w-full" data-name="div.elementor-element">
      <DivElementorElement7 />
      <DivElementorElement8 />
    </div>
  );
}

function DivElementorElementMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="div.elementor-element:margin">
      <DivElementorElement6 />
    </div>
  );
}

function DivElementorElementMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[819.4000244140625px] pb-[5px] pt-[26px] relative shrink-0 w-full" data-name="div.elementor-element:margin">
      <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[24px] w-full">
        <p className="leading-[34px]">{`Contact Information's`}</p>
      </div>
    </div>
  );
}

function DivElementorElementMarginAlignFlexStart2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.elementor-element:margin:align-flex-start">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <DivElementorElementMargin4 />
      </div>
    </div>
  );
}

function DivIconArea() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0" data-name="div.icon-area">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 1">
        <div className="absolute inset-[16.67%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13.3333">
            <path d={svgPaths.p2537ddf0} fill="var(--fill-0, #030303)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DivTextArea() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="div.text-area">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[28px]">leslie@univerisity.edu</p>
      </div>
    </div>
  );
}

function ABoxInnerAlignFlexStart() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="a.box-inner:align-flex-start">
      <a className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[44px] items-start overflow-clip px-[14px] py-[8px] relative rounded-[100px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Component 2" href="mailto:leslie@univerisity.edu">
        <DivIconArea />
        <DivTextArea />
      </a>
    </div>
  );
}

function DivIconArea1() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0" data-name="div.icon-area">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 1">
        <div className="absolute inset-[5.78%_6.2%_0_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7592 18.8432">
            <path d={svgPaths.p232a0d00} fill="var(--fill-0, #030303)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[18.14%_18.24%_51.73%_51.62%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.02747 6.02698">
            <path d={svgPaths.pfa793f0} fill="var(--fill-0, #030303)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_0.15%_52.6%_52.43%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.48431 9.48092">
            <path d={svgPaths.p819600} fill="var(--fill-0, #030303)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DivTextArea1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="div.text-area">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] whitespace-nowrap">
        <p className="leading-[28px]">+1 (201) 895-3801</p>
      </div>
    </div>
  );
}

function ABoxInnerAlignFlexStart1() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="a.box-inner:align-flex-start">
      <div className="bg-white content-stretch flex gap-[10px] h-[44px] items-start overflow-clip px-[14px] py-[8px] relative rounded-[100px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Component 2">
        <DivIconArea1 />
        <DivTextArea1 />
      </div>
    </div>
  );
}

function DivIconArea2() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0" data-name="div.icon-area">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 1">
        <div className="absolute inset-[7.81%_48.76%_88.28%_47.34%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.781267 0.781276">
            <path d={svgPaths.p1b235b80} fill="var(--fill-0, #030303)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[19.53%_37.22%_53.12%_35.44%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.4688 5.46883">
            <path d={svgPaths.p318df400} fill="var(--fill-0, #030303)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[9.18%_25.5%_64.67%_55.03%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.89519 5.23024">
            <path d={svgPaths.p7184500} fill="var(--fill-0, #030303)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_17.68%_0_15.91%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2816 20">
            <path d={svgPaths.p3b959b80} fill="var(--fill-0, #030303)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DivTextArea2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="div.text-area">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] whitespace-nowrap">
        <p className="leading-[28px]">Preston Rd. Inglewood, Maine 1521</p>
      </div>
    </div>
  );
}

function DivBoxInner() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[44px] items-start overflow-clip px-[14px] py-[8px] relative rounded-[100px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="div.box-inner">
      <DivIconArea2 />
      <DivTextArea2 />
    </div>
  );
}

function DivBoxInnerAlignFlexStart() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="div.box-inner:align-flex-start">
      <DivBoxInner />
    </div>
  );
}

function DivElementorElement10() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="div.elementor-element">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[25px] items-start relative size-full">
        <ABoxInnerAlignFlexStart />
        <ABoxInnerAlignFlexStart1 />
        <DivBoxInnerAlignFlexStart />
      </div>
    </div>
  );
}

function DivElementorElement9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[0.8px] relative shrink-0 w-full" data-name="div.elementor-element">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <DivElementorElementMarginAlignFlexStart2 />
      <DivElementorElement10 />
    </div>
  );
}

function DivElementorElementMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-name="div.elementor-element:margin">
      <DivElementorElement9 />
    </div>
  );
}

function DivElementorElement5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-[533.34px] items-start min-h-px min-w-px relative" data-name="div.elementor-element">
      <DivPrelementsHeadingAlignFlexStart />
      <DivElementorElementMargin />
      <DivElementorElementMargin3 />
    </div>
  );
}

function DivElementorElement1() {
  return (
    <div className="content-stretch flex gap-[50px] h-[532.74px] items-end relative shrink-0 w-full" data-name="div.elementor-element">
      <DivElementorElementAlignFlexStart />
      <DivElementorElement5 />
    </div>
  );
}

function DivRsDivider() {
  return (
    <div className="bg-[#e4e4e4] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.rs-divider">
      <div className="absolute bg-[#0c5776] border-2 border-[rgba(255,255,255,0.99)] border-solid left-[-7px] rounded-[8px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.3)] size-[16px] top-[-8px]" data-name="::after" />
    </div>
  );
}

function DivElementorElement14() {
  return (
    <div className="content-stretch flex flex-col h-[145px] items-start justify-center max-w-[590px] relative shrink-0 w-[0.53px]" data-name="div.elementor-element">
      <DivRsDivider />
    </div>
  );
}

function DivElementorElementAlignFlexEnd() {
  return (
    <div className="content-stretch flex h-full items-end relative shrink-0" data-name="div.elementor-element:align-flex-end">
      <DivElementorElement14 />
    </div>
  );
}

function H4Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4.title">
      <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[24px] whitespace-nowrap">
        <p className="leading-[34px]">Professional Experienc</p>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[#4c4c4c] text-[16px] whitespace-nowrap">
        <p className="mb-0">Conventions and discover their potential through meaningful Our fac</p>
        <p className="mb-0">experiences Our distinguished faculty members are leaders their an</p>
        <p className="mb-0">respective fields dedicated to delivering world-class education tha</p>
        <p>integrates theory with practical support application With</p>
      </div>
    </div>
  );
}

function DivPrelementsHeading2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 min-w-[528.9500122070312px] top-0 w-[528.95px]" data-name="div.prelements-heading">
      <H4Title1 />
      <P2 />
    </div>
  );
}

function DivElementorElementMarginAlignFlexStart3() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="div.elementor-element:margin:align-flex-start">
      <div className="h-[146px] max-w-[590px] relative shrink-0 w-[528.95px]" data-name="Component 5">
        <DivPrelementsHeading2 />
      </div>
    </div>
  );
}

function DivRsDivider1() {
  return (
    <div className="bg-[#e4e4e4] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.rs-divider">
      <div className="absolute bg-[#0c5776] border-2 border-[rgba(255,255,255,0.99)] border-solid left-[-7px] rounded-[8px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.3)] size-[16px] top-[-8px]" data-name="::after" />
    </div>
  );
}

function DivElementorElement15() {
  return (
    <div className="content-stretch flex flex-col h-[145px] items-start justify-center max-w-[590px] relative shrink-0 w-[0.53px]" data-name="div.elementor-element">
      <DivRsDivider1 />
    </div>
  );
}

function DivElementorElementAlignFlexEnd1() {
  return (
    <div className="content-stretch flex h-full items-end relative shrink-0" data-name="div.elementor-element:align-flex-end">
      <DivElementorElement15 />
    </div>
  );
}

function DivElementorElement13() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative self-stretch shrink-0 w-[590px]" data-name="div.elementor-element">
      <DivElementorElementAlignFlexEnd />
      <DivElementorElementMarginAlignFlexStart3 />
      <DivElementorElementAlignFlexEnd1 />
    </div>
  );
}

function DivElementorElement17() {
  return (
    <div className="max-w-[570px] relative shrink-0 w-full" data-name="div.elementor-element">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pl-[8px] relative w-full">
        <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[24px] w-full">
          <p className="leading-[34px]">Courses</p>
        </div>
      </div>
    </div>
  );
}

function DivElementorElementAlignFlexStart1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.elementor-element:align-flex-start">
      <DivElementorElement17 />
    </div>
  );
}

function SpanButtonText() {
  return (
    <div className="h-[18px] relative shrink-0" data-name="span.button-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Inter:Medium',sans-serif] font-medium h-full items-center justify-center leading-[0] not-italic overflow-clip pb-[1.2px] relative rounded-[inherit] text-[0px]">
        <div className="flex flex-col justify-center relative shrink-0 text-[transparent] text-center whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18px] text-[15px]">{`MPhil & PhD Programs`}</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col h-[18px] justify-center left-0 text-[#030303] text-left top-[9px] w-[160.634px]" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18px] text-[15px]">{`MPhil & PhD Programs`}</p>
        </div>
      </div>
    </div>
  );
}

function SpanButtonIcon() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="span.button-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute left-0 overflow-clip size-[15px] top-0" data-name="Component 1">
          <div className="absolute inset-[16.67%_4.95%_16.67%_4.96%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5135 10">
              <path clipRule="evenodd" d={svgPaths.p2df67800} fill="var(--fill-0, #030303)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivElementorElement19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[550px] right-[52%] top-0" data-name="div.elementor-element">
      <a className="bg-white cursor-pointer relative rounded-[30px] shrink-0 w-full" data-name="Component 3" href="https://univet.rstheme.com/cyan/faculty-members/leslie-alexander/">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center pb-[14.8px] pt-[14px] px-[28px] relative w-full">
            <SpanButtonText />
            <SpanButtonIcon />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b-[0.8px] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)]" />
      </a>
    </div>
  );
}

function SpanButtonText1() {
  return (
    <div className="h-[18px] relative shrink-0" data-name="span.button-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Inter:Medium',sans-serif] font-medium h-full items-center justify-center leading-[0] not-italic overflow-clip pb-[1.2px] relative rounded-[inherit] text-[0px]">
        <div className="flex flex-col justify-center relative shrink-0 text-[transparent] text-center whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18px] text-[15px]">Advanced Research Labs</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col h-[18px] justify-center left-0 text-[#030303] text-left top-[9px] w-[182.472px]" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18px] text-[15px]">Advanced Research Labs</p>
        </div>
      </div>
    </div>
  );
}

function SpanButtonIcon1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="span.button-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute left-0 overflow-clip size-[15px] top-0" data-name="Component 1">
          <div className="absolute inset-[16.67%_4.95%_16.67%_4.96%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5135 10">
              <path clipRule="evenodd" d={svgPaths.p2df67800} fill="var(--fill-0, #030303)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivElementorElement20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[52%] max-w-[550px] right-0 top-0" data-name="div.elementor-element">
      <a className="bg-white cursor-pointer relative rounded-[30px] shrink-0 w-full" data-name="Component 3" href="https://univet.rstheme.com/cyan/faculty-members/leslie-alexander/">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[9.99px] items-center justify-center pb-[14.8px] pt-[14px] px-[28px] relative w-full">
            <SpanButtonText1 />
            <SpanButtonIcon1 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b-[0.8px] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)]" />
      </a>
    </div>
  );
}

function SpanButtonText2() {
  return (
    <div className="h-[18px] relative shrink-0" data-name="span.button-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Inter:Medium',sans-serif] font-medium h-full items-center justify-center leading-[0] not-italic overflow-clip pb-[1.2px] relative rounded-[inherit] text-[0px]">
        <div className="flex flex-col justify-center relative shrink-0 text-[transparent] text-center whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18px] text-[15px]">{`Research Funding & Grants`}</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col h-[18px] justify-center left-0 text-[#030303] text-left top-[9px] w-[194.521px]" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18px] text-[15px]">{`Research Funding & Grants`}</p>
        </div>
      </div>
    </div>
  );
}

function SpanButtonIcon2() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="span.button-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute left-0 overflow-clip size-[15px] top-0" data-name="Component 1">
          <div className="absolute inset-[16.67%_4.95%_16.67%_4.96%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5135 10">
              <path clipRule="evenodd" d={svgPaths.p2df67800} fill="var(--fill-0, #030303)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivElementorElement21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[550px] right-[52%] top-[66.8px]" data-name="div.elementor-element">
      <a className="bg-white cursor-pointer relative rounded-[30px] shrink-0 w-full" data-name="Component 3" href="https://univet.rstheme.com/cyan/faculty-members/leslie-alexander/">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[15px] items-center justify-center pb-[14.8px] pl-[16px] pr-[23px] pt-[14px] relative w-full">
            <SpanButtonText2 />
            <SpanButtonIcon2 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b-[0.8px] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)]" />
      </a>
    </div>
  );
}

function SpanButtonText3() {
  return (
    <div className="h-[18px] relative shrink-0" data-name="span.button-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Inter:Medium',sans-serif] font-medium h-full items-center justify-center leading-[0] not-italic overflow-clip pb-[1.2px] relative rounded-[inherit] text-[0px]">
        <div className="flex flex-col justify-center relative shrink-0 text-[transparent] text-center whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18px] text-[15px]">Master of Laws (LLM)</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col h-[18px] justify-center left-0 text-[#030303] text-left top-[9px] w-[156.161px]" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18px] text-[15px]">Master of Laws (LLM)</p>
        </div>
      </div>
    </div>
  );
}

function SpanButtonIcon3() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="span.button-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute left-0 overflow-clip size-[15px] top-0" data-name="Component 1">
          <div className="absolute inset-[16.67%_4.95%_16.67%_4.96%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5135 10">
              <path clipRule="evenodd" d={svgPaths.p2df67800} fill="var(--fill-0, #030303)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivElementorElement22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[52%] max-w-[550px] right-0 top-[66.8px]" data-name="div.elementor-element">
      <a className="bg-white cursor-pointer relative rounded-[30px] shrink-0 w-full" data-name="Component 3" href="https://univet.rstheme.com/cyan/faculty-members/leslie-alexander/">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[9.99px] items-center justify-center pb-[14.8px] pt-[14px] px-[26px] relative w-full">
            <SpanButtonText3 />
            <SpanButtonIcon3 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b-[0.8px] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)]" />
      </a>
    </div>
  );
}

function DivElementorElement18() {
  return (
    <div className="h-[113.6px] relative shrink-0 w-full" data-name="div.elementor-element">
      <DivElementorElement19 />
      <DivElementorElement20 />
      <DivElementorElement21 />
      <DivElementorElement22 />
    </div>
  );
}

function DivElementorElement16() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pl-[20px] relative self-stretch shrink-0 w-[570px]" data-name="div.elementor-element">
      <DivElementorElementAlignFlexStart1 />
      <DivElementorElement18 />
    </div>
  );
}

function DivElementorElement12() {
  return (
    <div className="content-stretch flex gap-[20px] h-[187.6px] items-start pb-[20px] relative shrink-0 w-full" data-name="div.elementor-element">
      <DivElementorElement13 />
      <DivElementorElement16 />
    </div>
  );
}

function CapManMin() {
  return (
    <div className="h-[380.55px] max-w-[1180px] relative rounded-[12px] shrink-0 w-[1180px]" data-name="cap-man-min">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCapManMin} />
      </div>
    </div>
  );
}

function DivRsImage() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.rs-image">
      <CapManMin />
    </div>
  );
}

function DivElementorElement23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="div.elementor-element">
      <DivRsImage />
    </div>
  );
}

function DivEConInner1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.e-con-inner">
      <div className="content-stretch flex flex-col gap-[20px] items-start py-[40px] relative size-full">
        <DivElementorElement12 />
        <DivElementorElement23 />
      </div>
    </div>
  );
}

function DivElementorElement11() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] w-full" data-name="div.elementor-element">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[40px] relative size-full">
          <DivEConInner1 />
        </div>
      </div>
    </div>
  );
}

function DivElementorElementMargin5() {
  return (
    <div className="content-stretch flex flex-col h-[748.15px] items-start justify-center pt-[80px] relative shrink-0 w-full" data-name="div.elementor-element:margin">
      <DivElementorElement11 />
    </div>
  );
}

function DivElementorElement26() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[7.103px] pt-[5.897px] px-[16px] relative rounded-[100px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)]" data-name="div.elementor-element">
      <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[20px] whitespace-nowrap">
        <p className="leading-[30px]">Research Excellence Awards</p>
      </div>
    </div>
  );
}

function DivElementorElement25() {
  return (
    <div className="content-stretch flex flex-col h-[342.062px] items-start relative shrink-0 w-[501.94px]" data-name="div.elementor-element">
      <div className="flex items-center justify-center max-w-[496.0001525878906px] relative shrink-0 size-[235.467px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <DivElementorElement26 />
        </div>
      </div>
    </div>
  );
}

function DivIconWrap() {
  return (
    <div className="content-stretch flex h-[30px] items-center relative shrink-0 w-[200px]" data-name="div.icon-wrap">
      <div className="overflow-clip relative shrink-0 size-[117px]" data-name="Component 1">
        <div className="absolute inset-[47.11%_78.49%_40.25%_8.87%]" data-name="Vector">
          <div className="absolute inset-[-3.49%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8252 15.8252">
              <path d={svgPaths.p9c31100} id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.03265" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[42.89%_86.92%_52.89%_8.87%]" data-name="Vector">
          <div className="absolute inset-[-10.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.96346 5.96352">
              <path d={svgPaths.p341a8f00} id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.03265" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[49.21%_94.29%_46.57%_1.5%]" data-name="Vector">
          <div className="absolute inset-[-10.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.9635 5.96346">
              <path d={svgPaths.p27ab6f00} id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.03265" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[38.68%_95.34%_57.11%_0.44%]" data-name="Vector">
          <div className="absolute inset-[-10.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.96351 5.96351">
              <path d={svgPaths.p3504ad80} id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.03265" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[44.39%_59.41%_38.72%_28.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8797 19.7538">
            <path d={svgPaths.p394c27f0} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[48.61%_46.13%_38.56%_43.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2787 15.0082">
            <path d={svgPaths.pc00e571} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[48.61%_32.92%_38.72%_56.92%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8928 14.8153">
            <path d={svgPaths.p185ca380} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[48.61%_20.11%_38.72%_69.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8928 14.8153">
            <path d={svgPaths.p24a64800} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[44.39%_14.73%_38.72%_82.8%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.88439 19.7538">
            <path d={svgPaths.p16bd1c80} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[48.45%_0.53%_38.47%_88.01%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4068 15.3073">
            <path d={svgPaths.p3b987200} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function H4Title2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="h4.title">
      <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[0px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[34px] text-[20px]">Research Excellence Award</p>
      </div>
    </div>
  );
}

function DivTopWrapper() {
  return (
    <div className="relative shrink-0" data-name="div.top-wrapper">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative">
        <DivIconWrap />
        <H4Title2 />
      </div>
    </div>
  );
}

function DivDescText() {
  return (
    <div className="relative shrink-0" data-name="div.desc-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[0px] text-left whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[34px] text-[20px]">2025</p>
        </div>
      </div>
    </div>
  );
}

function DivIconWrap1() {
  return (
    <div className="content-stretch flex h-[30px] items-center relative shrink-0 w-[200px]" data-name="div.icon-wrap">
      <div className="overflow-clip relative shrink-0 size-[117px]" data-name="Component 1">
        <div className="absolute inset-[40.62%_78.44%_41%_0.4%]" data-name="Vector">
          <div className="absolute inset-[-2.15%_-1.87%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6824 22.4247">
              <path d={svgPaths.p2b9cf00} id="Vector" stroke="var(--stroke-0, #FF8D28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.923948" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.22%_60%_41.7%_26.22%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1251 19.9783">
            <path d={svgPaths.p21931400} fill="var(--fill-0, #003A65)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.33%_45.43%_41.44%_42.98%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5595 15.4812">
            <path d={svgPaths.pfb6e100} fill="var(--fill-0, #003A65)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.33%_32.01%_41.44%_56.76%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.14 15.4812">
            <path d={svgPaths.p1a5b2d00} fill="var(--fill-0, #003A65)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[42.42%_23.13%_41.53%_69.64%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4576 18.7695">
            <path d={svgPaths.p25b07000} fill="var(--fill-0, #003A65)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.33%_10.56%_41.42%_78.79%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4574 15.5105">
            <path d={svgPaths.p155e9980} fill="var(--fill-0, #003A65)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.3%_0.39%_41.7%_92.76%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.01846 15.2081">
            <path d={svgPaths.p34308cc0} fill="var(--fill-0, #003A65)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function H4Title3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="h4.title">
      <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[0px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[34px] text-[20px]">Excellence in Teaching Award</p>
      </div>
    </div>
  );
}

function DivTopWrapper1() {
  return (
    <div className="relative shrink-0" data-name="div.top-wrapper">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative">
        <DivIconWrap1 />
        <H4Title3 />
      </div>
    </div>
  );
}

function DivDescText1() {
  return (
    <div className="relative shrink-0" data-name="div.desc-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[0px] text-left whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[34px] text-[20px]">2024</p>
        </div>
      </div>
    </div>
  );
}

function DivIconWrap2() {
  return (
    <div className="content-stretch flex h-[30px] items-center relative shrink-0 w-[200px]" data-name="div.icon-wrap">
      <div className="overflow-clip relative shrink-0 size-[117px]" data-name="Component 1">
        <div className="absolute inset-[38.26%_0.83%_39.09%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.034 26.5033">
            <path d={svgPaths.p2bdde400} fill="var(--fill-0, #003A65)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function H4Title4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="h4.title">
      <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[0px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[34px] text-[20px]">Young Researcher Award</p>
      </div>
    </div>
  );
}

function DivTopWrapper2() {
  return (
    <div className="relative shrink-0" data-name="div.top-wrapper">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative">
        <DivIconWrap2 />
        <H4Title4 />
      </div>
    </div>
  );
}

function DivDescText2() {
  return (
    <div className="relative shrink-0" data-name="div.desc-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[0px] text-left whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[34px] text-[20px]">2023</p>
        </div>
      </div>
    </div>
  );
}

function DivIconWrap3() {
  return (
    <div className="content-stretch flex h-[30px] items-center relative shrink-0 w-[200px]" data-name="div.icon-wrap">
      <div className="overflow-clip relative shrink-0 size-[117px]" data-name="Component 1">
        <div className="absolute inset-[39.91%_82.72%_40.57%_0.62%]" data-name="Vector">
          <div className="absolute inset-[-3.2%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9508 24.2945">
              <path d={svgPaths.p10219b70} id="Vector" stroke="var(--stroke-0, #15A656)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46291" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[42.66%_66.5%_43.33%_20.82%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8334 16.3874">
            <path d={svgPaths.p13340640} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.4%_56.05%_43.15%_35.08%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3834 13.3971">
            <path d={svgPaths.p17ddab80} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[42.82%_48.2%_43.33%_45.48%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.3931 16.199">
            <path d={svgPaths.pb323f00} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.4%_35.92%_43.15%_53.15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7849 13.3971">
            <path d={svgPaths.p21f37a00} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.4%_28.05%_43.33%_66.34%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.56899 13.1852">
            <path d={svgPaths.p3e206600} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[41.17%_23.32%_43.33%_73.76%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.41408 18.1297">
            <path d={svgPaths.p1be8bf80} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.4%_12.36%_43.15%_78.76%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3833 13.3971">
            <path d={svgPaths.p26087900} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[41.78%_0.38%_43.33%_90.12%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1141 17.4234">
            <path d={svgPaths.p28adaa70} fill="var(--fill-0, #051435)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function H4Title5() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[273.3999938964844px] relative shrink-0" data-name="h4.title">
      <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[0px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[34px] text-[20px]">Lifetime Achievement Award</p>
      </div>
    </div>
  );
}

function DivTopWrapper3() {
  return (
    <div className="relative shrink-0" data-name="div.top-wrapper">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative">
        <DivIconWrap3 />
        <H4Title5 />
      </div>
    </div>
  );
}

function DivDescText3() {
  return (
    <div className="relative shrink-0" data-name="div.desc-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="flex flex-col font-['Bitter:Thin',sans-serif] font-thin justify-center leading-[0] relative shrink-0 text-[#030303] text-[0px] text-left whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[34px] text-[20px]">2022</p>
        </div>
      </div>
    </div>
  );
}

function DivRsServiceList() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-full" data-name="div.rs-service-list">
      <a className="relative shrink-0 w-full" data-name="Component 4" href="https://univet.rstheme.com/cyan/faculty-members/leslie-alexander/">
        <div aria-hidden="true" className="absolute border-[rgba(2,1,1,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pb-[24.8px] pt-[24px] px-[24px] relative w-full">
            <DivTopWrapper />
            <DivDescText />
          </div>
        </div>
      </a>
      <a className="relative shrink-0 w-full" data-name="Component 4" href="https://univet.rstheme.com/cyan/faculty-members/leslie-alexander/">
        <div aria-hidden="true" className="absolute border-[rgba(2,1,1,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pb-[24.8px] pt-[24px] px-[24px] relative w-full">
            <DivTopWrapper1 />
            <DivDescText1 />
          </div>
        </div>
      </a>
      <a className="relative shrink-0 w-full" data-name="Component 4" href="https://univet.rstheme.com/cyan/faculty-members/leslie-alexander/">
        <div aria-hidden="true" className="absolute border-[rgba(2,1,1,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pb-[24.8px] pt-[24px] px-[24px] relative w-full">
            <DivTopWrapper2 />
            <DivDescText2 />
          </div>
        </div>
      </a>
      <a className="relative shrink-0 w-full" data-name="Component 4" href="https://univet.rstheme.com/cyan/faculty-members/leslie-alexander/">
        <div aria-hidden="true" className="absolute border-[rgba(2,1,1,0)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pb-[24.8px] pt-[24px] px-[24px] relative w-full">
            <DivTopWrapper3 />
            <DivDescText3 />
          </div>
        </div>
      </a>
    </div>
  );
}

function AwardWin1Min() {
  return (
    <div className="absolute h-[263.01px] left-[-301px] opacity-0 top-0 w-[200px]" data-name="award-win-1-min">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAwardWin1Min} />
      </div>
    </div>
  );
}

function AwardWin2Min() {
  return (
    <div className="absolute h-[256.43px] left-[-301px] opacity-0 top-0 w-[200px]" data-name="award-win-2-min">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAwardWin2Min} />
      </div>
    </div>
  );
}

function AwardWin3Min() {
  return (
    <div className="absolute h-[240px] left-[-301px] top-0 w-[200px]" data-name="award-win-3-min">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAwardWin3Min} />
      </div>
    </div>
  );
}

function AwardWin4Min() {
  return (
    <div className="absolute h-[282.35px] left-[-301px] opacity-0 top-0 w-[200px]" data-name="award-win-4-min">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAwardWin4Min} />
      </div>
    </div>
  );
}

function DivElementorElement28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.elementor-element">
      <DivRsServiceList />
      <AwardWin1Min />
      <AwardWin2Min />
      <AwardWin3Min />
      <AwardWin4Min />
    </div>
  );
}

function DivElementorElement27() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start relative rounded-[10px] shrink-0 w-[744px]" data-name="div.elementor-element">
      <DivElementorElement28 />
    </div>
  );
}

function DivElementorElement24() {
  return (
    <div className="absolute content-stretch flex gap-[20px] inset-[60px_0_0_-5.94px] items-end" data-name="div.elementor-element">
      <DivElementorElement25 />
      <DivElementorElement27 />
    </div>
  );
}

function DivElementorElementMargin6() {
  return (
    <div className="h-[391.2px] relative shrink-0 w-full" data-name="div.elementor-element:margin">
      <DivElementorElement24 />
    </div>
  );
}

function DivEConInner() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center max-w-[1260px] py-[110px] relative shrink-0 w-full" data-name="div.e-con-inner">
      <DivElementorElement1 />
      <DivElementorElementMargin5 />
      <DivElementorElementMargin6 />
    </div>
  );
}

export default function DivElementorElement() {
  return (
    <div className="bg-[#f6f4ee] content-stretch flex flex-col items-start justify-center px-[128.8px] relative size-full" data-name="div.elementor-element">
      <DivEConInner />
    </div>
  );
}