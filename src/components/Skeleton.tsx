export function BlogCardSkeletion (){
    return(
        <div className=" w-[1192px] rounded-4xl p-3 my-1 bg-white animate-pulse">
        {/* User Row */}
        <div className="flex items-center">
            <div className="m-2 h-8 w-8 rounded-full bg-gray-300"></div>

            <div className="ml-1 h-4 w-24 rounded bg-gray-300"></div>
            <div className="ml-2 h-4 w-28 rounded bg-gray-300"></div>
        </div>

        {/* Title */}
        <div className="pl-3 mt-2 h-8 w-2/3 rounded bg-gray-300"></div>

        {/* Description */}
        <div className="px-4 py-2 mt-3 space-y-2">
            <div className="h-4 w-full rounded bg-gray-300"></div>
            <div className="h-4 w-[90%] rounded bg-gray-300"></div>
            <div className="h-4 w-[80%] rounded bg-gray-300"></div>
        </div>
        </div>
    )
}

export const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-amber-50 z-9999">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

        {/* Loading text */}
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export function BlogSkeleton() {
    return (
        <div className="flex justify-center mt-20 animate-pulse">
            <div className="flex w-[80%]">

                {/* LEFT SIDE: TITLE + CONTENT */}
                <div className="w-[80%]">

                    {/* Title skeleton */}
                    <div className="h-10 w-[70%] bg-gray-300 rounded-lg"></div>

                    {/* Content skeleton */}
                    <div className="mt-5 space-y-3">
                        <div className="h-4 w-[95%] bg-gray-300 rounded"></div>
                        <div className="h-4 w-[90%] bg-gray-300 rounded"></div>
                        <div className="h-4 w-[85%] bg-gray-300 rounded"></div>
                        <div className="h-4 w-[80%] bg-gray-300 rounded"></div>
                        <div className="h-4 w-[92%] bg-gray-300 rounded"></div>
                    </div>
                </div>

                {/* RIGHT SIDE: AUTHOR */}
                <div className="pl-5">

                    {/* Author label skeleton */}
                    <div className="h-4 w-20 bg-gray-300 rounded"></div>

                    {/* User skeleton */}
                    <div className="mt-4 flex items-center">

                        {/* Avatar skeleton */}
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>

                        <div className="ml-3 space-y-2">
                            <div className="h-3 w-20 bg-gray-300 rounded"></div>
                            <div className="h-3 w-16 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}




