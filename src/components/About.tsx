import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate Full Stack Developer currently pursuing my B.Tech at MNIT Jaipur. 
            I love building web applications that solve real-world problems and create meaningful user experiences. 
            With a strong foundation in both frontend and backend technologies, I enjoy taking on challenging projects 
            that push my boundaries and help me grow as a developer.
          </p>
        </motion.div>
      </div>
    </div>
  );
}