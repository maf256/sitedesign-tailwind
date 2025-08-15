'use client';

import { useState, useMemo, useCallback, Suspense } from 'react';
import { translations } from "@/lang/translations";
import HorizontalNavbar from "@/components/HorizontalNavbar";
import Footer from "@/components/Footer";
import SearchInput from '@/components/SearchInput';
import Timeline from '@/components/Timeline';

// Loading component for Timeline
function TimelineLoading() {
    return (
        <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 h-32 rounded-2xl"></div>
                </div>
            ))}
        </div>
    );
}

export default function WorkPageClient() {
    const [searchTerm, setSearchTerm] = useState('');

    const { work } = translations.pages;
    const experiences = useMemo(() => work.experiences || [], [work.experiences]);

    // Optimized search with debouncing and memoization for performance
    const handleSearchChange = useCallback((value) => {
        setSearchTerm(value);
    }, []);

    // Enhanced search functionality with memoization for performance
    const filteredExperiences = useMemo(() => {
        if (!searchTerm.trim()) return experiences;

        const searchLower = searchTerm.toLowerCase().trim();
        const searchWords = searchLower.split(/\s+/).filter(word => word.length > 0);

        return experiences.filter(experience => {
            // Create searchable content once per experience
            const searchableContent = [
                experience.position,
                experience.company,
                experience.description,
                experience.location,
                ...(experience.skills || []),
                experience.searchableText
            ].filter(Boolean).join(' ').toLowerCase();

            // Check if all search words are found in the content
            return searchWords.every(word => searchableContent.includes(word));
        });
    }, [experiences, searchTerm]);

    return (
        <>
            <HorizontalNavbar />
            <main id="main-content" className="flex flex-col mx-auto w-full max-w-[900px] min-h-screen px-4 lg:px-0 pt-20 md:pt-24 pb-8" tabIndex="-1">
                <div className="w-full">
                    {/* Work Header */}
                    <header className="mb-16 text-center">
                        <div className="relative">
                            <h1 className="font-old-standard text-4xl lg:text-6xl font-bold text-content mb-6 relative">
                                {work.title}
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary/30 rounded-full" aria-hidden="true"></div>
                            </h1>
                            <p className="text-xl lg:text-2xl text-content/70 leading-relaxed max-w-3xl mx-auto font-old-standard" role="doc-subtitle">
                                {work.subtitle}
                            </p>
                        </div>
                    </header>

                    {/* Search Input */}
                    <div className="mb-12">
                        <SearchInput
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder={work.searchPlaceholder}
                            resultsCount={filteredExperiences.length}
                            totalCount={experiences.length}
                        />
                    </div>

                    {/* Timeline with Suspense for better loading */}
                    <Suspense fallback={<TimelineLoading />}>
                        <Timeline
                            experiences={filteredExperiences}
                            searchTerm={searchTerm}
                        />
                    </Suspense>

                    {/* No Results Message */}
                    {searchTerm && filteredExperiences.length === 0 && (
                        <div
                            className="text-center py-16"
                            role="status"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            <div className="bg-gray-50/30 p-8 rounded-2xl border border-gray-200/20">
                                <p className="text-content/80 text-lg font-old-standard mb-4">
                                    No work experiences found matching &ldquo;{searchTerm}&rdquo;
                                </p>
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="text-secondary hover:text-secondary/80 font-old-standard font-medium underline transition-colors duration-200"
                                    aria-label={`Clear search term ${searchTerm} and show all experiences`}
                                >
                                    Clear search
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}