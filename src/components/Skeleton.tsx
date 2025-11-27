export function BlogCardSkeletion() {
  return (
    <div className="w-full max-w-[1192px] rounded-3xl p-4 my-2 bg-white animate-pulse mx-auto">

      {/* User Row */}
      <div className="flex items-center">
        <div className="m-2 h-8 w-8 rounded-full bg-gray-300"></div>

        <div className="ml-1 h-4 w-20 sm:w-24 rounded bg-gray-300"></div>
        <div className="ml-2 h-4 w-24 sm:w-28 rounded bg-gray-300"></div>
      </div>

      {/* Title */}
      <div className="pl-3 mt-2 h-7 w-[80%] sm:w-[70%] bg-gray-300 rounded-lg"></div>

      {/* Description */}
      <div className="px-4 py-2 mt-3 space-y-2">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-[95%] sm:w-[90%] bg-gray-300 rounded"></div>
        <div className="h-4 w-[85%] sm:w-[80%] bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-amber-50 z-[9999]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 sm:h-12 sm:w-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        <p className="text-base sm:text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export function BlogSkeleton() {
  return (
    <div className="flex justify-center mt-10 sm:mt-20 animate-pulse px-4">
      <div className="w-full max-w-[1192px] flex flex-col sm:flex-row gap-10">

        {/* LEFT SIDE */}
        <div className="w-full sm:w-[75%]">

          {/* Title */}
          <div className="h-8 w-[80%] sm:w-[70%] bg-gray-300 rounded-lg"></div>

          {/* Content */}
          <div className="mt-5 space-y-3">
            <div className="h-4 w-[95%] bg-gray-300 rounded"></div>
            <div className="h-4 w-[90%] bg-gray-300 rounded"></div>
            <div className="h-4 w-[85%] bg-gray-300 rounded"></div>
            <div className="h-4 w-[80%] bg-gray-300 rounded"></div>
            <div className="h-4 w-[92%] bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full sm:w-[25%]">

          {/* Label */}
          <div className="h-4 w-24 bg-gray-300 rounded"></div>

          {/* User */}
          <div className="mt-4 flex items-center">
            <div className="w-9 h-9 bg-gray-300 rounded-full"></div>

            <div className="ml-3 space-y-2">
              <div className="h-3 w-24 bg-gray-300 rounded"></div>
              <div className="h-3 w-20 bg-gray-300 rounded"></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
