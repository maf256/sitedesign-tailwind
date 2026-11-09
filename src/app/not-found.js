import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { translations } from "@/lang/translations";

const { notFound } = translations;

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-20">
      <div className="metal-card rounded-lg text-center w-full max-w-md mx-auto p-8 md:p-10 space-y-8">
        <h1 className="engraved-text text-6xl md:text-8xl font-bold select-none">
          404
        </h1>

        <div className="space-y-4">
          <h2 className="engraved-text text-2xl md:text-3xl font-bold">
            {notFound.title}
          </h2>
          <p className="subtle-text text-lg leading-relaxed">
            {notFound.description}
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="metal-button inline-flex items-center gap-2 rounded-md px-6 py-3 text-primary font-medium"
            aria-label="Go back to homepage"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            {notFound.backToHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
