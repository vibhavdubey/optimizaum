const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 my-4">
      {[1, 2, 3, "...", 67, 68].map((page, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded ${
            page === 1 ? "bg-green-500 text-white" : "bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
