"use client";

import { useState } from "react";
import { TrendingUp, Mail } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import PageHero from "@/components/PageHero";
import { newsArticles } from "@/lib/data";

const categories = ["All", "News", "Research", "Resources", "Blog"];

const categoryColors: Record<string, string> = {
  Research: "bg-phc-cyan/10 text-phc-cyan",
  News: "bg-warm-amber/10 text-warm-amber",
  Resources: "bg-success-green/10 text-success-green",
  Blog: "bg-phc-navy/10 text-phc-navy",
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? newsArticles
      : newsArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <PageHero
        badge="Latest"
        title="News &"
        highlight="insights"
        description="Stay up to date with the latest research, resources, and stories from the world of metabolic health."
      />

      {/* ===================== CATEGORY FILTER ===================== */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-40 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-phc-navy text-white"
                    : "bg-off-white text-warm-grey hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NEWS GRID ===================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((article, i) => (
              <FadeInSection key={article.title} delay={i * 0.05}>
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-phc-navy/5 transition-all duration-300 group h-full flex flex-col">
                  {/* Placeholder image area */}
                  <div className="h-40 bg-gradient-to-br from-phc-navy/5 to-phc-cyan/5 flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-phc-navy/20" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span
                      className={`inline-block w-fit px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${
                        categoryColors[article.category] ||
                        "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {article.category}
                    </span>
                    <h3 className="font-heading font-semibold text-dark-grey group-hover:text-phc-navy transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-warm-grey text-sm leading-relaxed flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <p className="text-warm-grey/60 text-xs mt-3">
                      {article.date}
                    </p>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-warm-grey text-lg">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===================== NEWSLETTER SIGNUP ===================== */}
      <section className="py-16 bg-phc-cyan">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeInSection>
            <Mail className="w-10 h-10 text-phc-navy-dark/30 mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-phc-navy-dark mb-3">
              Never miss an update
            </h2>
            <p className="text-phc-navy-dark/70 mb-8 text-lg">
              Get the latest research, resources, and PHC news delivered to your
              inbox. Evidence-based, no spam.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/90 border-0 text-dark-grey placeholder:text-warm-grey/60 focus:outline-none focus:ring-2 focus:ring-phc-navy/30"
              />
              <button
                type="button"
                className="px-8 py-3.5 bg-phc-navy hover:bg-phc-navy-light text-white font-bold rounded-full transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-phc-navy-dark/40 text-xs mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
