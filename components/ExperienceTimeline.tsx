'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Award, BookOpen, GraduationCap, Code2 } from 'lucide-react'

const ExperienceTimeline = () => {
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
      // notes: Balão-guia de comentários para personalização - EXEMPLO DE USO
      notes: "Disciplinas serão atualizadas conforme o avanço!"
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

  const TimelineItem = ({ experience, index }: { experience: any; index: number }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "center center"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2])
    const x = useTransform(scrollYProgress, [0, 0.5, 1], index % 2 === 0 ? [-100, 0, 100] : [100, 0, -100])

    const getLevelColor = (level: string) => {
      switch(level) {
        case 'graduation': return 'from-blue-400 to-blue-600'
        case 'self-taught': return 'from-purple-400 to-purple-600' 
        case 'technical': return 'from-green-400 to-green-600'
        default: return 'from-orange-400 to-orange-600'
      }
    }

    const getLevelIcon = (level: string) => {
      switch(level) {
        case 'graduation': return <GraduationCap className="w-3 h-3" />
        case 'self-taught': return <BookOpen className="w-3 h-3" />
        case 'technical': return <Code2 className="w-3 h-3" />
        default: return <Award className="w-3 h-3" />
      }
    }

    return (
      <motion.div
        ref={ref}
        style={{ opacity, x }}
        className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
      >
        <div className={`max-w-lg ${index % 2 === 0 ? 'ml-0' : 'mr-0'}`}>
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-effect p-6 rounded-2xl relative hover-glow"
          >
            {/* Timeline Dot */}
            <div className={`absolute top-6 w-4 h-4 rounded-full bg-gradient-to-r ${getLevelColor(experience.level)} ${index % 2 === 0 ? '-right-2' : '-left-2'}`}></div>

            {/* Level Badge */}
            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gradient-to-r ${getLevelColor(experience.level)} text-dark-50`}>
              {getLevelIcon(experience.level)}
              {experience.type.toUpperCase()}
            </div>

            {/* Content */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2 text-dark-100">{experience.title}</h3>
              <p className="text-primary-500 font-semibold mb-2">{experience.company}</p>
              
              <div className="flex items-center space-x-4 text-dark-400 text-sm mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
              
              <p className="text-dark-300 leading-relaxed mb-4">{experience.description}</p>
              
              {/* Notas Personalizáveis */}
              {experience.notes && (
                <div className="mt-3 p-3 bg-primary-500/10 rounded-lg">
                  <p className="text-primary-300 text-sm italic">
                    💡 {experience.notes}
                  </p>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {experience.technologies.map((tech: string) => (
                <span key={tech} className="px-3 py-1 bg-dark-800/50 rounded-full text-sm text-dark-400 border border-dark-700">
                  {tech}
                </span>
              ))}
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap gap-2">
              {experience.achievements.map((achievement: string) => (
                <span key={achievement} className="flex items-center gap-1 px-2 py-1 bg-primary-500/20 rounded text-xs text-primary-300">
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

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
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

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-primary-600 h-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>

        {/* Progresso Educacional */}
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
            <div className="flex justify-between items-center text-sm text-dark-400">
              <span>Início</span>
              <span>Técnico</span>
              <span>Graduação</span>
              <span>Especialização</span>
            </div>
            <div className="w-full bg-dark-800 rounded-full h-2 mt-2">
              <div className="bg-gradient-to-r from-green-400 via-blue-400 h-2 rounded-full w-2/4"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceTimeline

