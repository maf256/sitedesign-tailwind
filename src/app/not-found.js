import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { translations } from "@/lang/translations";

const { notFound } = translations;

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Back to Home Link - Top Left positioned */}
        <div className="fixed top-24 left-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline transition-all duration-200 text-lg font-medium"
            aria-label="Go back to homepage"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            {notFound.backToHome}
          </Link>
        </div>

        {/* 404 Content */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-content/20 select-none">
            404
          </h1>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-content">
              {notFound.title}
            </h2>
            <p className="text-lg text-content/75 leading-relaxed">
              {notFound.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
