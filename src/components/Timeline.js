import SkillTag from './SkillTag';

export default function Timeline({ experiences, searchTerm }) {
  const highlightText = (text, searchTerm) => {
    if (!searchTerm?.trim() || !text) return text;
    
    const trimmedSearchTerm = searchTerm.trim();
    const regex = new RegExp(`(${trimmedSearchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark 
          key={index} 
          className="bg-secondary/20 text-secondary px-1 rounded-md font-medium"
          aria-label={`Highlighted search term: ${part}`}
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <section 
      className="relative" 
      role="region" 
      aria-labelledby="timeline-heading"
      aria-describedby="timeline-description"
    >
      <h2 id="timeline-heading" className="sr-only">Work Experience Timeline</h2>
      <p id="timeline-description" className="sr-only">
        Chronological list of work experiences with positions, companies, descriptions, and skills. 
        {searchTerm && `Filtered by search term: ${searchTerm}`}
      </p>
      
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200/50 hidden md:block" aria-hidden="true"></div>
      
      <ol className="space-y-8" role="list">
        {experiences.map((experience, index) => (
          <li 
            key={experience.id} 
            className="relative group animate-in fade-in slide-in-from-bottom-4 duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 w-4 h-4 bg-secondary rounded-full border-4 border-base shadow-md hidden md:block group-hover:bg-secondary/80 transition-colors duration-200" aria-hidden="true"></div>
            
            {/* Experience card */}
            <article 
              className="md:ml-16 bg-gray-50/30 border border-gray-200/30 rounded-2xl p-6 hover:shadow-md hover:border-gray-300/50 transition-all duration-300 hover:-translate-y-1" 
              aria-labelledby={`experience-${index}-title`}
              aria-describedby={`experience-${index}-description`}
            >
              {/* Header */}
              <header className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 
                    id={`experience-${index}-title`} 
                    className="font-old-standard text-xl font-semibold text-content mb-2 group-hover:text-secondary transition-colors duration-200"
                  >
                    {highlightText(experience.position, searchTerm)}
                  </h3>
                  <p className="text-lg text-secondary font-medium font-old-standard mb-1">
                    {highlightText(experience.company, searchTerm)}
                  </p>
                  {experience.location && (
                    <p className="text-sm text-content/80 font-old-standard" aria-label={`Location: ${experience.location}`}>
                      {experience.location}
                    </p>
                  )}
                </div>
                <div className="mt-3 md:mt-0 md:ml-4">
                  <time 
                    className="inline-block bg-gray-100/60 text-content/70 px-4 py-2 rounded-full text-sm font-medium font-old-standard"
                    aria-label={`Employment duration: ${experience.duration}`}
                  >
                    {experience.duration}
                  </time>
                </div>
              </header>

              {/* Description */}
              <p 
                id={`experience-${index}-description`}
                className="text-content/80 mb-6 leading-relaxed font-old-standard"
                aria-label={`Job description: ${experience.description}`}
              >
                {highlightText(experience.description, searchTerm)}
              </p>

              {/* Skills */}
              {experience.skills && experience.skills.length > 0 && (
                <div 
                  className="flex flex-wrap gap-2" 
                  role="list" 
                  aria-labelledby={`skills-${index}-heading`}
                >
                  <h4 id={`skills-${index}-heading`} className="sr-only">
                    Skills and technologies used in this role
                  </h4>
                  {experience.skills.map((skill, skillIndex) => (
                    <SkillTag 
                      key={skillIndex} 
                      skill={skill}
                      searchTerm={searchTerm}
                      highlightText={highlightText}
                    />
                  ))}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}