'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, Sparkles, BookOpen, User, Briefcase } from 'lucide-react'

const navItems = [
  { name: 'Início', href: '#home', icon: Sparkles },
  { name: 'Sobre Mim', href: '#about', icon: User },
  { name: 'Projetos', href: '#projects', icon: Code2 },
  { name: 'Skills', href: '#skills', icon: BookOpen },
  { name: 'Jornada', href: '#experience', icon: Briefcase },
  { name: 'Contato', href: '#contact', icon: BookOpen },
]

const sections = navItems.map(item => item.href.substring(1))

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const current = sections.find(section => {
        const el = document.getElementById(section)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = useCallback((href: string) => {
    setIsMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect py-3' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Code2 className="w-6 h-6 text-dark-50" />
              </div>
              <span className="text-2xl font-black gradient-text">André Luiz</span>
            </motion.div>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-4">
              {navItems.map((item) => {
                const IconComponent = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${
                      isActive
                        ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                        : 'text-dark-300 hover:text-primary-300 hover:bg-primary-500/10'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.name}
                  </motion.button>
                )
              })}
            </div>

            {/* Mobile toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-3 rounded-lg hover:bg-dark-800/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              aria-label="Menu"
            >
              {isMobileMenuOpen
                ? <X className="w-6 h-6 text-primary-500" />
                : <Menu className="w-6 h-6 text-primary-500" />
              }
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-dark-900/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-50 flex flex-col items-center justify-center h-full space-y-5"
            >
              {navItems.map((item, index) => {
                const IconComponent = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-xl font-bold px-8 py-3 rounded-2xl transition-all duration-300 ${
                      isActive
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
