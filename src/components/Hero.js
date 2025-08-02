import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen !mt-0 flex flex-col justify-center"
      aria-label="Hero section introducing Majid Askarifarsangi"
    >
      <h1 className="font-bold text-8xl leading-none mb-4" role="banner">
        <div className="flex items-baseline gap-4 mb-1">
          <span>Majid</span>
          <Image
            className="border border-content/40 rounded-[14px]"
            src="/profile.jpg"
            alt="Profile photo of Majid Askarifarsangi"
            width={96}
            height={96}
          />
        </div>
        <div>Askarifarsangi</div>
      </h1>

      <p className="!text-sm">
        <span className="text-[22.5px]">Software Engineer</span> and{" "}
        <span className="text-[22.5px]">Web Developer</span>,<br />
        I'm happy to have a digital chat or meet over a cup of coffee.
      </p>
    </section>
  );
}
