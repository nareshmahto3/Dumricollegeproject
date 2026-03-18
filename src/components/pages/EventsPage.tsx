import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { motion } from 'motion/react';
import { Search, Calendar, MapPin, Clock, Users, ChevronRight, Filter } from 'lucide-react';

type EventCategory = 'all' | 'academic' | 'cultural' | 'sports' | 'workshop' | 'celebration';

interface Event {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  attendees?: number;
  status: 'upcoming' | 'past';
  organizer: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Annual Cultural Fest 2026',
    category: 'cultural',
    date: '2026-04-15',
    time: '10:00 AM - 6:00 PM',
    location: 'College Auditorium',
    description: 'Join us for our grand annual cultural fest featuring dance, music, drama, and art competitions. Students from all departments will showcase their talents.',
    image: 'https://images.unsplash.com/photo-1708553060169-f94d72cc0b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwYW5udWFsJTIwZnVuY3Rpb24lMjBjdWx0dXJhbCUyMGV2ZW50fGVufDF8fHx8MTc3MzU5NzMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    attendees: 500,
    status: 'upcoming',
    organizer: 'Cultural Committee'
  },
  {
    id: '2',
    title: 'Inter-College Sports Day',
    category: 'sports',
    date: '2026-03-25',
    time: '8:00 AM - 5:00 PM',
    location: 'Sports Ground',
    description: 'Annual sports competition featuring cricket, football, volleyball, athletics, and more. Inter-college teams will compete for the championship trophy.',
    image: 'https://images.unsplash.com/photo-1763561950978-2675d755f80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNwb3J0cyUyMGRheSUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc3MzU5NzMxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    attendees: 350,
    status: 'upcoming',
    organizer: 'Sports Department'
  },
  {
    id: '3',
    title: 'Science & Innovation Exhibition',
    category: 'academic',
    date: '2026-04-01',
    time: '9:00 AM - 4:00 PM',
    location: 'Science Block',
    description: 'Students will present innovative science projects, models, and experiments. Open to all science stream students with prizes for best projects.',
    image: 'https://images.unsplash.com/photo-1712903911024-0503895511b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZXhoaWJpdGlvbiUyMHN0dWRlbnRzJTIwcHJvamVjdHxlbnwxfHx8fDE3NzM1OTczMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    attendees: 200,
    status: 'upcoming',
    organizer: 'Science Department'
  },
  {
    id: '4',
    title: 'Career Guidance Workshop',
    category: 'workshop',
    date: '2026-03-28',
    time: '11:00 AM - 2:00 PM',
    location: 'Seminar Hall',
    description: 'Expert career counselors will guide students on higher education options, entrance exams, and career planning after intermediate.',
    image: 'https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc2VtaW5hciUyMHdvcmtzaG9wJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzczNTk3MzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    attendees: 150,
    status: 'upcoming',
    organizer: 'Career Counseling Cell'
  },
  {
    id: '5',
    title: 'Annual Convocation 2025',
    category: 'celebration',
    date: '2025-12-10',
    time: '10:00 AM - 1:00 PM',
    location: 'Main Campus',
    description: 'Graduation ceremony for the outgoing batch with certificate distribution, speeches, and cultural performances.',
    image: 'https://images.unsplash.com/photo-1762438136254-377496840891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjb2xsZWdlJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzczNTk3MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    attendees: 600,
    status: 'past',
    organizer: 'Administration'
  },
  {
    id: '6',
    title: 'Youth Festival 2025',
    category: 'cultural',
    date: '2025-11-20',
    time: '9:00 AM - 7:00 PM',
    location: 'College Campus',
    description: 'Three-day youth festival with music, dance, drama, fine arts competitions, and celebrity performances.',
    image: 'https://images.unsplash.com/photo-1761124884983-7ae144e8ff48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmVzdCUyMGNlbGVicmF0aW9uJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzczNTk3MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    attendees: 800,
    status: 'past',
    organizer: 'Student Council'
  },
  {
    id: '7',
    title: 'National Mathematics Olympiad',
    category: 'academic',
    date: '2026-04-10',
    time: '10:00 AM - 1:00 PM',
    location: 'Examination Hall',
    description: 'Mathematics competition for students preparing for national level olympiads with practice sessions and mock tests.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    attendees: 120,
    status: 'upcoming',
    organizer: 'Mathematics Department'
  },
  {
    id: '8',
    title: 'Environmental Awareness Drive',
    category: 'academic',
    date: '2026-03-22',
    time: '8:00 AM - 12:00 PM',
    location: 'College & Nearby Areas',
    description: 'Tree plantation drive, cleanliness campaign, and awareness sessions on environmental conservation and sustainability.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    attendees: 250,
    status: 'upcoming',
    organizer: 'NSS Unit'
  }
];

