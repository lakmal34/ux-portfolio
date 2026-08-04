import { Link } from 'react-router';
import logo from '../../imports/logo.webp';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CareerTimeline from '../components/CareerTimeline';

export function Career() {
  return (
    <div className="min-h-screen bg-white">
      <header className="px-6 py-8 flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <ImageWithFallback src={logo} alt="Lakmal" className="w-[60px] h-[60px] object-contain" />
        </Link>
        <nav className="flex gap-8 text-sm">
          <Link to="/" className="hover:opacity-60 transition-opacity">Work</Link>
          <Link to="/about" className="hover:opacity-60 transition-opacity">About</Link>
        </nav>
      </header>

      <section className="px-6 py-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">Career</span>
        </div>
      </section>

      <main className="px-6">
        <CareerTimeline />
      </main>
    </div>
  );
}
