import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { motion } from 'motion/react';
import { ChevronRight, Users, Clock, TrendingUp, Globe, BookOpen, FileText, DollarSign, CheckCircle, Award, GraduationCap, Languages } from 'lucide-react';
import svgPaths from '../../imports/svg-j1f7gisd3r';
import coreCurriculumSvg from '../../imports/svg-s1xh9q0nst';

interface ProgramHighlight {
    icon: 'faculty' | 'duration' | 'ratio' | 'language' | 'exchange' | 'lab';
    label: string;
    value: string;
}

interface ProgramData {
    id: string;
    title: string;
    shortTitle: string;
    level: string;
    department: string;
    tagline: string;
    bannerImage: string;
    sideImage: string;
    highlights: ProgramHighlight[];
    overview: {
        intro: string;
        programName: string;
        programDescription: string;
        details: { label: string; value: string; }[];
    };
    curriculum: {
        intro: string;
        subjects: string[];
        structure: string[];
        coreModules: string[];
    };
    professors: {
        intro: string;
        list: { name: string; designation: string; experience: string; }[];
    };
    costAndAid: {
        tuitionFee: string;
        otherFees: string;
        totalEstimate: string;
        scholarships: string[];
    };
    admissions: {
        eligibility: string;
        process: string[];
        documents: string[];
    };
}

interface IntermediateProgramPageProps {
    program: ProgramData;
}

