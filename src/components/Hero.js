import { translations } from "@/lang/translations";
import Image from "next/image";
import MobileDarkmodeToggle from "./MobileDarkmodeToggleWrapper"; 
import MobileLangToggle from "./LangButton";

export default function Hero() {
  const { hero } = translations;

  return (
    <section
      className="min-h-screen !mt-0 flex flex-col justify-center"
      aria-label={hero.ariaLabel}
      id="home"
    >
      <div className="absolute top-6 right-6 flex items-center gap-3 lg:hidden">
        <MobileDarkmodeToggle />
        <MobileLangToggle />
      </div>

      <h1
        className="font-bold text-4xl md:text-8xl leading-none mb-4"
        role="banner"
      >
        <div className="flex flex-row md:flex-row items-baseline gap-4 mb-1">
          <span>{hero.name.first}</span>
          <Image
            className="border border-content/40 rounded-[14px] w-16 h-16 md:w-24 md:h-24"
            src="/profile.jpg"
            alt={hero.profileAlt}
            width={96}
            height={96}
          />
        </div>
        <div>{hero.name.last}</div>
      </h1>
      <p className="!text-sm">
        <span className="text-lg md:text-[22.5px]">{hero.roles.role1}</span> and{" "}
        <span className="text-lg md:text-[22.5px]">{hero.roles.role2}</span>,
        <br />
        {hero.description}
      </p>
    </section>
  );
}
