import styles from './SearchForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getSearchString, updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const dispatch = useDispatch();
  const reduxSearch = useSelector(getSearchString);

  const [searchTerm, setSearchTerm] = useState(reduxSearch);

  useEffect(() => {
    setSearchTerm(reduxSearch); // synchronizacja lokalnego stanu z Reduxem
  }, [reduxSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchTerm));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        <i className="fa fa-search" />
      </button>
    </form>
  );
};

export default SearchForm;









