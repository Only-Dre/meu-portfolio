'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, BookOpen, Target, Heart, GraduationCap } from 'lucide-react'

const goals = [
  {
    icon: Code2,
    title: "Tornar-se Full Stack",
    description: "Dominar tanto frontend quanto backend para criar aplicações completas",
    timeline: "Longo Prazo",
    status: "Em Andamento",
  },
  {
    icon: Cpu,
    title: "Trabalhar com Hardware",
    description: "Unir software e eletrônica em sistemas embarcados, IoT, GPUs e IAs",
    timeline: "Longo Prazo",
    status: "Planejamento",
  },
  {
    icon: GraduationCap,
    title: "Concluir a Graduação",
    description: "Finalizar o Curso Superior com excelência acadêmica",
    timeline: "2026",
    status: "Cursando",
  },
  {
    icon: BookOpen,
    title: "Aprendizado Contínuo",
    description: "Manter-se atualizado com as tecnologias emergentes",
    timeline: "Contínuo",
    status: "Sempre",
  },
]

const statusColors: Record<string, string> = {
  'Em Andamento': 'bg-green-500/20 text-green-300',
  'Planejamento': 'bg-blue-500/20 text-blue-300',
  'Cursando': 'bg-yellow-500/20 text-yellow-300',
  'Sempre': 'bg-purple-500/20 text-purple-300',
}

const AboutMe = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-primary-900/10 to-dark-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-dynamic-lg font-black mb-4">
            Sobre <span className="gradient-text">Mim</span> & Objetivos
          </h2>
          <p className="text-dynamic-md text-dark-300 max-w-3xl mx-auto leading-relaxed">
            Conheça mais sobre minha jornada e metas profissionais como desenvolvedor em formação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Minha História */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary-500" />
                Minha Jornada
              </h3>

              <p className="text-dark-300 leading-relaxed mb-4">
                Comecei minha jornada de um jeito diferente — tinha paixão por arte e jogos,
                mas isso me levou ao ambiente digital e, naturalmente, ao interesse por tecnologia.
                Pensando em jogos, fui da programação básica até o interesse em Software e Hardware.
              </p>

              <p className="text-dark-300 leading-relaxed mb-4">
                Atualmente, estou cursando o{' '}
                <span className="text-primary-400 font-semibold">2º ano de ADS no SENAI</span>, enquanto
                estudo de forma independente sobre{' '}
                <span className="text-primary-400 font-semibold">tecnologias emergentes</span>, combinando
                teoria e prática para construir uma base sólida.
              </p>

              <p className="text-dark-300 leading-relaxed">
                Acredito que tecnologia é uma ferramenta poderosa para resolver problemas. Estou
                comprometido em aprender, evoluir e, futuramente, trabalhar com projetos avançados como{' '}
                <span className="text-primary-400 font-semibold">ROCm, Frame Generation e Interfaces avançadas</span>.
              </p>
            </div>
          </motion.div>

          {/* Meus Objetivos */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary-500" />
                Meus Objetivos
              </h3>

              <div className="space-y-4">
                {goals.map((goal, index) => {
                  const IconComponent = goal.icon
                  return (
                    <motion.div
                      key={goal.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-dark-800/50 hover-glow transition-all"
                    >
                      <div className="p-2 bg-primary-500/20 rounded-lg shrink-0">
                        <IconComponent className="w-5 h-5 text-primary-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1 gap-2">
                          <h4 className="font-semibold text-dark-100">{goal.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full shrink-0 ${statusColors[goal.status]}`}>
                            {goal.status}
                          </span>
                        </div>
                        <p className="text-dark-400 text-sm mb-1">{goal.description}</p>
                        <span className="text-primary-400 text-xs">{goal.timeline}</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
