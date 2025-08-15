"use client";

export default function SkipLink() {
  return (
    <a 
      href="#main-content" 
      className="skip-link"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }}
    >
      Skip to main content
    </a>
  );
}