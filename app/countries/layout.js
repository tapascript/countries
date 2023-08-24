import { Suspense} from 'react';
import Loading from './loading';


export const metadata = {
  title: 'Countries - List',
  description: 'List of countries in the world.',
}

const CountryLayout = ({ children }) => {

  return(
    <div className="flex flex-col">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  )
}

export default CountryLayout;