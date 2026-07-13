import transcendentalContent from './case-studies/transcendental-meditation.md?raw';
import fitRadioContent from './case-studies/fitradio.md?raw';
import bizzhubContent from './case-studies/bizzhub.md?raw';
import projectManagementContent from './case-studies/project-management.md?raw';

import tmVideo from '../../imports/TM_Portfolio_Showcase_45s.mp4';
import bizzhubHero from '../../imports/bizzhub-hero.webp';
import fitRadioVideo from '../../imports/FitRadio_Showcase_HiRes_45s.mp4';
import middletonBannerVideo from '../../imports/blue-browser-mockup.mp4';
import homepageDesktop from '../../imports/Homepage_desktop.webp';
import whatisTMpage from '../../imports/WhatisTMpage_desktop.webp';
import taughtByNonProfit from '../../imports/TaughtbyNonProfit_desktop.webp';
import learnTM from '../../imports/LearnTM_desktop.webp';
import singleTMCenter from '../../imports/SingleTMCenter_desktop.webp';
import bookLocal from '../../imports/BookLocal_desktop-6.webp';
import fitRadioLogin from '../../imports/Login.webp';
import fitRadioPlayer from '../../imports/Player-1.webp';
import fitRadioPlayer2 from '../../imports/Player.webp';
import fitRadioStartSession from '../../imports/Start_Session.webp';
import transcendentalHero from '../../imports/ChatGPT_Image_Jun_6__2026__04_08_30_PM.webp';
import fitRadioHero from '../../imports/ChatGPT_Image_Jun_6__2026__04_40_16_PM.webp';
import projectManagementHero from '../../imports/ChatGPT_Image_Jun_9__2026__06_35_56_PM.webp';
import homeCardHero from '../../imports/bizzhubthumbnail.webp';
import firstTileHero from '../../imports/1.webp';
import secondTileHero from '../../imports/2.webp';
import thirdTileHero from '../../imports/3.webp';
import fourthTileHero from '../../imports/4.webp';
import middletonImage1 from '../../imports/m1.webp';
import middletonImage2 from '../../imports/m2.webp';
import middletonImage3 from '../../imports/m3.webp';
import middletonImage4 from '../../imports/m4.webp';
import middletonImage5 from '../../imports/m5.webp';
import middletonImage6 from '../../imports/m6.webp';

export type CaseStudyItem = {
  slug: string;
  title: string;
  description: string;
  role: string;
  year: string;
  client: string;
  heroImage: string;
  heroVideo?: string;
  images: string[];
  content: string;
};

export const caseStudies: CaseStudyItem[] = [
  {
    slug: 'transcendental-meditation',
    title: 'Transcendental Meditation',
    description: 'Creating a digital experience that reflects the simplicity and clarity of the TM practice.',
    role: 'Lead Designer',
    year: '2024',
    client: 'Transcendental Meditation',
    heroImage: transcendentalHero,
    heroVideo: tmVideo,
    images: [homepageDesktop, whatisTMpage, taughtByNonProfit, learnTM, singleTMCenter, bookLocal],
    content: transcendentalContent,
  },
  {
    slug: 'fitradio',
    title: 'FitRadio',
    description: 'Transforming FitRadio Through a Unified Design Language.',
    role: 'UI/UX Designer',
    year: '2024',
    client: 'FitRadio',
    heroImage: fitRadioHero,
    heroVideo: fitRadioVideo,
    images: [fitRadioLogin, fitRadioPlayer, fitRadioPlayer2, fitRadioStartSession, 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop'],
    content: fitRadioContent,
  },
  {
    slug: 'Middleton’s',
    title: 'Middleton’s',
    description: 'Simplifying the Art ausction Journey Through Collaborative Design.',
    role: 'UX/UI Designer',
    year: '2021',
    client: 'Middleton’s',
    heroImage: bizzhubHero,
    heroVideo: middletonBannerVideo,
    images: [middletonImage1, middletonImage2, middletonImage3, middletonImage4, middletonImage5, middletonImage6],
    content: bizzhubContent,
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    description: 'Interior Design Showcase.',
    role: 'Creative Director',
    year: '2024',
    client: 'Project Management',
    heroImage: projectManagementHero,
    images: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&h=800&fit=crop'],
    content: projectManagementContent,
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug) ?? null;
}

export const homeCaseStudyCards = caseStudies.map((study, index) => ({
  id: study.slug,
  title: study.title,
  image: index === 0 ? firstTileHero : index === 1 ? secondTileHero : index === 2 ? thirdTileHero : index === 3 ? fourthTileHero : study.heroImage,
  alt: study.title,
}));
