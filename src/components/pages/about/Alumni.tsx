import { motion } from 'motion/react';
import { Quote, Briefcase, Globe, Award, Users } from 'lucide-react';

export function Alumni() {
  const featuredAlumni = [
    {
      name: 'Rahul Verma',
      batch: 'Class of 2010',
      achievement: 'CEO, Tech Innovators Inc.',
      image: 'https://images.unsplash.com/photo-1758270703262-2b40b6b66be6?w=400&q=80',
      quote: 'Dumri College shaped my entrepreneurial journey and taught me the value of perseverance and innovation.',
      field: 'Technology & Business'
    },
    {
      name: 'Anita Desai',
      batch: 'Class of 2012',
      achievement: 'NASA Research Scientist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      quote: 'The research foundation I received at Dumri was invaluable. It prepared me for global challenges.',
      field: 'Aerospace Engineering'
    },
    {
      name: 'Vikram Malhotra',
      batch: 'Class of 2015',
      achievement: 'IAS Officer, Government of India',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'The values and ethics I learned here guide my commitment to public service every single day.',
      field: 'Civil Services'
    },
    {
      name: 'Priya Kapoor',
      batch: 'Class of 2008',
      achievement: 'Award-winning Author & Journalist',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
      quote: 'Dumri College encouraged my creative expression and critical thinking, shaping my literary career.',
      field: 'Literature & Media'
    },
    {
      name: 'Arjun Reddy',
      batch: 'Class of 2013',
      achievement: 'Senior Doctor, AIIMS Delhi',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
      quote: 'The rigorous academic training and emphasis on service prepared me for the medical profession.',
      field: 'Healthcare'
    },
    {
      name: 'Sneha Gupta',
      batch: 'Class of 2011',
      achievement: 'Social Entrepreneur, NGO Founder',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
      quote: 'Dumri taught me that education should lead to social transformation and meaningful impact.',
      field: 'Social Work'
    },
  ];

  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-light text-gray-900 mb-5 font-serif leading-tight">
          Our Alumni
        </h2>
        <p className="text-gray-600 text-base leading-7">
          Our graduates are making waves across industries and geographies, carrying forward the Dumri legacy
          <br className="hidden lg:block" />
          of excellence, integrity, and social responsibility.
        </p>
      </div>

      {/* Alumni Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#2F584F] to-[#1a3329] rounded-2xl p-8 mb-12 text-white"
      >
        <h3 className="text-2xl font-bold mb-6 text-center">Alumni Network At A Glance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Users className="w-10 h-10 text-[#FDC72F] mx-auto mb-3" />
            <div className="text-4xl font-bold mb-1">50,000+</div>
            <div className="text-white/90 text-sm">Total Alumni</div>
          </div>
          <div className="text-center">
            <Globe className="w-10 h-10 text-[#FDC72F] mx-auto mb-3" />
            <div className="text-4xl font-bold mb-1">40+</div>
            <div className="text-white/90 text-sm">Countries</div>
          </div>
          <div className="text-center">
            <Briefcase className="w-10 h-10 text-[#FDC72F] mx-auto mb-3" />
            <div className="text-4xl font-bold mb-1">85%</div>
            <div className="text-white/90 text-sm">Employment Rate</div>
          </div>
          <div className="text-center">
            <Award className="w-10 h-10 text-[#FDC72F] mx-auto mb-3" />
            <div className="text-4xl font-bold mb-1">500+</div>
            <div className="text-white/90 text-sm">Awards Won</div>
          </div>
        </div>
      </motion.div>

      {/* Featured Alumni */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Alumni Stories</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredAlumni.map((alumni, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-[#2F584F] transition-all"
            >
              {/* Image */}
              <div className="relative h-64">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F584F] via-[#2F584F]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-[#FDC72F] text-[#2F584F] text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                    {alumni.field}
                  </div>
                  <h4 className="text-2xl font-bold mb-1">{alumni.name}</h4>
                  <p className="text-white/90 text-sm">{alumni.batch}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#2F584F] font-bold text-lg mb-4">{alumni.achievement}</p>
                
                <div className="bg-[#F6F4EE] rounded-lg p-4 mb-4">
                  <Quote className="w-6 h-6 text-[#FDC72F] fill-[#FDC72F] mb-2" />
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    "{alumni.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Alumni Achievements by Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Alumni Making Impact Across Fields</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { field: 'Business & Entrepreneurship', count: '200+ CEOs & Founders', color: 'blue' },
            { field: 'Science & Technology', count: '150+ Scientists & Engineers', color: 'green' },
            { field: 'Civil Services', count: '100+ IAS/IPS Officers', color: 'purple' },
            { field: 'Healthcare', count: '300+ Doctors & Specialists', color: 'red' },
            { field: 'Education & Academia', count: '500+ Professors & Teachers', color: 'yellow' },
            { field: 'Arts & Media', count: '80+ Artists & Journalists', color: 'pink' },
          ].map((category, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all">
              <h4 className="font-bold text-gray-900 mb-2">{category.field}</h4>
              <p className="text-[#2F584F] font-semibold">{category.count}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
      >
        <h3 className="text-3xl font-bold mb-4">Join Our Alumni Network</h3>
        <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
          Stay connected with your alma mater, mentor current students, and be part of our thriving global community.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
          Register as Alumni
        </button>
      </motion.div>
    </>
  );
}
