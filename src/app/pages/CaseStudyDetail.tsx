import { Link, useParams } from 'react-router';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { getCaseStudyBySlug } from '../content/caseStudyContent';
import logo from '../../imports/logo.webp';
import logoOutline from '../../imports/logo-outline.webp';

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const study = id ? getCaseStudyBySlug(id) : null;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null || !study) return;
    setLightboxIndex((lightboxIndex + 1) % study.images.length);
  }, [lightboxIndex, study]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null || !study) return;
    setLightboxIndex((lightboxIndex - 1 + study.images.length) % study.images.length);
  }, [lightboxIndex, study]);

  const renderInlineMarkdown = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|_[^_]+_)/g).filter(Boolean);

    return parts.map((part, index) => {
      if (/^\*\*.+\*\*$/.test(part)) {
        return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
      }

      if (/^__.+__$/.test(part)) {
        return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
      }

      if (/^\*.+\*$/.test(part)) {
        return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>;
      }

      if (/^_.+_$/.test(part)) {
        return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>;
      }

      return <span key={`${part}-${index}`}>{part}</span>;
    });
  };

  const renderMarkdownBlocks = (markdown: string) => {
    const lines = markdown.split('\n');
    const blocks: JSX.Element[] = [];
    let paragraphLines: string[] = [];
    let listItems: string[] = [];

    const flushParagraph = () => {
      if (!paragraphLines.length) return;
      const text = paragraphLines.join(' ').trim();
      if (text) {
        blocks.push(
          <p key={blocks.length} className="text-lg leading-relaxed text-gray-700 mb-4 last:mb-0 whitespace-pre-line">
            {renderInlineMarkdown(text)}
          </p>
        );
      }
      paragraphLines = [];
    };

    const flushList = () => {
      if (!listItems.length) return;
      blocks.push(
        <ul key={blocks.length} className="space-y-2 mb-6 ml-6">
          {listItems.map((item, index) => (
            <li key={`${item}-${index}`} className="text-lg text-gray-700 list-disc">
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ul>
      );
      listItems = [];
    };

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) {
        flushParagraph();
        flushList();
        return;
      }

      if (/^#{1,6}\s/.test(trimmed)) {
        flushParagraph();
        flushList();
        const level = trimmed.match(/^#+/)?.[0].length ?? 1;
        const text = trimmed.replace(/^#{1,6}\s/, '');
        const className = level === 1
          ? 'text-3xl mb-4 mt-8'
          : level === 2
            ? 'text-2xl mb-3 mt-6'
            : 'text-xl mb-2 mt-4';
        blocks.push(
          <div key={blocks.length} className={className} style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
            {renderInlineMarkdown(text)}
          </div>
        );
        return;
      }

      if (/^-\s/.test(trimmed)) {
        flushParagraph();
        listItems.push(trimmed.replace(/^-\s/, '').trim());
        return;
      }

      paragraphLines.push(trimmed);
    });

    flushParagraph();
    flushList();
    return blocks;
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  if (!study) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Case study not found</h1>
          <Link to="/" className="text-sm underline">Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-8 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Lakmal" className="w-[60px] h-[60px]" />
          </Link>
        </div>
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
          <span className="text-black">{study.title}</span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-6 py-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
          {study.title}
        </h1>
        <p className="text-xl text-gray-600 mb-12">{study.description}</p>

        {/* Project Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="text-xs uppercase text-gray-500 mb-2">Role</p>
            <p className="text-sm">{study.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-gray-500 mb-2">Year</p>
            <p className="text-sm">{study.year}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-gray-500 mb-2">Client</p>
            <p className="text-sm">{study.client}</p>
          </div>
        </div>
      </section>

      {/* Hero Media */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
            {study.heroVideo ? (
              <video
                src={study.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <ImageWithFallback
                src={study.heroImage}
                alt={study.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="space-y-4">
          {renderMarkdownBlocks(study.content)}
        </div>
      </section>

      {/* Image Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
          {study.images.slice(0, 6).map((image, index) => (
            <button
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="aspect-[4/3] bg-gray-100 overflow-hidden block w-full focus:outline-none group"
            >
              <ImageWithFallback
                src={image}
                alt={`${study.title} - Image ${index + 1}`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 overflow-y-auto"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="fixed top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="fixed left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2"
          >
            <ChevronLeft size={36} />
          </button>

          <div
            className="max-w-5xl w-full mx-auto px-16 py-16"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={study.images[lightboxIndex]}
              alt={`${study.title} - Image ${lightboxIndex + 1}`}
              className="w-full h-auto"
            />
            <p className="text-center text-gray-400 text-sm mt-4">
              {lightboxIndex + 1} / {study.images.slice(0, 6).length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="fixed right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}

      {/* Back to Work */}
      <section className="px-6 py-20 text-center">
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-black text-white text-sm hover:bg-gray-800 transition-colors"
        >
          Back to Work
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 max-w-7xl mx-auto">
        <div className="flex justify-center">
          <img src={logoOutline} alt="Lakmal" className="w-[72px] h-[72px]" />
        </div>
      </footer>
    </div>
  );
}
