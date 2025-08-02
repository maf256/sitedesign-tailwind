import { translations } from "@/lang/translations";

export default function About() {
  const { about } = translations;

  return (
    <section
      id="about"
      className="!mt-0"
      aria-labelledby="about-heading"
      role="main"
    >
      <h2 id="about-heading">{about.title}</h2>
      <p className="mb-8">{about.paragraph}</p>
      <div role="complementary" aria-labelledby="personal-info">
        <h3 id="personal-info" className="sr-only">
          {about.personalInfoTitle}
        </h3>
        <ul
          className="list-disc list-inside text-content/75 text-2xl mb-8"
          role="list"
          aria-label={about.personalInfoAriaLabel}
        >
          {about.personalDetails.map((detail, index) => (
            <li key={index} role="listitem">
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div role="complementary" aria-labelledby="what-i-do">
        <h3 id="what-i-do">{about.servicesOverview.title}</h3>
        <p>{about.servicesOverview.description}</p>
      </div>
    </section>
  );
}
