import clsx from "clsx";
import svgPaths from "./svg-mnpf35yk8o";
import imgImg from "figma:asset/233f90283b695bb1a0a35b62804867616ecd9a87.png";
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[36px] relative rounded-[12px] shrink-0 w-[21px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </Wrapper1>
  );
}
type HTextProps = {
  text: string;
};

function HText({ text }: HTextProps) {
  return (
    <div className="h-[32.8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[0.8px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-[0.6px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("absolute h-[20px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-[0.6px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function DivElementorElement() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#0f6487] from-[34.5%] items-start justify-center px-[108.8px] relative size-full to-[#0c5776] to-[34.5%]" data-name="div.elementor-element">
      <div className="h-[467px] relative shrink-0 w-[1243px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
        <div className="absolute content-stretch flex flex-col gap-[24px] h-[338px] items-start left-[-64.2px] top-[36px] w-[495px]" data-name="Container">
          <div className="content-stretch flex gap-[12px] h-[79.963px] items-center relative shrink-0 w-full" data-name="Container">
            <div className="bg-white h-[64px] relative rounded-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[44.138px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                <div className="h-[56px] relative shrink-0 w-[36.138px]" data-name="img">
                  <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg} />
                </div>
              </div>
            </div>
            <Wrapper3 additionalClassNames="h-[79.963px] w-[231.863px]">
              <div className="absolute h-[63.975px] left-0 top-0 w-[231.863px]" data-name="p">
                <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-white top-[-1.2px] w-[205px]">Dumri Commerce Inter College</p>
              </div>
              <div className="absolute content-stretch flex h-[15.988px] items-start left-0 top-[63.97px] w-[231.863px]" data-name="p">
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[12px] text-[rgba(255,255,255,0.6)]">Excellence in Education</p>
              </div>
            </Wrapper3>
          </div>
          <div className="h-[113.75px] relative shrink-0 w-full" data-name="p">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-[0.4px] w-[266px]">Dumri College has been a beacon of quality education since 1950, nurturing future leaders and innovators through comprehensive academic programs and state-of-the-art facilities.</p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
              <Wrapper additionalClassNames="absolute left-0 top-[4px]">
                <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
                <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
              </Wrapper>
              <Text text="Dumri, Jharkhand, India - 825409" additionalClassNames="left-[28px] top-0 w-[223.913px]" />
            </div>
            <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
              <Wrapper1 additionalClassNames="relative shrink-0">
                <g clipPath="url(#clip0_264_927)" id="Icon">
                  <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
                </g>
                <defs>
                  <clipPath id="clip0_264_927">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </Wrapper1>
              <div className="h-[20px] relative shrink-0 w-[118.263px]" data-name="a">
                <Text1 text="+91 123 456 7890" />
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
              <Wrapper additionalClassNames="relative shrink-0">
                <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
                <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
              </Wrapper>
              <div className="h-[20px] relative shrink-0 w-[153.4px]" data-name="a">
                <Text1 text="info@dumricollege.edu" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[24px] h-[338px] items-start left-[477.8px] top-[35px] w-[120px]" data-name="Container">
          <HText text="Quick Links" />
          <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="ul">
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="About Us" additionalClassNames="left-0 top-[2.4px] w-[61.237px]" />
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Academics" additionalClassNames="left-0 top-[2.4px] w-[73.438px]" />
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Admissions" additionalClassNames="left-0 top-[2.4px] w-[76.113px]" />
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Gallery" additionalClassNames="left-0 top-[2.4px] w-[46.612px]" />
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Contact" additionalClassNames="left-0 top-[2.4px] w-[51.987px]" />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[24px] h-[338px] items-start left-[644.8px] top-[35px] w-[120px]" data-name="Container">
          <HText text="Programs" />
          <div className="content-stretch flex flex-col gap-[12px] h-[185.6px] items-start relative shrink-0 w-full" data-name="ul">
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Undergraduate" additionalClassNames="left-0 top-[2.4px] w-[99.5px]" />
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Postgraduate" additionalClassNames="left-0 top-[2.4px] w-[88.138px]" />
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Doctoral (PhD)" additionalClassNames="left-0 top-[2.4px] w-[97.338px]" />
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Diploma Courses" additionalClassNames="left-0 top-[2.4px] w-[113.037px]" />
            </div>
            <div className="h-[41.6px] relative shrink-0 w-full" data-name="li">
              <div className="absolute h-[40px] left-0 top-0 w-[120px]" data-name="a">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-[0.6px] w-[70px]">Certificate Programs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[24px] h-[338px] items-start left-[811.8px] top-[35px] w-[120px]" data-name="Container">
          <HText text="Campus Life" />
          <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="ul">
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Library" additionalClassNames="left-0 top-[2.4px] w-[46.375px]" />
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Facilities" additionalClassNames="left-0 top-[2.4px] w-[57.487px]" />
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Events" additionalClassNames="left-0 top-[2.4px] w-[44.288px]" />
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Sports" additionalClassNames="left-0 top-[2.4px] w-[43.275px]" />
            </div>
            <div className="h-[24px] relative shrink-0 w-full" data-name="li">
              <Text text="Hostels" additionalClassNames="left-0 top-[2.4px] w-[49.575px]" />
            </div>
          </div>
        </div>
        <div className="absolute left-[978.8px] size-[338px] top-[35px]" data-name="Container">
          <div className="absolute border-[rgba(255,255,255,0.2)] border-b-[0.8px] border-solid h-[32.8px] left-0 top-0 w-[120px]" data-name="h3">
            <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[0.8px] whitespace-nowrap">Newsletter</p>
          </div>
          <div className="absolute h-[80px] left-0 top-[57px] w-[312px]" data-name="p">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-px w-[241px]">Subscribe to get latest updates and news from Dumri College.</p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[12px] h-[93px] items-start left-[-6px] top-[122px] w-[234px]" data-name="form">
            <div className="bg-[rgba(255,255,255,0.1)] h-[41.6px] relative rounded-[12px] shrink-0 w-full" data-name="input">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">Enter your email</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
            <div className="bg-[#2563eb] h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button">
              <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[60.16px] not-italic text-[14px] text-center text-white top-[10.6px] whitespace-nowrap">Subscribe</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[12px] h-[68px] items-start left-px top-[239px] w-[120px]" data-name="Container">
            <div className="h-[20px] relative shrink-0 w-full" data-name="p">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-[0.6px] whitespace-nowrap">Follow Us</p>
            </div>
            <div className="content-stretch flex gap-[12px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
              <Wrapper2>
                <Wrapper1 additionalClassNames="relative shrink-0">
                  <g clipPath="url(#clip0_264_910)" id="Bt">
                    <path d={svgPaths.p302cda80} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_264_910">
                      <rect fill="white" height="16" width="16" />
                    </clipPath>
                  </defs>
                </Wrapper1>
              </Wrapper2>
              <Wrapper2>
                <Wrapper1 additionalClassNames="relative shrink-0">
                  <g id="svg">
                    <path d={svgPaths.p26acad00} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                </Wrapper1>
              </Wrapper2>
              <Wrapper2>
                <Wrapper1 additionalClassNames="relative shrink-0">
                  <g clipPath="url(#clip0_264_895)" id="Bt">
                    <path d={svgPaths.p144b3900} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_264_895">
                      <rect fill="white" height="16" width="16" />
                    </clipPath>
                  </defs>
                </Wrapper1>
              </Wrapper2>
              <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[12px]" data-name="motion.a">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <Wrapper1 additionalClassNames="relative shrink-0">
                    <g id="Bt">
                      <path d={svgPaths.p2a776880} fill="var(--fill-0, white)" id="Vector" />
                    </g>
                  </Wrapper1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[88px] items-center justify-center left-[353.8px] top-[385px] w-[960px]" data-name="Container">
          <Wrapper3 additionalClassNames="h-[20px] w-[391.65px]">
            <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[196px] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[0.6px] whitespace-nowrap">© 2026 Dumri Commerce Inter College. All rights reserved.</p>
          </Wrapper3>
          <Wrapper3 additionalClassNames="h-[20px] w-[149.713px]">
            <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[75px] not-italic text-[0px] text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[0.6px] whitespace-nowrap">
              <span className="leading-[20px]">{`Designed By `}</span>
              <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px]">Rayzenix</span>
            </p>
          </Wrapper3>
        </div>
      </div>
    </div>
  );
}