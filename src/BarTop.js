import React from 'react';
import { faDraftingCompass, faRunning, faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import { GoView } from "./GoView";

export class BarTop extends React.Component {
     render() {
          return (
               <div className="game-top-bar">
                    <div className="topbar-settings">
                         <GoView 
                         icon={faDraftingCompass} 
                         onClick={() => this.props.onClick(5)}  
                         objectView="5" 
                         currentView={this.props.currentView} styleName="buton-menu config-menu-buton" 
                         iconSize="3x"/>
                    </div>
                    <div className="topbar-resources">
                         <GoView icon={faRunning} onClick={() => this.props.onClick(6)} text="54"  objectView="6" currentView={this.props.currentView} styleName="topbar-resources-icons buton-menu" iconSize="2x"/>
                         <GoView icon={faHeart} onClick={() => this.props.onClick(7)} text="43"  objectView="7" currentView={this.props.currentView} styleName="topbar-resources-icons buton-menu" iconSize="2x"/>
                         <GoView icon={faClock} onClick={() => this.props.onClick(8)} text="43"  objectView="8" currentView={this.props.currentView} styleName="topbar-resources-icons buton-menu" iconSize="2x"/>

                    </div>
               </div>
          );
     }
}
