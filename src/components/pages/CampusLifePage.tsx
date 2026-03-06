import { useNavigate } from 'react-router';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Users,
  Trophy,
  Music,
  Palette,
  BookOpen,
  Heart,
} from 'lucide-react';

const activities = [
  {
    title: 'Sports & Athletics',
    description: 'Cricket, football, basketball, athletics, and more. Join our teams and compete at state level.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1715419048742-cb9cfe6aa54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3BvcnRzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcyNDk1MDkxfDA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    title: 'Cultural Activities',
    description: 'Annual festivals, dance performances, music competitions, and cultural celebrations.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1763890498955-13f109b2fbd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwbGlmZSUyMHN0dWRlbnRzJTIwYWN0aXZpdGllc3xlbnwxfHx8fDE3NzI0OTgzNDR8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    title: 'Arts & Literature',
    description: 'Painting, poetry, drama, and literary clubs for creative expression and artistic growth.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1767595789539-cd012af80914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcyNDg3NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Student Clubs',
    description: 'Join various clubs including debate, science, environment, and social service.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcyNDQ5ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const facilities = [
  'Modern sports complex with indoor and outdoor facilities',
  'Well-equipped auditorium for cultural events',
  'Student common rooms and recreational areas',
  'Cafeteria serving nutritious meals',
  'Hostel accommodation for outstation students',
  'Medical facilities with trained staff',
];

export function CampusLifePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1763890498955-13f109b2fbd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwbGlmZSUyMHN0dWRlbnRzJTIwYWN0aXZpdGllc3xlbnwxfHx8fDE3NzI0OTgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00192C]"></div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-5">
            <button
              onClick={() => navigate('/')}
              className="text-white text-base hover:underline"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-base">Campus Life</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Campus Life
          </h1>

          {/* Decorative Line */}
          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 w-[145px] h-[2px] bg-white"></div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-2xl">
            Experience a vibrant campus life filled with diverse activities, cultural events,
            <br />
            and opportunities for personal growth beyond the classroom.
          </p>
        </div>

        {/* Decorative Circle Element */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#FDC72F] opacity-20 blur-xl hidden lg:block"></div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#F6F4EE] py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-5 font-serif leading-tight">
              More Than Just Academics
            </h2>
            <p className="text-gray-600 text-base leading-7">
              At Dumri College, we believe in holistic development. Our vibrant campus life offers countless
              opportunities for students to explore their interests, develop new skills, make lifelong friendships,
              and create unforgettable memories.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#2F584F] rounded-full flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-[#FDC72F]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-7">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Facilities Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8 font-serif text-center">
              Campus Facilities
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FDC72F] rounded-full flex items-center justify-center mt-0.5">
                      <Heart className="w-3 h-3 text-[#2F584F]" />
                    </div>
                    <p className="text-gray-700">{facility}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#2F584F] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-light font-serif mb-4">
              Join Our Community
            </h3>
            <p className="text-white/90 leading-7 max-w-2xl mx-auto mb-8">
              Become part of a vibrant community where learning extends beyond the classroom.
              Explore your passions, develop new skills, and create memories that last a lifetime.
            </p>
            <button
              onClick={() => navigate('/apply')}
              className="bg-[#FDC72F] hover:bg-[#e5b829] text-[#2F584F] font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}