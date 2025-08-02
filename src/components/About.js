export default function About() {
  return (
    <section
      id="about"
      className="!mt-0"
      aria-labelledby="about-heading"
      role="main"
    >
      <h2 id="about-heading">About Me</h2>
      <p className="mb-8">
        I am an experienced web developer who is passionate about innovative and
        user-friendly web design with front-end and back-end development
        expertise. I create modern, responsive websites that engage visitors and
        strengthen your business's digital profile.
      </p>

      <div role="complementary" aria-labelledby="personal-info">
        <h3 id="personal-info" className="sr-only">
          Personal Information
        </h3>
        <ul
          className="list-disc list-inside text-content/75 text-2xl mb-8"
          role="list"
          aria-label="Personal highlights and interests"
        >
          <li role="listitem">I'm 42 years old</li>
          <li role="listitem">I build things for internet!</li>
          <li role="listitem">
            I have a genuine enthusiasm for exploring new technologies
          </li>
          <li role="listitem">In my free time, I enjoy playing football</li>
        </ul>
      </div>

      <div role="complementary" aria-labelledby="what-i-do">
        <h3 id="what-i-do">What I Do</h3>
        <p>
          I specialize in full-stack web development using React.js, Next.js,
          Node.js, and PostgreSQL. I've worked with companies like Konsulenthus
          Oslo, TechPros Oslo, and Osloweb Sandvika, building everything from
          business websites to complex web applications.
        </p>
      </div>
    </section>
  );
}
