import { translations } from "@/lang/translations";
import Image from "next/image";

export default function Hero() {
  const { hero } = translations.pages.home;

  return (
    <section
      className="flex flex-col items-center"
      aria-labelledby="hero-heading"
      role="banner"
      id="home"
    >
      <h1 
        id="hero-heading"
        className="font-bold text-4xl md:text-6xl lg:text-8xl leading-none mb-6 text-center"
        aria-label={`${hero.name.first} ${hero.name.last}, ${hero.roles.role1} and ${hero.roles.role2}`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
          <span aria-hidden="true">{hero.name.first}</span>
          <Image
            className="border border-content/40 rounded-[14px] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0"
            src="/profile.jpg"
            alt={`Professional headshot of ${hero.name.first} ${hero.name.last}, Full Stack Web Developer`}
            width={96}
            height={96}
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjZjNmNGY2Ii8+Cjwvc3ZnPgo="
          />
        </div>
        <div className="mt-2" aria-hidden="true">{hero.name.last}</div>
      </h1>
      <div className="text-center max-w-2xl" role="complementary" aria-labelledby="hero-subtitle">
        <p 
          id="hero-subtitle"
          className="text-lg md:text-xl lg:text-2xl mb-4"
        >
          <span className="font-medium">{hero.roles.role1}</span> 
          <span> and </span>
          <span className="font-medium">{hero.roles.role2}</span>
        </p>
        <p 
          className="text-base md:text-lg text-content/80 leading-relaxed"
        >
          {hero.description}
        </p>
      </div>
    </section>
  );
}
