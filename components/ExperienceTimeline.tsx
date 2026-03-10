'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, BookOpen, GraduationCap, Code2 } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: "Graduação em ADS",
    company: "SENAI - Serviço Nacional de Aprendizagem Industrial",
    period: "2025 - 2026 (Previsão)",
    location: "São Paulo, Brasil",
    description: "Curso superior de Tecnologia em Análise e Desenvolvimento de Sistemas. Foco em programação, banco de dados, engenharia de software, gestão de projetos e muito mais.",
    technologies: ["Java", "POO", "Big Data", "SQL", "HTML/CSS", "JavaScript", "Python", "Git", "Prototipagem", "Metodologias Ágeis"],
    achievements: ["2º Ano Cursando", "Projetos Acadêmicos"],
    level: "graduation",
    type: "education",
    notes: "Disciplinas serão atualizadas conforme o avanço!",
  },
  {
    id: 2,
    title: "Mini Curso de Python",
    company: "SENAI - Serviço Nacional de Aprendizagem Industrial",
    period: "2024",
    location: "São Paulo, Brasil",
    description: "Aprendizado intermediário de Python, incluindo sintaxe, estruturas de dados, bibliotecas populares e desenvolvimento de pequenos projetos para prática.",
    technologies: ["Python", "Pandas", "tkinter"],
    achievements: ["Certificado de Conclusão", "Projeto de Automação com Python"],
    level: "graduation",
    type: "education",
  },
  {
    id: 3,
    title: "Curso de Desenho Digital",
    company: "Estúdio Lucidi",
    period: "2021 - 2023",
    location: "São Paulo, Brasil",
    description: "Curso de desenho digital focado em arte para jogos, ilustração e design gráfico. Aprendizado de ferramentas como Photoshop, Illustrator e técnicas de arte digital.",
    technologies: ["Photoshop", "Illustrator", "Design Gráfico"],
    achievements: ["Desenhos para Jogos", "Ilustrações Publicadas"],
    level: "self-taught",
    type: "personal-development",
  },
]

const levelColor: Record<string, string> = {
  graduation: 'from-blue-400 to-blue-600',
  'self-taught': 'from-purple-400 to-purple-600',
  technical: 'from-green-400 to-green-600',
}

const levelIcon: Record<string, React.ReactNode> = {
  graduation: <GraduationCap className="w-3 h-3" />,
  'self-taught': <BookOpen className="w-3 h-3" />,
  technical: <Code2 className="w-3 h-3" />,
}

const TimelineItem = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const color = levelColor[experience.level] ?? 'from-orange-400 to-orange-600'
  const icon = levelIcon[experience.level] ?? <Award className="w-3 h-3" />

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
    >
      <div className="max-w-xl w-full">
        <motion.div
          whileHover={{ scale: 1.02, y: -3 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="glass-effect p-6 rounded-2xl relative border border-white/5 hover-glow"
        >
          {/* Timeline dot */}
          <div
            className={`absolute top-6 w-3 h-3 rounded-full bg-gradient-to-r ${color} ${
              index % 2 === 0 ? '-right-1.5' : '-left-1.5'
            }`}
          />

          {/* Badge */}
          <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gradient-to-r ${color} text-dark-50`}>
            {icon}
            {experience.type.toUpperCase()}
          </div>

          <h3 className="text-xl font-bold mb-1 text-dark-100">{experience.title}</h3>
          <p className="text-primary-500 font-semibold mb-2">{experience.company}</p>

          <div className="flex items-center gap-4 text-dark-400 text-sm mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
          </div>

          <p className="text-dark-300 leading-relaxed mb-4">{experience.description}</p>

          {experience.notes && (
            <div className="mt-3 p-3 bg-primary-500/10 rounded-lg">
              <p className="text-primary-300 text-sm italic">💡 {experience.notes}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4 mt-4">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-dark-800/50 rounded-full text-sm text-dark-400 border border-dark-700 hover:text-primary-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.achievements.map((achievement) => (
              <span
                key={achievement}
                className="flex items-center gap-1 px-2 py-1 bg-primary-500/20 rounded text-xs text-primary-300"
              >
                <Award className="w-3 h-3" />
                {achievement}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-dynamic-lg font-black mb-4">
            Minha <span className="gradient-text">Jornada</span> de Aprendizado
          </h2>
          <p className="text-dynamic-md text-dark-300 max-w-3xl mx-auto leading-relaxed">
            Uma trajetória educacional focada em desenvolvimento de software,
            combinando estudos formais com aprendizado autodirigido e prática constante.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600 h-full" />
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">🎓 Progresso Acadêmico</h3>
            <p className="text-dark-300 mb-4">
              Evolução constante no aprendizado de desenvolvimento de software
            </p>
            <div className="flex justify-between items-center text-sm text-dark-400 mb-2">
              <span>Início</span>
              <span>Técnico</span>
              <span>Graduação</span>
              <span>Especialização</span>
            </div>
            <div className="w-full bg-dark-800 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-400 via-blue-400 to-blue-500 h-2 rounded-full w-2/4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
