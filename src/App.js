import axios from "axios";
import { useState } from "react";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [answers, setAnswers] = useState([]);

  const handleSearchWord = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((response) => {
        setAnswers(response.data);
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
        <div className="c-app-result">
          {answers.map((answer, index) => (
            <div className="c-app-result__col">
              <h2 className="c-app-result--word" key={index}>
                {`${answer.word}: `}<em className="c-app-result--word-phonetic">{answer.phonetic}</em>
              </h2>

              {answer.phonetics[0].audio ? (
                <audio controls>
                  <source src={answer.phonetics[0].audio} />
                </audio>
              ) : null}

              {answer.meanings ? (
                <>
                  {answer.meanings.map((meaning, index) => (
                    <div
                      className="c-app-result--meaning"
                      key={`meaning-${index}`}
                    >
                      <p>{meaning.partOfSpeech}</p>
                      <span>{meaning.definitions.map((def,index)=>(
                        <span className="c-app-result--meaning-def" key={`${answer}-def-${index}`}>
                          {def.definition}
                        </span>
                      ))}</span>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
