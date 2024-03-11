import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
      const loadCountries = async () => {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      };
      loadCountries();
    }, []);
  return (
    <div>
      {
        countries.map(country =><Country key={country.cca3} country={country}/>)
      }
    </div>
  )
}

export default Countries