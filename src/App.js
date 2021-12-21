import axios from "axios";
import { useState } from "react";

import config from "./service/config.json";

import AppHeader from "./components/AppHeader";
import FormDictionary from "./components/FormDictionary";
import ResultForm from "./components/ResultForm";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [answers, setAnswers] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const handleSearchWord = (e) => {
    e.preventDefault();
    setNotFound(false);
    setAnswers([]);
    axios
      .get(`${config.dictionaryApi}/${searchWord}`)
      .then((response) => {
        setAnswers(response.data);
        console.log(response.data);
      })
      .catch((ex) => {
        console.log(`failed: ${ex}`);
        setNotFound(true);
      });
  };

  return (
    <>
      <div className="c-app">
        <div className="c-app__wrapper">
          <AppHeader />
          <FormDictionary
            handleSearchWord={handleSearchWord}
            setSearchWord={setSearchWord}
          />
        </div>
        {!notFound ? (
          <ResultForm answers={answers} />
        ) : (
          <h2 className="c-not-found">
            unfortunately there is no match Here,
            <br />
            try again with other word
          </h2>
        )}
      </div>
    </>
  );
}

export default App;
