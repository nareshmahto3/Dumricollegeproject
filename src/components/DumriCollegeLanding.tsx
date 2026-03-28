import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
// import { SharedNavigation } from "./shared/SharedNavigation";
import { CarouselHeader } from "./CarouselHeader";
import { ProgramsSection } from "./ProgramsSection";
import { Footer } from "./Footer";
import { ProfessorsSection } from "./ProfessorsSection";
import { UniversityAchievements } from "./UniversityAchievements";
import {
  Briefcase,
  UserCheck,
  GraduationCap,
  Heart,
  ClipboardCheck,
  Users,
  Building2,
} from "lucide-react";
import svgPaths from "../imports/svg-x8yhpltdsp";
import imgImg from "figma:asset/233f90283b695bb1a0a35b62804867616ecd9a87.png";
import img23714285420260224035427Jpg from "figma:asset/9411083632a695a2b9b96381c339905746b585c3.png";
import imgSectionFindYourDegree from "figma:asset/6fb5ca094257a7b3948a4b9db380c9b28814680c.png";
import imgSectionCampusAdventures from "figma:asset/ced9d5d7f3ce34f807e9b277d17d57c96268b8b3.png";
import imgPlacements from "figma:asset/02236aa8f5034cb5dd3d0f6afd80b83e07638b54.png";
import imgChristConsulting from "figma:asset/8037a3f4b866bcfc7a92eca3975ba026bad83920.png";
import imgAdmissions from "figma:asset/1b8bd5f15a3cdd65fda9ac91d0704cdd3ae23365.png";
import imgHealthServices from "figma:asset/279b090f3dd9b47e9ce47988f71b834ce53675f7.png";
import imgExaminations from "figma:asset/4e8a73cbd5e4b1237003eb675167d4260c6ef2ab.png";
import imgCentresCells from "figma:asset/fe844ca260956b35e9de15491599cde2f951a793.png";
import imgSectionEventsCampusW from "figma:asset/96e1271e98bbd41b05a1e9ed91fc1895bdd5006a.png";
import imgEventsBg from "figma:asset/7b3441358b7db7dbb6afb1c40372e938b37fb197.png";
import imgSectionVignteeee from "figma:asset/8b8ff9224475b9318a67f1510323e1736cc61a48.png";
import imgTellATale1 from "figma:asset/428e9a82aa3a56261889c4b9e388b51942f2272b.png";
import imgTellATale2 from "figma:asset/67529013d3689662828047b20bdd33edaf92f516.png";
import imgTellATale3 from "figma:asset/5423f3c995ee1d097e5f3a0e53d472669230dd10.png";
import imgTellATale4 from "figma:asset/9e54e95c8994a095badd8b900606abdd52b3ca7e.png";
import imgTellATale5 from "figma:asset/4d1f9323858b357f075b977d93ef7948d472b6f3.png";
import imgBgGradntPng from "figma:asset/9b49c6d56789477dd7b90b373344e397877965c6.png";
import imgName from "figma:asset/e64231869036b9cde6f92c11af831e7ab3f5eecc.png";
import imgAchivementsImage from "figma:asset/113b6bb1f8c6cad527ebef7cfa20c015c5db8c5e.png";
import imgAchivementsImg from "figma:asset/4e0f17fd8366ab447e0e1707028079dcc82383a3.png";
import imgResearchFacilities from "figma:asset/e179dbec51c78a0573a64faddf45f62460898265.png";
import imgResearchFacilities1 from "figma:asset/b255faa0bb5b3cd5f4b7bdb204cf643572cc139e.png";
import imgResearchFacilities2 from "figma:asset/74c7eac73722f84eb450ce7ada378d0734d7dbaa.png";
import imgResearchFacilities3 from "figma:asset/1a90479b6e9e6cc70871e30419c57533c3c83fd4.png";
import imgResearchFacilities4 from "figma:asset/d4dd9e53762a9116222a67aea3d60a091effdf05.png";
import imgResearchFacilities5 from "figma:asset/d78fa9d65eca7bf6ceaf00d37a1ceb69e690c3bb.png";
import imgName1 from "figma:asset/76b3dc25c834fa9318076f6ed93452605d06bdd3.png";
import imgName2 from "figma:asset/16d69cc9e38f315b687a2805cf61559194c17cc8.png";
import imgName3 from "figma:asset/00aa3d5431b3d04e703acb847c73b8edacbbd268.png";
import imgShade from "figma:asset/252b03f0440487a17106b0ecda4e8f4a5738be5c.png";
import imgLabs from "figma:asset/ea3d9d4e7dabec6525976c5be927620dd61bb1ba.png";
import imgQsWorldUniversityRankings from "figma:asset/f15cb3d386218a8532efb47f826af5dafa9a15ae.png";
import imgQsWorldSustainabilityRankings from "figma:asset/c1bd62398098d89f97f6aca52872e97a1b09e562.png";
import imgTheSubjectRankings2026 from "figma:asset/41fa596e0ffcd9168e7697da3fee6c77be46650c.png";
import imgWorldUniversityRankingsAsia2026 from "figma:asset/bf54e1e15cc43620b1fbf170e3cdab62623e3a4f.png";
import imgTheWorldUniversityRankingForInnovation2025 from "figma:asset/15c3a2d2c00f3d5ecaf3d1d86e3a3e41ce706ce6.png";
import imgName4 from "figma:asset/563d8e85de7fb31189dfc05f50f0cb8666ade840.png";
import imgValedictoryOfDepartmentOfEconomics26February2026BangaloreYeshwanthpurCampus from "figma:asset/3ced4fadfe0894301c0ecfc465a60ed2bbdb5f0a.png";
import imgValedictoryOfDepartmentOfProfessionalStudies26February2026BangaloreYeshwanthpurCampus from "figma:asset/f37957a2416ce9e5df6f986378582b62f8ac66ef.png";
import imgNritta2026NrityaSamarpan25February2026BangaloreYeshwanthpurCampus from "figma:asset/8bb012cb18491ab060e52d601b035453dedd9f44.png";
import imgGallery from "figma:asset/e509cf6e74366464abcaa9097e467caecc71ea3a.png";
import imgValedictoryOfPrism202625February2026BangaloreYeshwanthpurCampus from "figma:asset/8493b4456624124a99d1f0bb95eeef3f047fab37.png";
import imgValedictoryOfCaps25February2026BangaloreYeshwanthpurCampus from "figma:asset/4538fb301283f4ebabd0c9c8384cee174b6f3d32.png";
import imgMindSelfAndHealingTraditionsAndProspects24February2026BangaloreYeshwanthpurCampus from "figma:asset/9ce82a5c949165ad2270eff4300f1373cc8e2ac4.png";
import imgSectionVideoPpBg from "figma:asset/5de67a80bffdf139d94e9ef61685010ce90da1d9.png";
import imgSchoolName from "figma:asset/135f567ae19fa2da7febd9532c806aaf1b2f0806.png";
import imgInternationalStudents from "figma:asset/a82d6f7484dde9643d3ac214fa310b74dcaa6a46.png";
import imgSectionProdAlumni from "figma:asset/dd218179bbce7708f7077b4b3abd02fc2c66a8de.png";
import imgComponent17 from "figma:asset/906c051cebca4bc3eef586431159839db61f7871.png";
import imgName5 from "figma:asset/5fbd278664b15a0b3880af013a036f9dd868bef9.png";
import imgName6 from "figma:asset/3d517db9b53c70621aaf63ddefb6cdbd5f7e5313.png";
import imgSectionSocialmediaWdgt from "figma:asset/b7458ea64b960e74f6e6c1703e23c259546c28a6.png";
import imgAqma6QL0R7Pz3S9CSs2PX96ZhrYYaxybkhXgYeEa4WghCf6T0XPkRj9ZoNyYrN85Xe1ALnLhTqlRuJlMjTkxFuMp4 from "figma:asset/0f87e4a5196d14c006df0b7480c622b7970fbdb5.png";
import imgAqo2Ck3Drpf0Ai8E28ImWzt6GIajYhD56BWkUlUt5DyysOdASd5Jh8USLz6Axc4S8GPxz1E24Oag4Jcgpm4OrjFJz0Q8BYsdMMp4 from "figma:asset/f7883e702cf881bb69ab5e1526c6b6696a722fcd.png";
import img629591488180992041369173873294802342293289923NJpg from "figma:asset/acbf2df85208d6385ad30d7f53644a86b27761ff.png";
import img631838878180987385819173877110310279382797744NJpg from "figma:asset/081178be4e31e4a7b2f1521658c448b0470b564d.png";
import imgCollegeBuilding from "figma:asset/5e1bebd644aff64baf3354389c6dde5691668810.png";
import { imgTellATale } from "../imports/svg-pduv6";
import Frame from "../imports/Frame-206-1785";

