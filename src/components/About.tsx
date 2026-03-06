import { SharedNavigation } from './shared/SharedNavigation';
import { CarouselHeader } from './CarouselHeader';
import { SharedFooter } from './shared/SharedFooter';
import { Preloader } from './shared/Preloader';
import { useNavigate } from 'react-router';

export function About() {
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
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
              alt="About Dumri College"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/90 to-indigo-900/85" />
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
                  <Crown className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3" />
                  <span className="hidden sm:inline">Established 1976 • 50 Years of Excellence</span>
                  <span className="sm:hidden">Est. 1976</span>
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-8 leading-tight px-4">
                  About Dumri College
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 mb-4 md:mb-6 max-w-4xl mx-auto font-light px-4">
                  Shaping Futures, Building Leaders
                </p>
                <p className="text-base md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
                  A legacy of academic excellence, innovation, and holistic development
                </p>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-white -mt-16 md:-mt-20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Users, value: '50,000+', label: 'Alumni Network', color: 'blue' },
                { icon: GraduationCap, value: '15,000+', label: 'Current Students', color: 'indigo' },
                { icon: BookOpen, value: '800+', label: 'Expert Faculty', color: 'cyan' },
                { icon: Trophy, value: '100+', label: 'Awards Won', color: 'purple' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 md:p-8 text-center border-0 shadow-xl hover:shadow-2xl transition-all">
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                      <stat.icon className={`w-6 h-6 md:w-8 md:h-8 text-${stat.color}-600`} />
                    </div>
                    <div className={`text-2xl md:text-4xl font-black text-${stat.color}-600 mb-1 md:mb-2`}>{stat.value}</div>
                    <div className="text-xs md:text-sm text-slate-600 font-medium">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction Story */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-blue-100 text-blue-700 border-0 mb-6 px-4 py-2">
                  <Flag className="w-4 h-4 mr-2" />
                  Our Story
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                  A Legacy of Excellence Since 1976
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Founded with a vision to transform education in Eastern India, Dumri College began 
                    its journey in 1976 with just 200 students and a handful of dedicated faculty members. 
                    Today, we stand as one of the region's most prestigious institutions.
                  </p>
                  <p>
                    Over five decades, we have evolved into a comprehensive educational hub offering 
                    world-class programs across diverse disciplines. Our commitment to academic rigor, 
                    research excellence, and student development has earned us NAAC A++ accreditation 
                    and a Top 10 national ranking.
                  </p>
                  <p>
                    With a vibrant campus spread across 200 acres, state-of-the-art facilities, and 
                    a global alumni network of 50,000+ professionals, we continue to shape the leaders 
                    of tomorrow while staying rooted in our core values of integrity and innovation.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    size="lg"
                    onClick={() => navigate('/apply')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold"
                  >
                    Join Our Community
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('/contact')}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-bold"
                  >
                    Schedule Visit
                  </Button>
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
                    src="https://images.unsplash.com/photo-1574438041772-09c77dc8c1dc?w=800&q=80"
                    alt="College History"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-600 rounded-3xl -z-10" />
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-indigo-400 rounded-full -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Our Journey Through Time
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Milestones that define our legacy
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {[
                { year: '1976', title: 'Foundation', description: 'Dumri College established with 200 students and 15 faculty members' },
                { year: '1985', title: 'First Accreditation', description: 'Received UGC recognition and expanded to 1000 students' },
                { year: '1995', title: 'Technology Wing', description: 'Launched engineering programs and built state-of-the-art labs' },
                { year: '2005', title: 'NAAC A Grade', description: 'Achieved NAAC A grade accreditation for quality education' },
                { year: '2015', title: 'Research Excellence', description: 'Established 10 research centers and filed 50+ patents' },
                { year: '2023', title: 'NAAC A++ & Top 10', description: 'Attained highest NAAC grade and Top 10 national ranking' },
                { year: '2026', title: 'Golden Jubilee', description: 'Celebrating 50 years of transforming lives and building futures' },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 pb-16 border-l-4 border-blue-600 last:pb-0"
                >
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
                  <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
                    <div className="text-blue-600 text-2xl font-black mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                    <p className="text-slate-600 text-lg">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values - Different Design */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black mb-6">
                Our Guiding Principles
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                The foundation of everything we do
              </p>
              <div className="w-24 h-2 bg-blue-400 mx-auto mt-8" />
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Eye,
                  title: 'Our Vision',
                  tagline: 'Where We Aspire to Be',
                  description: 'To be a globally recognized center of academic excellence, fostering innovation, research, and holistic development of students who become responsible global citizens.',
                  highlights: ['Global Recognition', 'Innovation Hub', 'Holistic Development', 'Social Impact'],
                },
                {
                  icon: Target,
                  title: 'Our Mission',
                  tagline: 'What We Do',
                  description: 'To provide quality education that empowers students with knowledge, skills, values, and critical thinking abilities to excel in their chosen fields and contribute meaningfully to society.',
                  highlights: ['Quality Education', 'Skill Development', 'Value-Based Learning', 'Career Excellence'],
                },
                {
                  icon: Heart,
                  title: 'Our Values',
                  tagline: 'What We Stand For',
                  description: 'Integrity, Excellence, Innovation, Inclusivity, and Social Responsibility form the ethical foundation that guides our decisions, actions, and relationships.',
                  highlights: ['Integrity First', 'Pursuit of Excellence', 'Inclusive Environment', 'Social Responsibility'],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="p-10 bg-white/10 backdrop-blur-xl border-2 border-white/20 h-full hover:bg-white/15 transition-all">
                    <div className="w-20 h-20 bg-blue-500/30 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="w-10 h-10 text-blue-300" />
                    </div>
                    <h3 className="text-3xl font-black mb-2">{item.title}</h3>
                    <p className="text-blue-200 text-sm font-semibold mb-6">{item.tagline}</p>
                    <p className="text-blue-100 leading-relaxed mb-6 text-lg">{item.description}</p>
                    <div className="space-y-3">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          <span className="text-blue-200">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Meet Our Leadership
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Visionaries steering Dumri College towards excellence
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Dr. Rajesh Kumar', role: 'Principal', qualification: 'Ph.D. in Education', image: 'https://images.unsplash.com/photo-1754531976838-436a70636c96?w=400&q=80' },
                { name: 'Dr. Priya Sharma', role: 'Vice Principal (Academics)', qualification: 'Ph.D. in Computer Science', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
                { name: 'Prof. Amit Singh', role: 'Dean of Research', qualification: 'Ph.D. in Engineering', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
                { name: 'Dr. Meera Patel', role: 'Dean of Students', qualification: 'Ph.D. in Psychology', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80' },
              ].map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all">
                    <div className="relative h-80">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                        <p className="text-blue-300 font-semibold mb-2">{leader.role}</p>
                        <p className="text-sm text-blue-200">{leader.qualification}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations & Rankings */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Accreditations & Rankings
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Recognized excellence by national and international bodies
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Medal, title: 'NAAC A++', subtitle: 'Highest Accreditation Grade', description: 'National Assessment and Accreditation Council', color: 'blue' },
                { icon: Trophy, title: 'Top 10 NIRF', subtitle: 'National Ranking', description: 'National Institutional Ranking Framework', color: 'indigo' },
                { icon: Shield, title: 'ISO 9001:2015', subtitle: 'Quality Certified', description: 'International Quality Management Standard', color: 'cyan' },
                { icon: Award, title: 'UGC Recognized', subtitle: 'University Grants Commission', description: 'Approved for Academic Excellence', color: 'purple' },
                { icon: Star, title: 'AICTE Approved', subtitle: 'Technical Education', description: 'All India Council for Technical Education', color: 'pink' },
                { icon: Crown, title: 'NBA Accredited', subtitle: 'Engineering Programs', description: 'National Board of Accreditation', color: 'orange' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className={`p-8 text-center border-t-4 border-t-${item.color}-600 hover:shadow-xl transition-all h-full bg-white`}>
                    <div className={`w-20 h-20 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <item.icon className={`w-10 h-10 text-${item.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{item.title}</h3>
                    <p className={`text-${item.color}-600 font-bold mb-3`}>{item.subtitle}</p>
                    <p className="text-slate-600">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Success Stories */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Alumni Making Waves
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our graduates leading across industries worldwide
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Rahul Verma', batch: 'Class of 2010', achievement: 'CEO, Tech Innovators Inc.', image: 'https://images.unsplash.com/photo-1758270703262-2b40b6b66be6?w=400&q=80', quote: 'Dumri College shaped my entrepreneurial journey' },
                { name: 'Anita Desai', batch: 'Class of 2012', achievement: 'NASA Research Scientist', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', quote: 'The research foundation I got here was invaluable' },
                { name: 'Vikram Malhotra', batch: 'Class of 2015', achievement: 'IAS Officer, Government of India', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', quote: 'Values learned here guide my public service' },
              ].map((alumni, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all h-full">
                    <div className="relative h-64">
                      <img
                        src={alumni.image}
                        alt={alumni.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <Quote className="w-8 h-8 text-blue-600 mb-3" />
                      <p className="text-slate-700 italic mb-6 text-lg">"{alumni.quote}"</p>
                      <h3 className="text-xl font-bold text-slate-900">{alumni.name}</h3>
                      <p className="text-blue-600 font-semibold">{alumni.achievement}</p>
                      <p className="text-slate-500 text-sm mt-1">{alumni.batch}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Life Glimpse */}
        <section className="py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black mb-6">
                Life at Dumri College
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                A vibrant community of learners, innovators, and leaders
              </p>
              <div className="w-24 h-2 bg-blue-300 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, title: 'World-Class Infrastructure', count: '200 Acres' },
                { icon: BookOpen, title: 'Digital Library', count: '1L+ Resources' },
                { icon: Users, title: 'Student Clubs', count: '100+' },
                { icon: Globe, title: 'International Partnerships', count: '50+' },
                { icon: Briefcase, title: 'Industry Collaborations', count: '200+' },
                { icon: Rocket, title: 'Startups Incubated', count: '30+' },
                { icon: Award, title: 'Patents Filed', count: '100+' },
                { icon: TrendingUp, title: 'Placement Rate', count: '98%' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-10 h-10 text-blue-200" />
                  </div>
                  <div className="text-4xl font-black mb-2">{item.count}</div>
                  <div className="text-blue-100 font-medium">{item.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Detailed */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Why Choose Dumri College?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Ten compelling reasons that set us apart
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { number: '01', title: 'NAAC A++ Accreditation', description: 'Highest quality certification ensuring excellence in every aspect' },
                { number: '02', title: 'Expert Faculty', description: '800+ PhD holders with industry and research experience' },
                { number: '03', title: 'Industry Partnerships', description: 'Collaborations with 200+ leading companies for internships and placements' },
                { number: '04', title: 'Global Exposure', description: 'Exchange programs with 50+ international universities' },
                { number: '05', title: 'Research Excellence', description: '10 dedicated research centers with cutting-edge facilities' },
                { number: '06', title: 'Placement Success', description: '98% placement rate with top companies recruiting from campus' },
                { number: '07', title: 'Modern Infrastructure', description: 'State-of-the-art labs, smart classrooms, and sports facilities' },
                { number: '08', title: 'Holistic Development', description: '100+ clubs for sports, arts, culture, and technical activities' },
                { number: '09', title: 'Scholarship Programs', description: 'Merit-based and need-based financial assistance available' },
                { number: '10', title: 'Strong Alumni Network', description: '50,000+ alumni across 40+ countries supporting students' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 10 }}
                >
                  <Card className="p-8 hover:shadow-xl transition-all border-l-4 border-l-blue-600">
                    <div className="flex items-start gap-6">
                      <div className="text-6xl font-black text-blue-600/20">{item.number}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Awards & Recognition
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Celebrating excellence and achievements
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { year: '2025', award: 'Best Institution of the Year', by: 'Education Excellence Awards' },
                { year: '2024', award: 'Outstanding Placement Record', by: 'National Career Summit' },
                { year: '2023', award: 'Innovation in Education', by: 'Ministry of Education' },
                { year: '2023', award: 'Best Research Output', by: 'Indian Science Congress' },
                { year: '2022', award: 'Excellence in Campus Facilities', by: 'Infrastructure Awards' },
                { year: '2022', award: 'Outstanding Alumni Network', by: 'Alumni Association of India' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-8 bg-white hover:shadow-xl transition-all h-full">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className="bg-blue-100 text-blue-700 border-0 text-lg px-4 py-2">
                        {item.year}
                      </Badge>
                      <Trophy className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.award}</h3>
                    <p className="text-slate-600">Awarded by: {item.by}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <Sparkles className="w-16 h-16 mx-auto mb-8 text-blue-200" />
              <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Ready to Join Our Legacy?
              </h2>
              <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
                Be part of a vibrant community that has been shaping futures for 50 years. 
                Your journey to excellence starts here at Dumri College.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  onClick={() => navigate('/apply')}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-8 text-xl font-bold shadow-2xl"
                >
                  Apply for Admission
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/contact')}
                  className="border-3 border-white text-white hover:bg-white/10 px-12 py-8 text-xl font-bold"
                >
                  Schedule Campus Tour
                  <MapPin className="ml-3 w-6 h-6" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <SharedFooter />
      </div>
    </>
  );
}