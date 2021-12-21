const FormDictionary = ({ handleSearchWord, setSearchWord }) => {
  return (
    <form className="c-app__search-form" onSubmit={(e) => handleSearchWord(e)}>
      <input
        type="text"
        className="c-app__search-form--input"
        placeholder="the word goes here"
        required
        pattern="[a-zA-Z]+"
        title="please use lowercase word without shape like:(= * %) or numbers"
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <input
        type="submit"
        value="search"
        className="c-btn c-app__search-form--button"
      />
    </form>
  );
};

export default FormDictionary;