// News Item Component for Ticker
function NewsItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 bg-white rounded-full" />
      <span className="text-white text-sm font-medium">{text}</span>
    </div>
  );
}

// Carousel images with high-quality images and metadata
const carouselImages = [
  {
    url: imgCollegeBuilding,
    title: "Jharkhand College Dumri",
    subtitle: "Excellence in Education Since 1950",
    cta: "Explore Campus",
    ctaLink: "/about",
  },
  {
    url: img23714285420260224035427Jpg,
    title: "Welcome to Dumri College",
    subtitle: "Shaping Minds, Building Futures",
    cta: "Explore Programs",
    ctaLink: "/academics",
  },
  {
    url: "https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcyMzU5MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "State-of-the-Art Facilities",
    subtitle: "Modern Libraries & Research Centers",
    cta: "View Gallery",
    ctaLink: "/gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1667564790635-0f560121359e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255JTIwaW5kaWF8ZW58MXx8fHwxNzcyMzU5MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Shape Your Future",
    subtitle: "Join Our Legacy of Success",
    cta: "Apply Now",
    ctaLink: "/apply",
  },
];

// Notice carousel data
const notices = [
  {
    id: 1,
    title: "ADMISSIONS OPEN 2026:",
    message:
      "Applications are now being accepted for Undergraduate, Postgraduate & Doctoral programs.",
    primaryButton: { text: "Apply Now", link: "/apply" },
    secondaryButton: { text: "View Programs", link: "/programs" },
    bgGradient: "from-amber-500 via-orange-500 to-amber-500",
  },
  {
    id: 2,
    title: "SCHOLARSHIP NOTIFICATION:",
    message:
      "Merit-based scholarships up to 100% tuition fee waiver available. Apply before March 31, 2026.",
    secondaryButton: { text: "Check Eligibility", link: "/" },
    primaryButton: { text: "Apply Now", link: "/scholarships" },
    bgGradient: "from-blue-600 via-blue-500 to-blue-600",
  },
];

