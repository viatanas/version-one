const Tag = ({ tag, addFilter, currentFilter }) => {
  return (
    <button
      onClick={() => addFilter(tag)}
      className={`${
        tag === currentFilter
          ? "bg-neutral-200 text-black cursor-auto pointer-events-none"
          : "bg-white text-neutral-600"
      } flex items-center px-3 mt-3 ml-2 text-sm font-normal border rounded-lg h-7 border-neutral-200 font-inter`}
    >
      {tag}
    </button>
  );
};

export default Tag;