const categories = [
  { id: 'all', label: 'All Events', color: 'gray' },
  { id: 'academic', label: 'Academic', color: 'blue' },
  { id: 'cultural', label: 'Cultural', color: 'purple' },
  { id: 'sports', label: 'Sports', color: 'green' },
  { id: 'workshop', label: 'Workshop', color: 'orange' },
  { id: 'celebration', label: 'Celebration', color: 'pink' }
];

export function EventsPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'upcoming' | 'past'>('all');

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Separate upcoming and past events
  const upcomingEvents = filteredEvents.filter(e => e.status === 'upcoming');
  const pastEvents = filteredEvents.filter(e => e.status === 'past');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: EventCategory) => {
    const cat = categories.find(c => c.id === category);
    return cat?.color || 'gray';
  };

  const getCategoryBadgeClass = (category: EventCategory) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-700',
      purple: 'bg-purple-100 text-purple-700',
      green: 'bg-green-100 text-green-700',
      orange: 'bg-orange-100 text-orange-700',
      pink: 'bg-pink-100 text-pink-700',
      gray: 'bg-gray-100 text-gray-700'
    };
    const color = getCategoryColor(category);
    return colorMap[color] || colorMap.gray;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner */}
      <section className="relative h-[300px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-4 text-sm">
            <button onClick={() => navigate('/')} className="text-white hover:underline">
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white">Events</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 font-serif">
            College Events
          </h1>

          {/* Tagline */}
          <p className="text-white/90 text-base max-w-3xl leading-relaxed">
            Stay updated with all the exciting events, workshops, and celebrations happening at our college
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-gray-50 border-b py-6 sticky top-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedStatus('all')}
                className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                  selectedStatus === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedStatus('upcoming')}
                className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                  selectedStatus === 'upcoming'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setSelectedStatus('past')}
                className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                  selectedStatus === 'past'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Past
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as EventCategory)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Upcoming Events */}
          {(selectedStatus === 'all' || selectedStatus === 'upcoming') && upcomingEvents.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                <h2 className="text-3xl font-light text-gray-900">Upcoming Events</h2>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {upcomingEvents.length}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBadgeClass(event.category)}`}>
                          {categories.find(c => c.id === event.category)?.label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {event.title}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span>{event.location}</span>
                        </div>
                        {event.attendees && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="w-4 h-4 text-blue-600" />
                            <span>{event.attendees} Expected Attendees</span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {event.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-xs text-gray-500">
                          Organized by: {event.organizer}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Past Events */}
          {(selectedStatus === 'all' || selectedStatus === 'past') && pastEvents.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gray-400 rounded-full"></div>
                <h2 className="text-3xl font-light text-gray-900">Past Events</h2>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {pastEvents.length}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow opacity-90"
                  >
                    {/* Image with grayscale overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBadgeClass(event.category)}`}>
                          {categories.find(c => c.id === event.category)?.label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {event.title}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span>{event.location}</span>
                        </div>
                        {event.attendees && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span>{event.attendees} Attendees</span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {event.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-xs text-gray-500">
                          Organized by: {event.organizer}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Events Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedStatus('all');
                }}
                className="text-blue-600 hover:underline font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
