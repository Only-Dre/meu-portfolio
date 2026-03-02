'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Clock, Zap } from 'lucide-react'
import { useEffect } from 'react'

const ProjectsGrid = () => {
  // Debug: log quando o componente carrega
  useEffect(() => {
    console.log('🔧 ProjectsGrid carregado')
    console.log('📋 Projetos:', projects.map(p => ({ title: p.title, live: p.live, github: p.github })))
  }, [])

  const projects = [
    {
      id: 1,
      title: "Projeto Integrador SBX - Cofres Inteligentes (Front)",
      description: "Sistema completo de cofres inteligentes para entregas residenciais com IoT.",
      category: "Frontend + IoT",
      technologies: ["React", "Node.js", "Vite", "Arduino"],
      status: "Concluído/Apresentado",
      github: "https://github.com/Only-Dre/projeto-SBX",
      live: "https://github.com/Only-Dre/projeto-SBX",
      featured: true,
      inProgress: false
    },
    {
      id: 2,
      title: "Portfólio Pessoal",
      description: "Este próprio site de portfólio desenvolvido com Next.js e Tailwind CSS",
      category: "Frontend",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      status: "Em Andamento",
      github: "https://github.com/Only-Dre/meu-portfolio",
      live: "https://github.com/Only-Dre/meu-portfolio",
      featured: false,
      inProgress: false,
      note: "Projeto de estudo para praticar frontend moderno"
    },
    {
      id: 3,
      title: "Projeto Integrador 2",
      description: "?",
      category: "Full Stack",
      technologies: ["?"],
      status: "Planejamento",
      github: "#",
      live: "#",
      featured: false,
      inProgress: true,
      note: "Em desenvolvimento - detalhes em breve"
    },
  ]

  // Função de debug para cliques
  const handleLinkClick = (url: string, type: string) => {
    console.log(`🎯 Clicado no ${type}:`, url)
    
    // Forçar abertura mesmo se algo estiver bloqueando
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
      return false // Previne comportamento padrão se necessário
    }
    return true
  }

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    console.log(`🔄 Renderizando card: ${project.title}`)
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: project.inProgress ? -5 : -10, scale: project.inProgress ? 1.01 : 1.02 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }}
        viewport={{ once: true, margin: "-50px" }}
        className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
          project.featured ? 'md:col-span-2' : ''
        } ${project.inProgress ? 'opacity-80' : ''}`}
        style={{ zIndex: 1 }} // Garante que está acima
      >
        <div className={`glass-effect h-full relative overflow-hidden ${project.inProgress ? 'border border-primary-500/30' : ''}`}>
          
          {/* Efeito de blur para projetos em andamento - COM POINTER-EVENTS NONE */}
          {project.inProgress && (
            <div 
              className="absolute inset-0 bg-dark-900/50 backdrop-blur-sm z-10 flex items-center justify-center"
              style={{ pointerEvents: 'none' }} // IMPEDE BLOQUEIO DE CLIQUE
            >
              <div className="text-center p-6">
                <Clock className="w-12 h-12 text-primary-500 mx-auto mb-3" />
                <span className="text-primary-300 font-semibold">Projeto em Andamento</span>
                <p className="text-dark-300 text-sm mt-2">{project.note}</p>
              </div>
            </div>
          )}

          {/* Header do Card */}
          <div className="p-6 border-b border-primary-500/20">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
                project.status.includes('Concluído') 
                  ? 'bg-green-500/20 text-green-300'
                  : project.status.includes('Andamento')
                  ? 'bg-yellow-500/20 text-yellow-300'
                  : 'bg-blue-500/20 text-blue-300'
              }`}>
                {project.inProgress && <Zap className="w-3 h-3" />}
                {project.status}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-dark-300 leading-relaxed">
              {project.description}
            </p>

            {/* Nota para projetos em andamento */}
            {project.inProgress && project.note && (
              <div className="mt-3 p-2 bg-primary-500/10 rounded-lg">
                <p className="text-primary-300 text-sm">{project.note}</p>
              </div>
            )}
          </div>

          {/* Tecnologias */}
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string, techIndex: number) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-dark-800/50 rounded-full text-sm text-dark-400 border border-dark-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* AÇÕES - VERSÃO SUPER SIMPLIFICADA */}
            <div className="flex gap-3" style={{ zIndex: 20, position: 'relative' }}>
              {/* Botão Ver Projeto */}
              <motion.a
                href={project.live}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 gradient-button flex items-center justify-center gap-2 py-3 rounded-lg font-semibold"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  console.log('🖱️ Clique capturado no botão Live')
                  const shouldPreventDefault = handleLinkClick(project.live, 'LIVE')
                  if (shouldPreventDefault) {
                    e.preventDefault()
                  }
                }}
                style={{ pointerEvents: 'auto' }} // ✅ GARANTE QUE É CLICÁVEL
              >
                <ExternalLink className="w-4 h-4" />
                Ver Projeto
              </motion.a>
              
              {/* Botão GitHub */}
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass-effect-light rounded-lg border border-primary-500/30 hover:border-primary-500/60 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  console.log('🖱️ Clique capturado no botão GitHub')
                  const shouldPreventDefault = handleLinkClick(project.github, 'GITHUB')
                  if (shouldPreventDefault) {
                    e.preventDefault()
                  }
                }}
                style={{ pointerEvents: 'auto' }} // ✅ GARANTE QUE É CLICÁVEL
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Efeito de brilho - COM POINTER-EVENTS NONE */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ pointerEvents: 'none' }} // ✅ NÃO BLOQUEIA CLIQUE
          ></div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="projects" className="py-20" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container mx-auto px-6">
        {/* Header */}
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
            Uma jornada de aprendizado através da prática. Alguns projetos estão em andamento 
            como parte do meu desenvolvimento como estudante de ADS.
          </p>
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-6 rounded-2xl max-w-2xl mx-auto mb-6">
            <h3 className="text-xl font-bold mb-2">🚀 Em Construção</h3>
            <p className="text-dark-300">
              Estou sempre criando novos projetos para aprender e evoluir. 
              Esta seção será atualizada conforme concluo meus estudos!
            </p>
          </div>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 glass-effect border border-primary-500/30 rounded-2xl font-semibold hover-glow"
          >
            <span>Sugerir um Projeto</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsGrid
