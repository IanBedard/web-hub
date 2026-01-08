import './App.css'
import { useState, useEffect } from 'react';
import YearBarChart from './components/YearBarChart';
import RadialWebsite from './components/RadialWebsite';
import ToolCard from './components/ToolCard';
import LatestChart from './components/LatestChart';
import ProjectUpdate from './components/ProjectUpdate';
import { t as i18n } from './i18n'

function App() {
  const [lang, setLang] = useState<'en' | 'fr'>(() => {
    try {
      const v = localStorage.getItem('lang');
      return v === 'fr' ? 'fr' : 'en';
    } catch {
      return 'en';
    }
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const v = localStorage.getItem('theme');
      return v === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  // Update the HTML data-theme attribute when theme changes
  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch {}
  };

  // Initialize theme on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Set initial theme from localStorage or default on first load
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    } catch {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // use i18n translations from src/i18n
  const tr = (key: string) => i18n(key, lang);

  return (
    <div className="min-h-screen bg-base-200">
      {/* Wave Background Animation */}
      <div className="wave-container">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>

      {/* Content with z-index to appear above waves */}
      <div className="relative z-10">
        {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1 px-6">
          <a className="text-2xl font-bold">{tr('app.title')}</a>
          <span className="ml-3 text-sm opacity-70">{tr('app.subtitle')}</span>
        </div>

        <div className="pr-4 flex-none gap-2 pr-4 flex items-center">
   
          {/* Theme Toggle */}
          <button
            className=""
            aria-label="Toggle theme"
            onClick={() => {
              const newTheme = theme === 'light' ? 'dark' : 'light';
              handleThemeChange(newTheme);
            }}
          >
            {theme === 'light' ? '🌕' : '☀️'}
          </button>

          <div className="btn-group mr-2 sm:inline-flex">
            {lang === 'en' ? (
              <button
                className=""
                aria-label="Switch to French"
                onClick={() => {
                  setLang('fr');
                  try {
                    localStorage.setItem('lang', 'fr');
                  } catch {}
                }}
              >
                Français
              </button>
            ) : (
              <button
                className=""
                aria-label="Switch to English"
                onClick={() => {
                  setLang('en');
                  try {
                    localStorage.setItem('lang', 'en');
                  } catch {}
                }}
              >
                English
              </button>
            )}
          </div>

        </div>
      </div>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left column */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="bg-base-100 card-glass shadow p-6 h-40">
              <h2 className="text-2xl font-semibold">{tr('app.welcomeTitle')}</h2>
              <p className="text-sm opacity-70 mt-2">{tr('app.welcomeBody')}</p>

            </div>
        {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="stat bg-base-100 shadow p-4 card-glass">
                <div className="stat-title">{tr('stats.totalTools')}</div>
                <div className="stat-value">11'500</div>
                <div className="stat-desc">{tr('stats.updated')}</div>
              </div>
              <div className="stat bg-base-100 shadow p-4 card-glass">
                <div className="stat-title">{tr('stats.activeProjects')}</div>
                <div className="stat-value">12</div>
                <div className="stat-desc">{tr('stats.hot')}</div>
              </div>
              <div className="stat bg-base-100 shadow p-4 card-glass">
                <div className="stat-title">{tr('stats.visitors')}</div>
                <div className="stat-value">12.4k</div>
                <div className="stat-desc">+4.2% {tr('stats.visitors-month')}</div>
              </div>
            </div>


            <div className="bg-base-100 shadow p-4 card-glass">
              <h3 className="font-medium mb-4">{tr('projectUpdates.title')}</h3>
              <ProjectUpdate language={lang} />
            </div>


        
          </div>

          {/* Right column */}
          <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
        


            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div 
  className="bg-base-100 shadow p-4 card-glass clickable transition-shadow" 
  onClick={() => window.open('https://gcintranet.tpsgc-pwgsc.gc.ca/remuneration-compensation/structure.html', '_blank')}
  role="button"
  tabIndex={0}
  onKeyPress={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      window.open('https://gcintranet.tpsgc-pwgsc.gc.ca/remuneration-compensation/structure.html', '_blank');
    }
  }}
>
  <h5 className="font-medium text-center mb-2">{tr('charts.contentTitle')}</h5>
  <RadialWebsite language={lang}  />
</div>
              <div className="bg-base-100 shadow p-4 card-glass">
                <h5 className="font-medium text-center mb-2">{tr('charts.latest4')}</h5>
                <LatestChart language={lang} />
              </div>
            </div>

             <div className="bg-base-100 shadow p-4 card-glass">
              <h5 className="font-medium text-center mb-2">{tr('charts.yearTitle')}</h5>
              <YearBarChart language={lang} />
            </div>
            
            {/* Tool Cards */}
            <div className="bg-base-100 shadow p-4 card-glass">
              <h4 className="font-medium mb-4">{tr('app.quickTools')}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <ToolCard title={tr('tool.converter')} icon="✏️" className='clickable card-glass'/>
                <ToolCard title={tr('tool.bilat')} icon="📊" className='clickable card-glass' />
                <ToolCard title={tr('tool.excel')} icon="📑" className='clickable card-glass ' />
                <ToolCard title={tr('tool.converter2')} icon="📜" className='clickable card-glass ' />
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  ); 
}

export default App
