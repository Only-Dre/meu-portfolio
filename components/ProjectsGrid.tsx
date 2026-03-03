'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Github, X } from 'lucide-react'
import { useState, useMemo, useCallback } from 'react'

interface Project {
  id: number
  title: string
  description: string
  category: string
  technologies: string[]
  status: string
  github: string
  live: string
  inProgress: boolean
  note?: string
  details?: {
    projectDemands?: string
    longDescription?: string
    challenges?: string[]
    solutions?: string[]
    learnings?: string[]
  }
}

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = useMemo(() => [
    {
      id: 1,
      title: "SBX - Cofres Inteligentes",
      description: "Sistema completo de cofres inteligentes para entregas residenciais com IoT.",
      category: "Full Stack",
      technologies: ["React", "Vite", "MQTT", "TLS", "API REST"],
      status: "Concluído",
      github: "https://github.com/Only-Dre/projeto-SBX",
      live: "https://github.com/Only-Dre/projeto-SBX",
      inProgress: false,
      details: {
        projectDemands: "Desenvolver um sistema de cofres inteligentes para entregas residenciais, integrando hardware e software para garantir segurança e praticidade.",
        longDescription: "O projeto consistiu na criação de um sistema de cofres inteligentes para entregas residenciais, utilizando uma combinação de tecnologias frontend e IoT. O frontend foi desenvolvido com React e Vite, proporcionando uma interface intuitiva para os usuários (moradores) e seguranças residenciais gerenciarem os cofres. A comunicação com os lockers físicos ocorre via protocolo MQTT sobre TLS, tornando o sistema um ponto de integração entre uma API REST convencional e dispositivos IoT em tempo real.",
        challenges: ["Integração entre frontend e dispositivos IoT", "Garantia de segurança na comunicação"],
        solutions: ["Utilização de MQTT sobre TLS para comunicação segura", "Desenvolvimento de uma API REST robusta para gerenciamento dos cofres"],
        learnings: ["Desenvolvimento full stack com foco em IoT", "Segurança em sistemas de comunicação entre dispositivos e servidores"]
      }
    },
    {
      id: 2,
      title: "Portfólio Pessoal",
      description: "Portfólio construído com Next.js, TypeScript e Tailwind CSS.",
      category: "Frontend",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      status: "Concluído",
      github: "https://github.com/Only-Dre/meu-portfolio",
      live: "https://github.com/Only-Dre/meu-portfolio",
      inProgress: false,
      details: {
        longDescription: "Portfólio pessoal focado em performance e experiência do usuário.",
        challenges: ["Otimização de performance", "Animações suaves"],
        solutions: ["Next.js App Router", "Lazy loading"],
        learnings: ["Otimização web", "Framer Motion"]
      }
    },
    {
      id: 3,
      title: "Projeto 2",
      description: "Próximo projeto em planejamento.",
      category: "Full Stack",
      technologies: ["Em definição"],
      status: "Planejamento",
      github: "#",
      live: "#",
      inProgress: true,
      note: "Em desenvolvimento - detalhes em breve"
    },
  ], [])

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project)
  }, [])

  const closeModal = useCallback(() => {
    setSelectedProject(null)
  }, [])

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative cursor-pointer"
        onClick={() => !project.inProgress && openModal(project)}
      >
        <div className={`
          bg-dark-800/70 backdrop-blur-sm rounded-2xl overflow-hidden h-full flex flex-col
          border border-primary-500/20 transition-all duration-300
          ${project.inProgress ? 'opacity-60' : 'hover:scale-[1.02] hover:border-primary-500/40'}
        `}>
          
          {project.inProgress && (
            <div className="absolute inset-0 bg-dark-900/80 z-10 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <span className="text-primary-300 font-semibold text-sm">Em Desenvolvimento</span>
              </div>
            </div>
          )}

          <div className="p-6 border-b border-primary-500/20 flex-1">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium">
                {project.category}
              </span>
              <span className={`
                px-3 py-1 rounded-full text-xs font-medium
                ${project.status === 'Concluído' ? 'bg-green-500/20 text-green-300' :
                  project.status === 'Em Andamento' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-blue-500/20 text-blue-300'}
              `}>
                {project.status}
              </span>
            </div>
            
            <h3 className="text-lg font-bold mb-2 text-dark-100 group-hover:text-primary-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-dark-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <motion.span 
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-dark-800/50 rounded-full text-xs text-dark-400 border border-dark-700"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(project);
                }}
                className="gradient-button flex-1 px-4 py-2.5 rounded-lg font-medium text-sm h-[42px] flex items-center justify-center"
                disabled={project.inProgress}
              >
                Ver Detalhes
              </motion.button>
              
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-dark-700/50 hover:bg-dark-600/50 border border-primary-500/30 hover:border-primary-500/60 p-2 rounded-lg transition-colors flex items-center justify-center h-[42px] min-w-[42px]"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.github === '#') e.preventDefault()
                }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  const ProjectModal = () => {
    if (!selectedProject) return null

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/95 backdrop-blur-lg"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-dark-800/90 backdrop-blur-sm border border-primary-500/20 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-primary-500/20 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary-500/20 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
                <span className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${selectedProject.status === 'Concluído' ? 'bg-green-500/20 text-green-300' :
                    selectedProject.status === 'Em Andamento' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-blue-500/20 text-blue-300'}
                `}>
                  {selectedProject.status}
                </span>
              </div>
              
              <h2 className="text-dynamic-lg font-bold mb-2 text-dark-100">{selectedProject.title}</h2>
              <p className="text-dark-300">{selectedProject.description}</p>
            </div>
            
            <div className="p-6 space-y-6">
              {selectedProject.details?.projectDemands && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-lg font-bold mb-3 text-primary-300">Demandas do Projeto</h3>
                  <p className="text-dark-300 leading-relaxed">{selectedProject.details.projectDemands}</p>
                </motion.div>
              )}

              {selectedProject.details?.longDescription && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-lg font-bold mb-3 text-primary-300">Sobre o Projeto</h3>
                  <p className="text-dark-300 leading-relaxed">{selectedProject.details.longDescription}</p>
                </motion.div>
              )}
              
              {selectedProject.details?.challenges && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-lg font-bold mb-3 text-primary-300">Desafios</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.challenges.map((challenge, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-dark-300 flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                        {challenge}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {selectedProject.details?.solutions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-lg font-bold mb-3 text-primary-300">Soluções</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.solutions.map((solution, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-dark-300 flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {solution}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {selectedProject.details?.learnings && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-lg font-bold mb-3 text-primary-300">Aprendizados</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.learnings.map((learning, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-dark-300 flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {learning}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <motion.div 
                className="pt-4 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href={selectedProject.github}
                  whileHover={{ scale: 1.05 }}
                  className="gradient-button px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  Código Fonte
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-primary-900/10 to-dark-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-dynamic-lg font-black mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-dynamic-md text-dark-300 max-w-3xl mx-auto leading-relaxed">
            Projetos desenvolvidos durante minha jornada em desenvolvimento de software
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-dark-800/70 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2 text-dark-100">🚀 Em Construção</h3>
            <p className="text-dark-300">
              Novos projetos estão sendo desenvolvidos conforme avanço nos estudos.
            </p>
          </div>
        </motion.div>

        <ProjectModal />
      </div>
    </section>
  )
}

export default ProjectsGrid
