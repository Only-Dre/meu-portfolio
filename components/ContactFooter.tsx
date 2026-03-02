'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Send } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import { useState } from 'react'

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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
        alert('✅ Mensagem enviada com sucesso! Entrarei em contato em breve.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        window.open(
          `mailto:workofdre@proton.me?subject=Contato de ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AEnviado por: ${formData.name} (${formData.email})`
        )
      }
    } catch (error) {
      window.open(
        `mailto:workofdre@proton.me?subject=Contato de ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AEnviado por: ${formData.name} (${formData.email})`
      )
    } finally {
      setIsSubmitting(false)
    }
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
      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background Effect */}
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

          {/* Formulário de Contato */}
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
                  className="glass-effect-light p-3 rounded-lg w-full text-black placeholder-dark-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="glass-effect-light p-3 rounded-lg w-full text-black placeholder-dark-400"
                  required
                />
              </div>
              <textarea
                placeholder="Sua mensagem..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="glass-effect-light p-3 rounded-lg w-full h-32 text-black placeholder-dark-400"
                required
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-button px-8 py-3 rounded-full font-semibold w-full flex items-center justify-center gap-2 text-dark-50"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
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