export default function DumriCollegeLanding() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [achievementTab, setAchievementTab] = useState<
    "faculty" | "student" | "university"
  >("faculty");
  const [achievementIndex, setAchievementIndex] = useState(0);
  const [alumniIndex, setAlumniIndex] = useState(0);
  const [eventsCarouselIndex, setEventsCarouselIndex] = useState(0);
  const [accrCarouselIndex, setAccrCarouselIndex] = useState(0);
  const [galleryCarouselIndex, setGalleryCarouselIndex] = useState(0);
  const [achievCardIndex, setAchievCardIndex] = useState(0);
  const [noticeIndex, setNoticeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNoticeIndex((prev) => (prev + 1) % notices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Carousel ─────────────────────────────────────────────────────
          Original: h-[440px] sm:h-[520px] md:h-[620px] lg:h-[630px]
          At 150% zoom the lg breakpoint fires at ~853px CSS-px (1280/1.5),
          so we tighten the max height so it doesn't eat the viewport.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="relative h-[380px] sm:h-[460px] md:h-[520px] lg:h-[540px] overflow-hidden">
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{ zIndex: index === currentSlide ? 1 : 0 }}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        ))}

        <CarouselHeader />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2.5 transition-all duration-300 cursor-pointer"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="white" viewBox="0 0 14 26">
            <path d="M13.7098 0.293788C13.8029 0.386679 13.8768 0.49703 13.9272 0.61852C13.9776 0.740011 14.0036 0.870253 14.0036 1.00179C14.0036 1.13332 13.9776 1.26356 13.9272 1.38506C13.8768 1.50655 13.8029 1.6169 13.7098 1.70979L2.41579 13.0018L13.7098 24.2938C13.8976 24.4816 14.003 24.7362 14.003 25.0018C14.003 25.2673 13.8976 25.522 13.7098 25.7098C13.522 25.8976 13.2673 26.003 13.0018 26.003C12.7362 26.003 12.4816 25.8976 12.2938 25.7098L0.293787 13.7098C0.200661 13.6169 0.126775 13.5065 0.0763617 13.3851C0.0259488 13.2636 0 13.1333 0 13.0018C0 12.8703 0.0259488 12.74 0.0763617 12.6185C0.126775 12.497 0.200661 12.3867 0.293787 12.2938L12.2938 0.293788C12.3867 0.200661 12.497 0.126776 12.6185 0.0763626C12.74 0.0259497 12.8703 0 13.0018 0C13.1333 0 13.2636 0.0259497 13.3851 0.0763626C13.5065 0.126776 13.6169 0.200661 13.7098 0.293788Z" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2.5 transition-all duration-300 cursor-pointer"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="white" viewBox="0 0 14 26">
            <path d="M0.293787 0.293788C0.386678 0.200661 0.49703 0.126776 0.61852 0.0763626C0.74001 0.0259497 0.870253 0 1.00179 0C1.13332 0 1.26356 0.0259497 1.38505 0.0763626C1.50654 0.126776 1.6169 0.200661 1.70979 0.293788L13.7098 12.2938C13.8029 12.3867 13.8768 12.497 13.9272 12.6185C13.9776 12.74 14.0036 12.8703 14.0036 13.0018C14.0036 13.1333 13.9776 13.2636 13.9272 13.3851C13.8768 13.5065 13.8029 13.6169 13.7098 13.7098L1.70979 25.7098C1.52201 25.8976 1.26734 26.003 1.00179 26.003C0.736236 26.003 0.48156 25.8976 0.293787 25.7098C0.106014 25.522 0.000523567 25.2673 0.000523567 25.0018C0.000523567 24.7362 0.106014 24.4816 0.293787 24.2938L11.5878 13.0018L0.293787 1.70979C0.200661 1.6169 0.126775 1.50655 0.0763617 1.38506C0.0259488 1.26356 0 1.13332 0 0.870253C0 0.740011 0.0259488 0.61852 0.0763617 0.49703C0.126775 0.386679 0.200661 0.293788 0.293787 0.293788Z" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="p-1 cursor-pointer"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-[#869791]" : "bg-[#d6d6d6]"
                  }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* ── Important Notice Carousel ──────────────────────────────────────────
          Kept structurally the same; py tightened slightly.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {notices.map((notice, index) => (
          <motion.div
            key={notice.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: index === noticeIndex ? 1 : 0,
              x:
                index === noticeIndex
                  ? 0
                  : index < noticeIndex
                    ? -100
                    : 100,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`${index === noticeIndex ? "relative" : "absolute inset-0"
              } bg-gradient-to-r ${notice.bgGradient} py-2.5 md:py-3`}
            style={{
              zIndex: index === noticeIndex ? 1 : 0,
              pointerEvents: index === noticeIndex ? "auto" : "none",
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-white text-sm font-medium">
                      <span className="font-bold">{notice.title}</span>{" "}
                      {notice.message}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <motion.button
                    onClick={() => navigate(notice.primaryButton.link)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-900 px-3 md:px-5 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md cursor-pointer"
                  >
                    {notice.primaryButton.text}
                  </motion.button>
                  <motion.button
                    onClick={() => navigate(notice.secondaryButton.link)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm border border-white text-white px-3 md:px-5 py-1.5 rounded-lg text-sm font-semibold hover:bg-white/30 transition-all duration-300 shadow-md cursor-pointer"
                  >
                    {notice.secondaryButton.text}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <button
          onClick={() =>
            setNoticeIndex((prev) => (prev - 1 + notices.length) % notices.length)
          }
          className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full transition-all cursor-pointer"
          aria-label="Previous notice"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={() => setNoticeIndex((prev) => (prev + 1) % notices.length)}
          className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full transition-all cursor-pointer"
          aria-label="Next notice"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 z-10 flex gap-1">
          {notices.map((_, index) => (
            <button
              key={index}
              onClick={() => setNoticeIndex(index)}
              className="p-0.5 cursor-pointer"
              aria-label={`Go to notice ${index + 1}`}
            >
              <div
                className={`w-1 h-1 rounded-full transition-all duration-300 ${index === noticeIndex ? "bg-white w-3" : "bg-white/50"
                  }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* ── Quick Links Bar ───────────────────────────────────────────────────
          h-12 md:h-14 → h-10 md:h-12; text slightly smaller on md.
      ──────────────────────────────────────────────────────────────────────── */}
      <motion.section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #0C4D8B 14%, #126DC4 31%, #0C4D8B 53%)",
        }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-stretch h-10 md:h-12 overflow-x-auto scrollbar-hide">
          {/* Quick Links Label */}
          <motion.div
            className="bg-[#DDAE68] flex items-center justify-center flex-shrink-0"
            style={{ minWidth: "100px", paddingLeft: "12px", paddingRight: "12px" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center text-black text-[12px] md:text-[15px] font-normal leading-tight whitespace-nowrap">
              Quick Links
            </div>
          </motion.div>

          {[
            { label: "About Us", link: "/about", delay: 0.7 },
            { label: "Programs", link: "/programs", delay: 0.8 },
            { label: "Admissions", link: "/apply", delay: 0.4 },
            { label: "Notices", link: "/notices", delay: 0.5 },
            { label: "Vision & Mission", link: "/mission-values", delay: 0.5 },
            { label: "Principal", link: "/about/principal-message", delay: 0.5 },
            { label: "Scholarships", link: "/scholarships", delay: 0.5 },
            { label: "Contact Us", link: "/contact", delay: 0.6 },
          ].map((item) => (
            <motion.button
              key={item.label}
              onClick={() => navigate(item.link)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="relative hover:cursor-pointer flex-shrink-0 flex items-center justify-center px-3 md:px-5 transition-colors"
            >
              <span className="text-center text-white text-xs md:text-base font-normal whitespace-nowrap">
                {item.label}
              </span>
              <div
                className="absolute w-px h-7 right-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0) 0%, white 50%, rgba(255,255,255,0) 100%)",
                }}
              />
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* ── Find Your Degree ──────────────────────────────────────────────────
          py-12 md:py-20 → py-8 md:py-14; headings one step smaller.
      ──────────────────────────────────────────────────────────────────────── */}
      <section
        className="py-8 md:py-14 relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1766339162142-699904b3cf82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ0bGUlMjB3aGl0ZSUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MjM4NDE4MHww&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 to-white/90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-5">
                <span className="text-[#886E53]">Find your </span>
                <span className="text-[#0C4D8B]">Course</span>
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5 max-w-md">
                Jharkhand Commerce Inter College offers rigorous programs, valuable
                resources, and countless opportunities that will enable you to
                pursue your desired course of study.
              </p>
              <motion.button
                onClick={() => navigate("/programs")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-sm"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Right – degree cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3 md:gap-5"
            >
              {[
                { title: "Intermediate in Commerce (I.Com)", link: "/programs/icom" },
                { title: "Intermediate in Science (I.Sc)", link: "/programs/isc" },
                { title: "Intermediate in Arts (I.A)", link: "/programs/ia" },
              ].map((degree, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => navigate(degree.link)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative bg-white rounded-lg p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-[#0C4D8B] font-semibold text-xs md:text-sm text-center uppercase tracking-wide">
                    {degree.title}
                  </h3>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0099D0] to-[#FFD288]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ProgramsSection />

      {/* ── Campus Life ───────────────────────────────────────────────────────
          py-12 md:py-20 → py-8 md:py-14; heading one step down; icon grid compact.
      ──────────────────────────────────────────────────────────────────────── */}
      <section
        className="py-8 md:py-14 relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(12, 77, 139, 0.95) 0%, rgba(37, 99, 235, 0.9) 50%, rgba(136, 110, 83, 0.85) 100%), url(https://images.unsplash.com/photo-1769699369445-263a7a365df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzIzNzk5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundBlendMode: "multiply",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-amber-600/20"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl lg:text-4xl mb-3">
              <span className="text-amber-200">Campus </span>
              <span className="text-white">Life</span>
            </h2>
            <p className="text-blue-100 text-sm max-w-xl mx-auto">
              Explore the vibrant campus life at Jharkhand Commerce Inter College
              with various facilities and services
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
            {[
              { name: "Programs", icon: Briefcase, link: "/programs" },
              { name: "Admissions", icon: GraduationCap, link: "/apply" },
              { name: "Administration", icon: Heart, link: "/about/administration" },
              { name: "Contact Us", icon: ClipboardCheck, link: "/contact" },
              { name: "Notices", icon: Users, link: "/notices" },
              { name: "Scholarships", icon: Building2, link: "/scholarships" },
              { name: "Faculties", icon: Building2, link: "/all-faculty" },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.08, y: -6 }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    onClick={() => navigate(item.link)}
                    className="relative aspect-square bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/60 hover:border-amber-300"
                    whileHover={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(251,191,36,0.2) 100%)",
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-3 gap-1.5">
                      <motion.div
                        onClick={() => navigate(item.link)}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent
                          className="w-6 h-6 text-[#0C4D8B] group-hover:text-white transition-colors"
                          strokeWidth={2}
                        />
                      </motion.div>
                      <p className="text-center text-[10px] font-medium text-[#0C4D8B] group-hover:text-white transition-colors leading-tight">
                        {item.name}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Campus Events ─────────────────────────────────────────────────────
          py-12 md:py-20 → py-8 md:py-14; card images h-44 md:h-40; card h reduced.
      ──────────────────────────────────────────────────────────────────────── */}
      <section
        className="py-8 md:py-14 relative overflow-hidden"
        style={{
          backgroundImage: `url(${imgSectionEventsCampusW})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/70" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-4xl">
              <span className="text-[#886E53]">Campus </span>
              <span className="text-[#0C4D8B]">Events</span>
            </h2>
          </motion.div>

          {(() => {
            const events = [
              {
                title: "Annual Tech Symposium 2026",
                date: "15 Mar - 16 Mar",
                time: "09:00 AM - 05:00 PM",
                location: "Main Auditorium",
                dateLabel: "Mar 15 2026",
                image:
                  "https://images.unsplash.com/photo-1762497403897-c105a5bc61e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc2VtaW5hciUyMGNvbmZlcmVuY2UlMjBoYWxsfGVufDF8fHx8MTc3MjM4MDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "Career Development Workshop",
                date: "20 Mar",
                time: "10:00 AM - 04:00 PM",
                location: "Seminar Hall",
                dateLabel: "Mar 20 2026",
                image:
                  "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwd29ya3Nob3AlMjBzdHVkZW50c3xlbnwxfHx8fDE3NzIzODA0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "Guest Lecture on Innovation",
                date: "25 Mar",
                time: "02:00 PM - 04:00 PM",
                location: "Conference Room",
                dateLabel: "Mar 25 2026",
                image:
                  "https://images.unsplash.com/photo-1759922378100-89dca9fe3c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGV2ZW50JTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3MjM4MDQ2MXww&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "Cultural Fest 2026",
                date: "28 Mar - 30 Mar",
                time: "All Day",
                location: "College Campus",
                dateLabel: "Mar 28 2026",
                image:
                  "https://images.unsplash.com/photo-1762497403897-c105a5bc61e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc2VtaW5hciUyMGNvbmZlcmVuY2UlMjBoYWxsfGVufDF8fHx8MTc3MjM4MDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ];

            const EventCard = ({ event }: { event: (typeof events)[0] }) => (
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#C07E02]/20 hover:border-[#C07E02] h-[340px] md:h-[370px]">
                <div className="relative h-36 md:h-40 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0C4D8B] text-white px-2.5 py-1 rounded-lg shadow-lg">
                    <p className="text-xs font-light">{event.dateLabel}</p>
                  </div>
                </div>
                <div className="p-4 space-y-2.5">
                  <h3 className="text-sm md:text-base font-normal text-black leading-relaxed min-h-[40px]">
                    {event.title}
                  </h3>
                  <div className="space-y-1.5">
                    {[
                      { icon: "calendar", text: event.date },
                      { icon: "clock", text: event.time },
                      { icon: "pin", text: event.location },
                    ].map(({ icon, text }) => (
                      <div key={icon} className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-[#0C4D8B] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          {icon === "calendar" && (
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          )}
                          {icon === "clock" && (
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          )}
                          {icon === "pin" && (
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          )}
                        </svg>
                        <p className="text-xs text-gray-700">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );

            return (
              <div className="relative">
                {/* Mobile */}
                <div className="md:hidden">
                  <motion.div
                    key={eventsCarouselIndex}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <EventCard event={events[eventsCarouselIndex]} />
                  </motion.div>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <button onClick={() => setEventsCarouselIndex((i) => Math.max(0, i - 1))} disabled={eventsCarouselIndex === 0} className="w-8 h-8 rounded-full bg-[#0C4D8B] disabled:bg-gray-300 text-white flex items-center justify-center shadow cursor-pointer">‹</button>
                    <div className="flex gap-1.5">{events.map((_, i) => (<button key={i} onClick={() => setEventsCarouselIndex(i)} className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === eventsCarouselIndex ? "bg-[#0C4D8B] w-5" : "bg-gray-300"}`} />))}</div>
                    <button onClick={() => setEventsCarouselIndex((i) => Math.min(events.length - 1, i + 1))} disabled={eventsCarouselIndex === events.length - 1} className="w-8 h-8 rounded-full bg-[#0C4D8B] disabled:bg-gray-300 text-white flex items-center justify-center shadow cursor-pointer">›</button>
                  </div>
                </div>
                {/* Desktop */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {events.map((event, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ y: -6 }}
                    >
                      <EventCard event={event} />
                    </motion.div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <motion.button
                    onClick={() => navigate("/events")}
                    className="inline-flex items-center gap-2 bg-white text-[#0C4D8B] px-5 py-2.5 rounded-lg font-medium border-2 border-[#0C4D8B] hover:bg-[#0C4D8B] hover:text-white transition-all duration-300 shadow-md cursor-pointer text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Events
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      <ProfessorsSection />

      {/* ── Stats ─────────────────────────────────────────────────────────────
          py-12 md:py-20 → py-8 md:py-14; stat numbers one step down.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="py-8 md:py-14 bg-gradient-to-br from-[#0C4D8B] to-[#2563EB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-3">
              <span className="text-[#FFD700]">Excellence </span>
              <span>in Numbers</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6">
            {[
              { value: "1000+", label: "Students" },
              { value: "5+", label: "Academic Departments" },
              { value: "20+", label: "Faculty Members" },
              { value: "500+", label: "Library Books" },
              { value: "1000+", label: "Alumni" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-light text-white mb-1">{stat.value}</div>
                <div className="text-white/90 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── College Achievements ──────────────────────────────────────────────
          py-12 md:py-20 → py-8 md:py-14; cards compact.
      ──────────────────────────────────────────────────────────────────────── */}
      <section
        className="py-8 md:py-14 relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1762174092777-a73b122249cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGlnaHQlMjBibHVlJTIwcGF0dGVybiUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzg0MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-50/90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-4xl">
              <span className="text-[#886E53]">College </span>
              <span className="text-[#0C4D8B]">Achievements</span>
            </h2>
          </motion.div>

          {(() => {
            const achievements = [
              {
                title: "Excellent Academic Performance",
                description:
                  "Students consistently achieve high results in the Intermediate examinations conducted by the Jharkhand Academic Council, reflecting strong academic guidance and dedication.",
              },
              {
                title: "High Pass Percentage",
                description:
                  "The Commerce stream in Jharkhand regularly records strong success rates, with around 91% pass percentage in Class 12 Commerce examinations.",
              },
              {
                title: "Career-Oriented Commerce Education",
                description:
                  "The college provides strong preparation in Accountancy, Business Studies, and Economics, helping students build careers in finance, business, and entrepreneurship.",
              },
            ];
            const AchievCard = ({ item }: { item: (typeof achievements)[0] }) => (
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg h-full">
                <h3 className="text-base md:text-lg font-semibold text-[#0C4D8B] mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            );
            return (
              <>
                <div className="md:hidden">
                  <motion.div key={achievCardIndex} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <AchievCard item={achievements[achievCardIndex]} />
                  </motion.div>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <button onClick={() => setAchievCardIndex((i) => Math.max(0, i - 1))} disabled={achievCardIndex === 0} className="w-8 h-8 rounded-full bg-[#0C4D8B] disabled:bg-gray-300 text-white flex items-center justify-center shadow">‹</button>
                    <div className="flex gap-1.5">{achievements.map((_, i) => (<button key={i} onClick={() => setAchievCardIndex(i)} className={`h-2 rounded-full transition-all ${i === achievCardIndex ? "bg-[#0C4D8B] w-5" : "bg-gray-300 w-2"}`} />))}</div>
                    <button onClick={() => setAchievCardIndex((i) => Math.min(achievements.length - 1, i + 1))} disabled={achievCardIndex === achievements.length - 1} className="w-8 h-8 rounded-full bg-[#0C4D8B] disabled:bg-gray-300 text-white flex items-center justify-center shadow">›</button>
                  </div>
                </div>
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                  {achievements.map((achievement, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }} whileHover={{ scale: 1.05, y: -8 }}>
                      <AchievCard item={achievement} />
                    </motion.div>
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* ── University Achievements (tabbed) ─────────────────────────────────
          py-12 md:py-20 → py-8 md:py-14; achievement card image smaller.
      ──────────────────────────────────────────────────────────────────────── */}
      <UniversityAchievements />

      {/* ── Recognitions & Accreditations ────────────────────────────────────
          py-12 md:py-20 → py-8 md:py-14; card images shorter.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="py-8 md:py-14 bg-gradient-to-b from-white to-[#F9F3E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-4xl">
              <span className="text-[#886E53]">Recognitions </span>
              <span className="text-[#0C4D8B]">Accreditations</span>
            </h2>
          </motion.div>

          {(() => {
            const accreditations = [
              { title: "QS World University Rankings", image: "https://images.unsplash.com/photo-1587567867628-9df136e92128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcmFua2luZyUyMGF3YXJkJTIwYmFkZ2V8ZW58MXx8fHwxNzcyMzgxMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
              { title: "QS World Sustainability Rankings", image: "https://images.unsplash.com/photo-1594080051162-74b97d619668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGdyZWVuJTIwY2VydGlmaWNhdGlvbnxlbnwxfHx8fDE3NzIzODEzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
              { title: "THE Subject Rankings 2026", image: "https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NyZWRpdGF0aW9uJTIwY2VydGlmaWNhdGUlMjBzZWFsfGVufDF8fHx8MTc3MjM4MTMzNXww&ixlib=rb-4.1.0&q=80&w=1080" },
              { title: "World University Rankings Asia 2026", image: "https://images.unsplash.com/photo-1628927013432-99ae87d89cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBhd2FyZCUyMHRyb3BoeSUyMGVtYmxlbXxlbnwxfHx8fDE3NzIzODEzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
              { title: "The World University Ranking for Innovation 2025", image: "https://images.unsplash.com/photo-1764872140075-525326e20e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwZXhjZWxsZW5jZSUyMGJhZGdlfGVufDF8fHx8MTc3MjM4MTMzNnww&ixlib=rb-4.1.0&q=80&w=1080" },
            ];
            const AccrCard = ({ item }: { item: (typeof accreditations)[0] }) => (
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-3 cursor-pointer group">
                <div className="mb-2 overflow-hidden rounded-md">
                  <img src={item.image} alt={item.title} className="w-full h-20 md:h-24 object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-black font-light text-xs leading-relaxed text-center">{item.title}</p>
              </div>
            );
            return (
              <div className="max-w-5xl mx-auto">
                <div className="md:hidden">
                  <motion.div key={accrCarouselIndex} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <div className="grid grid-cols-2 gap-3">{[accreditations[accrCarouselIndex * 2], accreditations[accrCarouselIndex * 2 + 1]].filter(Boolean).map((item, i) => (<AccrCard key={i} item={item} />))}</div>
                  </motion.div>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <button onClick={() => setAccrCarouselIndex((i) => Math.max(0, i - 1))} disabled={accrCarouselIndex === 0} className="w-8 h-8 rounded-full bg-[#0C4D8B] disabled:bg-gray-300 text-white flex items-center justify-center shadow">‹</button>
                    <div className="flex gap-1.5">{Array.from({ length: Math.ceil(accreditations.length / 2) }).map((_, i) => (<button key={i} onClick={() => setAccrCarouselIndex(i)} className={`h-2 rounded-full transition-all ${i === accrCarouselIndex ? "bg-[#0C4D8B] w-5" : "bg-gray-300 w-2"}`} />))}</div>
                    <button onClick={() => setAccrCarouselIndex((i) => Math.min(Math.ceil(accreditations.length / 2) - 1, i + 1))} disabled={accrCarouselIndex === Math.ceil(accreditations.length / 2) - 1} className="w-8 h-8 rounded-full bg-[#0C4D8B] disabled:bg-gray-300 text-white flex items-center justify-center shadow">›</button>
                  </div>
                </div>
                <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-5 mb-6">
                  {accreditations.map((accreditation, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                      <AccrCard item={accreditation} />
                    </motion.div>
                  ))}
                </div>
                <div className="hidden md:flex justify-center gap-3 mt-2">
                  {[0, 1, 2].map((_, idx) => (<div key={idx} className={`w-2.5 h-2.5 rounded-full ${idx === 2 ? "bg-[#869791]" : "bg-gray-300"}`} />))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── Alumni ────────────────────────────────────────────────────────────
          py-12 md:py-20 → py-8 md:py-14; alumni card images narrower.
      ──────────────────────────────────────────────────────────────────────── */}
      <section
        className="py-8 md:py-14 relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1766339162142-699904b3cf82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ0bGUlMjB3aGl0ZSUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MjM4NDE4MHww&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 to-white/90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-4xl">
              <span className="text-[#886E53]">Our Proud </span>
              <span className="text-[#0C4D8B]">Alumni</span>
            </h2>
          </motion.div>

          {(() => {
            const alumniList = [
              { name: "SNAJAY KUMAR MAHTO", position: "Personal Assistant (PA)", organization: "Personal Assistant to the Jairam Mahto (MLA), Dumri, Jharkhand", degree: "Intermediate in Commerce", year: "2004", image: "https://images.unsplash.com/photo-1770364019741-3518f4f05513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwbGVhZGVyfGVufDF8fHx8MTc3MjI3OTc5MXww&ixlib=rb-4.1.0&q=80&w=1080" },
              { name: "MADONNA SEBASTIAN", position: "Indian Actress", organization: "Tamil/Malayalam", degree: "Bachelor of Commerce Tourism", year: "2013", image: "https://images.unsplash.com/photo-1669829528850-959d7b08278b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhY3RyZXNzJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyMzgxMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080" },
              { name: "RAJESH KUMAR", position: "Senior Software Engineer", organization: "Tech Giants Inc.", degree: "Bachelor of Computer Applications", year: "2015", image: "https://images.unsplash.com/photo-1770922808954-fb01766b1571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwcHJvZmVzc2lvbmFsJTIwZ3JhZHVhdGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIzODEyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080" },
              { name: "PRIYA SHARMA", position: "Entrepreneur & CEO", organization: "Innovation Labs", degree: "Master of Business Administration", year: "2010", image: "https://images.unsplash.com/photo-1562935345-5080389daccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NzIzODEyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080" },
            ];
            const AlumniCard = ({ alumni }: { alumni: (typeof alumniList)[0] }) => (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex h-[160px] md:h-[200px]">
                <div className="w-[110px] md:w-[150px] flex-shrink-0 overflow-hidden">
                  <img src={alumni.image} alt={alumni.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-3 md:p-5 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50/30">
                  <h3 className="text-[#0C4D8B] font-semibold text-xs md:text-base mb-1 md:mb-2">{alumni.name}</h3>
                  <div className="space-y-0.5">
                    <p className="text-[#0C4D8B] font-normal text-xs">{alumni.position}</p>
                    <p className="text-[#0C4D8B] font-light text-xs">{alumni.organization}</p>
                    <p className="text-[#0C4D8B] font-light text-xs">{alumni.degree} ({alumni.year})</p>
                  </div>
                </div>
              </div>
            );
            return (
              <>
                <div className="md:hidden">
                  <motion.div key={alumniIndex} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <AlumniCard alumni={alumniList[alumniIndex]} />
                  </motion.div>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <button onClick={() => setAlumniIndex((i) => Math.max(0, i - 1))} disabled={alumniIndex === 0} className="w-8 h-8 rounded-full bg-[#D98600] disabled:bg-gray-300 text-white flex items-center justify-center shadow">‹</button>
                    <div className="flex gap-1.5">{alumniList.map((_, i) => (<button key={i} onClick={() => setAlumniIndex(i)} className={`h-2 rounded-full transition-all ${i === alumniIndex ? "bg-[#D98600] w-5" : "bg-gray-300 w-2"}`} />))}</div>
                    <button onClick={() => setAlumniIndex((i) => Math.min(alumniList.length - 1, i + 1))} disabled={alumniIndex === alumniList.length - 1} className="w-8 h-8 rounded-full bg-[#D98600] disabled:bg-gray-300 text-white flex items-center justify-center shadow">›</button>
                  </div>
                </div>
                <div className="hidden md:block relative max-w-5xl mx-auto">
                  <div className="grid grid-cols-2 gap-5">
                    {alumniList.map((alumni, idx) => (
                      <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} whileHover={{ y: -8, scale: 1.02 }}>
                        <AlumniCard alumni={alumni} />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-6">
                  <motion.button onClick={() => navigate("/about/alumni")} className="inline-flex items-center gap-2 bg-white text-[#0C4D8B] px-5 py-2.5 rounded-lg font-medium border-2 border-[#0C4D8B] hover:bg-[#0C4D8B] hover:text-white transition-all duration-300 shadow-md cursor-pointer text-sm" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    View All Alumni
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </motion.button>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* ── Panoramic Galleria ────────────────────────────────────────────────
          py-12 md:py-16 → py-8 md:py-12; grid images naturally shorter via aspect ratio.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-4xl">
              <span className="text-[#886E53]">Panoramic </span>
              <span className="text-[#0C4D8B]">Galleria</span>
            </h2>
          </motion.div>

          {(() => {
            const galleryImages = [
              { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80", alt: "Classroom Learning" },
              { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80", alt: "Students Celebrating" },
              { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80", alt: "Campus Building" },
              { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", alt: "Students Studying" },
              { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80", alt: "Sports Activities" },
              { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80", alt: "Campus Event" },
            ];
            return (
              <>
                <div className="md:hidden">
                  <motion.div key={galleryCarouselIndex} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} onClick={() => navigate("/gallery")} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-md">
                      <img src={galleryImages[galleryCarouselIndex].src} alt={galleryImages[galleryCarouselIndex].alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </motion.div>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <button onClick={() => setGalleryCarouselIndex((i) => Math.max(0, i - 1))} disabled={galleryCarouselIndex === 0} className="w-8 h-8 rounded-full bg-[#2563EB] disabled:bg-gray-300 text-white flex items-center justify-center shadow">‹</button>
                    <div className="flex gap-1">{galleryImages.map((_, i) => (<button key={i} onClick={() => setGalleryCarouselIndex(i)} className={`h-2 rounded-full transition-all ${i === galleryCarouselIndex ? "bg-[#2563EB] w-5" : "bg-gray-300 w-2"}`} />))}</div>
                    <button onClick={() => setGalleryCarouselIndex((i) => Math.min(galleryImages.length - 1, i + 1))} disabled={galleryCarouselIndex === galleryImages.length - 1} className="w-8 h-8 rounded-full bg-[#2563EB] disabled:bg-gray-300 text-white flex items-center justify-center shadow">›</button>
                  </div>
                </div>
                <div className="hidden md:grid md:grid-cols-3 gap-3 max-w-5xl mx-auto">
                  {galleryImages.map((img, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="group cursor-pointer" onClick={() => navigate("/gallery")}>
                      <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-2xl transition-all duration-300">
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            );
          })()}

          <div className="text-center mt-6 md:mt-8">
            <motion.button
              onClick={() => navigate("/gallery")}
              className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#1e40af] hover:shadow-lg transition-all duration-300 cursor-pointer text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Photos
            </motion.button>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────
          py-12 md:py-20 → py-8 md:py-14; heading and body text one step down.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="py-8 md:py-14 bg-gradient-to-r from-[#0C4D8B] via-[#2563EB] to-[#0C4D8B] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, white 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, white 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, white 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, type: "spring" }}>
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-3 md:mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready to Begin Your Journey?
            </motion.h2>
            <motion.p
              className="text-base text-white/90 mb-6 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join Jharkhand Commerce Inter College and be part of a legacy of
              excellence, innovation, and success.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                onClick={() => navigate("/apply")}
                className="bg-white text-[#2563EB] px-7 py-3 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl cursor-pointer"
                whileHover={{ scale: 1.1, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
              <motion.button
                onClick={() => navigate("/contact")}
                className="bg-transparent border-2 border-white text-white px-7 py-3 rounded-lg text-base font-semibold hover:bg-white hover:text-[#2563EB] transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}