import { motion } from 'motion/react';
import {
  Activity,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Code,
  Compass,
  CreditCard,
  Download,
  FileText,
  Globe,
  Layout,
  LineChart,
  Loader2,
  Palette,
  Rocket,
  Search,
  SearchCode,
  Shield,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Terminal,
  Users,
  Wallet,
  X,
  Zap,
  Github,
  LogOut,
  Mail,
  Lock,
  User,
  Camera,
  History,
  Upload,
} from 'lucide-react';
import { useState, useRef } from 'react';

const CATEGORIES = ['All', 'Productivity', 'Dev Tools', 'SEO', 'Design', 'Security'];

const EXTENSIONS = [
  {
    id: 1,
    title: 'CodeSnippets Pro',
    category: 'Dev Tools',
    desc: 'Save, search, and reuse code snippets across all your active projects seamlessly.',
    iconUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=128&h=128&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=500&q=80',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&h=500&q=80',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500&q=80'
    ],
    icon: Code,
    price: '$4.99/mo',
    color: 'from-blue-500 to-indigo-500',
    iconColor: 'text-indigo-400',
    bgLight: 'bg-indigo-500/10',
    date: '2023-11-15',
    downloads: 12500
  },
  {
    id: 2,
    title: 'FocusFlow',
    category: 'Productivity',
    desc: 'Block distractions and track your deepest work sessions with detailed analytics.',
    iconUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=128&h=128&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&h=500&q=80',
      'https://images.unsplash.com/photo-1507925922894-3ccff505a464?auto=format&fit=crop&w=800&h=500&q=80'
    ],
    icon: Zap,
    price: 'Free',
    color: 'from-rose-500 to-orange-500',
    iconColor: 'text-rose-400',
    bgLight: 'bg-rose-500/10',
    date: '2024-01-20',
    downloads: 85200
  },
  {
    id: 3,
    title: 'PixelPerfect',
    category: 'Design',
    desc: 'Measure anything on your screen with pixel accuracy and export layout specs.',
    iconUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=128&h=128&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&h=500&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&h=500&q=80'
    ],
    icon: Layout,
    price: '$9.99',
    color: 'from-emerald-500 to-teal-500',
    iconColor: 'text-emerald-400',
    bgLight: 'bg-emerald-500/10',
    date: '2023-08-05',
    downloads: 41000
  },
  {
    id: 4,
    title: 'RankBoost',
    category: 'SEO',
    desc: 'Instant on-page SEO analysis, meta tag suggestions, and keyword tracking directly in-browser.',
    iconUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=128&h=128&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500&q=80'
    ],
    icon: LineChart,
    price: '$12.00/mo',
    color: 'from-amber-500 to-yellow-500',
    iconColor: 'text-amber-400',
    bgLight: 'bg-amber-500/10',
    date: '2024-02-10',
    downloads: 19800
  },
  {
    id: 5,
    title: 'ColorWand',
    category: 'Design',
    desc: 'Extract color palettes from any website and generate accessible contrast reports.',
    iconUrl: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=128&h=128&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=800&h=500&q=80',
      'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=800&h=500&q=80'
    ],
    icon: Palette,
    price: 'Free',
    color: 'from-fuchsia-500 to-pink-500',
    iconColor: 'text-fuchsia-400',
    bgLight: 'bg-fuchsia-500/10',
    date: '2023-12-01',
    downloads: 145000
  },
  {
    id: 6,
    title: 'SecureGuard',
    category: 'Security',
    desc: 'Real-time phishing protection and password exposure alerts as you browse.',
    iconUrl: 'https://images.unsplash.com/photo-1510511459019-5efa65507fd2?auto=format&fit=crop&w=128&h=128&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1510511459019-5efa65507fd2?auto=format&fit=crop&w=800&h=500&q=80',
      'https://images.unsplash.com/photo-1624969862644-8d42cace5f29?auto=format&fit=crop&w=800&h=500&q=80'
    ],
    icon: Shield,
    price: '$2.99/mo',
    color: 'from-cyan-500 to-blue-500',
    iconColor: 'text-cyan-400',
    bgLight: 'bg-cyan-500/10',
    date: '2023-09-22',
    downloads: 32000
  },
  {
    id: 7,
    title: 'RegexHelper',
    category: 'Dev Tools',
    desc: 'Build, test, and debug regular expressions visually without ever leaving your main tab.',
    iconUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=128&h=128&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500&q=80'
    ],
    icon: SearchCode,
    price: 'Free',
    color: 'from-violet-500 to-purple-500',
    iconColor: 'text-violet-400',
    bgLight: 'bg-violet-500/10',
    date: '2024-03-05',
    downloads: 5000
  },
  {
    id: 8,
    title: 'DealFinder',
    category: 'Productivity',
    desc: 'Automatically applies the best coupon codes when you reach a checkout page.',
    iconUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=128&h=128&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&h=500&q=80'
    ],
    icon: ShoppingBag,
    price: 'Free',
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-400',
    bgLight: 'bg-green-500/10',
    date: '2023-10-30',
    downloads: 210500
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [pricingFilter, setPricingFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Trending');
  const [installStates, setInstallStates] = useState<Record<number, 'installing' | 'installed'>>({});
  const [selectedPaidApp, setSelectedPaidApp] = useState<typeof EXTENSIONS[0] | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'applepay'>('card');
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [transactionDetails, setTransactionDetails] = useState<{ id: string; date: string } | null>(null);
  const [currentView, setCurrentView] = useState<'marketplace' | 'creators' | 'docs' | 'profile' | 'extensionDetail'>('marketplace');
  const [selectedExtensionDetail, setSelectedExtensionDetail] = useState<typeof EXTENSIONS[0] | null>(null);

  const goToDetail = (ext: typeof EXTENSIONS[0]) => {
     setSelectedExtensionDetail(ext);
     setCurrentView('extensionDetail');
     window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auth State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');
  const [authLoading, setAuthLoading] = useState(false);
  interface Transaction {
    id: string;
    date: string;
    amount: string;
    title: string;
  }
  
  interface UserProfile {
    name: string;
    email: string;
    avatarUrl?: string;
    purchases: number[];
    transactions: Transaction[];
  }

  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [activeProfileTab, setActiveProfileTab] = useState<'extensions' | 'transactions' | 'settings'>('extensions');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setTimeout(() => {
      setCurrentUser({ 
        name: 'Demo User', 
        email: 'user@example.com',
        purchases: [],
        transactions: [],
      });
      setAuthLoading(false);
      setIsAuthModalOpen(false);
    }, 1500);
  };

  const handleInstallClick = (ext: typeof EXTENSIONS[0]) => {
    if (ext.price === 'Free' || (currentUser && currentUser.purchases.includes(ext.id))) {
       startInstall(ext.id);
    } else {
       setSelectedPaidApp(ext);
       setPaymentStatus('idle');
       setTransactionDetails(null);
    }
  };

  const startInstall = (id: number) => {
    setInstallStates(prev => ({ ...prev, [id]: 'installing' }));
    setTimeout(() => {
      setInstallStates(prev => ({ ...prev, [id]: 'installed' }));
    }, 1500);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPaidApp) {
       setPaymentStatus('processing');
       setTimeout(() => {
         setPaymentStatus('success');
         const txn = {
            id: 'TXN-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
            date: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
            amount: selectedPaidApp.price,
            title: selectedPaidApp.title
         };
         setTransactionDetails(txn);
         if (currentUser) {
            setCurrentUser(prev => prev ? ({
              ...prev,
              purchases: [...prev.purchases, selectedPaidApp.id],
              transactions: [txn, ...prev.transactions]
            }) : prev);
         }
       }, 2000);
    }
  };

  const handleContinueToInstall = () => {
    if (selectedPaidApp) {
        const id = selectedPaidApp.id;
        setSelectedPaidApp(null);
        setPaymentStatus('idle');
        startInstall(id);
    }
  };

  const closePaymentModal = () => {
    if (paymentStatus === 'idle') {
      setSelectedPaidApp(null);
    }
  };

  let filteredExtensions = EXTENSIONS.filter((ext) => {
    const matchesCategory = activeCategory === 'All' || ext.category === activeCategory;
    const matchesSearch = ext.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          ext.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesPricing = true;
    if (pricingFilter === 'Free') matchesPricing = ext.price === 'Free';
    if (pricingFilter === 'Paid') matchesPricing = ext.price !== 'Free';

    return matchesCategory && matchesSearch && matchesPricing;
  });

  if (sortBy === 'Newest') {
    filteredExtensions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (sortBy === 'Popular') {
    filteredExtensions.sort((a, b) => b.downloads - a.downloads);
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50 relative selection:bg-indigo-500/30 font-sans">
      {/* Mesh Gradients Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[40%] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-20 border-b border-white/5 backdrop-blur-md bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-xl tracking-tight">Nexus</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <button onClick={() => setCurrentView('marketplace')} className={`${currentView === 'marketplace' ? 'text-zinc-100 border-b-2 border-white pb-1' : 'hover:text-white'} transition-all`}>Marketplace</button>
            <button onClick={() => setCurrentView('creators')} className={`${currentView === 'creators' ? 'text-zinc-100 border-b-2 border-white pb-1' : 'hover:text-white'} transition-all`}>Creators</button>
            <button onClick={() => setCurrentView('docs')} className={`${currentView === 'docs' ? 'text-zinc-100 border-b-2 border-white pb-1' : 'hover:text-white'} transition-all`}>Docs</button>
          </div>

          <div className="flex items-center gap-4">
            {currentUser ? (
               <div className="flex items-center gap-4">
                 <button 
                  onClick={() => setCurrentUser(null)}
                  className="text-zinc-400 hover:text-white transition-colors flex items-center justify-center p-2 rounded-full hover:bg-white/5"
                  title="Sign Out"
                 >
                   <LogOut className="w-4 h-4" />
                 </button>
                 <button 
                   onClick={() => setCurrentView('profile')}
                   className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-white/10 hover:bg-white/5 transition-colors"
                 >
                   <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center overflow-hidden">
                     {currentUser.avatarUrl ? (
                        <img src={currentUser.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                     ) : (
                        <span className="text-[10px] font-bold text-white">DU</span>
                     )}
                   </div>
                   <span className="text-sm font-medium text-zinc-300 hidden sm:block">{currentUser.name}</span>
                 </button>
               </div>
            ) : (
               <>
                 <button 
                   onClick={() => { setAuthMode('signin'); setIsAuthModalOpen(true); }}
                   className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hidden sm:block"
                 >
                   Sign In
                 </button>
                 <button 
                   onClick={() => { setAuthMode('signup'); setIsAuthModalOpen(true); }}
                   className="relative group px-5 py-2.5 rounded-full bg-white text-zinc-950 text-sm font-semibold hover:scale-105 active:scale-95 transition-transform overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                 >
                   <span className="relative z-10">Get Started</span>
                 </button>
               </>
            )}
          </div>
        </div>
      </nav>

      {currentView === 'marketplace' && (
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center pb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(99,102,241,0.1)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nexus App Store 2.0 is live</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
          >
            Supercharge your browser with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">pro tools</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl font-light"
          >
            Discover hand-picked, premium extensions designed to elevate your productivity, secure your data, and simplify your workflow.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-2xl relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-zinc-900/80 border border-white/10 rounded-2xl p-2 backdrop-blur-xl focus-within:border-indigo-500/50 transition-colors shadow-2xl overflow-hidden">
              <Search className="w-6 h-6 text-zinc-400 ml-3" />
              <input 
                type="text" 
                placeholder="Search extensions, apps, themes..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-zinc-100 placeholder-zinc-500 px-4 py-3 pb-3.5 font-medium"
              />
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:scale-[1.02] active:scale-95 transition-transform">
                Search
              </button>
            </div>
          </motion.div>

          {/* Floating UI Elements (Hero Decorative) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block perspective-[1000px]">
             {/* Left floating icon */}
             <motion.div 
               animate={{ y: [-15, 15, -15], rotate: [-5, 5, -5] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute left-[15%] top-[30%] w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-xl shadow-black/50"
             >
               <Code className="w-8 h-8 text-indigo-400" />
             </motion.div>

             {/* Right floating icon */}
             <motion.div 
               animate={{ y: [10, -20, 10], rotate: [5, -10, 5] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
               className="absolute right-[15%] top-[10%] w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-xl shadow-black/50"
             >
               <LineChart className="w-7 h-7 text-emerald-400" />
             </motion.div>

             {/* Bottom right floating icon */}
             <motion.div 
               animate={{ y: [-10, 10, -10], rotate: [-10, 0, -10] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute right-[25%] top-[60%] w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-xl shadow-black/50"
             >
               <Palette className="w-6 h-6 text-fuchsia-400" />
             </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-10 flex flex-col xl:flex-row xl:items-center justify-between border-b border-white/5 pb-6 gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide w-full xl:w-auto">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-zinc-100 text-zinc-950 shadow-sm' 
                    : 'bg-white/5 text-zinc-400 hover:text-zinc-100 hover:bg-white/10 border border-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full xl:w-auto">
            <div className="flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full border border-white/5">
              {['All', 'Free', 'Paid'].map(type => (
                <button 
                  key={type}
                  onClick={() => setPricingFilter(type)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    pricingFilter === type 
                      ? 'bg-zinc-700 text-white' 
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full border border-white/5">
              <SlidersHorizontal className="w-3.5 h-3.5 ml-3 mr-1 text-zinc-500 hidden sm:block" />
              {['Trending', 'Newest', 'Popular'].map(sort => (
                <button 
                  key={sort}
                  onClick={() => setSortBy(sort)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    sortBy === sort 
                      ? 'bg-zinc-700 text-white' 
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  }`}
                >
                  {sort}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Extensions Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredExtensions.map((ext, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              key={ext.id}
              className="group relative h-[300px] flex flex-col rounded-3xl bg-[#111113]/80 border border-white/5 backdrop-blur-md p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] focus-within:ring-2 ring-indigo-500/50 outline-none cursor-pointer"
              onClick={() => goToDetail(ext)}
            >
              {/* Top content: Icon & Price */}
              <div className="flex items-start justify-between mb-5 relative z-10 transition-transform duration-500 group-hover:-translate-y-2 shrink-0">
                <div className={`w-12 h-12 rounded-xl ${ext.bgLight} border border-white/5 overflow-hidden flex items-center justify-center shrink-0`}>
                  {ext.iconUrl ? (
                    <img src={ext.iconUrl} alt={`${ext.title} icon`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  ) : (
                    <ext.icon className={`w-6 h-6 ${ext.iconColor}`} />
                  )}
                </div>
                <span className="text-sm font-semibold text-zinc-300 bg-zinc-900/50 px-3 py-1 rounded-full border border-white/5">
                  {ext.price}
                </span>
              </div>

              {/* Text content */}
              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2 flex flex-col flex-1">
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-zinc-500 mb-2">{ext.category}</div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-colors">{ext.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light line-clamp-2">{ext.desc}</p>
                </div>
                
                <div className="mt-auto pt-4 flex items-center justify-between text-[11px] font-medium text-zinc-500">
                  <div className="flex items-center gap-1.5" title={`${ext.downloads.toLocaleString()} downloads`}>
                    <Download className="w-3.5 h-3.5" />
                    <span>{(ext.downloads / 1000).toFixed(1)}k</span>
                  </div>
                  <div className="flex items-center gap-1.5" title={`Updated on ${new Date(ext.date).toLocaleDateString()}`}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{new Date(ext.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>

              {/* Slide-in Buy Button */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 z-20 ${installStates[ext.id] ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/90 to-transparent pointer-events-none -top-12" />
                <button 
                  onClick={(e) => {
                     e.stopPropagation();
                     if (!installStates[ext.id]) handleInstallClick(ext);
                  }}
                  disabled={!!installStates[ext.id]}
                  className={`relative w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2 outline-none group/btn ${
                    installStates[ext.id] === 'installed'
                      ? 'bg-zinc-800 text-zinc-400 border border-white/5 shadow-none'
                      : installStates[ext.id] === 'installing'
                        ? `bg-gradient-to-r ${ext.color} opacity-80 cursor-default`
                        : `bg-gradient-to-r ${ext.color} hover:brightness-110 active:scale-[0.98] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]`
                  }`}
                >
                  {installStates[ext.id] === 'installing' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Installing...</span>
                    </>
                  ) : installStates[ext.id] === 'installed' ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-zinc-300">Installed</span>
                    </>
                  ) : (
                    <>
                      <span>{ext.price === 'Free' ? 'Install' : `Buy for ${ext.price}`}</span>
                      <Download className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>

              {/* Subtle top glare effect */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {filteredExtensions.length === 0 && (
          <div className="py-24 text-center">
            <Search className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-zinc-300">No extensions found</h3>
            <p className="text-zinc-500 mt-2">Try adjusting your search or category filter.</p>
          </div>
        )}

        {/* Features Section */}
        <section className="mt-40 pt-24 border-t border-white/5 relative">
          <div className="absolute inset-0 block pointer-events-none">
            <div className="absolute top-0 right-[20%] w-[40%] h-[50%] rounded-full bg-violet-600/5 blur-[120px]" />
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Built for performance and security.</h2>
            <p className="text-lg text-zinc-400 font-light">
              Nexus is more than just a marketplace. It's a curated ecosystem where every extension is reviewed, optimized, and guaranteed safe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                icon: Activity,
                title: "Zero Performance Hit",
                desc: "Every extension is benchmarked to ensure it never slows down your browsing experience or hogs system memory.",
                color: "text-emerald-400"
              },
              {
                icon: Shield,
                title: "Military-Grade Security",
                desc: "Source codes are scanned for vulnerabilities, memory leaks, and any malicious trackers before making it to the store.",
                color: "text-indigo-400"
              },
              {
                icon: Globe,
                title: "Cross-Browser Sync",
                desc: "Install once and sync your settings, licenses, and data across all your devices instantly.",
                color: "text-fuchsia-400"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center mb-6 shadow-xl border border-white/5`}>
                   <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Loved by developers & creators</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sarah Jenkins", role: "Frontend Engineer", text: "Nexus changed how I work. CodeSnippets Pro and RegexHelper alone save me hours every single week." },
              { name: "Michael Chen", role: "Product Designer", text: "The quality of extensions here is unmatched. ColorWand is now an indispensable part of my design toolkit." },
              { name: "Elena Rodriguez", role: "SEO Specialist", text: "RankBoost is incredibly accurate. Having all these pro tools in one trusted marketplace gives me peace of mind." }
            ].map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5"
              >
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-zinc-300 mb-8 italic">"{test.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center font-bold text-sm">
                    {test.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-100 text-sm">{test.name}</h4>
                    <p className="text-xs text-zinc-500">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 mb-16 relative z-10">
          <div className="rounded-[3rem] bg-gradient-to-br from-indigo-900/40 via-violet-900/40 to-fuchsia-900/40 border border-white/10 p-12 md:p-20 text-center overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to upgrade your browser?</h2>
              <p className="text-lg text-indigo-200/80 font-light mb-10">
                Join 500,000+ professionals who trust Nexus marketplace for their daily workflow tools.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => {
                    setCurrentView('marketplace');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-white/10"
                >
                  <Compass className="w-5 h-5" />
                  Explore Marketplace
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('creators');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/80 border border-white/10 text-white font-semibold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Become a Creator
                </button>
              </div>
              <div className="mt-10 flex items-center justify-center gap-6 text-sm text-indigo-300/60 font-medium">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> No credit card required</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> 1-click install</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      )}

      {currentView === 'extensionDetail' && selectedExtensionDetail && (
        <main className="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-32">
          
          <button 
            onClick={() => setCurrentView('marketplace')}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
             <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
             Back to Marketplace
          </button>

          {/* Main Content Area */}
          <div className="grid lg:grid-cols-[1fr_360px] gap-12">
            
            {/* Left Column: Details */}
            <div className="space-y-12">
               {/* Header Section */}
               <div className="flex items-start gap-6">
                 <div className={`w-24 h-24 rounded-3xl ${selectedExtensionDetail.bgLight} border border-white/5 overflow-hidden flex items-center justify-center shrink-0`}>
                    {selectedExtensionDetail.iconUrl ? (
                      <img src={selectedExtensionDetail.iconUrl} alt={`${selectedExtensionDetail.title} icon`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    ) : (
                      <selectedExtensionDetail.icon className={`w-12 h-12 ${selectedExtensionDetail.iconColor}`} />
                    )}
                 </div>
                 <div>
                   <div className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">{selectedExtensionDetail.category}</div>
                   <h1 className="text-4xl font-bold text-white mb-2">{selectedExtensionDetail.title}</h1>
                   <div className="flex items-center gap-4 text-sm text-zinc-400">
                      <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-400 fill-amber-400"/> 4.8 (1,284 reviews)</span>
                      <span className="flex items-center gap-1.5"><Download className="w-4 h-4" /> {selectedExtensionDetail.downloads.toLocaleString()} installs</span>
                      <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> By Nexus Dev Team</span>
                   </div>
                 </div>
               </div>

               {/* Screenshots Carousel */}
               <div className="space-y-4">
                  <h2 className="text-xl font-bold text-white">Screenshots</h2>
                  <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                     {selectedExtensionDetail.screenshots?.map((screenshot, idx) => (
                        <div key={idx} className="w-[400px] h-[250px] shrink-0 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center snap-center hover:border-white/20 transition-colors overflow-hidden">
                           <picture>
                             <source srcSet={screenshot} type="image/webp" />
                             <img src={screenshot} alt={`Screenshot ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                           </picture>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Description */}
               <div className="space-y-4">
                  <h2 className="text-xl font-bold text-white">Description</h2>
                  <div className="prose prose-invert prose-zinc max-w-none text-zinc-300">
                    <p className="text-lg leading-relaxed">{selectedExtensionDetail.desc}</p>
                    <p className="leading-relaxed mt-4">
                      Supercharge your browser experience with the ultimate tool designed for modern users. This extension seamlessly integrates into your workflow, providing unparalleled performance and reliability.
                    </p>
                    <ul className="mt-4 space-y-2">
                       <li>🔥 Blazing fast performance</li>
                       <li>🛡️ Enterprise-grade security</li>
                       <li>🎨 Beautifully designed interface</li>
                       <li>⚡ Real-time synchronization</li>
                    </ul>
                  </div>
               </div>

               {/* Changelog */}
               <div className="space-y-6">
                 <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">Changelog</h2>
                 <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                       <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 text-indigo-400 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                         <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                       </div>
                       <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-zinc-900/50 border border-white/5 space-y-2">
                         <div className="flex items-center justify-between">
                            <h3 className="font-bold text-white">Version 2.1.0</h3>
                            <span className="text-xs text-zinc-500">2 days ago</span>
                         </div>
                         <p className="text-sm text-zinc-400">Added new performance dashboard and resolved sync conflicts.</p>
                       </div>
                    </div>
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                       <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 text-zinc-500 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                         <div className="w-2 h-2 bg-zinc-600 rounded-full"></div>
                       </div>
                       <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-zinc-900/50 border border-white/5 space-y-2">
                         <div className="flex items-center justify-between">
                            <h3 className="font-bold text-white">Version 2.0.0</h3>
                            <span className="text-xs text-zinc-500">Jan 15, 2024</span>
                         </div>
                         <p className="text-sm text-zinc-400">Major redesign and implementation of Manifest V3 architecture.</p>
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Right Column: CTA Panel */}
            <div>
               <div className="sticky top-24 rounded-3xl bg-zinc-900 border border-white/10 p-6 space-y-6 shadow-2xl">
                 <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{selectedExtensionDetail.price}</div>
                    <div className="text-sm text-zinc-400">One-time payment</div>
                 </div>

                 <button 
                  onClick={() => !installStates[selectedExtensionDetail.id] && handleInstallClick(selectedExtensionDetail)}
                  disabled={!!installStates[selectedExtensionDetail.id]}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2 outline-none group/btn ${
                    installStates[selectedExtensionDetail.id] === 'installed'
                      ? 'bg-zinc-800 text-zinc-400 border border-white/5 shadow-none'
                      : installStates[selectedExtensionDetail.id] === 'installing'
                        ? `bg-gradient-to-r ${selectedExtensionDetail.color} opacity-80 cursor-default`
                        : `bg-gradient-to-r ${selectedExtensionDetail.color} hover:brightness-110 active:scale-[0.98] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]`
                  }`}
                 >
                    {installStates[selectedExtensionDetail.id] === 'installing' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Installing...</span>
                      </>
                    ) : installStates[selectedExtensionDetail.id] === 'installed' ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="text-zinc-300">Installed</span>
                      </>
                    ) : (
                      <>
                        <span>{selectedExtensionDetail.price === 'Free' || (currentUser?.purchases.includes(selectedExtensionDetail.id)) ? 'Install Now' : 'Purchase Extension'}</span>
                        <Download className="w-5 h-5 transition-transform group-hover/btn:-translate-y-0.5" />
                      </>
                    )}
                 </button>

                 <div className="space-y-4 pt-6 border-t border-white/10">
                    <div className="flex justify-between text-sm">
                       <span className="text-zinc-500">Version</span>
                       <span className="text-zinc-300 font-medium">2.1.0</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-zinc-500">Updated</span>
                       <span className="text-zinc-300 font-medium">{new Date(selectedExtensionDetail.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-zinc-500">Size</span>
                       <span className="text-zinc-300 font-medium">2.4 MB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-zinc-500">Languages</span>
                       <span className="text-zinc-300 font-medium">English, Spanish +4</span>
                    </div>
                 </div>

                 <div className="pt-6 border-t border-white/10 flex justify-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                      <Globe className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-indigo-400 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                 </div>
               </div>
            </div>
          </div>
        </main>
      )}

      {currentView === 'creators' && (
        <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
          <section className="text-center max-w-4xl mx-auto mb-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-400 mb-8"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>Nexus Developer Program</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            >
              Build tools for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">millions of users.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 font-light mb-10 max-w-2xl mx-auto"
            >
              Turn your browser extensions into a profitable business. Nexus provides the audience, the infrastructure, and the payment processing. You focus on code.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button 
                onClick={() => {
                  if(!currentUser) {
                    setAuthMode('signup');
                    setIsAuthModalOpen(true);
                  }
                }}
                className="px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2 mx-auto shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <Code className="w-5 h-5" />
                Start Building Now
              </button>
            </motion.div>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Massive Reach</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Instantly put your extension in front of over 500k active professionals searching for tools.</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Painless Monetization</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">We handle global payments, taxes, and refunds. Keep 85% of your revenue with daily payouts.</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Piracy Protection</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Built-in license verification and robust anti-piracy measures protect your intellectual property.</p>
            </div>
          </section>
        </main>
      )}

      {currentView === 'docs' && (
        <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-32 flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Getting Started</h3>
              <ul className="space-y-3 mb-8">
                <li><a href="#" className="text-indigo-400 font-medium flew items-center gap-2 flex"><BookOpen className="w-4 h-4"/> Introduction</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-zinc-200 transition-colors">Quickstart Guide</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-zinc-200 transition-colors">Manifest V3 Support</a></li>
              </ul>
              
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">API Reference</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-2"><Terminal className="w-4 h-4"/> Authentication</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-zinc-200 transition-colors">Licensing API</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-zinc-200 transition-colors">Analytics Webhooks</a></li>
              </ul>
            </div>
          </aside>

          {/* Doc Content */}
          <article className="flex-1 max-w-3xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">Introduction to Nexus</h1>
                <p className="text-xl text-zinc-400 font-light">Learn how to build, publish, and monetize your browser extensions.</p>
              </div>
              
              <div className="prose prose-invert prose-zinc max-w-none">
                <p className="text-zinc-300 leading-relaxed mb-6">
                  Nexus is a modern extension marketplace designed combining discovering, distribution, and monetization. Whether you're building a simple utility or a complex developer tool, Nexus provides the APIs you need to succeed.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">Why Nexus?</h2>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  Traditional web stores lack native monetization options, leading to fragmented user experiences and high churn rates. We've built Nexus with developer revenue in mind from day one.
                </p>

                <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 mb-8 mt-6">
                  <div className="flex items-center gap-2 mb-4 text-white font-semibold">
                    <FileText className="w-5 h-5 text-indigo-400" />
                    Installation Command
                  </div>
                  <div className="bg-black relative rounded-lg p-4 font-mono text-sm text-zinc-300">
                    <div className="text-zinc-500 select-none absolute left-4 top-4">$&nbsp;</div>
                    <div className="pl-5">npm install -g @nexus-tools/cli</div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">Your first extension</h2>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  To get started, you will need to authenticate the CLI using your Nexus Creator Token. You can generate one from your developer dashboard.
                </p>
              </div>
            </motion.div>
          </article>
        </main>
      )}

      {currentView === 'profile' && currentUser && (
        <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-32">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
            <div className="relative group">
              <div className="w-32 h-32 rounded-3xl bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
                {currentUser.avatarUrl ? (
                  <img src={currentUser.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-12 h-12 text-zinc-500" />
                )}
              </div>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-center justify-center"
              >
                <Camera className="w-8 h-8 text-white" />
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setCurrentUser(prev => prev ? { ...prev, avatarUrl: reader.result as string } : prev);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-white mb-2">{currentUser.name}</h1>
              <p className="text-zinc-400 mb-6">{currentUser.email}</p>
              
              <div className="flex bg-zinc-900 border border-white/10 rounded-xl p-1 w-full max-w-sm">
                <button 
                  onClick={() => setActiveProfileTab('extensions')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${activeProfileTab === 'extensions' ? 'bg-white/10 text-white shadow-sm' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                >
                  Extensions
                </button>
                <button 
                  onClick={() => setActiveProfileTab('transactions')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${activeProfileTab === 'transactions' ? 'bg-white/10 text-white shadow-sm' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                >
                  Transactions
                </button>
                <button 
                  onClick={() => setActiveProfileTab('settings')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${activeProfileTab === 'settings' ? 'bg-white/10 text-white shadow-sm' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                >
                  Settings
                </button>
              </div>
            </div>
          </div>
          
          {/* Profile Content */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {activeProfileTab === 'extensions' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-6">Purchased Extensions</h2>
              {currentUser.purchases.length === 0 ? (
                <div className="text-center py-16 bg-zinc-900/50 rounded-2xl border border-white/5">
                  <ShoppingBag className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No extensions yet</h3>
                  <p className="text-zinc-400">Head over to the marketplace to find some great tools.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentUser.purchases.map(id => {
                    const ext = EXTENSIONS.find(e => e.id === id);
                    if (!ext) return null;
                    return (
                      <div key={id} className="bg-zinc-900 border border-white/10 rounded-2xl p-6 group hover:border-white/20 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 overflow-hidden flex items-center justify-center mb-4 shrink-0">
                          {ext.iconUrl ? (
                             <img src={ext.iconUrl} alt={`${ext.title} icon`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                          ) : (
                             <ext.icon className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <h3 className="font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{ext.title}</h3>
                        <p className="text-sm text-zinc-400 mb-4 h-10 line-clamp-2">{ext.desc}</p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-md">Purchased</span>
                          <button 
                            onClick={() => startInstall(id)}
                            className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/5"
                            disabled={installStates[id] !== undefined}
                          >
                            {installStates[id] === 'installing' ? 'Installing...' : installStates[id] === 'installed' ? 'Installed' : 'Install'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {activeProfileTab === 'transactions' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-6">Transaction History</h2>
              {currentUser.transactions.length === 0 ? (
                <div className="text-center py-16 bg-zinc-900/50 rounded-2xl border border-white/5">
                  <History className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No transactions</h3>
                  <p className="text-zinc-400">Your purchase history will appear here.</p>
                </div>
              ) : (
                <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-white/5 text-xs uppercase text-zinc-400 font-semibold tracking-wider">
                      <tr>
                        <th className="px-6 py-4">Transaction ID</th>
                        <th className="px-6 py-4">Item</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {currentUser.transactions.map(txn => (
                        <tr key={txn.id} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 text-sm font-mono text-zinc-400">{txn.id}</td>
                          <td className="px-6 py-4 text-sm font-medium text-white">{txn.title}</td>
                          <td className="px-6 py-4 text-sm text-zinc-400">{txn.date}</td>
                          <td className="px-6 py-4 text-sm font-medium text-emerald-400">{txn.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeProfileTab === 'settings' && (
             <div className="space-y-8 max-w-2xl">
               <div>
                  <h2 className="text-xl font-bold text-white mb-6">Account Settings</h2>
                  <div className="space-y-4">
                     <div>
                       <label className="block text-sm font-medium text-zinc-400 mb-2">Display Name</label>
                       <input type="text" defaultValue={currentUser.name} className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:border-indigo-500 transition-colors" />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                       <input type="email" defaultValue={currentUser.email} disabled className="w-full bg-zinc-900/50 border border-white/5 rounded-xl py-3 px-4 text-zinc-500 outline-none cursor-not-allowed" />
                       <p className="text-xs text-zinc-500 mt-2">Email address cannot be changed for demo accounts.</p>
                     </div>
                  </div>
               </div>

               <div className="pt-6 border-t border-white/10">
                 <h3 className="text-lg font-medium text-rose-500 mb-4">Danger Zone</h3>
                 <button className="px-4 py-2 border border-rose-500/50 text-rose-500 hover:bg-rose-500/10 rounded-lg text-sm font-medium transition-colors">
                   Delete Account
                 </button>
               </div>
             </div>
          )}
          </motion.div>
        </main>
      )}

      {/* Payment Modal */}
      {selectedPaidApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closePaymentModal} />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-start"
          >
            {paymentStatus === 'processing' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center text-center py-16 flex-1">
                <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">Processing Payment</h3>
                <p className="text-zinc-400">Please wait while we verify your transaction...</p>
              </motion.div>
            )}

            {paymentStatus === 'success' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center text-center py-6 flex-1 w-full">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Payment Successful!</h3>
                <p className="text-zinc-400 mb-8">Your transaction has been verified.</p>

                {transactionDetails && (
                  <div className="w-full bg-black/40 border border-white/5 rounded-2xl p-5 mb-8 text-left">
                     <h4 className="text-sm font-semibold text-white mb-4 border-b border-white/5 pb-2">Receipt Details</h4>
                     <div className="space-y-3 text-sm">
                       <div className="flex justify-between">
                         <span className="text-zinc-500">Transaction ID</span>
                         <span className="font-mono text-emerald-400">{transactionDetails.id}</span>
                       </div>
                       <div className="flex justify-between">
                         <span className="text-zinc-500">Date</span>
                         <span className="text-zinc-300">{transactionDetails.date}</span>
                       </div>
                       <div className="flex justify-between">
                         <span className="text-zinc-500">Amount Paid</span>
                         <span className="font-semibold text-white">{selectedPaidApp.price}</span>
                       </div>
                     </div>
                  </div>
                )}

                <button 
                  onClick={handleContinueToInstall}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-400 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <Download className="w-5 h-5" />
                  Continue to Install
                </button>
              </motion.div>
            )}

            {paymentStatus === 'idle' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col">
              <button 
                onClick={closePaymentModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-zinc-400 hover:text-white z-10"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1 text-white">Complete Purchase</h3>
                <p className="text-zinc-400 text-sm">You are buying {selectedPaidApp.title}</p>
              </div>
            
            <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5 mb-6">
               <div className="flex items-center gap-3">
                 <div className={`w-10 h-10 rounded-lg ${selectedPaidApp.bgLight} flex items-center justify-center`}>
                    <selectedPaidApp.icon className={`w-5 h-5 ${selectedPaidApp.iconColor}`} />
                 </div>
                 <div className="font-medium text-white">{selectedPaidApp.title}</div>
               </div>
               <div className="text-xl font-bold text-white">{selectedPaidApp.price}</div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-colors ${
                    paymentMethod === 'card' 
                      ? 'bg-indigo-500/10 border-indigo-500/50 text-indigo-400' 
                      : 'bg-zinc-950 border-white/10 text-zinc-400 hover:bg-zinc-900 border-white/5 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-5 h-5 mb-1.5" />
                  <span className="text-[11px] font-medium">Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('applepay')}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-colors ${
                    paymentMethod === 'applepay' 
                      ? 'bg-zinc-100 border-white text-zinc-900' 
                      : 'bg-zinc-950 border-white/10 text-zinc-400 hover:bg-zinc-900 border-white/5 hover:text-white'
                  }`}
                >
                  <Wallet className="w-5 h-5 mb-1.5" />
                  <span className="text-[11px] font-medium">Apple Pay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-colors ${
                    paymentMethod === 'paypal' 
                      ? 'bg-[#003087]/20 border-[#0079C1]/50 text-[#0079C1]' 
                      : 'bg-zinc-950 border-white/10 text-zinc-400 hover:bg-zinc-900 border-white/5 hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5 mb-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.474 0-.88.358-.964.827l-1.062 5.406-1.145 5.823a.634.634 0 0 1-.633.513c0 .001.002.001 0 0z" fill="#003087"/>
                    <path d="M6.353 21.338H3.14l1.83-9.336L6.37 5.092l1.62-.24h6.052c2.148 0 3.791.439 4.673 1.488.854.912 1.157 2.052.923 3.493-.902 4.63-3.921 6.22-7.854 6.22h-1.956a.81.81 0 0 0-.796.671l-1.012 5.088-.507 2.593c-.056.326-.356.551-.687.551M10.158.4A.824.824 0 0 0 9.387 1l-2.906 14.814a.39.39 0 0 0 .385.46h2.155c.29 0 .54-.22.593-.507l1.01-5.087a.814.814 0 0 1 .8-.669h1.956c3.276 0 5.795-1.328 6.546-5.18.2-1.077-.026-1.955-.572-2.583C18.665.986 17.27.4 15.345.4h-5.187z" fill="#0079C1"/>
                  </svg>
                  <span className="text-[11px] font-medium">PayPal</span>
                </button>
              </div>
            </div>

            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              {paymentMethod === 'card' ? (
                <>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white outline-none focus:border-indigo-500 transition-colors" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:border-indigo-500 transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">CVC</label>
                      <input type="text" placeholder="123" className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:border-indigo-500 transition-colors" required />
                    </div>
                  </div>
                  <button type="submit" className={`w-full py-3.5 rounded-xl bg-gradient-to-r ${selectedPaidApp.color} font-bold text-white mt-6 hover:brightness-110 active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2`}>
                    Pay securely <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              ) : paymentMethod === 'applepay' ? (
                <div className="pt-2">
                  <p className="text-zinc-500 text-sm text-center mb-6">You will be redirected to Apple to complete your purchase securely.</p>
                  <button type="submit" className="w-full py-3.5 rounded-xl bg-zinc-100 font-bold text-zinc-950 hover:bg-white active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <Wallet className="w-5 h-5" />
                    Pay with Apple Pay
                  </button>
                </div>
              ) : (
                <div className="pt-2">
                  <p className="text-zinc-500 text-sm text-center mb-6">You will be redirected to PayPal to complete your purchase securely.</p>
                  <button type="submit" className="w-full py-3.5 rounded-xl bg-[#FFC439] font-bold text-zinc-900 hover:bg-[#F4BB33] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2">
                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.474 0-.88.358-.964.827l-1.062 5.406-1.145 5.823a.634.634 0 0 1-.633.513c0 .001.002.001 0 0z" fill="#003087"/>
                      <path d="M6.353 21.338H3.14l1.83-9.336L6.37 5.092l1.62-.24h6.052c2.148 0 3.791.439 4.673 1.488.854.912 1.157 2.052.923 3.493-.902 4.63-3.921 6.22-7.854 6.22h-1.956a.81.81 0 0 0-.796.671l-1.012 5.088-.507 2.593c-.056.326-.356.551-.687.551M10.158.4A.824.824 0 0 0 9.387 1l-2.906 14.814a.39.39 0 0 0 .385.46h2.155c.29 0 .54-.22.593-.507l1.01-5.087a.814.814 0 0 1 .8-.669h1.956c3.276 0 5.795-1.328 6.546-5.18.2-1.077-.026-1.955-.572-2.583C18.665.986 17.27.4 15.345.4h-5.187z" fill="#0079C1"/>
                    </svg>
                    Pay with PayPal
                  </button>
                </div>
              )}
            </form>
            </motion.div>
            )}
          </motion.div>
        </div>
      )}

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => !authLoading && setIsAuthModalOpen(false)} />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <button 
               onClick={() => !authLoading && setIsAuthModalOpen(false)}
               className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-zinc-400 hover:text-white z-10"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mx-auto mb-4">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {authMode === 'signin' ? 'Welcome back' : 'Create an account'}
              </h3>
              <p className="text-zinc-400 text-sm">
                {authMode === 'signin' ? 'Enter your details to sign in.' : 'Get started with Nexus today.'}
              </p>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4 mb-6">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input type="text" placeholder="John Doe" className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white outline-none focus:border-indigo-500 transition-colors" required disabled={authLoading} />
                  </div>
                </div>
              )}
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input type="email" placeholder="you@example.com" className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white outline-none focus:border-indigo-500 transition-colors" required disabled={authLoading} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input type="password" placeholder="••••••••" className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white outline-none focus:border-indigo-500 transition-colors" required disabled={authLoading} />
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={authLoading}
                className="w-full py-3.5 rounded-xl bg-white text-zinc-950 font-bold hover:bg-zinc-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:hover:scale-100"
              >
                {authLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  authMode === 'signin' ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-zinc-900 text-zinc-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button disabled={authLoading} type="button" className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-950 border border-white/10 hover:bg-zinc-800 transition-colors text-sm font-medium text-white disabled:opacity-50">
                <Github className="w-4 h-4" /> Github
              </button>
              <button disabled={authLoading} type="button" className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-950 border border-white/10 hover:bg-zinc-800 transition-colors text-sm font-medium text-white disabled:opacity-50">
                <Mail className="w-4 h-4" /> Google
              </button>
            </div>

            <p className="text-center text-sm text-zinc-500 mt-8">
              {authMode === 'signin' ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button"
                onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
                className="text-white hover:underline focus:outline-none"
                disabled={authLoading}
              >
                {authMode === 'signin' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-6 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-xl tracking-tight">Nexus</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-6">
                The premier marketplace for browser extensions. Built for professionals, developers, and creators who demand the best tools.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Marketplace</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><button onClick={() => setCurrentView('marketplace')} className="hover:text-indigo-400 transition-colors">Trending</button></li>
                <li><button onClick={() => setCurrentView('marketplace')} className="hover:text-indigo-400 transition-colors">Top Paid</button></li>
                <li><button onClick={() => setCurrentView('marketplace')} className="hover:text-indigo-400 transition-colors">Top Free</button></li>
                <li><button onClick={() => setCurrentView('marketplace')} className="hover:text-indigo-400 transition-colors">Categories</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><button onClick={() => setCurrentView('docs')} className="hover:text-fuchsia-400 transition-colors">Documentation</button></li>
                <li><button onClick={() => setCurrentView('docs')} className="hover:text-fuchsia-400 transition-colors">API Reference</button></li>
                <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Blog</a></li>
                <li><button onClick={() => setCurrentView('creators')} className="hover:text-fuchsia-400 transition-colors">Creator Guide</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-zinc-600">
            <p>&copy; {new Date().getFullYear()} Nexus Marketplace. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span className="hover:text-zinc-300 cursor-pointer transition-colors">Twitter</span>
              <span className="hover:text-zinc-300 cursor-pointer transition-colors">GitHub</span>
              <span className="hover:text-zinc-300 cursor-pointer transition-colors">Discord</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
