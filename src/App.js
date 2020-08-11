import React from "react"
import Game from "./components/game/Game"
import RaccoonLogo from "./components/assets/images/raccoon.png"
import SquirrelLogo from "./components/assets/images/squirrel.png"
import HoundLogo from "./components/assets/images/hound.png"
import BunnyLogo from "./components/assets/images/bunny.png"
import './App.css';

function App(props) {

  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: RaccoonLogo
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: SquirrelLogo
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: BunnyLogo
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: HoundLogo
  }

  return (
    <div className="App">

      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
