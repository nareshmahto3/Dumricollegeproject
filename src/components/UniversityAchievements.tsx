import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

// Faculty Achievements Data
const facultyAchievements = [
    {
        title: "Excellence in Teaching",
        description: "Faculty members have been recognized for their dedication to quality education and innovative teaching methods that help students achieve strong academic results."
    },
    {
        title: "Academic Contribution Awards",
        description: "Teachers are honored for their contribution to developing effective learning environments and guiding students in commerce, arts, and science streams."
    },
    {
        title: "Student Mentorship Recognition",
        description: "Faculty members receive appreciation for mentoring students, supporting career guidance, and preparing them for higher education programs."
    }
];

// Student Achievements Data
const studentAchievements = [
    {
        title: "Academic Excellence Award",
        description: "Given to students who achieve outstanding marks in Intermediate examinations conducted by the Jharkhand Academic Council."
    },
    {
        title: "Commerce Topper Award",
        description: "Presented to students who secure the highest marks in commerce subjects such as Accountancy, Business Studies, and Economics."
    },
    {
        title: "Best All-Rounder Student Award",
        description: "Awarded to students who excel in academics, leadership, cultural activities, and overall contribution to college life."
    }
];

// University Achievements Data
const universityAchievements = [
    {
        title: "Academic Excellence Award",
        description: "Recognized for maintaining high academic standards and excellent student performance in examinations conducted by the Jharkhand Academic Council."
    },
    {
        title: "Best Commerce Education Award",
        description: "Honored for providing quality education in commerce subjects such as Accountancy, Business Studies, and Economics."
    },
    {
        title: "Outstanding Educational Institution Award",
        description: "Awarded for the college's contribution to higher secondary education and student development in the region."
    }
];

export function UniversityAchievements() {
    const navigate = useNavigate();
    const [achievementTab, setAchievementTab] = useState<
        "faculty" | "student" | "university"
    >("faculty");
    const [achievementIndex, setAchievementIndex] = useState(0);

    return (
        <section
            className="py-12 md:py-20 relative"
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1763275469812-c807e3b4a4af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwYmVpZ2UlMjBhY2FkZW1pYyUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzg0MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-white/85" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8">
                        <span className="text-[#886E53]">
                            University{" "}
                        </span>
                        <span className="text-[#0C4D8B]">
                            Achievements
                        </span>
                    </h2>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-t-lg overflow-hidden shadow-md">
                        {[
                            { key: "faculty" as const, label: "Faculty" },
                            { key: "student" as const, label: "Student" },
                            {
                                key: "university" as const,
                                label: "University",
                            },
                        ].map((tab) => (
                            <motion.button
                                key={tab.key}
                                onClick={() => {
                                    setAchievementTab(tab.key);
                                    setAchievementIndex(0);
                                }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 font-light transition-all duration-300 cursor-pointer ${achievementTab === tab.key
                                    ? "bg-[#D98600] text-white"
                                    : "bg-[#0C4D8B] text-white hover:bg-[#0C4D8B]/80"
                                    }`}
                            >
                                {tab.label}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Achievement Cards */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-white rounded-lg shadow-xl border-2 border-[#C07E02] p-6 md:p-8 mx-6 md:mx-0">
                        {/* Content */}
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Image */}
                            <motion.div
                                key={`${achievementTab}-${achievementIndex}`}
                                initial={{ opacity: 0, x: -50, rotate: -5 }}
                                animate={{ opacity: 1, x: 0, rotate: 0 }}
                                exit={{ opacity: 0, x: 50, rotate: 5 }}
                                transition={{ duration: 0.5, type: "spring" }}
                                className="w-full md:w-1/3"
                            >
                                <motion.img
                                    src="https://images.unsplash.com/photo-1770208524687-9ed3dfa80c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwYXdhcmQlMjBjZXJlbW9ueSUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc3MjM4MDgyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Achievement"
                                    className="w-full h-auto rounded-lg"
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>

                            {/* Text Content */}
                            <motion.div
                                key={`${achievementTab}-${achievementIndex}-text`}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex-1"
                            >
                                {achievementTab === "faculty" && (
                                    <>
                                        <h3 className="text-2xl font-medium text-black mb-4">
                                            {facultyAchievements[achievementIndex % facultyAchievements.length].title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {facultyAchievements[achievementIndex % facultyAchievements.length].description}
                                        </p>
                                    </>
                                )}
                                {achievementTab === "student" && (
                                    <>
                                        <h3 className="text-2xl font-medium text-black mb-4">
                                            {studentAchievements[achievementIndex % studentAchievements.length].title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {studentAchievements[achievementIndex % studentAchievements.length].description}
                                        </p>
                                    </>
                                )}
                                {achievementTab === "university" && (
                                    <>
                                        <h3 className="text-2xl font-medium text-black mb-4">
                                            {universityAchievements[achievementIndex % universityAchievements.length].title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {universityAchievements[achievementIndex % universityAchievements.length].description}
                                        </p>
                                    </>
                                )}
                            </motion.div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={() =>
                                setAchievementIndex(
                                    Math.max(0, achievementIndex - 1),
                                )
                            }
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-4 bg-[#0C4D8B] text-white px-2 md:px-3 py-4 md:py-6 hover:bg-[#0C4D8B]/80 transition-colors rounded-l"
                            aria-label="Previous achievement"
                        >
                            <span className="text-2xl md:text-3xl font-light">
                                ‹
                            </span>
                        </button>
                        <button
                            onClick={() =>
                                setAchievementIndex(achievementIndex + 1)
                            }
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4 bg-[#0C4D8B] text-white px-2 md:px-3 py-4 md:py-6 hover:bg-[#0C4D8B]/80 transition-colors rounded-r"
                            aria-label="Next achievement"
                        >
                            <span className="text-2xl md:text-3xl font-light">
                                ›
                            </span>
                        </button>
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-8">
                        <motion.button
                            onClick={() => navigate("/achievements")}
                            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-normal border border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
