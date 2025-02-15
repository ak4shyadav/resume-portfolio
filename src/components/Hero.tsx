import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import profilePic from "../assets/profile.jpg";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
         <motion.img
        src={profilePic} // Change this to your profile image path
        alt="Profile"
        className="w-42 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg ml-20"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Akash Yadav
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Full Stack Developer
        </motion.p>
        
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="https://github.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:akash@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}