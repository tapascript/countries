import Link from 'next/link'
export default async function NotFound() {
  
  return (
    <div>
      <h2>The Country Not Found</h2>
      
      <p>
        View <Link href="/countries">all countries</Link>
      </p>
    </div>
  )
}