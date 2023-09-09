const CountryDetails = ({ country }) => {
  return (
    <>
      <h2>{`${country?.flag} ${country?.name?.official}`}</h2>
      <p>{country?.independent ? "Independent country" : null}</p>
      <p>{country?.unMember ? "UN Member" : null}</p>
      <ul>
        Capital
        {country?.capital?.map((capital) => (
          <li key={capital}>{capital}</li>
        ))}
      </ul>
    </>
  );
};

export default CountryDetails;
