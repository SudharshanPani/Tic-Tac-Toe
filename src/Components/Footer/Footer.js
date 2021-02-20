import React from 'react';
import './footer.css';
class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="turn">{this.props.turn}'s Turn</div>
    }
}

export default Footer; 