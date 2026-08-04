import React from 'react'
import { motion } from 'framer-motion'
import { ImageWithFallback } from './figma/ImageWithFallback'

type Milestone = {
  period: string
  title: string
  company: string
  description: string
  isPresent?: boolean
}

const timelineData: Milestone[] = [
  { period: 'Jan 2016 – Oct 2017', title: 'Junior UI/UX Engineer', company: 'Incubatelabs', description: 'Started my UX career designing responsive web applications, learning user-centered design, wireframing, usability testing, and collaborating closely with developers.' },
  { period: 'Oct 2017 – May 2019', title: 'UI/UX Engineer', company: 'Extrogene', description: 'Worked across multiple client projects, designing intuitive user interfaces, improving user experiences, and strengthening my visual and interaction design skills.' },
  { period: 'May 2019 – Jun 2021', title: 'Senior UI/UX Engineer', company: '99X Technology', description: 'Designed enterprise SaaS applications for international clients, collaborated with cross-functional teams, and introduced scalable design patterns and component libraries.' },
  { period: 'Jun 2021 – May 2022', title: 'Senior UI/UX Engineer', company: 'Assette Software', description: 'Designed complex financial software and enterprise dashboards for global investment firms, focusing on usability, workflows, and data visualization.' },
  { period: 'Jun 2022 – Jun 2023', title: 'Associate Lead UX Designer', company: 'Random Software', description: 'Led UX initiatives, mentored designers, facilitated workshops, and aligned user experience with business objectives across multiple products.' },
  { period: 'Jun 2023 – Jan 2024', title: 'Senior Product Designer (Contract)', company: 'CodeCabin', description: 'Designed SaaS platforms, improved customer journeys, and built scalable design systems and reusable UI components.' },
  { period: '2024', title: 'Freelance Product Designer', company: 'Independent', description: 'Partnered with startups and businesses worldwide to deliver UX strategy, product design, design systems, landing pages, and mobile applications.' },
  { period: 'Jun 2024 – Present', title: 'Product Designer', company: 'FitRadio (Remote)', description: 'Designing AI-powered workout experiences, music player interactions, onboarding flows, mobile experiences, and scalable design systems for a fitness platform.', isPresent: true },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function CareerTimeline() {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={containerVariants} className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: '"Fraunces", serif' }}>Career Timeline</h2>
        <p className="text-sm text-gray-500 mt-2">A concise view of roles and impact over time.</p>
      </div>

      <div className="space-y-6">
        {timelineData.map((m, i) => (
          <motion.article key={i} variants={cardVariants} className={`bg-white rounded-2xl p-6 shadow-md border border-transparent hover:shadow-lg transition-shadow`}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-medium ${m.isPresent ? 'bg-gradient-to-r from-violet-500 to-pink-400 text-white shadow-md' : 'bg-gray-100 text-gray-700'}`}>
                  {m.company.split(' ').map(s => s[0]).slice(0,2).join('')}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <div className="text-xs text-gray-500">{m.period}</div>
                    <div className="text-lg font-semibold text-gray-900">{m.title}</div>
                    <div className="text-sm text-gray-600">{m.company}</div>
                  </div>
                  {m.isPresent && (
                    <div className="ml-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs shadow-[0_8px_24px_rgba(99,102,241,0.12)]">Present</span>
                    </div>
                  )}
                </div>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{m.description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}
