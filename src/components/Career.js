export default function Career() {
  const career = {
    title: "Career",
    description:
      "Over the years, I've enjoyed building AI tools and large digital platforms with React and JavaScript, always looking for new challenges and ways to create real impact with my teams.",
    experiences: [
      {
        year: "2025",
        position: "React Developer",
        company: "MERCOR – San Francisco, USA",
        duration: "01.2025 - present",
        description:
          "AI training, problem-solving, prompt engineering using React, JavaScript, CSS, Tailwind",
      },
      {
        year: "2021",
        position: "Frontend Developer",
        company: "Digital Innovations Inc",
        duration: "Mar 2021 - Dec 2022",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
      {
        year: "2019",
        position: "Junior Web Developer",
        company: "StartUp Labs",
        duration: "Jun 2019 - Feb 2021",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
      },
    ],
  };

  return (
    <section id="career">
      <h2>{career.title}</h2>
      <p>{career.description}</p>

      <div className="mt-10">
        {career.experiences.map((experience, index) => (
          <div key={index} className="flex flex-col mb-8 items-start relative">
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
