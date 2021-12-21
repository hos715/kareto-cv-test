import axios from "axios";
import { useState } from "react";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [answer, setAnswer] = useState([]);

  const handleSearchWord = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((response) => {
        setAnswer(response.data);
        console.log(response.data);
      })
      .catch((ex) => {
        console.log(`failed: ${ex}`);
      });
  };

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
          <form
            className="c-app__search-form"
            onSubmit={(e) => handleSearchWord(e)}
          >
            <input
              type="text"
              className="c-app__search-form--input"
              placeholder="the word goes here"
              onChange={(e) => setSearchWord(e.target.value)}
            />
            <input
              type="submit"
              value="search"
              className="c-btn c-app__search-form--button"
            />
          </form>
        </div>
        <div className="c-app__result">{answer.map((item,index)=>(
          <h1 key={index}>{item.word}</h1>
        ))}</div>
      </div>
    </>
  );
}

export default App;
