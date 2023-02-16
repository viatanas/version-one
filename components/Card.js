import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Card = ({ name, year, url, previewImg }) => {
  return (
    <div className="flex flex-col">
      <a target="_blank" href={url} className="w-full overflow-hidden h-52">
        <img
          src={previewImg}
          className="h-full border rounded border-neutral-200"
        />
      </a>
      <div className="flex items-center justify-between w-full mt-4">
        <span className="text-base font-medium text-black font-inter">
          {name}
        </span>
        <a
          target="_blank"
          href={url}
          className="flex items-center justify-center h-6 px-2 space-x-1 border rounded-lg border-neutral-200 group hover:border-gray-300"
        >
          <span className="text-sm font-normal font-inter text-neutral-500 group-hover:text-neutral-700">
            View
          </span>
          <ArrowUpRightIcon className="hidden w-3 h-3 text-neutral-900 group-hover:flex" />
        </a>
      </div>
      <div className="flex items-center mt-1 space-x-1 text-sm font-normal font-inter text-neutral-400">
        <span>{year}</span>
      </div>
    </div>
  );
};

export default Card;