export function IntermediateProgramPage({ program }: IntermediateProgramPageProps) {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'professors' | 'cost' | 'admissions'>('overview');

    const getIconComponent = (iconType: string) => {
        switch (iconType) {
            case 'faculty':
                return (
                    <div className="overflow-clip relative shrink-0 size-[46px]">
                        <div className="absolute inset-[6.67%_12.13%_34.99%_26.67%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.152 26.8372">
                                <path d={svgPaths.p3279aa00} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                        <div className="absolute inset-[14.94%_0_56.71%_58.97%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.8733 13.0399">
                                <path d={svgPaths.p171b3ba0} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                        <div className="absolute inset-[20.01%_32.48%_19.99%_0]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0577 27.6">
                                <path d={svgPaths.p393ddd80} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                        <div className="absolute inset-[28.34%_72.25%_59.99%_6.72%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.67435 5.3667">
                                <path d={svgPaths.p20d16900} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                        <div className="absolute inset-[51.68%_63.36%_44.99%_10.02%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2444 1.53333">
                                <path d={svgPaths.p36b05680} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                        <div className="absolute inset-[58.34%_63.33%_38.32%_18.33%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.43333 1.53333">
                                <path d={svgPaths.pca80600} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                        <div className="absolute inset-[53.34%_3.38%_8.31%_66.71%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7578 17.6391">
                                <path d={svgPaths.pc17f900} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                        <div className="absolute inset-[60.01%_10%_23.39%_73.33%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.66667 7.63787">
                                <path d={svgPaths.p2e5c900} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                        <div className="absolute inset-[70.01%_80%_26.66%_8.36%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.35568 1.53333">
                                <path d={svgPaths.p2df3b300} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                        <div className="absolute inset-[70.01%_65%_26.66%_23.36%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.35567 1.53333">
                                <path d={svgPaths.pf39ea00} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                        <div className="absolute bottom-[26.66%] left-[38.36%] right-1/2 top-[70.01%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.35567 1.53333">
                                <path d={svgPaths.pf39ea00} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                    </div>
                );
            case 'duration':
                return (
                    <div className="overflow-clip relative shrink-0 size-[46px]">
                        <div className="absolute inset-[-0.01%_0_0_-0.01%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.0036 46.0026">
                                <path d={svgPaths.p31a000} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                        <div className="absolute inset-[12.5%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.5 34.5">
                                <path d={svgPaths.p391ba100} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                    </div>
                );
            case 'ratio':
            case 'lab':
                return (
                    <div className="overflow-clip relative shrink-0 size-[46px]">
                        <div className="absolute inset-[20.83%_0_22.1%_0]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 26.251">
                                <path d={svgPaths.p2cd2c400} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                    </div>
                );
            case 'language':
            case 'exchange':
                return (
                    <div className="overflow-clip relative shrink-0 size-[46px]">
                        <div className="absolute inset-[6.82%_0_7.76%_0]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 39.294">
                                <path d={svgPaths.p3f51e8f0} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                        <div className="absolute inset-[43.18%_18.18%_27.27%_54.55%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5455 13.5909">
                                <path d={svgPaths.p11f92780} fill="var(--fill-0, #030303)" />
                            </svg>
                        </div>
                    </div>
                );
            default:
                return <Users className="w-6 h-6" />;
        }
    };

    return (
        <div className="min-h-screen bg-[#f6f4ee]">
            {/* Navigation */}
            <CarouselHeader />

            {/* Hero Banner Section */}
            <section className="relative w-full">
                <div className="relative w-full bg-[#f6f4ee] min-h-[400px]">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[#0c5776]" />
                        <div className="absolute inset-0 overflow-hidden opacity-30">
                            <img
                                alt=""
                                className="w-full h-full object-cover"
                                src={program.bannerImage}
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,25,44,0)] to-[#00192c]" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            <button
                                onClick={() => navigate('/')}
                                className="text-white hover:underline text-sm lg:text-base"
                            >
                                Home
                            </button>
                            <ChevronRight className="w-4 h-4 text-white" />
                            <button
                                onClick={() => navigate('/programs')}
                                className="text-white hover:underline text-sm lg:text-base"
                            >
                                Programs
                            </button>
                            <ChevronRight className="w-4 h-4 text-white" />
                            <span className="text-white text-sm lg:text-base">{program.level}</span>
                            <ChevronRight className="w-4 h-4 text-white" />
                            <span className="text-white text-sm lg:text-base">{program.title}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 max-w-4xl">
                            {program.title}
                        </h1>

                        {/* Divider */}
                        <div className="relative w-full max-w-md h-[2px] bg-white/15 mb-6">
                            <div className="absolute left-0 top-0 w-32 lg:w-[145px] h-[2px] bg-white" />
                        </div>

                        {/* Tagline */}
                        <p className="text-white/90 text-sm lg:text-base max-w-xl leading-relaxed">
                            {program.tagline}
                        </p>
                    </div>
                </div>
            </section>

            {/* Tabs Navigation */}
            <section className="bg-[#f6f4ee] flex justify-center mt-30 sticky z-40">
                <div className="overflow-x-auto ">
                    <div className="flex min-w-max">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`px-10 lg:px-14 py-5 text-sm lg:text-base font-semibold whitespace-nowrap transition-all duration-300 border-b-[0.8px] border-l-[0.8px] border-t-[0.8px] ${activeTab === 'overview'
                                    ? 'bg-[#0c5776] text-white border-[#0c5776]'
                                    : 'bg-white text-gray-900 border-gray-200 hover:bg-[#0c5776] hover:text-white hover:border-[#0c5776]'
                                }`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('curriculum')}
                            className={`px-10 lg:px-14 py-5 text-sm lg:text-base font-semibold whitespace-nowrap transition-all duration-300 border-b-[0.8px] border-l-[0.8px] border-t-[0.8px] ${activeTab === 'curriculum'
                                    ? 'bg-[#0c5776] text-white border-[#0c5776]'
                                    : 'bg-white text-gray-900 border-gray-200 hover:bg-[#0c5776] hover:text-white hover:border-[#0c5776]'
                                }`}
                        >
                            Curriculum
                        </button>
                        <button
                            onClick={() => setActiveTab('professors')}
                            className={`px-10 lg:px-14 py-5 text-sm lg:text-base font-semibold whitespace-nowrap transition-all duration-300 border-b-[0.8px] border-l-[0.8px] border-t-[0.8px] ${activeTab === 'professors'
                                    ? 'bg-[#0c5776] text-white border-[#0c5776]'
                                    : 'bg-white text-gray-900 border-gray-200 hover:bg-[#0c5776] hover:text-white hover:border-[#0c5776]'
                                }`}
                        >
                            Program Professors
                        </button>
                        <button
                            onClick={() => setActiveTab('cost')}
                            className={`px-10 lg:px-14 py-5 text-sm lg:text-base font-semibold whitespace-nowrap transition-all duration-300 border-b-[0.8px] border-l-[0.8px] border-t-[0.8px] ${activeTab === 'cost'
                                    ? 'bg-[#0c5776] text-white border-[#0c5776]'
                                    : 'bg-white text-gray-900 border-gray-200 hover:bg-[#0c5776] hover:text-white hover:border-[#0c5776]'
                                }`}
                        >
                            Cost & Financial Aid
                        </button>
                        <button
                            onClick={() => setActiveTab('admissions')}
                            className={`px-10 lg:px-14 py-5 text-sm lg:text-base font-semibold whitespace-nowrap transition-all duration-300 border ${activeTab === 'admissions'
                                    ? 'bg-[#0c5776] text-white border-[#0c5776]'
                                    : 'bg-white text-gray-900 border-gray-200 hover:bg-[#0c5776] hover:text-white hover:border-[#0c5776]'
                                }`}
                        >
                            Admissions
                        </button>
                    </div>
                </div>
            </section>

            {/* Tab Content */}
            <section className="py-12 lg:py-16 bg-[#f6f4ee]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Overview Description */}
                            <div className="max-w-5xl mb-12 flex justify-center">
                                <p className="text-[#4C4C4C] text-base font-normal font-['Inter'] leading-7">
                                    {program.overview.intro}
                                </p>
                            </div>

                            {/* Program Highlights */}
                            <div className="mb-12">
                                <h2 className="text-[#030303] text-4xl  font-['Bitter'] leading-10 mb-8">Program Highlight</h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {program.highlights.map((highlight, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-xl p-7 shadow-sm hover:shadow-xl hover:bg-[#0c5776] transition-all duration-300 group cursor-pointer"
                                        >
                                            <div className="flex items-start gap-4">
                                                {/* Icon */}
                                                <div className="bg-[#e4e4e4] group-hover:bg-white rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                                    {getIconComponent(highlight.icon)}
                                                </div>

                                                {/* Text */}
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-[#030303] group-hover:text-white text-2xl font-thin font-['Bitter'] leading-8 mb-1.5 transition-colors duration-300">
                                                        {highlight.label}
                                                    </h4>
                                                    <p className="text-[#030303] group-hover:text-white text-base font-normal font-['Inter'] leading-7 transition-colors duration-300">
                                                        {highlight.value}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* About Programs Section */}
                            <div className="mb-12">
                                <h2 className="text-[#030303] text-4xl  font-['Bitter'] leading-10 mb-4">About Programs</h2>
                                <p className="text-[#4C4C4C] text-base font-normal font-['Inter'] leading-7 mb-8 max-w-5xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Left Content */}
                                    <div className="flex-1">
                                        <h3 className="text-[#030303] text-2xl  font-['Bitter'] leading-8 mb-5">
                                            {program.overview.programName}
                                        </h3>

                                        <h4 className="text-[#030303] text-xl  font-['Bitter'] leading-8 mb-2.5">
                                            Session: 2025 - 2026
                                        </h4>

                                        <h4 className="text-[#030303] text-xl  font-['Bitter'] leading-8 mb-4">
                                            Typical Program Structure
                                        </h4>

                                        <p className="text-[#4C4C4C] text-base font-normal font-['Inter'] leading-7 mb-6">
                                            {program.overview.programDescription}
                                        </p>

                                        <div className="space-y-2 mb-8">
                                            {program.overview.details.map((detail, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <span className="text-[#030303] text-base font-medium font-['Inter'] leading-7">• {detail.label}:</span>
                                                    <span className="text-[#4C4C4C] text-base font-normal font-['Inter'] leading-7">{detail.value}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Core Curriculum Topics */}
                                        <div className="rounded-xl overflow-hidden shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)]">
                                            <div className="bg-[#0c5776] rounded-tl-xl rounded-tr-xl px-7 py-[18.4px]">
                                                <h3 className="text-white text-[20px] font-['Bitter'] font-thin leading-[30px]">Core Curriculum Topics</h3>
                                            </div>
                                            <div className="bg-white rounded-bl-xl rounded-br-xl px-7 pt-[26px] pb-[34px] space-y-[10px]">
                                                {program.curriculum.coreModules.slice(0, 5).map((module, idx) => {
                                                    const parts = module.split(':');
                                                    const label = parts[0].trim();
                                                    const description = parts[1]?.trim() || module;

                                                    return (
                                                        <div key={idx} className="flex items-center gap-5">
                                                            <div className="w-[183.29px] flex-shrink-0">
                                                                <span className="text-[#030303] text-[16px] font-['Bitter'] font-thin leading-[26px]">
                                                                    {label}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-[6.5px] flex-1">
                                                                {/* Bullet Icon */}
                                                                <div className="flex-shrink-0">
                                                                    <div className="overflow-clip relative size-[6px]">
                                                                        <div className="absolute inset-[1.56%]">
                                                                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8125 5.8125">
                                                                                <path d={coreCurriculumSvg.p2194aa80} fill="#4C4C4C" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <span className="text-[#4C4C4C] text-[16px] font-['Inter'] font-normal leading-[28px]">
                                                                    {description}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Image */}
                                    <div className="lg:w-96">
                                        <div className="relative">
                                            <img
                                                src={program.sideImage}
                                                alt={program.title}
                                                className="w-full h-full object-cover rounded-xl shadow-lg min-h-[300px] lg:min-h-[400px]"
                                            />
                                            {/* Contact Now Button */}
                                            <div className="absolute bottom-6 right-6">
                                                <button
                                                    onClick={() => navigate('/apply')}
                                                    className="bg-white text-[#030303] px-6 py-3 rounded-lg text-base font-medium font-['Inter'] leading-6 shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                                                >
                                                    Contact Now
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Curriculum Tab */}
                    {activeTab === 'curriculum' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-5xl"
                        >
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">Curriculum</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">{program.curriculum.intro}</p>

                            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm mb-8">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">Core Subjects</h3>
                                <ul className="space-y-3">
                                    {program.curriculum.subjects.map((subject, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{subject}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm mb-8">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">Program Structure</h3>
                                <ul className="space-y-3">
                                    {program.curriculum.structure.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-[#0c5776] font-bold text-lg">•</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-[#e8f4f8] p-6 lg:p-8 rounded-xl">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">Core Modules</h3>
                                <ul className="space-y-3">
                                    {program.curriculum.coreModules.map((module, idx) => (
                                        <li key={idx} className="text-gray-700">
                                            • {module}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}

                    {/* Professors Tab */}
                    {activeTab === 'professors' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-5xl"
                        >
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">Program Professors</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">{program.professors.intro}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {program.professors.list.map((prof, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-16 h-16 bg-[#0c5776] rounded-full flex items-center justify-center mb-4">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{prof.name}</h3>
                                        <p className="text-[#0c5776] font-medium mb-1 text-sm">{prof.designation}</p>
                                        <p className="text-gray-600 text-sm">Experience: {prof.experience}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Cost & Financial Aid Tab */}
                    {activeTab === 'cost' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-5xl"
                        >
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">Cost & Financial Aid</h2>

                            <div className="bg-white p-6 lg:p-10 rounded-xl shadow-sm mb-8">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">Fee Structure</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-4 border-b border-gray-200">
                                        <span className="text-gray-700 font-medium">Tuition Fee</span>
                                        <span className="text-gray-900 font-semibold">{program.costAndAid.tuitionFee}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-200">
                                        <span className="text-gray-700 font-medium">Other Fees</span>
                                        <span className="text-gray-900 font-semibold">{program.costAndAid.otherFees}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 bg-[#e8f4f8] px-6 rounded-lg">
                                        <span className="text-gray-900 font-bold">Total Estimated Cost</span>
                                        <span className="text-[#0c5776] font-bold text-lg">{program.costAndAid.totalEstimate}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#e8f4f8] p-6 lg:p-10 rounded-xl">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">Available Scholarships</h3>
                                <ul className="space-y-4">
                                    {program.costAndAid.scholarships.map((scholarship, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{scholarship}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}

                    {/* Admissions Tab */}
                    {activeTab === 'admissions' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-5xl"
                        >
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">Admissions</h2>

                            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm mb-8">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
                                <p className="text-gray-700 leading-relaxed">{program.admissions.eligibility}</p>
                            </div>

                            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm mb-8">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">Admission Process</h3>
                                <ol className="space-y-4">
                                    {program.admissions.process.map((step, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 bg-[#0c5776] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                {idx + 1}
                                            </span>
                                            <span className="text-gray-700 pt-1">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            <div className="bg-[#e8f4f8] p-6 lg:p-8 rounded-xl mb-8">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">Required Documents</h3>
                                <ul className="space-y-3">
                                    {program.admissions.documents.map((doc, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#0c5776] mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={() => navigate('/apply')}
                                    className="bg-[#2563EB] text-white px-12 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2 text-lg"
                                >
                                    Apply Now
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}