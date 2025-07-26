import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { fetchHomepageContent } from './services/contentService';
import { CreditCardData, Category, Review, Guide, Offer, MenuData } from './types';
import LoadingSpinner from './components/LoadingSpinner';
import HomePage from './components/pages/HomePage';
import CategoryListPage from './components/pages/CategoryListPage';
import CardListPage from './components/pages/CardListPage';
import CardDetailPage from './components/pages/CardDetailPage';
import { NavigationProvider } from './components/contexts/NavigationContext';

// Define discriminated union for page data
interface HomePageData {
  type: 'HomePage';
  props: {};
}
interface CategoryListPageData {
  type: 'CategoryListPage';
  props: { categoryTitle: string };
}
interface CardListPageData {
  type: 'CardListPage';
  props: { filterType: string; filterValue: string };
}
interface CardDetailPageData {
  type: 'CardDetailPage';
  props: { card?: CreditCardData };
}
interface ErrorPageData {
    type: 'Error';
    props: { message: string };
}
type PageData = HomePageData | CategoryListPageData | CardListPageData | CardDetailPageData | ErrorPageData;


interface AppContent {
  cards: CreditCardData[];
  categories: Category[];
  reviews: Review[];
  guides: Guide[];
  latestOffer: Offer;
  menuData: MenuData;
}

const initialContent: AppContent = {
    cards: [],
    categories: [],
    reviews: [],
    guides: [],
    latestOffer: { id: 0, title: '', description: '', cta: '', imageUrl: '' },
    menuData: []
};

const App: React.FC = () => {
  const [content, setContent] = useState<AppContent>(initialContent);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [route, setRoute] = useState(window.location.hash || '#');

  // This effect synchronizes the URL hash with the `route` state.
  useEffect(() => {
    if (window.location.hash !== route) {
      window.history.pushState(null, '', route);
    }
  }, [route]);

  // This effect handles external URL changes (e.g., back/forward buttons).
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((path: string) => {
    if (route !== path) {
      setRoute(path);
      window.scrollTo(0, 0);
    } else {
       window.scrollTo(0, 0);
    }
  }, [route]);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        const data = await fetchHomepageContent();
        setContent(data);
      } catch (err) {
        setError('Failed to load website content. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, []);

  const parsedRoute = useMemo(() => route.split('/').filter(p => p && p !== '#'), [route]);

  const pageData = useMemo((): PageData => {
    try {
        const [page, param1, param2] = parsedRoute;

        if (page === 'category-list' && param1) {
            return { type: 'CategoryListPage', props: { categoryTitle: decodeURIComponent(param1) } };
        }
        if (page === 'card-list' && param1 && param2) {
            return { type: 'CardListPage', props: { filterType: param1, filterValue: decodeURIComponent(param2) } };
        }
        if (page === 'card' && param1) {
            const cardName = decodeURIComponent(param1);
            const card = content.cards.find(c => c.name === cardName);
            return { type: 'CardDetailPage', props: { card } };
        }
        return { type: 'HomePage', props: {} };
    } catch (e) {
        if (e instanceof URIError) {
            console.error("Malformed URI:", e);
            return { type: 'Error', props: { message: "The requested URL is invalid or contains malformed characters." } };
        }
        console.error("Error determining page:", e);
        return { type: 'Error', props: { message: "An unexpected error occurred while trying to navigate to this page." } };
    }
  }, [parsedRoute, content.cards]);


  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center">
          <LoadingSpinner />
        </div>
      );
    }
    
    if (error) {
        return (
           <div className="min-h-screen bg-black flex flex-col items-center justify-center text-red-400 p-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <h1 className="text-2xl font-bold">Something went wrong</h1>
              <p>{error}</p>
          </div>
        )
    }

    switch (pageData.type) {
        case 'CategoryListPage':
            return <CategoryListPage menuData={content.menuData} allCards={content.cards} {...pageData.props} />;
        case 'CardListPage':
            return <CardListPage allCards={content.cards} {...pageData.props} />;
        case 'CardDetailPage':
            return <CardDetailPage {...pageData.props} />;
        case 'HomePage':
            return <HomePage />;
        case 'Error':
            return (
               <div className="min-h-screen bg-black flex flex-col items-center justify-center text-red-400 p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  <h1 className="text-2xl font-bold">Something went wrong</h1>
                  <p>{pageData.props.message}</p>
              </div>
            );
        default:
            return <HomePage />;
    }
  };

  return (
    <NavigationProvider value={{ navigate }}>
      <div className="min-h-screen bg-black text-white font-sans flex flex-col">
        <Header menuData={content.menuData} />
        <main className="flex-grow w-full">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
};

export default App;