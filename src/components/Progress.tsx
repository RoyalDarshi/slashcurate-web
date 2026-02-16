import { useEffect, useState } from 'react';

export default function Progress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handle = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? Math.min(100, Math.round((scrolled / height) * 100)) : 0;
      setWidth(pct);
    };

    handle();
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none" aria-hidden="true">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-150 ease-linear shadow-lg shadow-blue-500/50"
        style={{ width: `${width}%` }} 
      />
    </div>
  );
}
