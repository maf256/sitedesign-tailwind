export default function SkillTag({ skill, searchTerm, highlightText }) {
  return (
    <span 
      className="inline-block bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-sm font-medium font-old-standard
                 hover:bg-secondary/20 hover:text-secondary/90 transition-all duration-200 cursor-default
                 border border-secondary/20 hover:border-secondary/30 hover:scale-105"
      role="listitem"
      aria-label={`Technology skill: ${skill}`}
      tabIndex="0"
    >
      {highlightText ? highlightText(skill, searchTerm) : skill}
    </span>
  );
}