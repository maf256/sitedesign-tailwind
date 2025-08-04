import { translations } from "@/lang/translations";

export default function Career() {
  const { career } = translations;

  return (
    <section id="career">
      <h2>{career.title}</h2>
      <p>{career.description}</p>
      <div className="mt-10">
        {career.experiences.map((experience, index) => (
          <div key={index} className="flex flex-col mb-10 items-start relative">
            <div className="time">{experience.year}</div>
            <div className="!ml-[14px] ">
              <h3 className="!text-[29px] !mb-[-3px] font-bold">
                {experience.position}
              </h3>
              <p>{experience.company}</p>
              <p className="!text-sm">{experience.duration}</p>
              <p className="!text-sm">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
