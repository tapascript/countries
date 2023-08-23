const getCountries = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  return res.json();
}

const CountryPage = async () => {

  const countries = await getCountries();
  
  return(
    <>
      <h1>Country Page</h1>

      <ul>
        {
          countries.map(country => (
            <li key={country.name.common}>
              {country.flag} {country.name.common}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default CountryPage;