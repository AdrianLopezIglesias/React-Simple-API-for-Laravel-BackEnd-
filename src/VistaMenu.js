import React from 'react';

export class VistaMenu extends React.Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <div>
                    <h1 className="titulo-centrar-negro">Menu</h1>
                    <div className="menu-div">
                         <div className="menu-item">Configuración</div>
                         <div className="menu-item">Nueva partida</div>
                         <div className="menu-item">Cargar partida</div>
                    </div>
               </div>
          );
     }
}
