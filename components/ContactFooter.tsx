'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Send, X, CheckCircle } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import { useState } from 'react'

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupType, setPopupType] = useState<'success' | 'error'>('success')
  const [popupMessage, setPopupMessage] = useState('')

  const showNotification = (type: 'success' | 'error', message: string) => {
    setPopupType(type)
    setPopupMessage(message)
    setShowPopup(true)
    
    // Auto-fechar após 5 segundos
    setTimeout(() => {
      setShowPopup(false)
    }, 5000)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mdalrgyl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.name,
          email: formData.email,
          mensagem: formData.message,
          _subject: `Contato Portfólio - ${formData.name}`,
          _replyto: formData.email
        })
      })

      if (response.ok) {
        showNotification('success', '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        showNotification('error', '⚠️ Ocorreu um erro. Redirecionando para email...')
        setTimeout(() => {
          window.open(
            `mailto:workofdre@proton.me?subject=Contato de ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AEnviado por: ${formData.name} (${formData.email})`
          )
        }, 2000)
      }
    } catch (error) {
      showNotification('error', '📧 Falha no envio. Abrindo cliente de email...')
      setTimeout(() => {
        window.open(
          `mailto:workofdre@proton.me?subject=Contato de ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AEnviado por: ${formData.name} (${formData.email})`
        )
      }, 2000)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Pop-up Component
  const NotificationPopup = () => {
    return (
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed top-6 right-6 z-50 max-w-sm w-full"
          >
            <div className={`
              relative glass-effect rounded-2xl p-4 border-l-4 shadow-2xl
              ${popupType === 'success' 
                ? 'border-green-500 bg-green-500/10' 
                : 'border-yellow-500 bg-yellow-500/10'
              }
            `}>
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Fechar notificação"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex items-start gap-3 pr-8">
                <div className={`
                  p-2 rounded-full
                  ${popupType === 'success' ? 'bg-green-500/20' : 'bg-yellow-500/20'}
                `}>
                  {popupType === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <MessageCircle className="w-5 h-5 text-yellow-400" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h4 className={`
                    font-semibold mb-1
                    ${popupType === 'success' ? 'text-green-300' : 'text-yellow-300'}
                  `}>
                    {popupType === 'success' ? 'Sucesso!' : 'Atenção'}
                  </h4>
                  <p className="text-dark-200 text-sm leading-relaxed">
                    {popupMessage}
                  </p>
                </div>
              </div>

              {/* Barra de progresso */}
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 5, ease: 'linear' }}
                className={`
                  h-1 mt-3 rounded-full
                  ${popupType === 'success' ? 'bg-green-500' : 'bg-yellow-500'}
                `}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  const contactMethods = [
    {
      icon: Phone, 
      label: "WhatsApp",
      value: "+55 (16) 99772-9797",
      href: "https://wa.me/5516997729797?text=Olá%20André,%20vim%20do%20seu%20portfólio!",
      description: "Chat rápido"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Carlos, São Paulo, Brasil",
      description: "Trabalho remoto"
    },
    {
      icon: FaDiscord,
      label: "Discord",
      value: "OnlyDre",
      href: "https://discord.gg/gAHfFjVy",
      description: "Me adicione no Discord"
    },
    {
      icon: Mail,
      label: "Email",
      value: "workofdre@proton.me",
      href: "https://mail.google.com/mail/u/0/#inbox?compose=NZVHGDkXKtVjrGHDXGbRXNTZhKsnQcJcTRqwBbmpFhHCCxCzxrwMLDKDCMbGbsZfmzFRgq",
      description: "Envie um email direto"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/andr%C3%A9-luiz-976652350/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      href: "https://github.com/Only-Dre", 
      label: "GitHub", 
      color: "hover:text-gray-300"
    },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/u/0/#inbox?compose=NZVHGDkXKtVjrGHDXGbRXNTZhKsnQcJcTRqwBbmpFhHCCxCzxrwMLDKDCMbGbsZfmzFRgq",
      label: "Email",
      color: "hover:text-red-400"
    },
    {
      icon: FaDiscord,
      href: "https://discord.gg/gAHfFjVy",
      label: "Discord",
      color: "hover:text-indigo-400"
    }
  ]

  return (
    <>
      {/* Notification Popup */}
      <NotificationPopup />

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-primary-900/20 to-dark-900"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-dynamic-lg font-black mb-4">
              Vamos <span className="gradient-text">Conversar</span>?
            </h2>
            <p className="text-dynamic-md text-dark-300 max-w-2xl mx-auto leading-relaxed">
              Estou aberto a oportunidades de aprendizado, projetos colaborativos 
              e conversas sobre tecnologia!
            </p>
          </motion.div>

          {/* Contact Form */}
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
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="glass-effect-light p-3 rounded-lg w-full text-black placeholder-dark-400 border border-primary-500/20 focus:border-primary-500/50 transition-colors"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="glass-effect-light p-3 rounded-lg w-full text-black placeholder-dark-400 border border-primary-500/20 focus:border-primary-500/50 transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <textarea
                placeholder="Sua mensagem..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="glass-effect-light p-3 rounded-lg w-full h-32 text-black placeholder-dark-400 border border-primary-500/20 focus:border-primary-500/50 transition-colors resize-none"
                required
                disabled={isSubmitting}
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="gradient-button px-8 py-3 rounded-full font-semibold w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
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

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-2xl text-center group hover-glow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-dark-50" />
                  </div>
                  
                  <h3 className="font-bold text-dark-100 mb-2">{method.label}</h3>
                  <p className="text-primary-400 font-semibold mb-1">{method.value}</p>
                  <p className="text-dark-400 text-sm">{method.description}</p>
                </motion.a>
              )
            })}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mt-12"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 glass-effect-light rounded-2xl transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4 md:mb-0"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Send className="w-4 h-4 text-dark-50" />
              </div>
              <span className="text-xl font-black gradient-text">André Luiz</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-dark-400 text-sm"
            >
              © {new Date().getFullYear()} André Luiz. Todos os direitos reservados. 
              <span className="text-primary-400 ml-2">Estudante de ADS - SENAI</span>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ContactFooter
