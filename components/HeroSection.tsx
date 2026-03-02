'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Cpu, Code2 } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-start overflow-hidden">
      
      {/* Background Effects - LIMPO */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
        
        {/* Efeito de brilho REMOVIDO ou MUITO SUAVE */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-64 h-64 bg-primary-500/1 rounded-full blur-xl"></div>
      </div>

      {/* Conteúdo Principal - Alinhado à esquerda */}
      <div className="relative z-10 px-6 max-w-2xl ml-8 lg:ml-16 xl:ml-32">
        
        {/* Badge discreta - SEM PONTO VERMELHO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          {/* PONTO REMOVIDO - usando ícone instead */}
          <Sparkles className="w-4 h-4 text-primary-500" />
          <span className="text-sm font-medium text-primary-300">Disponível para projetos</span>
        </motion.div>

        {/* Título Principal - Mais compacto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl lg:text-6xl font-black leading-tight">
            <span className="text-dark-100">Olá, sou </span>
            <span className="gradient-text">André Luiz</span>
          </h1>
        </motion.div>

        {/* Subtítulo - Mais direto */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg lg:text-xl text-dark-300 mb-8 leading-relaxed max-w-md"
        >
          Desenvolvedor em formação, transformando ideias em código através da tecnologia.
        </motion.p>

        {/* Informações em linha - SEM PONTOS VERMELHOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <div className="flex items-center gap-2 text-dark-400">
            <Code2 className="w-4 h-4 text-primary-500" />
            <span className="text-sm">ADS - SENAI</span>
          </div>
          <div className="flex items-center gap-2 text-dark-400">
            <Cpu className="w-4 h-4 text-primary-500" />
            <span className="text-sm">Full Stack</span>
          </div>
          <div className="flex items-center gap-2 text-dark-400">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm">20 anos</span>
          </div>
        </motion.div>

        {/* CTA Buttons - Mais compactos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="gradient-button px-8 py-3 rounded-full font-semibold text-dark-50 text-base relative overflow-hidden inline-flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Ver Projetos
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full font-medium text-dark-300 border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 hover:text-primary-300 inline-flex items-center justify-center gap-2"
          >
            <span>Contato</span>
          </motion.a>
        </motion.div>

        {/* Stats reduzidos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-6 mt-12"
        >
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">2º</div>
            <div className="text-dark-400 text-xs">Ano ADS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">5+</div>
            <div className="text-dark-400 text-xs">Projetos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">💜</div>
            <div className="text-dark-400 text-xs">Paixão</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Mais discreto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-primary-400"
        >
          <span className="text-xs mb-1">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
