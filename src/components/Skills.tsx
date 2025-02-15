import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    category: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    items: ["JavaScript", "TypeScript", "Python" ]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["MongoDB", "MySQL"]
  }
];

export default function Skills() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4 text-purple-600">
                {skill.icon}
                <h3 className="text-xl font-bold ml-2">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}