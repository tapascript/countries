import Link from "next/link";
import Image from "next/image";

const CountryList = ({ countries }) => {
  return (
    <ul className="flex flex-wrap justify-center">
      {countries.map((country) => (
        <li key={country?.name?.common} className="m-3 border border-gray-400 rounded w-64">
          <Link 
            href={`/countries/${country?.name?.common}`}>
            <div className="relative h-24 w-full">  
              <Image
                src={country?.flags?.png}
                alt={country?.flags.alt}
                fill
                style={{
                  objectFit: 'cover', // cover, contain, none
                }} />
            </div>  
            <p className="flex justify-center text-2xl p-2">{country?.name?.common}</p>
            <p className="flex justify-end text-gray-500 p-1">{country?.region}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
