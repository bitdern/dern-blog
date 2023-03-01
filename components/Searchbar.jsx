"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" rounded-md flex mb-6 justify-between items-center"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search bar is a WIP..."
        className="border-2 border-violet-400 w-full h-8 rounded-md  placeholder-violet-700 text-violet-700 bg-violet-200 flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="border-2 border-violet-500 rounded-md text-slate-200 disabled:text-slate-900 mx-1 bg-violet-700 h-8"
      >
        Search
      </button>
    </form>
  );
}
