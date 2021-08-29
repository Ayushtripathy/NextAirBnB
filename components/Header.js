import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import {
  SearchIcon,
  UserCircleIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { signIn, signOut, useSession } from "next-auth/client";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const [session] = useSession();

  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3
     bg-white shadow-md p-5 md:px-10"
    >
      <div
        className="relative flex items-center h-10 
      cursor-pointer my-auto hover:scale-105"
        onClick={() => router.push("/")}
      >
        <Image
          objectFit="contain"
          src="https://links.papareact.com/qd3"
          alt=""
          layout="fill"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center  sm:border-2 rounded-full py-2 md:shadow-sm hover:border-red-400">
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600
           placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400
           text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      <div
        onClick={!session ? signIn : signOut}
        className="flex items-center space-x-4 
      justify-end text-gray-500"
      >
        <p className="hidden md:inline cursor-pointer hover:text-red-400">
          {session ? `Welcome, ${session.user.name}` : "Become a host"}
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer hover:text-red-400" />
        <div
          className="flex items-center space-x-2 
        border-2 p-2 rounded-full hover:bg-gray-300"
        >
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
