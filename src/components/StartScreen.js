import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Roda Roda Jequiti</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button className="button-85" onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen