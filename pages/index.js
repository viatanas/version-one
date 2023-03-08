// External imports
import Head from "next/head";
import { useState } from "react";

// Internal imports
import Card from "@/components/Card";
import Tag from "@/components/Tag";

// Data imports
import companies from "@/data/companies";

export default function Home() {
  const [currentFilter, setCurrentFilter] = useState("All");

  let tagsArray = [];

  for (const company of companies) {
    for (const tag of company.tags) {
      if (!tagsArray.includes(tag)) {
        tagsArray.push(tag);
      }
    }
  }

  const addFilter = (tag) => {
    setCurrentFilter(tag);
  };

  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>Version One</title>
        <meta
          name="description"
          content="The first version of your favorite digital products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Facebook Meta Tags */}
        <meta name="og:url" content="https://www.theversionone.com/" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Version One" />
        <meta
          name="og:description"
          content="The first version of your favorite digital products."
        />
        <meta name="og:image" content="/og.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="versionone.com" />
        <meta name="twitter:url" content="https://www.theversionone.com/" />
        <meta name="twitter:title" content="Version One" />
        <meta
          name="twitter:description"
          content="The first version of your favorite digital products."
        />
        <meta name="twitter:image:src" content="/og.png" />
      </Head>

      <main className="w-full h-auto min-h-screen px-4 lg:px-0">
        <a
          target="_blank"
          href="https://simplesuite.co"
          className="fixed flex items-center px-4 space-x-2 transition duration-200 transform rounded-full h-11 bg-neutral-900 bottom-4 right-4 hover:scale-105 hover:opacity-90"
        >
          <img src="/img/small-logo.svg" />
          <span className="text-sm font-normal text-white font-inter">
            Need help building your MVP?
          </span>
        </a>
        <header className="w-full pt-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-normal lowercase font-inter text-neutral-500">
                a side project by
              </span>
              <a
                target="_blank"
                href="https://simplesuite.co"
                className="hover:opacity-70"
              >
                <img src="/logo.svg" />
              </a>
            </div>
            <div className="flex flex-col w-full mt-16 lg:mt-24">
              <h2 className="w-11/12 text-5xl font-medium tracking-tight text-black lg:w-9/12 lg:text-7xl font-garamond">
                The first version of your favorite digital products.
              </h2>
              <p className="w-full mt-4 font-sans text-base font-light lg:text-lg lg:w-7/12 text-neutral-500">
                Making the first step is hard. This project aims to remind us
                and others that in the beginning making the first step is more
                important than chasing perfection.
              </p>
            </div>
          </div>
        </header>
        <section className="w-full h-auto mt-14">
          <div className="flex flex-col w-full max-w-6xl mx-auto">
            <div className="flex flex-wrap w-full -ml-2">
              {tagsArray.map((tag) => (
                <Tag
                  tag={tag}
                  addFilter={addFilter}
                  currentFilter={currentFilter}
                />
              ))}
            </div>
            <div className="grid w-full grid-cols-1 pb-20 mt-6 lg:grid-cols-3 gap-x-6 gap-y-8 lg:gap-y-12">
              {companies
                .filter((i) => i.tags.includes(currentFilter))
                .map((company) => (
                  <Card
                    name={company.name}
                    year={company.year}
                    id={company.id}
                    previewImg={company.previewImg}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full h-auto px-4 pt-0 pb-24 lg:py-4 lg:px-0">
        <div className="flex justify-start w-full max-w-6xl mx-auto">
          <span className="text-sm font-normal font-inter text-neutral-500">
            © Simple Suite Ventures Ltd. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
