import Link from "next/link";
import Image from "next/image";

import {
  calculateOffsetFromTZ,
  getFormattedDateUsingTimezoneOffset, 
  getFormattedTimeUsingTimezoneOffset } from '@/utils/DateUtil';


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
            <div className="flex justify-between items-end p-1">
              <div className="flex flex-col">
                <p>{getFormattedDateUsingTimezoneOffset(calculateOffsetFromTZ(country?.timezones[0]), true)}</p>    
                <p>{getFormattedTimeUsingTimezoneOffset(calculateOffsetFromTZ(country?.timezones[0]))}</p>   
              </div> 
              <p className="flex text-gray-500 p-1">{country?.region}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
