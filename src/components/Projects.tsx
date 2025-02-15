import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://astonishing-fairy-eb128d.netlify.app/",
    githubLink: "https://github.com/ak4shyadav/ecommerce",
    longDescription: "An advanced e-commerce platform featuring user authentication, product management, shopping cart functionality, and secure payment integration. Built with React for the frontend, Node.js and Express for the backend, and MongoDB for the database."
  },
  {
    title: "Finance Management App",
    description: "A collaborative finance management application with real-time tracking, automated analysis, and financial report generation.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "TypeScript", "Tailwind", "Firebase"],
    liveLink: "https://resplendent-klepon-5c101d.netlify.app/",
    githubLink: "https://github.com/ak4shyadav/FinAI",
    longDescription: "A comprehensive finance management solution that helps individuals and businesses track their expenses, manage budgets, and monitor financial goals. Features include real-time expense tracking, automated budget analysis, and financial report generation."
  },
  {
    title: "Weather Dashboard",
    description: "A weather forecasting application with interactive maps",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "APIs", "Charts.js", "Tailwind"],
    liveLink: "https://venerable-crumble-f2e904.netlify.app/",
    githubLink: "https://github.com/ak4shyadav/weatherapp",
    longDescription: "An interactive weather dashboard that provides detailed weather forecasts, interactive maps, and historical weather data visualization. Built using React and integrates with multiple weather APIs."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}