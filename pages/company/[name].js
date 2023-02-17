// External imports
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowUpRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

// Internal imports
import Card from "@/components/Card";

// Data imports
import companies from "@/data/companies";

export async function getServerSideProps(context) {
  const name = context.params.name;

  return {
    props: {
      name,
    },
  };
}

const CompanyPage = ({ name }) => {
  const companyArray = companies.filter((i) => i.id === name);
  const company = companyArray[0];

  return (
    <>
      <Head>
        <title>
          Version One - The First Version of Your Favorite Digital Products.
        </title>
        <meta
          name="description"
          content="The First Version of Your Favorite Digital Products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-auto px-4 lg:px-0">
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

        <section className="w-full h-auto pt-6">
          <div className="flex flex-col w-full max-w-6xl mx-auto">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2 ">
                <span className="text-base font-medium text-black lg:text-lg font-inter">
                  {company.name}
                </span>
                <span>·</span>
                <span className="text-sm font-normal font-inter text-neutral-500">
                  {company.year}
                </span>
              </div>
              <a
                target="_blank"
                href={company.url}
                className="flex items-center justify-center h-8 px-3 space-x-1 border rounded-xl border-neutral-200 group hover:border-gray-300"
              >
                <span className="text-sm font-normal font-inter text-neutral-900">
                  Open live
                </span>
                <ArrowUpRightIcon className="flex w-3 h-3 lg:hidden text-neutral-500 lg:text-neutral-900 group-hover:flex" />
              </a>
            </div>

            <div className="w-full p-10 mt-6 rounded-lg bg-neutral-100">
              <img
                src={company.fullSizeImg}
                className="rounded-md shadow filter"
              />
            </div>
          </div>
        </section>

        <section className="w-full h-auto mt-24">
          <div className="w-full max-w-6xl mx-auto ">
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-12">
              {companies
                .filter((i) => i.id !== name)
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
      <footer className="w-full px-4 py-10 mt-10 lg:px-0">
        <div className="w-full max-w-6xl mx-auto">
          <Link
            href="/"
            className="flex items-center space-x-2 text-neutral-500 hover:text-neutral-900"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span className="text-sm font-normal font-inter">Back home</span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default CompanyPage;
