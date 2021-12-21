import WordSound from "./WordSound";
import WordMeanings from './WordMeanings';


const ResultForm = ({ answers }) => {
  return (
    <div className="c-app-result">
      {answers.map((answer, index) => (
        <div className="c-app-result__col">
          <h2 className="c-app-result--word" key={`${answer.word}-${index}`}>
            {`${answer.word}: `}
            <em className="c-app-result--word-phonetic">{answer.phonetic}</em>
          </h2>

          {answer.phonetics.length > 0 ? (
            <WordSound sourceSound={answer.phonetics[0].audio} />
          ) : null}

          {answer.meanings ? (
            <WordMeanings answer={answer} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ResultForm;
