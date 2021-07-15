import React from "react";
import { VistaInput } from "./VistaInput";
export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "1",
      notas: [],
      loggedIn: false,
    };
  }
  SetLoggedIn(){
      this.setState({
          loggedIn: true
      })
  }
  ChangeView(view) {
    this.setState({ 
        view: view,
    });
  }
  AddNote(note) {
      var notas = this.state.notas.push(note);
      this.setState({
          notas: notas
      });
      console.log(this.state.notas);
  }
  PressButton(view) {
    this.ChangeView(view);
  }
  render() {
    return (
      <div className="game">
        <div className="game-main-frame">
          <VistaInput view={this.state.view}  onChange={(v) => this.AddNote(v)}/>
        </div>
       
      </div>
    );
  }
}
