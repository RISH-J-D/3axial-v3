import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { HomeSection } from './components/HomeSection';
import { ToastNotification } from './components/ToastNotification';

// Lazy Loaded Pages & Modals for High Performance
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./components/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ProjectsPage = lazy(() => import('./components/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const DrawingsPage = lazy(() => import('./components/DrawingsPage').then(m => ({ default: m.DrawingsPage })));
const TeamPage = lazy(() => import('./components/TeamPage').then(m => ({ default: m.TeamPage })));
const CareersPage = lazy(() => import('./components/CareersPage').then(m => ({ default: m.CareersPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const EnquireModal = lazy(() => import('./components/EnquireModal').then(m => ({ default: m.EnquireModal })));

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);
  const [isChangingPage, setIsChangingPage] = useState<boolean>(false);
  const [isEnquireOpen, setIsEnquireOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsChangingPage(true);
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    setTimeout(() => {
      setIsChangingPage(false);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfe] text-[#0f172a] font-sans antialiased relative selection:bg-[#0099ff]/25 selection:text-slate-900">
      {/* 1. Initial High-Tech Steel Preloader */}
      {isInitialLoading && (
        <Preloader onComplete={() => setIsInitialLoading(false)} />
      )}

      {/* 2. Fast Page Transition Progress Bar */}
      <AnimatePresence>
        {isChangingPage && (
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 h-1 bg-[#0099ff] z-[99] origin-left"
          />
        )}
      </AnimatePresence>

      {/* 3. Pinned Navigation Bar (Stays permanently visible while scrolling) */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <Header
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          onOpenEnquire={() => setIsEnquireOpen(true)}
        />
      </div>

      {/* 4. Page-to-Page View Switching */}
      <main className="flex-grow pt-[116px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <Suspense
              fallback={
                <div className="min-h-[60vh] flex items-center justify-center">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#0099ff]">
                    <span className="w-2 h-2 rounded-full bg-[#e8250e]" />
                    <span>Loading Engineering Module...</span>
                  </div>
                </div>
              }
            >
              {activeTab === 'home' && (
                <HomeSection
                  onOpenEnquire={() => setIsEnquireOpen(true)}
                  onNavigateTab={handleTabChange}
                />
              )}

              {activeTab === 'about' && (
                <AboutPage
                  onNavigateHome={() => handleTabChange('home')}
                  onOpenEnquire={() => setIsEnquireOpen(true)}
                />
              )}

              {activeTab === 'services' && (
                <ServicesPage
                  onNavigateHome={() => handleTabChange('home')}
                  onNavigateTab={handleTabChange}
                  onOpenEnquire={() => setIsEnquireOpen(true)}
                  onShowToast={showToast}
                />
              )}

              {activeTab === 'projects' && (
                <ProjectsPage
                  onNavigateHome={() => handleTabChange('home')}
                  onNavigateTab={handleTabChange}
                  onOpenEnquire={() => setIsEnquireOpen(true)}
                />
              )}

              {activeTab === 'drawings' && (
                <DrawingsPage
                  onNavigateHome={() => handleTabChange('home')}
                  onNavigateTab={handleTabChange}
                  onOpenEnquire={() => setIsEnquireOpen(true)}
                />
              )}

              {activeTab === 'team' && (
                <TeamPage
                  onNavigateHome={() => handleTabChange('home')}
                  onNavigateTab={handleTabChange}
                />
              )}

              {activeTab === 'careers' && (
                <CareersPage
                  onNavigateHome={() => handleTabChange('home')}
                  onShowToast={showToast}
                />
              )}

              {activeTab === 'contact' && (
                <ContactPage
                  onNavigateHome={() => handleTabChange('home')}
                  onShowToast={showToast}
                />
              )}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. Deep Charcoal Navy Corporate Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenEnquire={() => setIsEnquireOpen(true)}
      />

      {/* 6. Global Quote Request Modal */}
      <Suspense fallback={null}>
        {isEnquireOpen && (
          <EnquireModal
            isOpen={isEnquireOpen}
            onClose={() => setIsEnquireOpen(false)}
            onShowToast={showToast}
          />
        )}
      </Suspense>

      {/* 7. Toast Notification */}
      <ToastNotification
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
