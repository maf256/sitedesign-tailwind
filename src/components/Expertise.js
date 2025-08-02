import { Code, Database, Users, Settings, Calendar } from "lucide-react";

const SkillCategory = ({ category }) => {
  const Icon = category.icon;

  return (
    <div className="border border-gray-300 p-4 max-w-xs">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-300/30">
        <Icon className="w-[18px] h-[18px] opacity-70" />
        <h4 className="text-base font-normal">{category.title}</h4>
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
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
      icon: Code,
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
      icon: Database,
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Project Management",
        "Communication",
      ],
      icon: Users,
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "VS Code", "Figma"],
      icon: Settings,
    },
  ];

  const education = [
    {
      period: "2020-2024",
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
    },
    {
      period: "2023",
      degree: "Advanced React Development",
      institution: "Tech Academy",
    },
    {
      period: "2022",
      degree: "Full Stack Web Development",
      institution: "Online Learning Platform",
    },
  ];

  return (
    <section id="expertise" className="py-16">
      <div className="w-full mx-auto">
        <h2>Expertise</h2>
        <p>
          My technical skills and areas of specialization in software
          development.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <TechnicalSkillsSection
            title="Technical Skills"
            skillCategories={skillCategories}
          />
          <EducationSection title="Education" education={education} />
        </div>
      </div>
    </section>
  );
}
