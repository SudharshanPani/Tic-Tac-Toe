// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from '../Header/Header';
import GridRow from '../GridRow/GridRow';
import Footer from '../Footer/Footer';


class App extends React.Component{ 
  
  constructor(){
    super();
    this.state = {
        gameState: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        gameActive: true,
        playerTurn: "X",
        counter: 0,
    }

}


winningCondition =[
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"],
]


handleReaultValidation(){

  var roundWon = false;
  var player = "";
  for (let i = 0; i < this.winningCondition.length; i++) {

        const copiedGamsStateW = [...this.state.gameState];

        const condition = this.winningCondition[i];  //  ["00", "01", "02"],

        // a = condition[0];  charAt(0) charAt(1)
        var a = condition[0];  // 00
        var a1 =a.charAt(0);
        var a2 =a.charAt(1);

        var b = condition[1];  // 01
        var b1 = b.charAt(0);
        var b2 =b.charAt(1);

        var c = condition[2];  // 02
        var c1 = c.charAt(0);
        var c2 = c.charAt(1);
            

        let p = copiedGamsStateW[a1][a2];
        let q = copiedGamsStateW[b1][b2];
        let r = copiedGamsStateW[c1][c2];

        

        if (p === "" || q === "" || r === "") {
          continue;
        }

        if (p === q && q === r) {
          roundWon = true;
          player = p;
          break;
        }
      }

    if (roundWon) {
      alert("WON "+player);
      
      this.setState({
        gameActive: false,
      })

      return;
    }
    

    // Handle Draw Condition    
      if (this.state.counter === 8) {
        alert("DRAW");
        this.setState({
          gameActive: false,
        })

       return;
    }

  }

handlClick = (rowIndex, colIndex) =>{
  
  const copiedGamsState = [...this.state.gameState];

  copiedGamsState[rowIndex][colIndex] = this.state.playerTurn;

  if(this.state.gameActive === false){
    return;
  }

  this.setState({
    gameState : copiedGamsState,
    playerTurn : this.state.playerTurn ==="X" ? "O" : "X",
    counter: this.state.counter +1,
  })

 

  this.handleReaultValidation();
 
}
  


  render(){
    
    return(
        <div className="container">
         <Header />
          <div id="board">
            {/* <GridRow />
            <GridRow />
            <GridRow /> */}

            {this.state.gameState.map((row,rowIndex) => (
                <GridRow row={row} rowIndex={rowIndex} handleClick={this.handlClick} />
            ))}


          </div>
          <Footer turn={this.state.playerTurn}/>

        </div>
    );
  }

}

export default App;
