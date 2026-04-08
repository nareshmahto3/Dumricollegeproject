import { IntermediateProgramPage } from './IntermediateProgramPage';
import imgEBlTeam3MinJpg from "figma:asset/ea5e374afdef5a39657cdb7a5e8b48d51f87804b.png";
import imgEBlTeam2MinJpg from "figma:asset/fa187de29ccf07a8d4687dde792b50b1204cb82d.png";
import imgEBlTeam1MinJpg from "figma:asset/a1adb3e4cc61a600187de60fe0db91d01d53e7dc.png";

const iaData = {
    id: 'ia',
    title: 'I.A in Arts',
    shortTitle: 'I.A',
    level: 'Intermediate',
    department: 'Department of Arts & Humanities',
    tagline: 'Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions challenge conventions.',
    bannerImage: 'https://images.unsplash.com/photo-1681696533492-4a94d93482ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwaHVtYW5pdGllcyUyMHN0dWRlbnRzJTIwbGlicmFyeSUyMHJlYWRpbmd8ZW58MXx8fHwxNzczNTk1OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    sideImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    highlights: [
        { icon: 'faculty' as const, label: 'Faculty', value: 'Education' },
        { icon: 'duration' as const, label: 'Duration', value: '2 Years' },
        { icon: 'ratio' as const, label: 'Class-Id', value: '60' },
        { icon: 'exchange' as const, label: 'Exchange Format', value: 'Yes' }
    ],
    overview: {
        intro: 'Our university offers a comprehensive range of academic programs designed to inspire learning, innovation and real-world impact Each program is carefully crafted to blend theoretical knowledge with practical experience ensuring students gain the skills needed to excel in today\'s competitive global environment From foundational undergraduate courses to advanced postgraduate and professional degrees our curriculum emphasizes critical thinking hands-on learning, and industry relevance With guidance from experienced faculty access to modern laboratories and opportunities for research and internships students are empowered',
        programName: 'Master of Science in Statistics (24 Months)',
        programDescription: 'A 24-month M.A. Statistics program usually follows a structured split across three or four semesters (e.g., two years) with a summer term or winter term for those part time students.',
        details: [
            { label: 'Duration', value: '24 Months (3-4 Semesters)' },
            { label: 'Total Credits', value: 'Varies by institution (Min. 60–90 credits)' },
            { label: 'Structure', value: 'Primarily focused on taught modules (with) universities may require project or dissertation completion over two summer.' }
        ]
    },
    curriculum: {
        intro: 'The curriculum develops critical thinking and analytical skills across multiple disciplines.',
        subjects: [
            'History',
            'Political Science',
            'Economics',
            'Sociology/Psychology',
            'English/Hindi Literature'
        ],
        structure: [
            'History - Ancient, Medieval, Modern',
            'Political Science - Indian Polity, International Relations',
            'Economics - Micro and Macro Economics',
            'Sociology - Social Structures, Cultural Studies',
            'Languages - English and Hindi/Regional Language'
        ],
        coreModules: [
            'Theory of Statistics Inference, Advanced Probability Theory, Foundations of Statistics',
            'Course Modules with Regression-based Linear Models, Machine Learning, Advanced Data Analysis',
            'Business Analytics, Time Series Analysis',
            'Additional Programming (e.g., R and Python), Statistical Computing, Data Science Methods',
            'Time Series Analysis, Design and Analysis of Econometric Sampling Times',
            'Statistical Machine Learning, Advanced Probability Theory, Data Science Methods'
        ]
    },
    professors: {
        intro: 'Our faculty comprises experienced educators passionate about humanities and social sciences.',
        list: [
            {
                id: '1',
                name: 'Kathryn Murphy',
                position: 'Support Teacher',
                department: 'Commerce',
                image: imgEBlTeam1MinJpg,
                email: 'kathryn.murphy@dumricollege.edu',
                education: 'M.Com, B.Ed'
            },
            {
                id: '2',
                name: 'Savannah Nguyen',
                position: 'Academic Advisor',
                department: 'Science',
                image: imgEBlTeam2MinJpg,
                email: 'savannah.nguyen@dumricollege.edu',
                education: 'M.Sc (Physics), Ph.D'
            },
            {
                id: '3',
                name: 'Brooklyn Simmons',
                position: 'Academic Assistant',
                department: 'Arts',
                image: imgEBlTeam3MinJpg,
                email: 'brooklyn.simmons@dumricollege.edu',
                education: 'M.A (English)'
            },
        ]
    },
    costAndAid: {
        tuitionFee: '₹12,000 - ₹20,000 per year',
        otherFees: '₹2,000 - ₹4,000 (Library, Registration, Examination)',
        totalEstimate: '₹14,000 - ₹24,000 per year',
        scholarships: [
            'Merit scholarships for high achievers',
            'Financial assistance for economically disadvantaged',
            'SC/ST/OBC government scholarships',
            'Minority welfare scholarships'
        ]
    },
    admissions: {
        eligibility: 'Students must have completed Class 10 with minimum 45% marks',
        process: [
            'Fill online/offline application form',
            'Submit required documents',
            'Attend counseling (if required)',
            'Pay admission fees',
            'Complete enrollment process'
        ],
        documents: [
            '10th Class Marksheet and Certificate',
            'Transfer Certificate from previous school',
            'Character Certificate',
            'Caste Certificate (if claiming reservation)',
            'Income Certificate (for fee concession)',
            'Passport size photographs'
        ]
    }
};

export function IAProgramPage() {
    return <IntermediateProgramPage program={iaData} />;
}
