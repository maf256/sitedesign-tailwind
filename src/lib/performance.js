// Performance optimization utilities

// Lazy load components for better bundle splitting
import { lazy } from 'react';

// Lazy load heavy components
export const LazySearchInput = lazy(() => import('@/components/SearchInput'));
export const LazyTimeline = lazy(() => import('@/components/Timeline'));

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window !== 'undefined') {
    // Preload profile image
    const profileImg = new Image();
    profileImg.src = '/profile.jpg';
    
    // Preload fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = '/oldstandard.woff2';
    fontPreload.as = 'font';
    fontPreload.type = 'font/woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);
  }
}

// Optimize images for better performance
export function optimizeImage(src, width = 800, height = 600, quality = 85) {
  if (typeof window === 'undefined') return src;
  
  // For Next.js Image optimization
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&h=${height}&q=${quality}`;
}

// Debounce function for search optimization
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Check if component should be hydrated
export function shouldHydrate(componentName) {
  if (typeof window === 'undefined') return false;
  
  // Only hydrate interactive components
  const interactiveComponents = ['SearchInput', 'Timeline', 'HorizontalNavbar'];
  return interactiveComponents.includes(componentName);
}

// Performance monitoring
export function measurePerformance(name, fn) {
  if (typeof window === 'undefined') return fn();
  
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
}

// Intersection Observer for lazy loading
export function createIntersectionObserver(callback, options = {}) {
  if (typeof window === 'undefined') return null;
  
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
}