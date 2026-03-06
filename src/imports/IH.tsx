import svgPaths from "./svg-o5h25uox4w";
import imgIH from "figma:asset/e1112f8126507de00cca4232ca70ae21c7db8fe5.png";
import imgImageDumriCollege from "figma:asset/233f90283b695bb1a0a35b62804867616ecd9a87.png";

function Zb() {
  return (
    <div className="h-[19px] overflow-clip relative shrink-0 w-full" data-name="ZB">
      <div className="absolute inset-[0_0_1.75%_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 18.6667">
          <path d={svgPaths.pbe6f180} fill="var(--fill-0, #030303)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35px] items-start left-[969px] pt-[8px] px-[8px] top-[24px] w-[37px]" data-name="Button">
      <Zb />
    </div>
  );
}

function ImageDumriCollege() {
  return (
    <div className="absolute left-0 size-[90px] top-[11px]" data-name="Image (Dumri College)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDumriCollege} />
    </div>
  );
}

export default function IH() {
  return (
    <div className="relative size-full" data-name="iH">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIH} />
      <div className="absolute h-[108px] left-0 top-0 w-[354px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354 108">
          <path d="M0 108V0H354L265.57 108H0Z" fill="var(--fill-0, white)" id="Rectangle 2" />
        </svg>
      </div>
      <div className="absolute font-['Alice:Regular',sans-serif] h-[84px] leading-[20px] left-[107px] not-italic text-[40px] text-black top-[17px] w-[238px] whitespace-pre-wrap">
        <p className="mb-0">{`Dumri `}</p>
        <p>
          <br aria-hidden="true" />
          College
        </p>
      </div>
      <div className="absolute bg-white h-[39px] left-[963px] rounded-[7px] top-[22px] w-[145px]" />
      <p className="absolute font-['Alice:Regular',sans-serif] h-[84px] leading-[20px] left-[1011px] not-italic text-[24px] text-black top-[32px] w-[238px]">Menue</p>
      <Button />
      <ImageDumriCollege />
    </div>
  );
}