import { translations } from "@/lang/translations";

const { footer } = translations;

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-4 mt-16">
      <div className="max-w-6xl px-6 flex flex-col md:flex-row mx-auto  items-center text-center md:justify-around">
        <p className="!text-md text-gray-500 mb-1">
          © {new Date().getFullYear()} {footer.description}
        </p>
        <p>
          <a
            href="mailto:maf256@gmail.com"
            className="!text-[1.05rem] text-primary hover:underline transition-colors duration-200"
          >
            maf256@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
