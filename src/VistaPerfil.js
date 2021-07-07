import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint, faLightbulb, faProjectDiagram, faComment, faUserFriends, faYinYang, faBook, faPrayingHands, faHeartbeat, faDumbbell, faUserNinja, faSmile } from '@fortawesome/free-solid-svg-icons';

export class VistaPerfil extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               subview: "1"
          };
     }
     render() {
          return (
               <div>
                    <h1 className="titulo-centrar-negro">Social</h1>
                    <div className="menu-div">
                         <table className="tabla-identidad table-general" >
                              <tbody>
                                   <tr>
                                        <td className="table-cell"><div className="tooltip flex-column">12<br></br><FontAwesomeIcon icon={faFingerprint} size="1x" color="black" /></div></td>
                                        <td className="table-cell"><div className="tooltip flex-column">11<br></br><FontAwesomeIcon icon={faComment} size="1x" color="black" /></div></td>
                                        <td className="table-cell"><div className="tooltip flex-column">8<br></br><FontAwesomeIcon icon={faUserFriends} size="1x" color="black" /></div></td>
                                        <td className="table-cell"><div className="tooltip flex-column">6<br></br><FontAwesomeIcon icon={faYinYang} size="1x" color="black" /></div></td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
                    <h1 className="titulo-centrar-negro">Físico</h1>
                    <div className="menu-div">
                         <table className="tabla-identidad table-general" >
                              <tbody>
                                   <tr>
                                        <td className="table-cell"><div className="tooltip flex-column">12<br></br><FontAwesomeIcon icon={faHeartbeat} size="1x" color="black" /></div></td>
                                        <td className="table-cell"><div className="tooltip flex-column">11<br></br><FontAwesomeIcon icon={faDumbbell} size="1x" color="black" /></div></td>
                                        <td className="table-cell"><div className="tooltip flex-column">8<br></br><FontAwesomeIcon icon={faUserNinja} size="1x" color="black" /></div></td>
                                        <td className="table-cell"><div className="tooltip flex-column">6<br></br><FontAwesomeIcon icon={faSmile} size="1x" color="black" /></div></td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
                    <h1 className="titulo-centrar-negro">Intelectual</h1>
                    <div className="menu-div">
                         <table className="tabla-identidad table-general" >
                              <tbody>
                                   <tr>
                                        <td className="table-cell"><div className="tooltip flex-column">12<br></br><FontAwesomeIcon icon={faProjectDiagram} size="1x" color="black" /></div></td>
                                        <td className="table-cell"><div className="tooltip flex-column">11<br></br><FontAwesomeIcon icon={faLightbulb} size="1x" color="black" /></div></td>
                                        <td className="table-cell"><div className="tooltip flex-column">8<br></br><FontAwesomeIcon icon={faBook} size="1x" color="black" /></div></td>
                                        <td className="table-cell"><div className="tooltip flex-column">6<br></br><FontAwesomeIcon icon={faPrayingHands} size="1x" color="black" /></div></td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
          );
     }
}
