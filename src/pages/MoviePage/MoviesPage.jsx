import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../../components/SearchBox/SearchBox';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productName, setProductName] = useState(
    searchParams.get('name') ?? ''
  );

  const handleSearch = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    setProductName(''); // Обновляем локальное состояние для очистки формы
  };

  return (
    <main>
      <SearchBox initialValue={productName} onSearch={handleSearch} />
    </main>
  );
};
