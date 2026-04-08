import { motion } from 'motion/react';
import { Quote, Sparkles, Award, Heart } from 'lucide-react';

export function Founder() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-light text-gray-900 mb-5 font-serif leading-tight">
          Our Founder
        </h2>
        <p className="text-gray-600 text-base leading-7">
          The visionary behind Jharkhand Commerce Inter College's establishment and continued legacy of excellence.
        </p>
      </div>

      {/* Founder Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 mb-8"
      >
        <div className="relative h-80 bg-gradient-to-br from-[#2F584F] to-[#1a3329]">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="Founder"
            className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2F584F] via-[#2F584F]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-4xl font-bold mb-2">Late Shiva Mahto</h3>
            <p className="text-[#FDC72F] font-semibold text-xl">Founder & Visionary</p>
            <p className="text-white/90 mt-2">1914 – 2022</p>
          </div>
        </div>

        <div className="p-8">
          {/* Quote */}
          <div className="bg-[#F6F4EE] rounded-lg p-6 mb-6">
            <Quote className="w-10 h-10 text-[#FDC72F] fill-[#FDC72F] mb-4" />
            <p className="text-gray-900 text-lg italic leading-8">
              "Education is not just about acquiring knowledge; it is about building character, 
              fostering values, and empowering individuals to make a positive difference in society."
            </p>
            <p className="text-gray-700 font-semibold mt-4">- Late Shiva Mahto</p>
          </div>

          {/* Biography */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
             Shiva Mahto (1914–2022) was an Indian politician, social reformer, and educationist from Jharkhand. A founding member of the Jharkhand Mukti Morcha (JMM), he played a central role in the Jharkhand statehood movement and served multiple terms as a legislator from the Dumri constituency. Revered as a pioneer of education and tribal rights, he was widely known as “Shiva Da” in his region.
            </p>
            <p>
Key facts
Born: 1914, Sijua village, Bokaro district, Jharkhand

Died: February 28, 2022, Dumri, Jharkhand

Political party: Jharkhand Mukti Morcha (Binod Bihari Mahato group)

Legislative terms: MLA, Dumri (1980, 1985, 1995)

Major focus: Education, displacement rehabilitation, social justice

Political life and Jharkhand movement
Mahto was among the earliest leaders to mobilize coalfield workers, peasants, and tribal communities for a separate Jharkhand state. Working alongside Binod Bihari Mahato, Shibu Soren, and other regional activists, he became a respected figure in grassroots politics. He also helped form a faction of the JMM in the 1990s, emphasizing self-determination and ethical governance. 

Contributions to education and society
After his first election in 1980, Mahto prioritized educational access in rural Giridih. He founded the Jharkhand Commerce Inter College at Ghutuwali and supported the establishment of additional schools and colleges in Dumri. Despite limited formal schooling himself, he viewed education as the foundation for empowerment of marginalized groups. 

Social reform and legacy
Beyond politics, Mahto led campaigns against moneylenders and dowry practices through organizations such as the Shivaji Samaj. </p>
           <p>He secured employment for displaced villagers in industrial projects like the Bokaro coalfields and championed land and labor rights. Remembered for his humility and “clean image,” Mahto was mentor to leaders including former education minister Jagarnath Mahto. His death at age 108 marked the passing of one of Jharkhand’s last generation of statehood-era visionaries. </p>  
           
            <p>
              Despite facing numerous challenges, he persevered with unwavering determination to create an institution 
              that would not only impart academic knowledge but also instill strong moral values and social responsibility 
              in students. His vision was to create leaders who would contribute to nation-building while maintaining 
              their cultural roots.
            </p>
            <p>
              Under his guidance, the college grew from a modest beginning with just 200 students to become one of the 
              most respected educational institutions in the state. His emphasis on holistic education, combining academic 
              excellence with character development, continues to be the cornerstone of our institution's philosophy.
            </p>
            
          </div>
        </div>
      </motion.div>

      {/* Legacy Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">His Enduring Legacy</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
            <Sparkles className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Educational Vision</h4>
            <p className="text-gray-700">
              Pioneered accessible quality education in the region, opening doors for thousands of students.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
            <Award className="w-10 h-10 text-green-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Academic Excellence</h4>
            <p className="text-gray-700">
              Established rigorous academic standards that continue to define our institution today.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
            <Heart className="w-10 h-10 text-purple-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Social Impact</h4>
            <p className="text-gray-700">
              Created a lasting impact on society through education, upliftment, and community service.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Memorial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 bg-gradient-to-br from-[#2F584F] to-[#1a3329] rounded-2xl p-8 text-white text-center"
      >
        <p className="text-lg leading-relaxed">
          His legacy lives on through the thousands of students who have passed through these halls, 
          <br className="hidden lg:block" />
          each carrying forward his vision of creating a better, more educated society.
        </p>
        <p className="text-[#FDC72F] font-semibold text-xl mt-4">
          In Loving Memory of Our Founder
        </p>
      </motion.div>
    </>
  );
}
