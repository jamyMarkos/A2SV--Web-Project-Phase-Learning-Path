"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        className="border opacity-70 outline-none px-3 py-2 rounded-xl mx-1"
        type="text"
        value={search}
        placeholder="Enter the Search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="font-bold text-white py-2 px-3 rounded-xl bg-blue-500 ml-1"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
