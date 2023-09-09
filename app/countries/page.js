import CountryList from "@/components/CountryList";

const getCountries = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags,region`);
  return res.json();
}

const Countries = async () => {

  const countries = await getCountries();
  
  return(
    <>
      <CountryList countries={countries} />
    </>
  )
}

export default Countries;