import css from './SearchBox.module.css';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const SearchBox = ({ initialValue, onSearch }) => {
  const inputRef = useRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = inputRef.current.value;

    if (!inputValue.trim()) {
      toast.error('Please enter a value');
      return;
    }

    onSearch(inputValue);
    evt.target.reset(); // Reset the form directly
  };
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <div className={css.inputContainer}>
          <input
            ref={inputRef}
            type="text"
            autoComplete="off"
            autoFocus={true}
            placeholder=""
            className={css.inputField}
            defaultValue={initialValue} // Use defaultValue instead of value
          />
          <button type="submit" className={css.submitButton}>
            Search
          </button>
        </div>
        <Toaster containerStyle={{ marginTop: 85 }} />
      </form>
    </div>
  );
};
