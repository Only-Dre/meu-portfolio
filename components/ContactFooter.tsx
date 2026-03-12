'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Send, X, CheckCircle } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import { useState, useCallback } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

interface NotificationState {
  show: boolean
  type: 'success' | 'error'
  message: string
}

const contactMethods = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 (16) 99772-9797",
    href: "https://wa.me/5516997729797?text=Olá%20André,%20vim%20do%20seu%20portfólio!",
    description: "Chat rápido",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Carlos, SP, Brasil",
    href: undefined,
    description: "Trabalho remoto",
  },
  {
    icon: FaDiscord,
    label: "Discord",
    value: "OnlyDre",
    href: "https://discord.gg/u8z5SPrA",
    description: "Me adicione no Discord",
  },
  {
    icon: Mail,
    label: "Email",
    value: "workofdre@proton.me",
    href: "mailto:workofdre@proton.me",
    description: "Envie um email direto",
  },
]

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/andr%C3%A9-luiz-976652350/", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Github, href: "https://github.com/Only-Dre", label: "GitHub", color: "hover:text-gray-300" },
  { icon: Mail, href: "mailto:workofdre@proton.me", label: "Email", color: "hover:text-red-400" },
  { icon: FaDiscord, href: "https://discord.gg/gAHfFjVy", label: "Discord", color: "hover:text-indigo-400" },
]

const NotificationPopup = ({ notification, onClose }: { notification: NotificationState; onClose: () => void }) => (
  <AnimatePresence>
    {notification.show && (
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.95 }}
        className="fixed top-6 right-6 z-50 max-w-sm w-full"
      >
        <div className={`relative glass-effect rounded-2xl p-4 border-l-4 shadow-2xl ${
          notification.type === 'success' ? 'border-green-500 bg-green-500/10' : 'border-yellow-500 bg-yellow-500/10'
        }`}>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Fechar notificação"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start gap-3 pr-8">
            <div className={`p-2 rounded-full ${notification.type === 'success' ? 'bg-green-500/20' : 'bg-yellow-500/20'}`}>
              {notification.type === 'success'
                ? <CheckCircle className="w-5 h-5 text-green-400" />
                : <MessageCircle className="w-5 h-5 text-yellow-400" />
              }
            </div>
            <div>
              <h4 className={`font-semibold mb-1 ${notification.type === 'success' ? 'text-green-300' : 'text-yellow-300'}`}>
                {notification.type === 'success' ? 'Sucesso!' : 'Atenção'}
              </h4>
              <p className="text-dark-200 text-sm leading-relaxed">{notification.message}</p>
            </div>
          </div>

          <motion.div
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 5, ease: 'linear' }}
            className={`h-1 mt-3 rounded-full ${notification.type === 'success' ? 'bg-green-500' : 'bg-yellow-500'}`}
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

const ContactFooter = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<NotificationState>({ show: false, type: 'success', message: '' })

  const showNotification = useCallback((type: 'success' | 'error', message: string) => {
    setNotification({ show: true, type, message })
    setTimeout(() => setNotification(prev => ({ ...prev, show: false })), 5000)
  }, [])

  const closeNotification = useCallback(() => {
    setNotification(prev => ({ ...prev, show: false }))
  }, [])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mdalrgyl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.name,
          email: formData.email,
          mensagem: formData.message,
          _subject: `Contato Portfólio - ${formData.name}`,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        showNotification('success', 'Mensagem enviada com sucesso! Entrarei em contato em breve.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        showNotification('error', 'Ocorreu um erro. Redirecionando para email...')
        setTimeout(() => {
          window.open(`mailto:workofdre@proton.me?subject=Contato de ${formData.name}&body=${encodeURIComponent(formData.message)}`)
        }, 2000)
      }
    } catch {
      showNotification('error', '📧 Falha no envio. Abrindo cliente de email...')
      setTimeout(() => {
        window.open(`mailto:workofdre@proton.me?subject=Contato de ${formData.name}&body=${encodeURIComponent(formData.message)}`)
      }, 2000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <NotificationPopup notification={notification} onClose={closeNotification} />

      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-primary-900/20 to-dark-900" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-dynamic-lg font-black mb-4">
              Vamos <span className="gradient-text">Conversar</span>?
            </h2>
            <p className="text-dynamic-md text-dark-300 max-w-2xl mx-auto leading-relaxed">
              Estou aberto a oportunidades de aprendizado, projetos colaborativos e conversas sobre tecnologia!
            </p>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-dark-100">Envie uma mensagem</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="bg-dark-800/60 p-3 rounded-lg w-full text-dark-100 placeholder-dark-500 border border-primary-500/20 focus:border-primary-500/50 focus:outline-none transition-colors"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-dark-800/60 p-3 rounded-lg w-full text-dark-100 placeholder-dark-500 border border-primary-500/20 focus:border-primary-500/50 focus:outline-none transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <textarea
                placeholder="Sua mensagem..."
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="bg-dark-800/60 p-3 rounded-lg w-full h-32 text-dark-100 placeholder-dark-500 border border-primary-500/20 focus:border-primary-500/50 focus:outline-none transition-colors resize-none"
                required
                disabled={isSubmitting}
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                className="gradient-button px-8 py-3 rounded-full font-semibold w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Métodos de contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              const Wrapper = method.href ? motion.a : motion.div
              return (
                <Wrapper
                  key={method.label}
                  {...(method.href ? { href: method.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-2xl text-center group hover-glow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-dark-50" />
                  </div>
                  <h3 className="font-bold text-dark-100 mb-1">{method.label}</h3>
                  <p className="text-primary-400 font-semibold text-sm mb-1">{method.value}</p>
                  <p className="text-dark-400 text-sm">{method.description}</p>
                </Wrapper>
              )
            })}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, y: -4 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`p-4 glass-effect rounded-2xl transition-colors duration-300 ${social.color}`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-dark-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Send className="w-4 h-4 text-dark-50" />
              </div>
              <span className="text-xl font-black gradient-text">André Luiz</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-dark-400 text-sm text-center"
            >
              © {new Date().getFullYear()} André Luiz. Todos os direitos reservados.{' '}
              <span className="text-primary-400">Estudante de ADS - SENAI</span>
            </motion.p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ContactFooter
