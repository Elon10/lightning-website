import React from "react";

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';

function Page404() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />

            <main className="grow">
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none"aria-hidden="true">
                    <PageIllustration />
                </div>

                <section className="relative">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h1 className="h1">Terms of Service</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Page404;