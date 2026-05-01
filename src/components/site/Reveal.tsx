import { useEffect, useRef, useState, createElement, Children, isValidElement, cloneElement, type ReactNode, type CSSProperties, type ElementType, type ReactElement } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade" | "zoom";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  as?: ElementType;
  once?: boolean;
  /** When true, direct children animate in sequence */
  stagger?: boolean;
  /** ms between each child when stagger is enabled */
  staggerDelay?: number;
}

const transformFor = (dir: Direction, d: number) => {
  switch (dir) {
    case "up": return `translate3d(0, ${d}px, 0)`;
    case "down": return `translate3d(0, -${d}px, 0)`;
    case "left": return `translate3d(${d}px, 0, 0)`;
    case "right": return `translate3d(-${d}px, 0, 0)`;
    case "zoom": return "scale(0.94)";
    default: return "none";
  }
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 900,
  distance = 28,
  className = "",
  as: Tag = "div",
  once = true,
  stagger = false,
  staggerDelay = 110,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  // Container style — only animates itself when not staggering
  const containerStyle: CSSProperties = stagger
    ? {}
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transformFor(direction, distance),
        transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`,
        willChange: "opacity, transform",
      };

  let content: ReactNode = children;

  if (stagger) {
    const arr = Children.toArray(children);
    content = arr.map((child, i) => {
      const childDelay = delay + i * staggerDelay;
      const childStyle: CSSProperties = {
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transformFor(direction, distance),
        transition: `opacity ${duration}ms ${EASE} ${childDelay}ms, transform ${duration}ms ${EASE} ${childDelay}ms`,
        willChange: "opacity, transform",
        display: "contents",
      };

        if (isValidElement(child)) {
          const el = child as ReactElement<{ style?: CSSProperties; key?: any }>;
          const merged: CSSProperties = {
            ...(el.props.style || {}),
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : transformFor(direction, distance),
            transition: `opacity ${duration}ms ${EASE} ${childDelay}ms, transform ${duration}ms ${EASE} ${childDelay}ms`,
            willChange: "opacity, transform",
          };
          return cloneElement(el, { key: el.key ?? i, style: merged });
        }
      return (
        <span key={i} style={childStyle}>{child}</span>
      );
    });
  }

  return createElement(
    Tag,
    { ref: ref as any, style: containerStyle, className },
    content
  );
}