import React from 'react';
import { faToolbox, faUserAlt, faDharmachakra, faCompass } from '@fortawesome/free-solid-svg-icons';
import { GoView } from "./GoView";

export class BarBottom extends React.Component {
     render() {
          return (
               <div className="game-bottom-bar">
                    <GoView icon={faUserAlt} onClick={() => this.props.onClick(1)} objectView="1" currentView={this.props.currentView} styleName="game-botom-buttons buton-menu" iconSize="3x"/>
                    <GoView icon={faToolbox} onClick={() => this.props.onClick(2)} objectView="2" currentView={this.props.currentView} styleName="game-botom-buttons buton-menu" iconSize="3x"/>
                    <GoView icon={faDharmachakra} onClick={() => this.props.onClick(3)} objectView="3" currentView={this.props.currentView} styleName="game-botom-buttons buton-menu" iconSize="3x"/>
                    <GoView icon={faCompass} onClick={() => this.props.onClick(4)} objectView="4" currentView={this.props.currentView} styleName="game-botom-buttons buton-menu" iconSize="3x"/>
               </div>
          );
     }
}
