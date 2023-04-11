import { useState, useEffect } from 'react';
import { getFetchSearch } from 'API/api';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import css from './common.module.css';
import Notiflix from 'notiflix';

export const App = () => {
  const [images, setImages] = useState([]);
  const [numberPage, setNumberPage] = useState(1);
  const [nameQuery, setNameQuery] = useState('');
  const [loader, setLoader] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [error, setError] = useState('');
  
  const incrementPage = nameQuery => {
    
    setLoader(true);
    return getFetchSearch(nameQuery, numberPage)
      .then(listOfImages => {
        setTotalHits(listOfImages.totalHits);
        setImages(prevState => [...prevState, ...listOfImages.hits]);
        setNumberPage(prevState => prevState + 1);
      })

      .catch(error => setError(error))
      .finally(() => setLoader(false));
  };
  useEffect(() => {
    
    if (nameQuery) {
      incrementPage(nameQuery);
    }
  }, [nameQuery]);

  const saveNameQuery = nameQuery => {
    
    return setNameQuery(prevState => {
    

      if (prevState === nameQuery || prevState === undefined) {
        setNameQuery(nameQuery);
        return Notiflix.Notify.failure('Same  name of query.Try again!');
      } else {
        setNameQuery(nameQuery);
        setImages([]);
        setNumberPage(1);
      }
    });
  };

  return (
    <>
      <SearchBar onSaveNameQuery={saveNameQuery} />
      <div className={css.container}>
        <ImageGallery
          images={images}
          incrementPage={incrementPage}
          nameQuery={nameQuery}
          loader={loader}
          totalHits={totalHits}
        />
      </div>
    </>
  );
};
