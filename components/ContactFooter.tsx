'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Send } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa' // ÍCONE DO DISCORD DO FONT AWESOME

const ContactFooter = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "workofdre@proton.me",
      href: "mailto:workofdre@proton.me",
      description: "Resposta em até 24h"
    },
    {
      icon: Phone, 
      label: "Telefone",
      value: "+55 (16) 99772-9797",
      href: "https://wa.me/5516997729797",
      description: "Disponível das 9h às 18h"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Carlos, São Paulo, Brasil",
      href: "#",
      description: "Remoto"
    },
    {
      icon: FaDiscord, // ÍCONE DO DISCORD DO REACT-ICONS
      label: "Discord",
      value: "OnlyDre",
      href: "https://discord.gg/gAHfFjVy", // Meu link de amizade - Feito pelo Mobile
      description: "Me adicione no Discord"
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
      href: "mailto:workofdre@proton.me",
      label: "Email",
      color: "hover:text-red-400"
    },
    {
      icon: FaDiscord, // ÍCONE DO DISCORD DO REACT-ICONS
      href: "https://discord.gg/gAHfFjVy", // Meu link de amizade - Feito pelo Mobile
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

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="mailto:workofdre@proton.me"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-button px-12 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3"
            >
              <Send className="w-5 h-5" />
              Iniciar Conversa
            </motion.a>
          </motion.div>

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
