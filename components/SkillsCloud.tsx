'use client'

import { motion } from 'framer-motion'
import { Palette, Database, Zap } from 'lucide-react'

const skillCategories = [
  {
    category: "Frontend",
    icon: Palette,
    color: "from-cyan-400 to-blue-500",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Database,
    color: "from-green-400 to-emerald-500",
    skills: ["Node.js", "Python", "MySQL", "REST APIs"],
  },
  {
    category: "UI/UX",
    icon: Zap,
    color: "from-yellow-400 to-amber-500",
    skills: ["Figma", "Prototyping", "Design Systems"],
  },
]

const stats = [
  { number: '10+', label: 'Tecnologias' },
  { number: '2+', label: 'Anos Exp' },
  { number: '3+', label: 'Projetos Pessoais' },
]

const SkillsCloud = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-dynamic-lg font-black mb-4">
            <span className="gradient-text">Skills</span> & Tecnologias
          </h2>
        </motion.div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl hover-glow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <IconComponent className="w-6 h-6 text-dark-50" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-100">{category.category}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-dark-400 hover:text-primary-300 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills em destaque */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-dark-200">Tecnologias em Destaque</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skillCategories.flatMap((category, categoryIndex) =>
              category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={`${category.category}-${skill}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ delay: (categoryIndex * 5 + skillIndex) * 0.06 }}
                  viewport={{ once: true }}
                >
                  <div className={`bg-gradient-to-r ${category.color} px-6 py-3 rounded-full font-semibold text-dark-50 shadow-lg`}>
                    {skill}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-3 gap-8 max-w-md">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-dark-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsCloud
