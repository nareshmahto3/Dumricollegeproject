import { SharedNavigation } from './shared/SharedNavigation';
import { CarouselHeader } from './CarouselHeader';
import { SharedFooter } from './shared/SharedFooter';
import { Footer } from './Footer';
import { Preloader } from './shared/Preloader';
import { useNavigate } from 'react-router';

export function Academics() {
  const navigate = useNavigate();

  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-white">
        <CarouselHeader />

        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1920&q=80"
              alt="Academics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/95 via-blue-900/90 to-cyan-900/85" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white"
              >
                <Badge className="bg-blue-500/30 text-blue-100 border-blue-400/50 backdrop-blur-md mb-6 md:mb-8 px-4 md:px-8 py-2 md:py-4 text-sm md:text-lg">
                  <GraduationCap className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3" />
                  <span className="hidden sm:inline">50+ Programs • 15 Departments • 800+ Faculty</span>
                  <span className="sm:hidden">50+ Programs</span>
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-8 leading-tight px-4">
                  Academic Excellence
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 mb-4 md:mb-6 max-w-4xl mx-auto font-light px-4">
                  Empowering Minds, Shaping Futures
                </p>
                <p className="text-base md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
                  World-class programs designed to prepare you for global success
                </p>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Academic Stats */}
        <section className="py-12 md:py-16 bg-white -mt-16 md:-mt-20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {[
                { icon: BookOpen, value: '50+', label: 'Programs Offered', color: 'blue' },
                { icon: Building2, value: '15', label: 'Departments', color: 'indigo' },
                { icon: Users, value: '800+', label: 'Expert Faculty', color: 'cyan' },
                { icon: Globe, value: '50+', label: 'Global Partners', color: 'purple' },
                { icon: Trophy, value: '98%', label: 'Placement Rate', color: 'pink' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center border-0 shadow-xl hover:shadow-2xl transition-all">
                    <div className={`w-14 h-14 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <stat.icon className={`w-7 h-7 text-${stat.color}-600`} />
                    </div>
                    <div className={`text-3xl font-black text-${stat.color}-600 mb-1`}>{stat.value}</div>
                    <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Philosophy */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-blue-100 text-blue-700 border-0 mb-6 px-4 py-2">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Our Approach
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                  Education That Transforms Lives
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    At Dumri College, we believe in a holistic approach to education that goes beyond 
                    textbooks and examinations. Our curriculum is designed to foster critical thinking, 
                    creativity, and practical skills essential for the modern world.
                  </p>
                  <p>
                    With NAAC A++ accreditation and a Top 10 national ranking, our academic programs 
                    combine theoretical knowledge with hands-on experience, industry exposure, and 
                    research opportunities. Every program is crafted to align with global standards 
                    while addressing local and national needs.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: Brain, text: 'Critical Thinking' },
                    { icon: Rocket, text: 'Innovation Focus' },
                    { icon: Users, text: 'Collaborative Learning' },
                    { icon: Globe, text: 'Global Perspective' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-semibold text-slate-800">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1767319257862-e5c5aeb1c628?w=800&q=80"
                    alt="Academic Excellence"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-600 rounded-3xl -z-10" />
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-400 rounded-full -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Departments Overview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Academic Departments
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive education across diverse disciplines
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Engineering & Technology', icon: Zap, count: '12', color: 'blue' },
                { name: 'Sciences', icon: FlaskConical, count: '10', color: 'indigo' },
                { name: 'Business & Management', icon: Briefcase, count: '8', color: 'cyan' },
                { name: 'Arts & Humanities', icon: BookOpen, count: '15', color: 'purple' },
                { name: 'Computer Applications', icon: Laptop, count: '6', color: 'pink' },
                { name: 'Commerce & Economics', icon: LineChart, count: '7', color: 'orange' },
                { name: 'Social Sciences', icon: Users, count: '9', color: 'teal' },
                { name: 'Law & Legal Studies', icon: FileText, count: '4', color: 'red' },
              ].map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Card className={`p-8 border-t-4 border-t-${dept.color}-600 hover:shadow-xl transition-all h-full bg-white`}>
                    <div className={`w-16 h-16 bg-${dept.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <dept.icon className={`w-8 h-8 text-${dept.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{dept.name}</h3>
                    <p className={`text-${dept.color}-600 font-semibold text-lg`}>{dept.count} Programs</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Programs - Detailed */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Badge className="bg-blue-100 text-blue-700 border-0 mb-4 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Engineering & Technology
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Engineering Programs
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl">
                AICTE approved programs with industry-aligned curriculum
              </p>
              <div className="w-24 h-2 bg-blue-600 mt-6" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  name: 'Computer Science & Engineering', 
                  duration: '4 Years', 
                  degree: 'B.Tech', 
                  icon: Code,
                  specializations: ['AI/ML', 'Data Science', 'Cybersecurity', 'Cloud Computing'],
                  highlights: ['Industry Projects', 'Coding Labs', 'Tech Competitions']
                },
                { 
                  name: 'Mechanical Engineering', 
                  duration: '4 Years', 
                  degree: 'B.Tech', 
                  icon: Building2,
                  specializations: ['Robotics', 'Automotive', 'Manufacturing', 'Thermal'],
                  highlights: ['CAD/CAM Labs', 'Workshop Training', 'Industry Visits']
                },
                { 
                  name: 'Electrical Engineering', 
                  duration: '4 Years', 
                  degree: 'B.Tech', 
                  icon: Zap,
                  specializations: ['Power Systems', 'Control Systems', 'Electronics', 'Renewable Energy'],
                  highlights: ['Advanced Labs', 'Power Grid Projects', 'Innovation Center']
                },
                { 
                  name: 'Civil Engineering', 
                  duration: '4 Years', 
                  degree: 'B.Tech', 
                  icon: Building2,
                  specializations: ['Structural', 'Environmental', 'Transportation', 'Geotechnical'],
                  highlights: ['Site Visits', 'Survey Labs', 'Smart City Projects']
                },
                { 
                  name: 'Electronics & Communication', 
                  duration: '4 Years', 
                  degree: 'B.Tech', 
                  icon: Laptop,
                  specializations: ['VLSI', 'Embedded Systems', 'IoT', 'Signal Processing'],
                  highlights: ['Circuit Labs', 'Embedded Projects', 'Industry Internships']
                },
                { 
                  name: 'Chemical Engineering', 
                  duration: '4 Years', 
                  degree: 'B.Tech', 
                  icon: FlaskConical,
                  specializations: ['Process Engineering', 'Petrochemicals', 'Biochemical', 'Environmental'],
                  highlights: ['Process Labs', 'Plant Visits', 'Research Projects']
                },
              ].map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Card className="p-8 hover:shadow-2xl transition-all h-full bg-white border-0 shadow-lg">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <program.icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <Badge className="bg-blue-600 text-white border-0">{program.degree}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {program.name}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600 mb-6">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-bold text-slate-700 mb-2">Specializations:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.specializations.map((spec, idx) => (
                          <Badge key={idx} className="bg-blue-50 text-blue-700 border-0 text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-700 mb-2">Highlights:</p>
                      <ul className="space-y-1">
                        {program.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Science Programs */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Badge className="bg-indigo-100 text-indigo-700 border-0 mb-4 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Pure & Applied Sciences
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Science Programs
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl">
                Research-oriented programs fostering scientific temperament
              </p>
              <div className="w-24 h-2 bg-indigo-600 mt-6" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Physics', duration: '3 Years', degree: 'B.Sc', icon: Atom, research: 'Quantum Physics Lab' },
                { name: 'Chemistry', duration: '3 Years', degree: 'B.Sc', icon: TestTube, research: 'Organic Synthesis Lab' },
                { name: 'Mathematics', duration: '3 Years', degree: 'B.Sc', icon: Calculator, research: 'Computational Math' },
                { name: 'Biology', duration: '3 Years', degree: 'B.Sc', icon: Microscope, research: 'Genomics Lab' },
                { name: 'Biotechnology', duration: '4 Years', degree: 'B.Tech', icon: FlaskConical, research: 'Biotech Research Center' },
                { name: 'Environmental Science', duration: '3 Years', degree: 'B.Sc', icon: Globe, research: 'Eco Research Lab' },
              ].map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Card className="p-8 hover:shadow-2xl transition-all h-full bg-gradient-to-br from-white to-indigo-50 border-0 shadow-lg">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <program.icon className="w-7 h-7 text-indigo-600" />
                      </div>
                      <Badge className="bg-indigo-600 text-white border-0">{program.degree}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {program.name}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <Clock className="w-5 h-5 text-indigo-600" />
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-700 bg-indigo-100 px-3 py-2 rounded-lg">
                      <Microscope className="w-4 h-4" />
                      <span className="text-sm font-semibold">{program.research}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business & Arts Programs */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Business Programs */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-cyan-100 text-cyan-700 border-0 mb-4 px-4 py-2">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Business & Management
                </Badge>
                <h3 className="text-4xl font-black text-slate-900 mb-6">
                  Business Programs
                </h3>
                <div className="w-20 h-2 bg-cyan-600 mb-8" />

                <div className="space-y-4">
                  {[
                    { name: 'MBA (Master of Business Administration)', duration: '2 Years', specializations: ['Finance', 'Marketing', 'HR', 'Operations'] },
                    { name: 'BBA (Bachelor of Business Administration)', duration: '3 Years', specializations: ['General Management', 'Digital Marketing', 'Entrepreneurship'] },
                    { name: 'B.Com (Commerce)', duration: '3 Years', specializations: ['Accounting', 'Taxation', 'Banking', 'Insurance'] },
                  ].map((program, index) => (
                    <Card key={index} className="p-6 hover:shadow-xl transition-all bg-white">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{program.name}</h4>
                      <div className="flex items-center gap-2 text-slate-600 mb-3">
                        <Clock className="w-4 h-4 text-cyan-600" />
                        <span className="text-sm font-semibold">{program.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {program.specializations.map((spec, idx) => (
                          <Badge key={idx} className="bg-cyan-50 text-cyan-700 border-0 text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Arts Programs */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-purple-100 text-purple-700 border-0 mb-4 px-4 py-2">
                  <Palette className="w-4 h-4 mr-2" />
                  Arts & Humanities
                </Badge>
                <h3 className="text-4xl font-black text-slate-900 mb-6">
                  Arts Programs
                </h3>
                <div className="w-20 h-2 bg-purple-600 mb-8" />

                <div className="space-y-4">
                  {[
                    { name: 'BA English Literature', duration: '3 Years', focus: ['Literary Criticism', 'Creative Writing', 'Linguistics'] },
                    { name: 'BA Psychology', duration: '3 Years', focus: ['Clinical Psychology', 'Counseling', 'Research Methods'] },
                    { name: 'BA Sociology', duration: '3 Years', focus: ['Social Research', 'Cultural Studies', 'Development Studies'] },
                  ].map((program, index) => (
                    <Card key={index} className="p-6 hover:shadow-xl transition-all bg-white">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{program.name}</h4>
                      <div className="flex items-center gap-2 text-slate-600 mb-3">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-semibold">{program.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {program.focus.map((item, idx) => (
                          <Badge key={idx} className="bg-purple-50 text-purple-700 border-0 text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Research & Innovation */}
        <section className="py-24 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black mb-6">
                Research & Innovation
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Pushing boundaries of knowledge and discovery
              </p>
              <div className="w-24 h-2 bg-blue-400 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Microscope, value: '10', label: 'Research Centers' },
                { icon: FileText, value: '500+', label: 'Research Papers' },
                { icon: Trophy, value: '100+', label: 'Patents Filed' },
                { icon: Globe, value: '50+', label: 'Collaborations' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-10 h-10 text-blue-200" />
                  </div>
                  <div className="text-5xl font-black mb-2">{item.value}</div>
                  <div className="text-blue-100 font-medium text-lg">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Learning Resources
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                State-of-the-art facilities supporting academic excellence
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: BookMarked, 
                  title: 'Digital Library', 
                  description: '1 lakh+ books, e-journals, and research papers', 
                  features: ['24/7 Access', 'Online Resources', 'Study Spaces'] 
                },
                { 
                  icon: Laptop, 
                  title: 'Smart Classrooms', 
                  description: 'Technology-enabled interactive learning spaces', 
                  features: ['Digital Boards', 'Video Conferencing', 'Recording'] 
                },
                { 
                  icon: FlaskConical, 
                  title: 'Advanced Labs', 
                  description: 'Cutting-edge equipment for hands-on learning', 
                  features: ['Modern Equipment', 'Safety Certified', 'Expert Support'] 
                },
                { 
                  icon: Video, 
                  title: 'E-Learning Portal', 
                  description: 'Online courses and learning management system', 
                  features: ['Video Lectures', 'Assignments', 'Quizzes'] 
                },
                { 
                  icon: Users, 
                  title: 'Mentorship Program', 
                  description: 'Personalized guidance from faculty and industry experts', 
                  features: ['Career Guidance', 'Academic Support', 'Skill Development'] 
                },
                { 
                  icon: Globe, 
                  title: 'International Exchange', 
                  description: 'Study abroad opportunities with partner universities', 
                  features: ['Semester Exchange', 'Research Visits', 'Cultural Programs'] 
                },
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="p-8 h-full hover:shadow-2xl transition-all border-0 shadow-lg">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                      <resource.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{resource.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{resource.description}</p>
                    <ul className="space-y-2">
                      {resource.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Partnerships */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Industry Partnerships
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Collaborations with leading companies for internships and placements
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { type: 'Tech Giants', count: '50+', companies: ['Google', 'Microsoft', 'Amazon', 'IBM'] },
                { type: 'Manufacturing', count: '40+', companies: ['Tata', 'L&T', 'Mahindra', 'Reliance'] },
                { type: 'Banking & Finance', count: '35+', companies: ['HDFC', 'ICICI', 'Axis', 'SBI'] },
                { type: 'Consulting', count: '25+', companies: ['Deloitte', 'PwC', 'KPMG', 'EY'] },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 text-center hover:shadow-xl transition-all bg-white">
                    <div className="text-4xl font-black text-blue-600 mb-2">{category.count}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6">{category.type}</h3>
                    <div className="space-y-2">
                      {category.companies.map((company, idx) => (
                        <div key={idx} className="text-sm text-slate-600 font-medium">
                          {company}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Admission Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Simple and transparent admission procedure
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Apply Online', description: 'Fill the online application form', icon: FileText },
                  { step: '02', title: 'Entrance Test', description: 'Appear for the entrance exam', icon: BookOpen },
                  { step: '03', title: 'Interview', description: 'Personal interview round', icon: Users },
                  { step: '04', title: 'Enroll', description: 'Complete enrollment process', icon: CheckCircle },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-6 shadow-xl">
                      {item.step}
                    </div>
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-16">
                <Button
                  size="lg"
                  onClick={() => navigate('/apply')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 text-xl font-bold shadow-2xl"
                >
                  Apply Now
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <p className="text-slate-600 mt-6">
                  Application deadline: <span className="font-bold text-blue-600">June 30, 2026</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}