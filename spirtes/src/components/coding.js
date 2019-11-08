import React from 'react';
import Ashtrays from '../assets/images/ashtrays.png'
import Potterly from './potterly.js'


class Coding extends React.Component {
  constructor(props){
    super(props);
    this.state = {comic: ""};
  }

  /** fetchContent upon mount */
  componentDidMount(){
}


  render() {
    return (
        <div className="AshtrayDiv">
        < Potterly/>
        </div>
    );
  }
}

export default Coding;
