import Link from "next/link";

const getCountries = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all?fields=name,flag`);
  return res.json();
}

const Countries = async () => {

  const countries = await getCountries();
  
  return(
    <>
      <h1>Countries</h1>

      <ul>
        {
          countries.map(country => (
            <li key={country.name.common}>
              <Link href={`/countries/${country.name.common}`}>
                {country.flag} {country.name.common}
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Countries;