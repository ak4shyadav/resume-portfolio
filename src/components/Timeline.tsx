import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const experiences = [
  {
    year: '2021 - 2025',
    institution: 'MNIT Jaipur',
    position: 'B.Tech Student',
    description: 'Currently pursuing Bachelor of Technology'
  }
];

export default function Timeline() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
                    <span className="text-sm text-purple-600 font-semibold">{exp.year}</span>
                    <h3 className="text-xl font-bold mt-1">{exp.position}</h3>
                    <h4 className="text-gray-600 font-medium">{exp.institution}</h4>
                    <p className="text-gray-500 mt-2">{exp.description}</p>
                  </div>
                </div>
                <div className="w-12 h-12 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}