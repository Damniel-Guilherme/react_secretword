import "./Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  return (
    <div className="game">
      <p className="points">
        <span>pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda {guesses} tentativas(s).</p>
      <div className="wordContainer">
        <span className="letters">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" aria-required="true" />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras ja utilizadas:</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  );
};

export default Game;
