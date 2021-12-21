const WordMeanings = ({ answer }) => {
  return (
    <>
      {answer.meanings.map((meaning, index) => (
        <div
          className="c-app-result--meaning"
          key={`${answer.word}-meaning-${index}`}
        >
          <p>{meaning.partOfSpeech}</p>
          <span>
            {meaning.definitions.map((def, index) => (
              <span
                className="c-app-result--meaning-def"
                key={`${answer.word}-${meaning.partOfSpeech}-def-${index}`}
              >
                {def.definition}
              </span>
            ))}
          </span>
        </div>
      ))}
    </>
  );
};

export default WordMeanings;
