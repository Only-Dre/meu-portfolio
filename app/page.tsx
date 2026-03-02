import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutMe from '@/components/AboutMe'
import ProjectsGrid from '@/components/ProjectsGrid'
import SkillsCloud from '@/components/SkillsCloud'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import ContactFooter from '@/components/ContactFooter'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />          {/* APENAS APRESENTAÇÃO */}
      <AboutMe />              {/* HISTÓRIA + OBJETIVOS */}
      <ProjectsGrid />
      <SkillsCloud />
      <ExperienceTimeline />
      <ContactFooter />
    </main>
  )
}
