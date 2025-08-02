import { translations } from "@/lang/translations";
import { Code, Database, Users, Settings, Calendar } from "lucide-react";

const iconMap = {
  Code,
  Database,
  Users,
  Settings,
};

const SkillCategory = ({ category }) => {
  const Icon = iconMap[category.icon];
  return (
    <div className="border border-gray-300 p-4 max-w-xs">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-300/30">
        <Icon className="w-[18px] h-[18px] opacity-70" />
        <h4 className="text-content font-normal">{category.title}</h4>
      </div>
      <div className="flex flex-wrap gap-1">
        {category.skills.map((skill, index) => (
          <span
            key={index}
            className="text-sm px-2 py-1 border border-gray-300/50 bg-gray-300/5 opacity-80 hover:border-blue-500 hover:text-blue-500 hover:opacity-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const TechnicalSkillsSection = ({ title, skillCategories }) => (
  <div>
    <h3 className="pb-2 border-b border-gray-300 font-normal max-w-xs text-lg mb-4">
      {title}
    </h3>
    <div className="flex flex-col gap-4">
      {skillCategories.map((category, index) => (
        <SkillCategory key={index} category={category} />
      ))}
    </div>
  </div>
);

const TimelineItem = ({ item }) => (
  <div className="mb-6">
    <div className="flex items-center gap-1 mb-1">
      <Calendar className="w-3 h-3 opacity-50" />
      <span className="text-xs opacity-60 uppercase tracking-wider">
        {item.period}
      </span>
    </div>
    <div className="border border-gray-300 p-3 bg-gray-300/5">
      <h4 className="text-sm font-normal mb-1">{item.degree}</h4>
      <p className="text-xs opacity-70">{item.institution}</p>
    </div>
  </div>
);

const EducationSection = ({ title, education }) => (
  <div>
    <h3 className="pb-2 border-b border-gray-300 font-normal text-lg mb-4">
      {title}
    </h3>
    <div>
      {education.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </div>
  </div>
);

export default function Expertise() {
  const { expertise } = translations;

  return (
    <section id="expertise">
      <h2>{expertise.title}</h2>
      <p>{expertise.description}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <TechnicalSkillsSection
          title={expertise.technicalSkills}
          skillCategories={expertise.skillCategories}
        />
        <EducationSection
          title={expertise.education}
          education={expertise.educationList}
        />
      </div>
    </section>
  );
}
