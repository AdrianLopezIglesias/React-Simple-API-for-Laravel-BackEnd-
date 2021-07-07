import React from 'react';
import { VistaMapa } from './VistaMapa';
import { VistaOpciones } from './VistaOpciones';
import { VistaPerfil } from './VistaPerfil';
import { VistaObjetivos } from './VistaObjetivos';
import { VistaMenu } from './VistaMenu';
import { VistaHoras } from './VistaHoras';

export class MainFrame extends React.Component {
     constructor(props) {
          super(props);
     }
     selectView(param) {
          switch (param) {
               case 1:
                    return <VistaPerfil />;
               case 2:
                    return <VistaOpciones />;
               case 3:
                    return <VistaMapa />;
               case 4:
                    return <VistaObjetivos />;
               case 5:
                    return <VistaMenu />;
               case 6:
                    return <VistaMenu />;
               case 7:
                    return <VistaMenu />;
               case 8:
                    return <VistaHoras />;
               default:
                    return <VistaPerfil />;
          }
     }

     render() {
          return (
               <div>
                    {this.selectView(this.props.view)}
               </div>
          );
     }
}


