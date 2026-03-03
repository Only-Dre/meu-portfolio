'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Palette, 
  Database, 
  Zap,
} from 'lucide-react'

const SkillsCloud = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Palette,
      color: "from-cyan-400 to-blue-500",
      skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"]
    },
    {
      category: "Backend", 
      icon: Database,
      color: "from-green-400 to-emerald-500",
      skills: ["Node.js", "Python", "MySQL", "REST APIs"]
    },
    {
      category: "UI/UX",
      icon: Zap,
      color: "from-yellow-400 to-amber-500",
      skills: ["Figma", "Prototyping", "Design Systems"]
    },
  ]

  const SkillPill = ({ skill, category, index }: { skill: string; category: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{ 
      scale: 1.1, 
      y: -5,
      transition: { duration: 0.2 }
    }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      type: "spring",
      stiffness: 100
    }}
    viewport={{ once: true, margin: "-50px" }}
    className="cursor-pointer"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`bg-gradient-to-r ${category.color} px-6 py-3 rounded-full font-semibold text-dark-50 shadow-lg relative overflow-hidden`}
    >
      <span className="relative z-10">{skill}</span>
      {/* Efeito de brilho ao hover (opcional - pode manter ou remover) */}
      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-500"></div>
    </motion.div>
  </motion.div>
)

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-primary-600"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
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
                className="glass-effect p-6 rounded-2xl group hover-glow"
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
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-dark-400 hover:text-primary-300 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Nuvem de Skills Interativa */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-dark-200">
            Tecnologias em Destaque
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skillCategories.flatMap((category, categoryIndex) => 
              category.skills.map((skill, skillIndex) => (
                <SkillPill 
                  key={`${category.category}-${skill}`}
                  skill={skill}
                  category={category}
                  index={categoryIndex * 5 + skillIndex}
                />
              ))
            )}
          </div>
        </motion.div>

        {/* Stats Footer - CENTRALIZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl">
            {[
              { number: '10+', label: 'Tecnologias' },
              { number: '2+', label: 'Anos Exp' },
              { number: '3+', label: 'Projetos Pessoais' }
            ].map((stat, index) => (
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
