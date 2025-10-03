import React, { useState, useEffect, useRef } from 'react';

const useInView = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isInView];
};

const CountUp: React.FC<{ end: number; duration?: number; suffix?: string; prefix?: string;}> = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const [refInView, isInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);
  
  // Attach the ref to the parent div of the section to trigger the animation
  // The actual element being animated is the p tag below.
  // We need to cast refInView to the correct type.
  const combinedRef = (el: HTMLParagraphElement) => {
    ref.current = el;
    (refInView as React.RefObject<HTMLParagraphElement>).current = el;
  };

  return <p ref={combinedRef} className="text-4xl md:text-5xl font-extrabold text-alt-purple dark:text-violet-300">{prefix}{count}{suffix}</p>;
};


const StatItem: React.FC<{ value: number; suffix?: string; label: string }> = ({ value, suffix, label }) => {
    return (
        <div>
            <CountUp end={value} suffix={suffix} />
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mt-1">{label}</p>
        </div>
    );
};


const Stats: React.FC = () => {
  // FIX: Removed 'triggerOnce' property as it is not part of IntersectionObserverInit. The hook is already implemented to only trigger once.
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const stats = [
    { value: 3, suffix: '+', label: 'Años de Experiencia' },
    { value: 50, suffix: '+', label: 'Proyectos Entregados' },
    { value: 20, suffix: '%', label: 'Satisfacción de Clientes' },
    { value: 10, suffix: 'M+', label: 'Usuarios Impactados' },
  ];

  return (
    <section id="stats" className="py-12 bg-violet-50 dark:bg-gray-800">
      <div className="container mx-auto px-6" ref={ref as React.RefObject<HTMLDivElement>}>
        {isInView && (
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             {stats.map((stat) => (
               <StatItem key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
             ))}
           </div>
        )}
      </div>
    </section>
  );
};

export default Stats;