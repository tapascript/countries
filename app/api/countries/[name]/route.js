
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
  const countryName = params?.name;
  console.log(countryName);
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

  const data = await res.json();
  if(res !== null) return NextResponse.json(data);

  return NextResponse.json({'error': 'Country not found'});
}