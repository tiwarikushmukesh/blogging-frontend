import { useState } from "react";
import { useAuth } from "../context-api/AuthContext";


export default function ProfileResponsive() {
  const [saved, setSaved] = useState(true);
  const { user } = useAuth();

  return (
    <div className="w-full flex justify-center px-4 py-6">
      <div
        className="
          w-full 
          max-w-[1200px]      
          md:p-6 
          rounded-3xl
        "
      >
        {/* TOP SECTION */}
        <div
          className="
            bg-gray-200
            rounded-3xl
            p-6
            flex
            flex-col
            md:flex-row   
            md:items-center
            md:justify-between
          "
        >
          {/* Profile picture */}
          <div className="flex flex-col items-center md:flex-row md:gap-4">
            <div className="
              h-16 w-16 
              md:h-20 md:w-20
              rounded-full 
              bg-black text-white 1
              flex items-center justify-center 
              text-2xl md:text-3xl capitalize
            ">
              {user.firstName[0]}
            </div>

            {/* user details */}
            <div className="mt-3 md:mt-0 text-center md:text-left">
              <p className="text-lg font-semibold capitalize">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>

          {/* Delete button */}
          <button
            className="
              bg-red-600 
              text-white 
              px-5 py-2 
              rounded-3xl 
              mt-4 md:mt-0
            "
          >
            Delete
          </button>
        </div>

        {/* FILTER BUTTONS */}
        <div
          className="
            bg-gray-100
            mt-6
            rounded-3xl
            p-4
            flex 
            justify-evenly
            gap-4
            md:gap-10
          "
        >
          <button
            onClick={() => setSaved(true)}
            className={`
              px-5 py-2 rounded-2xl text-sm font-medium
              ${saved ? "bg-black text-white" : "bg-white text-gray-600"}
            `}
          >
            Saved
          </button>

          <button
            onClick={() => setSaved(false)}
            className={`
              px-5 py-2 rounded-2xl text-sm font-medium
              ${!saved ? "bg-black text-white" : "bg-white text-gray-600"}
            `}
          >
            Published
          </button>
        </div>

        {/* CONTENT SECTION */}
        <div
          className="
            bg-gray-100
            mt-4
            rounded-3xl
            p-6
            min-h-[300px]
          "
        >
          <p className="text-center text-gray-700 font-semibold text-lg">
            {saved ? "Saved Blogs" : "Published Blogs"}
          </p>
        </div>
      </div>
    </div>
  );
}
