import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logo from '../../imports/logo.webp';
// removed hero image import per request
import CareerTimeline from '../components/CareerTimeline';

const aboutHighlights = [
  {
    label: 'Experience',
    value: '8+ years',
  },
  {
    label: 'Focus',
    value: 'Product design, UX strategy',
  },
  {
    label: 'Location',
    value: 'Australia',
  },
  {
    label: 'Industry',
    value: 'Fintech, health, enterprise',
  },
];

const aboutSections = [
  {
    heading: 'Approach',
    text: 'I combine research, systems thinking and storytelling to design products that feel intuitive and drive business outcomes.',
  },
  {
    heading: 'Why it matters',
    text: 'Good design removes friction, builds trust, and helps people reach their goals more confidently.',
  },
  {
    heading: 'What I bring',
    text: 'A pragmatic, human-centered process that turns complexity into clarity across digital experiences.',
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-8 flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <ImageWithFallback src={logo} alt="Lakmal" className="w-[60px] h-[60px] object-contain" />
        </Link>
        <nav className="flex gap-8 text-sm">
          <Link to="/" className="hover:opacity-60 transition-opacity">Work</Link>
          <Link to="/about" className="hover:opacity-60 transition-opacity">About</Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <section className="px-6 py-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">About</span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-6 py-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
          Design with clarity, empathy, and scale.
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          I craft product experiences and design systems that help teams move forward with confidence.
          My work is grounded in research, thoughtful interaction, and clear execution.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {aboutHighlights.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase text-gray-500 mb-2">{item.label}</p>
              <p className="text-sm text-black">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Centered Career Timeline */}
      <section className="px-6 py-8 flex items-center justify-center min-h-[60vh]">
        <div className="w-full max-w-4xl">
          <CareerTimeline />
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="space-y-8">
          {aboutSections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-3xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
                {section.heading}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <CareerTimeline />
        </div>
      </section>

      {/* removed image grid per request */}
    </div>
  );
}
