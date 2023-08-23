import {notFound} from 'next/navigation';

const getCountry = async (countryName) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  return res.json();
}

const Country = async ({params}) => {

  const data = await getCountry(params?.name);
  const country = data[0];

  if(!country) {
    notFound();
  }
  
  return(
    <>
      <h2>{`${country?.flag} ${country?.name?.official}`}</h2>
      <p>{ country?.independent ? "Independent country" : null }</p>
      <p>{ country?.unMember ? "UN Member" : null}</p>
      <ul>
        Capital
        {
          country?.capital?.map(capital => (
            <li key={capital}>{capital}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Country;