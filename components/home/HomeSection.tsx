import Link from "next/link";
import React from "react";

interface HomeSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function HomeSection({
  children,
  title,
  description,
}: HomeSectionProps) {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24 sm:pb-28"
    >
      <div className="flex items-end justify-between">
        <div className="flex flex-col space-y-4">
          <h2 className="max-w-sm text-3xl md:text-5xl text-start text-emerald-600 font-bold leading-[1.1]">
            {title}
          </h2>
          <h3 className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {description}
          </h3>
        </div>
        <Link
          href="/products"
          className="hidden md:flex gap-1 text-emerald-700 hover:translate-x-1 hover:text-emerald-600 transition-all"
        >
          Shop the collection{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      {children}
    </section>
  );
}
