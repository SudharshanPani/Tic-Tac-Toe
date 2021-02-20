import React from 'react';
import './Gridrow.css';
import GridItem from'../GridItem/GridItem';

class GridRow extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        let gridRow = [ <GridItem />,  <GridItem />, <GridItem />];

        return (
            <div className="grid-row">      
                {this.props.row.map((col,colIndex) =>( 
                    <GridItem rowIndex={this.props.rowIndex} colIndex={colIndex} colText={col} handleClick={this.props.handleClick} />
                ))}
            </div>
            
            ); 
    }
}

export default GridRow; 