import React from "react";

export class VistaOpciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solapaSeleccionada: 1,
      solapaAccionesClass: "solapa-opcion-ab",
      solapaObjetosClass: "solapa-opcion-ab  solapa-opciones-no-seleccionada",
    };
  }

  SolapaClick(seleccion) {
    this.setState({ solapaSeleccionada: seleccion });
    if (seleccion == 1) {
      this.state.solapaAccionesClass = "solapa-opcion-ab";
      this.state.solapaObjetosClass =
        "solapa-opcion-ab solapa-opciones-no-seleccionada";
    } else {
      this.state.solapaAccionesClass =
        "solapa-opcion-ab solapa-opciones-no-seleccionada";
      this.state.solapaObjetosClass = "solapa-opcion-ab";
    }
  }

  selectView(param) {
    switch (param) {
      case 1:
        return <OpcionesAcciones />;
      case 2:
        return "123";
    }
  }

  render() {
    return (
      <div className="">
        <div className="solapa-opciones">
          <div
            onClick={() => this.SolapaClick(1)}
            className={this.state.solapaAccionesClass}
          >
            Acciones
          </div>
          <div
            onClick={() => this.SolapaClick(2)}
            className={this.state.solapaObjetosClass}
          >
            Objetos
          </div>
        </div>

        <br></br>

        <div className="opciones-main">
          {this.selectView(this.state.solapaSeleccionada)}
        </div>
      </div>
    );
  }
}
function OpcionAccion(props) {
  var estaClassName = "accion-item-descripcion hide";
  if (props.selectedOption == props.thisOption) {
    estaClassName = "accion-item-description";
  } else {
    estaClassName = "accion-item-descripcion hide";
  }

  return (
    <div className="accion-item">
      <div className="accion-item-title">{props.title}</div>
      <div className={estaClassName}>{props.descripcion}</div>
    </div>
  );
}

class OpcionesAcciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0,
    };
  }

  render() {
    return (
      <div className="opciones-main-section">
        <OpcionAccion
          title="Mejorar refugio"
          thisOption="2"
          selectedOption={this.state.selectedOption}
          descripcion="Está acción te permite mejorar el refugio. Un refugio mejor construido producira mejores resultados"
        />
        <OpcionAccion
          title="Pescar (nadando)"
          thisOption="1"
          selectedOption={this.state.selectedOption}
          descripcion="Pescar nadando es una actividad que requiere de gran habilidad y de herramientas adecuadas. Si dominas la técnica obtendras grandes resultados."
        />
        <OpcionAccion
          title="Pescar (caña de pescar)"
          thisOption="1"
          selectedOption={this.state.selectedOption}
        />
        <OpcionAccion
          title="Buscar leña"
          thisOption="1"
          selectedOption={this.state.selectedOption}
        />
        <OpcionAccion
          title="Buscar cocos"
          thisOption="1"
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
