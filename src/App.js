import React from "react";
import "./timer.css";
import reiniciar from "./assets/restart.svg";
import iniciar from "./assets/start.svg";
import parar from "./assets/stop.svg";

export default class Cronometro extends React.Component{
  state = {
    number:0
  }

  start = () =>{
    const Timer = setInterval(() =>{
      this.setState((crono) => ({
        number: crono.number +1
      }));
    }, 1000);

    this.stop = () =>{
      clearInterval(Timer);
    }

    this.restart = () =>{
      this.setState({
        number: 0
      });
  };
};

  render(){
    return(
      <body>
      <div className="container">
      <h1 className="contador">{this.state.number}</h1>
      <button className="restart" onClick={this.restart}><img src={reiniciar} /></button>
      <button className="start" onClick={this.start}><img src={iniciar} /></button>
      <button className="stop" onClick={this.stop}><img src={parar} /></button>
      </div>
      <div className="bola1"></div>
      <div className="bola2"></div>
      </body>
    );
  };
}