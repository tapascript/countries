import Link from "next/link";

const CountryList = ({ countries }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name.common}>
          <Link href={`/countries/${country.name.common}`}>
            {country.flag} {country.name.common}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
