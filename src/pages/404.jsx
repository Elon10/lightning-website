import React from "react";
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="flex flex-col items-center justify-center w-full p-8 flex-1">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-60 md:pb-10">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1" data-aos="fade-up">404</h1>
                <p className="text-xl text-gray-400 md:pt-2" data-aos="fade-up" data-aos-delay="200">
                Lost in the digital wilderness! The page you're searching for has wandered off the grid.
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:pt-5">
                  <div data-aos="fade-up" data-aos-delay="400">
                    <a
                      className="btn rounded-lg text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                      href="/"
                    >
                      Go back home!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default NotFound;
