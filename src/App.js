function App() {
  return (
    <>
      <div className="c-app">
        <div className="c-app__wrapper">
          <div className="c-app__header">
            <img
              className="c-app--image"
              src="assets/images/logo.png"
              width="125"
              height="125"
              alt="logo"
            />
            <h1 className="c-app__title">Hello Kareto</h1>
          </div>
          <form className="c-app__search-form">
            <input
              type="text"
              className="c-app__search-form--input"
              placeholder="the word goes here"
            />
            <input
              type="submit"
              value="search"
              className="c-btn c-app__search-form--button"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
