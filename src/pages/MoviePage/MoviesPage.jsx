import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { fetchMuvies } from '../../components/Api/Api';
import { useEffect, useState } from 'react';
import { SearchForm } from '../../components/SearchForm/SearchForm';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [muvies, setMuvies] = useState([]);
  const [productName, setProductName] = useState(
    searchParams.get('name') ?? ''
  );
  console.log('searchParams', searchParams);
  console.log('productName', productName);
  const handleSearch = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    setProductName('');
  };

  useEffect(() => {
    const muviePages = async () => {
      try {
        const search = await fetchMuvies(searchParams);
        setMuvies(search.results);
      } catch (error) {
        console.log(error);
      }
    };
    muviePages();
  }, [searchParams]);
  console.log(muvies);
  return (
    <main>
      <SearchBox onSearch={handleSearch} />
      <SearchForm value={muvies} />
    </main>
  );
};
