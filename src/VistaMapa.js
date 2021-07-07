import React from 'react';
import tileList from './tileList.json';


export class VistaMapa extends React.Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <div id="map" class="map">      
                    <MapCore tileList={tileList} />      
               </div>
          );
     }
}
function MapCore(props) {
     var maxRows;
     maxRows = Math.max.apply(Math, props.tileList.map(function(o) { return o.row; }))
     
     var rows= [];
     for(var i=0;i<maxRows;i++){
          rows.push(<MapRow tileList={props.tileList} rowNumber={i} />);
     }
     return (
          <div id="map-core"> 
               {rows}
          </div>
     );
}

function MapRow(props) {
     var filteredRow;

     filteredRow = props.tileList.filter(function (el) {
          return el.row == props.rowNumber;
     });

     var tiles= [];
     for(var i=0 ; i<filteredRow.length; i++){
          tiles.push(<MapTile tileClass={ filteredRow[i].class } />);
     }
     return (
          <div className="row"> 
          {tiles}
          </div>
     );
}

function MapTile (props) {
     var tileStyle;
     tileStyle = "map-tile " + props.tileClass;
     return (
          <div className={tileStyle} ></div>
     )
}
