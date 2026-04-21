"use client";

import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-main px-4 md:px-6 overflow-hidden">
      <div className="text-center w-full max-w-2xl">
        <h1 className="text-[8rem] sm:text-[12rem] md:text-[15rem] font-black text-primary opacity-5 leading-none select-none">
          404
        </h1>

        <div className="-mt-12 sm:-mt-20 md:-mt-28 relative z-10 px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-tertiary text-base sm:text-lg max-w-sm sm:max-w-md mx-auto mb-8 md:mb-10">
            The link you followed may be broken, or the page may have been
            removed. Return to the homepage to get back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="w-full sm:w-auto bg-green text-main px-8 md:px-10 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition-all text-center"
            >
              Back to Home
            </Link>

            <Link
              href="/support"
              className="text-primary font-medium border-b-2 border-green hover:text-green transition-colors py-1"
            >
              Contact Support
            </Link>
          </div>
        </div>

        <div className="mt-12 md:mt-20 flex justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-lightgreen"></div>
          <div className="w-2 h-2 rounded-full bg-primary opacity-20"></div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
