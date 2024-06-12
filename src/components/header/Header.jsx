import React from "react";

export default function Header() {
  return (
    <header className="backdrop-blur-lg shadow-lg">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <span className="text-white text-5xl font-bold">Hubnex</span>
        </div>

        {localStorage.getItem("token") && (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="bg-orange-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
