'use client'

import { motion } from 'framer-motion'
import { Sparkles, Cpu, Code2 } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative z-10 px-6 max-w-2xl ml-8 lg:ml-16 xl:ml-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary-500" />
          <span className="text-sm font-medium text-primary-300">Disponível para projetos</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl lg:text-6xl font-black leading-tight mb-6"
        >
          <span className="text-dark-100">Olá, sou </span>
          <span className="gradient-text">André Luiz</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg lg:text-xl text-dark-300 mb-8 leading-relaxed max-w-md"
        >
          Desenvolvedor FullStack, transformando ideias em código através da tecnologia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          {[
            { icon: Code2, label: 'Graduando' },
            { icon: Cpu, label: 'Full Stack' },
            { icon: Sparkles, label: '20 anos' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-dark-400">
              <Icon className="w-4 h-4 text-primary-500" />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="gradient-button px-8 py-3 rounded-full font-semibold text-dark-50 inline-flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Ver Projetos
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full font-medium text-dark-300 border border-primary-500/30 hover:border-primary-500/60 hover:text-primary-300 transition-all duration-300 inline-flex items-center justify-center"
          >
            Contato
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex gap-8 mt-12"
        >
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">Buscando</div>
            <div className="text-dark-400 text-sm">Projetos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">Perseguindo</div>
            <div className="text-dark-400 text-sm">Inovação</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
