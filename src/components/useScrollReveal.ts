import { useEffect, useRef, useState } from "react";

interface Options {
  threshold?:  number;
  rootMargin?: string;
  once?:       boolean;
}

export function useScrollReveal<T extends Element = HTMLDivElement>(
  options: Options = {}
) {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
