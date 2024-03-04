"use client";

import { useCountryData } from "@/providers/country.provider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CountryD = ({ params }: { params: { country: string } }) => {
  const { countryData, reset } = useCountryData();
  const [data, setData] = useState<any>();
  const searchByName = (query: string) => {
    if (query == "") {
      setData(data);
      return;
    }
    if (!countryData) return null;

    setData(
      countryData.filter((country) =>
        country.alpha3Code.toLowerCase().includes(query.toLowerCase())
      )[0]
    );
  };
  const router = useRouter();
  useEffect(() => {
    searchByName(params.country);
  }, [params.country]);

  return (
    <div className="country">
      <button
        onClick={() => {
          reset();
          router.back();
        }}
      >
        Back
      </button>
      {data && (
        <div className="country__section">
          <div className="country__flag">
            <img src={data.flags.svg} alt="flag country" />
          </div>
          <div className="country__details">
            <h3 className="country__details--title">{data.name}</h3>
            <div className="country__details--elements">
              <div>
                <p>
                  <span>Native Name: </span>
                  {data.nativeName}
                </p>
                <p>
                  <span>Population: </span>
                  {data.population.toLocaleString("en-US")}
                </p>
                <p>
                  <span>Region: </span>
                  {data.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {data.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {data.capital}
                </p>
              </div>
              <div>
                <p>
                  <span>Top Level Domain: </span>
                  {data.topLevelDomain}
                </p>
                <p>
                  <span>Currencies: </span>
                  {data.currencies
                    ?.map((currency: any) => currency.name)
                    .join(", ")}
                </p>
                <p>
                  <span>Languages: </span>
                  {data.languages
                    .map((language: any) => language.name)
                    .join(", ")}
                </p>
              </div>
            </div>
            <div className="country__details--list">
              <div>
                <p>
                  <span>Border Countries: </span>
                </p>
              </div>
              {/* <div>
              {data.borders && data.borders.length > 0 ? getBordersCountry : <p>{data.name} has no border countries</p>} 
            </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryD;
