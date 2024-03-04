"use client";
import Card from "@/components/Cards";
import { useCountryData } from "@/providers/country.provider";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
const Home = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const { countryData, reset, filterByContinent, searchByName } =
    useCountryData();
  return (
    <>
      <div className="content">
        <div className="search_box">
          <BiSearch width={24} height={24} />
          <input
            onChange={(e) => searchByName(e.target.value)}
            type="text"
            placeholder="Search for a country..."
          />
        </div>
        <div className="filter">
          <div
            className="filter_box"
            onClick={() => setOpenFilter((prv) => !prv)}
          >
            <p>Filter by Region</p>
            <IoIosArrowDown className={openFilter ? "active" : ""} />
          </div>
          <div
            className={openFilter ? "filter_result active" : "filter_result"}
          >
            <ul>
              <li onClick={reset}>All</li>
              <li
                onClick={() => {
                  filterByContinent("Africa");
                  setOpenFilter((prv) => !prv);
                }}
              >
                Africa
              </li>
              <li
                onClick={() => {
                  filterByContinent("America");
                  setOpenFilter((prv) => !prv);
                }}
              >
                America
              </li>
              <li
                onClick={() => {
                  filterByContinent("Asia");
                  setOpenFilter((prv) => !prv);
                }}
              >
                Asia
              </li>
              <li
                onClick={() => {
                  filterByContinent("Europe");
                  setOpenFilter((prv) => !prv);
                }}
              >
                Europe
              </li>
              <li
                onClick={() => {
                  filterByContinent("Oceania");
                  setOpenFilter((prv) => !prv);
                }}
              >
                Oceania
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Country">
        {countryData?.map((v, i) => (
          <Card {...v} />
        ))}
      </div>
    </>
  );
};

export default Home;
