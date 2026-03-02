'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, Sparkles, BookOpen, User, Briefcase } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      // Ajustar o threshold para evitar bug no topo
      setIsScrolled(window.scrollY > 30) // Reduzido de 50 para 30
      
      // Atualizar seção ativa baseada no scroll
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '#home', icon: Sparkles },
    { name: 'Sobre Mim', href: '#about', icon: User },
    { name: 'Projetos', href: '#projects', icon: Code2 },
    { name: 'Skills', href: '#skills', icon: BookOpen },
    { name: 'Jornada', href: '#experience', icon: Briefcase },
    { name: 'Contato', href: '#contact', icon: BookOpen },
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-effect py-3 backdrop-blur-md' 
            : 'py-6 bg-dark-900/0' // Fundo transparente quando não está scrolled
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Code2 className="w-6 h-6 text-dark-50" />
              </div>
              <span className="text-2xl font-black gradient-text">André Luiz</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                        : 'text-dark-300 hover:text-primary-300 hover:bg-primary-500/10'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="font-semibold text-sm">{item.name}</span>
                  </motion.button>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-3 rounded-lg transition-all duration-300 hover:bg-dark-800/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary-500" />
              ) : (
                <Menu className="w-6 h-6 text-primary-500" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark-900/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-50 flex flex-col items-center justify-center h-full space-y-6"
            >
              {navItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-xl font-bold px-8 py-3 rounded-2xl transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'gradient-text bg-primary-500/20 border border-primary-500/30'
                        : 'text-dark-200 hover:text-primary-300'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5" />
                      {item.name}
                    </span>
                  </motion.button>
                )
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
