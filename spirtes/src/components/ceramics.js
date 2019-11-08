import React from 'react';
import Ashtrays from '../assets/images/ashtrays.png'


class Ceramics extends React.Component {
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
          <img className="AshtrayImage"
               src={Ashtrays}
               alt="ashtrays"
          />
        </div>
    );
  }
}

export default Ceramics;
