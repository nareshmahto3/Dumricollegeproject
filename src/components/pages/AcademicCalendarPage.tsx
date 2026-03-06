import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import {
  Calendar,
  Clock,
  ChevronRight,
  Download,
  FileText,
  AlertCircle,
} from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function AcademicCalendarPage() {
  const navigate = useNavigate();

  const semesterEvents = [
    {
      period: 'Fall Semester 2026',
      events: [
        { date: 'August 1-15', event: 'Course Registration', type: 'registration' },
        { date: 'August 20', event: 'Classes Begin', type: 'important' },
        { date: 'September 15', event: 'Last Date to Add/Drop Courses', type: 'deadline' },
        { date: 'October 10-12', event: 'Mid-Semester Examinations', type: 'exam' },
        { date: 'November 15-30', event: 'End-Semester Examinations', type: 'exam' },
        { date: 'December 5', event: 'Results Declaration', type: 'important' },
      ],
    },
    {
      period: 'Spring Semester 2027',
      events: [
        { date: 'January 5-15', event: 'Course Registration', type: 'registration' },
        { date: 'January 20', event: 'Classes Begin', type: 'important' },
        { date: 'February 15', event: 'Last Date to Add/Drop Courses', type: 'deadline' },
        { date: 'March 10-12', event: 'Mid-Semester Examinations', type: 'exam' },
        { date: 'April 20-May 5', event: 'End-Semester Examinations', type: 'exam' },
        { date: 'May 15', event: 'Results Declaration', type: 'important' },
      ],
    },
  ];

  const holidays = [
    { date: 'August 15', event: 'Independence Day' },
    { date: 'October 2', event: 'Gandhi Jayanti' },
    { date: 'October 24', event: 'Dussehra' },
    { date: 'November 12', event: 'Diwali Break (5 days)' },
    { date: 'December 25', event: 'Christmas' },
    { date: 'January 26', event: 'Republic Day' },
    { date: 'March 8', event: 'Holi' },
    { date: 'April 14', event: 'Ambedkar Jayanti' },
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'registration':
        return 'bg-blue-100 text-blue-800';
      case 'important':
        return 'bg-green-100 text-green-800';
      case 'deadline':
        return 'bg-orange-100 text-orange-800';
      case 'exam':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <CarouselHeader />

      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F584F]/80 to-[#00192C]/90"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-16">
          <div className="flex items-center gap-2 mb-5">
            <button onClick={() => navigate('/')} className="text-white text-base hover:underline">
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <button onClick={() => navigate('/academics')} className="text-white text-base hover:underline">
              Academics
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-base">Academic Calendar</span>
          </div>

          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Academic Calendar 2026-27
          </h1>

          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 h-full w-[120px] bg-[#FDC72F]"></div>
          </div>

          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
            Important dates, examination schedules, and academic events for the year
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-t-[#2563EB]">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-7 h-7 text-[#2563EB]" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Download Calendar</h3>
              <p className="text-sm text-slate-600">Get the full PDF version</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-t-[#2563EB]">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-[#2563EB]" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Exam Schedule</h3>
              <p className="text-sm text-slate-600">View detailed timetable</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-t-[#2563EB]">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-7 h-7 text-[#2563EB]" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Important Notices</h3>
              <p className="text-sm text-slate-600">Stay updated</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Semester Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Semester Schedule
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Key dates and events for the academic year 2026-27
            </p>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-6"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {semesterEvents.map((semester, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-8 border-0 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-6 h-6 text-[#2563EB]" />
                    <h3 className="text-2xl font-bold text-slate-900">{semester.period}</h3>
                  </div>

                  <div className="space-y-4">
                    {semester.events.map((item, eventIdx) => (
                      <div
                        key={eventIdx}
                        className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <div className="flex-shrink-0 w-32">
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <Clock className="w-4 h-4" />
                            {item.date}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-slate-900 font-medium">{item.event}</div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(item.type)}`}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Holidays Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Holidays & Breaks
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Scheduled holidays and academic breaks throughout the year
            </p>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-6"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border-0 shadow-lg">
              <div className="grid md:grid-cols-2 gap-4">
                {holidays.map((holiday, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">{holiday.date}</div>
                      <div className="font-semibold text-slate-900">{holiday.event}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#2563EB] to-[#1e40af] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Download the complete academic calendar or contact the academic office for detailed information.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-white text-[#2563EB] hover:bg-blue-50 px-8 py-6 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Full Calendar
              </Button>
              <Button
                onClick={() => navigate('/contact')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Contact Academic Office
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}