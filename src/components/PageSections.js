import Link from "next/link";

// Shared building blocks for the content pages (/webutvikler, /webutvikling).
export const headingStyle = {
  color: "var(--heading)",
  textShadow: "0 1px 1px var(--shine-strong)",
};
export const textStyle = {
  color: "var(--text)",
  textShadow: "0 1px 0 var(--shine-soft)",
};

export function SectionIntro({ title, intro }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold mb-4" style={headingStyle}>
        {title}
      </h2>
      <p className="text-lg max-w-3xl mx-auto" style={textStyle}>
        {intro}
      </p>
    </div>
  );
}

export function SectionHeading({ className = "mb-6", children }) {
  return (
    <h2 className={`text-4xl font-semibold ${className}`} style={headingStyle}>
      {children}
    </h2>
  );
}

export function CardTitle({ className = "mb-2", children }) {
  return (
    <h3
      className={`font-semibold ${className}`}
      style={{ fontSize: "18px", ...headingStyle }}
    >
      {children}
    </h3>
  );
}

export function InfoCard({ title, children }) {
  return (
    <div className="rounded-lg p-6 metal-button">
      <CardTitle>{title}</CardTitle>
      {children}
    </div>
  );
}

export function CardText({ children }) {
  return <p style={{ fontSize: "16px", ...textStyle }}>{children}</p>;
}

export function CtaCard({ cta }) {
  return (
    <section className="py-8">
      <div className="rounded-lg p-8 text-center metal-card">
        <h2 className="text-3xl font-semibold mb-3" style={headingStyle}>
          {cta.title}
        </h2>
        <p className="text-lg mb-6" style={textStyle}>
          {cta.description}
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg px-8 py-3 font-semibold metal-button"
          style={{
            color: "var(--primary)",
            textShadow: "0 1px 0 var(--shine-soft)",
          }}
        >
          {cta.button}
        </Link>
      </div>
    </section>
  );
}
