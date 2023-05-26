import "./GameOver.css";
import "./StartScreen.css";

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Fim do jogo!</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button className="button-85" onClick={retry} >Reiniciar o jogo</button>
    </div>
  )
}

export default GameOver;