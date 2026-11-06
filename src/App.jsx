import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Services from './pages/Services';
import Construction from './pages/Construction';
import Infrastructure from './pages/Infrastructure';
import GovernmentProjects from './pages/GovernmentProjects';
import RealEstate from './pages/RealEstate';
import SevenStarHeights from './pages/SevenStarHeights';
import SevenStarMallResidency from './pages/SevenStarMallResidency';
import CompletedProjects from './pages/CompletedProjects';
import OngoingProjects from './pages/OngoingProjects';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import PetroleumLPG from './pages/PetroleumLPG';
import MachineryEquipment from './pages/MachineryEquipment';
import SevenStarUK from './pages/SevenStarUK';
import ResidentialDevelopment from './pages/ResidentialDevelopment';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const PAGE_BANNERS = {
  '/about': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2025/12/1-43_48_11zon-scaled.webp',
    position: 'center 52%'
  },
  '/leadership': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2023/12/With-Chairman-PEC.png',
    position: 'center top'
  },
  '/services': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2025/12/1-44_36_11zon-scaled.webp',
    position: 'center 52%'
  },
  '/services/construction': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2025/02/construction-site-silhouette-sky-city-material-scaled.jpg',
    position: 'center 48%'
  },
  '/services/infrastructure': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2025/02/Untitled-design-4-2048x1364.png',
    position: 'center 55%'
  },
  '/services/government-projects': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2023/12/PM-of-AJK.png',
    position: 'center 30%'
  },
  '/real-estate': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2025/12/PIC-1-1.webp',
    position: 'center 55%'
  },
  '/projects': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2023/12/Add-a-heading-1-1536x1025.png',
    position: 'center 52%'
  },
  '/projects/completed': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2025/02/Untitled-design-4-2048x1364.png',
    position: 'center 55%'
  },
  '/projects/ongoing': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2025/02/construction-site-silhouette-sky-city-material-scaled.jpg',
    position: 'center 48%'
  },
  '/projects/seven-star-heights': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2025/12/1-48_40_11zon-scaled.webp',
    position: 'center 50%'
  },
  '/projects/seven-star-mall-residency': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2025/12/PIC-1-1.webp',
    position: 'center 55%'
  },
  '/divisions/petroleum-lpg': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2025/01/Untitled-design-2-1536x1023.png',
    position: 'center 50%'
  },
  '/divisions/machinery-equipment': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2023/12/DSC_9557.jpg',
    position: 'center 50%'
  },
  '/divisions/seven-star-uk': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2025/04/residential-house-under-construction-with-modern-building-process-and-architecture-scaled.jpg',
    position: 'center 50%'
  },
  '/divisions/residential-development': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2025/12/1-29_62_11zon-scaled.webp',
    position: 'center 50%'
  },
  '/contact': {
    image: 'https://sevenstar.com.pk/wp-content/uploads/2023/12/With-Chairman-PEC.png',
    position: 'center top'
  }
};

export default function App() {
  const { pathname } = useLocation();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [defaultInquiryDivision, setDefaultInquiryDivision] = useState('real-estate');
  const isHomePage = pathname === '/' || (!PAGE_BANNERS[pathname] && !pathname.startsWith('/projects/'));
  const banner = PAGE_BANNERS[pathname] || PAGE_BANNERS['/projects'];

  const handleOpenInquiry = (division = 'real-estate') => {
    setDefaultInquiryDivision(division);
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface text-slate-900 font-sans selection:bg-brand-gold selection:text-white">
      <ScrollToTop />
      
      {/* Global Light Glass Header */}
      <Header onOpenInquiry={() => handleOpenInquiry('real-estate')} />

      {/* Main Page Routing */}
      <main
        className={isHomePage ? 'flex-1' : 'flex-1 premium-inner-page'}
        data-page={pathname}
        style={isHomePage ? undefined : {
          '--page-banner-image': `url("${banner.image}")`,
          '--page-banner-position': banner.position
        }}
      >
        <Routes>
          <Route path="/" element={<Home onOpenInquiry={() => handleOpenInquiry('real-estate')} />} />
          <Route path="/about" element={<About onOpenInquiry={() => handleOpenInquiry('general')} />} />
          <Route path="/leadership" element={<Leadership onOpenInquiry={() => handleOpenInquiry('general')} />} />
          <Route path="/services" element={<Services onOpenInquiry={() => handleOpenInquiry('construction')} />} />
          <Route path="/services/construction" element={<Construction onOpenInquiry={() => handleOpenInquiry('construction')} />} />
          <Route path="/services/infrastructure" element={<Infrastructure onOpenInquiry={() => handleOpenInquiry('infrastructure')} />} />
          <Route path="/services/government-projects" element={<GovernmentProjects onOpenInquiry={() => handleOpenInquiry('government')} />} />
          
          <Route path="/real-estate" element={<RealEstate onOpenInquiry={() => handleOpenInquiry('real-estate')} />} />
          <Route path="/projects/seven-star-heights" element={<SevenStarHeights onOpenInquiry={() => handleOpenInquiry('real-estate')} />} />
          <Route path="/projects/seven-star-mall-residency" element={<SevenStarMallResidency onOpenInquiry={() => handleOpenInquiry('real-estate')} />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/completed" element={<CompletedProjects />} />
          <Route path="/projects/ongoing" element={<OngoingProjects />} />
          <Route path="/projects/:id" element={<ProjectDetails onOpenInquiry={() => handleOpenInquiry('project')} />} />
          
          <Route path="/divisions/petroleum-lpg" element={<PetroleumLPG onOpenInquiry={() => handleOpenInquiry('petroleum')} />} />
          <Route path="/divisions/machinery-equipment" element={<MachineryEquipment onOpenInquiry={() => handleOpenInquiry('machinery')} />} />
          <Route path="/divisions/seven-star-uk" element={<SevenStarUK onOpenInquiry={() => handleOpenInquiry('seven-star-uk')} />} />
          <Route path="/divisions/residential-development" element={<ResidentialDevelopment onOpenInquiry={() => handleOpenInquiry('residential')} />} />
          
          <Route path="/contact" element={<Contact />} />
          
          {/* Fallback route */}
          <Route path="*" element={<Home onOpenInquiry={() => handleOpenInquiry('real-estate')} />} />
        </Routes>
      </main>

      {/* Corporate Grounding Footer */}
      <Footer />

      {/* Global Inquiry Modal */}
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={handleCloseInquiry} 
        defaultDivision={defaultInquiryDivision} 
      />
    </div>
  );
}
