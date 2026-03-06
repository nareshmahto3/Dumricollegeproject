import { useNavigate } from 'react-router';
import {
  GraduationCap,
  BookOpen,
  Trophy,
  Users,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Award,
  Building2,
  FlaskConical,
  Dumbbell,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Menu,
  X,
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const features = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'World-class curriculum with experienced faculty and modern teaching methods',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: FlaskConical,
    title: 'Advanced Labs',
    description: 'State-of-the-art laboratories for science, computer, and innovation',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Dumbbell,
    title: 'Sports Facilities',
    description: 'Professional sports grounds and indoor facilities for all-round development',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Building2,
    title: 'Modern Infrastructure',
    description: 'Smart classrooms, digital library, and contemporary campus facilities',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

const programs = [
  { name: 'Primary Education', grades: 'Grade 1-5', icon: BookOpen },
  { name: 'Middle School', grades: 'Grade 6-8', icon: BookOpen },
  { name: 'Secondary School', grades: 'Grade 9-10', icon: Award },
  { name: 'Senior Secondary', grades: 'Grade 11-12', icon: GraduationCap },
];

const achievements = [
  { value: '2847+', label: 'Active Students' },
  { value: '150+', label: 'Expert Faculty' },
  { value: '98%', label: 'Success Rate' },
  { value: '25+', label: 'Years of Excellence' },
];

const news = [
  {
    id: 1,
    title: 'Annual Day Celebration 2026',
    date: 'March 15, 2026',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhdWRpdG9yaXVtJTIwaGFsbHxlbnwxfHx8fDE3NzA4NDk4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Science Exhibition Winners Announced',
    date: 'February 10, 2026',
    category: 'Achievement',
    image: 'https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MDgxODA4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Admission Open for Academic Year 2026-27',
    date: 'January 20, 2026',
    category: 'Admission',
    image: 'https://images.unsplash.com/photo-1765133469414-02f4e445df19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYW1wdXMlMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NzA4MzkxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Parent - Grade 10',
    content: 'The school has provided an excellent learning environment for my daughter. The teachers are dedicated and the infrastructure is outstanding.',
    image: 'https://images.unsplash.com/photo-1758270705902-f50dde4add9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBoYXBweSUyMHNtaWxpbmd8ZW58MXx8fHwxNzcwODQ5ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Parent - Grade 8',
    content: 'Best decision to enroll my son here. The holistic approach to education and focus on overall development is commendable.',
    image: 'https://images.unsplash.com/photo-1758270705902-f50dde4add9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBoYXBweSUyMHNtaWxpbmd8ZW58MXx8fHwxNzcwODQ5ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const facilities = [
  {
    title: 'Digital Library',
    description: 'Over 50,000 books and digital resources',
    image: 'https://images.unsplash.com/photo-1752920299180-e8fd9276c202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NzA4MjI0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Sports Complex',
    description: 'Professional grounds for cricket, football, basketball',
    image: 'https://images.unsplash.com/photo-1759763494425-58fc490742ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaWVsZCUyMHN0dWRlbnRzJTIwcGxheWluZ3xlbnwxfHx8fDE3NzA4NDk4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Science Labs',
    description: 'Advanced physics, chemistry, and biology labs',
    image: 'https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MDgxODA4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const admissionSteps = [
  { step: 1, title: 'Online Application', description: 'Fill the admission form online' },
  { step: 2, title: 'Document Submission', description: 'Upload required documents' },
  { step: 3, title: 'Entrance Test', description: 'Appear for assessment test' },
  { step: 4, title: 'Interview', description: 'Personal interaction with faculty' },
  { step: 5, title: 'Admission Confirmation', description: 'Fee payment and enrollment' },
];

export function LandingPage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="leading-none">Excellence Academy</h3>
                <p className="text-xs text-muted-foreground">Shaping Future Leaders</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm hover:text-blue-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-blue-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('programs')} className="text-sm hover:text-blue-600 transition-colors">
                Programs
              </button>
              <button onClick={() => scrollToSection('admissions')} className="text-sm hover:text-blue-600 transition-colors">
                Admissions
              </button>
              <button onClick={() => scrollToSection('facilities')} className="text-sm hover:text-blue-600 transition-colors">
                Facilities
              </button>
              <button onClick={() => scrollToSection('news')} className="text-sm hover:text-blue-600 transition-colors">
                News
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-blue-600 transition-colors">
                Contact
              </button>
              <Button onClick={() => navigate('/login')} className="bg-blue-600 hover:bg-blue-700">
                Portal Login
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="flex flex-col p-4 gap-2">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 px-4 hover:bg-gray-50 rounded-lg">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 px-4 hover:bg-gray-50 rounded-lg">
                About
              </button>
              <button onClick={() => scrollToSection('programs')} className="text-left py-2 px-4 hover:bg-gray-50 rounded-lg">
                Programs
              </button>
              <button onClick={() => scrollToSection('admissions')} className="text-left py-2 px-4 hover:bg-gray-50 rounded-lg">
                Admissions
              </button>
              <button onClick={() => scrollToSection('facilities')} className="text-left py-2 px-4 hover:bg-gray-50 rounded-lg">
                Facilities
              </button>
              <button onClick={() => scrollToSection('news')} className="text-left py-2 px-4 hover:bg-gray-50 rounded-lg">
                News
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 px-4 hover:bg-gray-50 rounded-lg">
                Contact
              </button>
              <Button onClick={() => navigate('/login')} className="bg-blue-600 hover:bg-blue-700 mt-2">
                Portal Login
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                <Award className="w-3 h-3 mr-1" />
                ISO 9001:2015 Certified
              </Badge>
              <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl">
                Welcome to Excellence Academy
              </h1>
              <p className="text-blue-100 text-lg mb-8">
                Empowering young minds with quality education, modern facilities, and holistic development since 2001. Join us in shaping the leaders of tomorrow.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection('admissions')}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  onClick={() => scrollToSection('about')}
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765133469414-02f4e445df19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYW1wdXMlMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NzA4MzkxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="School Campus"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Bar */}
      <section className="bg-white py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <h2 className="text-blue-600 mb-2">{achievement.value}</h2>
                <p className="text-muted-foreground">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-50 text-blue-600 border-blue-200 mb-4">Why Choose Us</Badge>
            <h2 className="mb-4">World-Class Education & Facilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide a nurturing environment where students excel academically, grow personally, and develop skills for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-50 text-blue-600 border-blue-200 mb-4">Academic Programs</Badge>
            <h2 className="mb-4">Our Educational Programs</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive curriculum designed to nurture academic excellence and holistic development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover:border-blue-300 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <program.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-2">{program.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{program.grades}</p>
                <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-50 text-blue-600 border-blue-200 mb-4">Infrastructure</Badge>
            <h2 className="mb-4">World-Class Facilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              State-of-the-art infrastructure designed to provide the best learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section id="admissions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-50 text-blue-600 border-blue-200 mb-4">Admissions 2026-27</Badge>
            <h2 className="mb-4">Admission Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Simple and transparent admission process to get your child enrolled in Excellence Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 h-full">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h4 className="mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-3 z-10">
                    <ChevronRight className="w-6 h-6 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={() => navigate('/login')} size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Application
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <Badge className="bg-blue-50 text-blue-600 border-blue-200 mb-4">Latest Updates</Badge>
              <h2 className="mb-2">News & Events</h2>
              <p className="text-muted-foreground">Stay updated with the latest happenings at our school</p>
            </div>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                    {item.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                  <h3 className="mb-3">{item.title}</h3>
                  <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-50 text-blue-600 border-blue-200 mb-4">Testimonials</Badge>
            <h2 className="mb-4">What Parents Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from our community of satisfied parents and students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-50 text-blue-600 border-blue-200 mb-4">Get in Touch</Badge>
            <h2 className="mb-4">Contact Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to us for any inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="mb-2">Visit Us</h4>
              <p className="text-sm text-muted-foreground">
                123 Education Street, Knowledge Park<br />
                New Delhi - 110001, India
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="mb-2">Call Us</h4>
              <p className="text-sm text-muted-foreground">
                +91 11 1234 5678<br />
                +91 98765 43210
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="mb-2">Email Us</h4>
              <p className="text-sm text-muted-foreground">
                info@excellenceacademy.edu<br />
                admissions@excellenceacademy.edu
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white">Excellence Academy</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Shaping future leaders through quality education and holistic development.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="text-gray-400 hover:text-white transition-colors">Programs</button></li>
                <li><button onClick={() => scrollToSection('admissions')} className="text-gray-400 hover:text-white transition-colors">Admissions</button></li>
                <li><button onClick={() => scrollToSection('facilities')} className="text-gray-400 hover:text-white transition-colors">Facilities</button></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Academic Calendar</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fee Structure</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Faculty</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Alumni</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-white">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Excellence Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
