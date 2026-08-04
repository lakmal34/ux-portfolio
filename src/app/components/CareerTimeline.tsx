import React from 'react';
import { motion } from 'framer-motion';
import ImageWithFallback from './figma/ImageWithFallback';

type Milestone = {
  period: string;
  title: string;
  company: string;
  description: string;
  isPresent?: boolean;
};

const timelineData: Milestone[] = [
  {
    period: 'Jan 2016 – Oct 2017',
    title: 'Junior UI/UX Engineer',
    company: 'Incubatelabs',
    description:
      "Started my UX career designing responsive web applications, learning user-centered design, wireframing, usability testing, and collaborating closely with developers.",
  },
  {
    period: 'Oct 2017 – May 2019',
    title: 'UI/UX Engineer',
    company: 'Extrogene',
    description:
      "Worked across multiple client projects, designing intuitive user interfaces, improving user experiences, and strengthening my visual and interaction design skills.",
  },
  {
    period: 'May 2019 – Jun 2021',
    title: 'Senior UI/UX Engineer',
    company: '99X Technology',
    description:
      "Designed enterprise SaaS applications for international clients, collaborated with cross-functional teams, and introduced scalable design patterns and component libraries.",
  },
  {
    period: 'Jun 2021 – May 2022',
    title: 'Senior UI/UX Engineer',
    company: 'Assette Software',
    description:
      "Designed complex financial software and enterprise dashboards for global investment firms, focusing on usability, workflows, and data visualization.",
  },
  {
    period: 'Jun 2022 – Jun 2023',
    title: 'Associate Lead UX Designer',
    company: 'Random Software',
    description:
      "Led UX initiatives, mentored designers, facilitated workshops, and aligned user experience with business objectives across multiple products.",
  },
  {
    period: 'Jun 2023 – Jan 2024',
    title: 'Senior Product Designer (Contract)',
    company: 'CodeCabin',
    description:
      "Designed SaaS platforms, improved customer journeys, and built scalable design systems and reusable UI components.",
  },
  {
    period: '2024',
    title: 'Freelance Product Designer',
    company: 'Independent',
    description:
      "Partnered with startups and businesses worldwide to deliver UX strategy, product design, design systems, landing pages, and mobile applications.",
  },
  {
    period: 'Jun 2024 – Present',
    title: 'Product Designer',
    company: 'FitRadio (Remote)',
    description:
      "Designing AI-powered workout experiences, music player interactions, onboarding flows, mobile experiences, and scalable design systems for a fitness platform.",
    isPresent: true,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function CareerTimeline() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative max-w-6xl mx-auto py-12 px-6"
    >
      {/* central line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-x-1/2" aria-hidden="true" />

      <div className="space-y-12">
        {timelineData.map((m, idx) => {
          const sideLeft = idx % 2 === 0;
          return (
            <motion.div
              key={m.company + idx}
              variants={itemVariants}
              className="relative z-10"
            >
              <div className="md:grid md:grid-cols-2 md:items-start md:gap-8">
                {/* Left column */}
                <div
                  className={`md:col-start-1 md:col-end-1 md:pr-8 ${
                    sideLeft ? 'md:text-right' : 'md:order-2 md:text-left'
                  }`}
                >
                  <div className="inline-block md:align-middle md:max-w-[320px]">
                    <div className="text-xs text-gray-500 mb-1">{m.period}</div>
                    <div
                      className={`bg-white rounded-2xl shadow-[0_8px_20px_rgba(12,16,24,0.06)] p-6 border border-transparent transition-shadow hover:shadow-[0_12px_30px_rgba(12,16,24,0.08)]`}>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-sm font-medium transition-transform transform hover:scale-105">
                          {/* logo placeholder */}
                          {m.company.split(' ').map((s) => s[0]).slice(0,2).join('')}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{m.company}</div>
                          <div className="text-lg font-semibold text-gray-900">{m.title}{m.isPresent ? ' ' : ''}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </div>

                {/* center marker for mobile */}
                <div className="md:col-start-1 md:col-end-3 flex md:justify-center md:items-start mt-4 md:mt-0">
                  <div className="flex items-center flex-col md:items-center">
                    <div className="md:hidden h-8" aria-hidden />
                    <div className={`relative z-20 flex items-center justify-center w-6 h-6 rounded-full ${m.isPresent ? 'bg-gradient-to-r from-violet-500 to-pink-400 shadow-[0_6px_20px_rgba(99,102,241,0.18)]' : 'bg-white border border-gray-200'}`}>
                      {m.isPresent ? (
                        <span className="text-[10px] text-white">Present</span>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-gray-300" />
                      )}
                    </div>
                    <div className="hidden md:block flex-1 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent mt-2" aria-hidden />
                  </div>
                </div>

                {/* Right column */}
                <div className={`md:col-start-2 md:col-end-2 ${sideLeft ? 'md:order-2 md:text-left' : 'md:text-right md:pr-8'}`}>
                  {/* empty on purpose — ensures alternating spacing */}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* mobile timeline line */}
      <div className="md:hidden absolute left-6 top-24 bottom-24 w-[2px] bg-gradient-to-b from-gray-100 to-gray-200" aria-hidden />
    </motion.div>
  );
}
