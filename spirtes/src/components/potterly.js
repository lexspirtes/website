import React from 'react';
import PotterlyImage from '../static/potterly.png'

class Potterly extends React.Component {
  constructor(props){
    super(props);
    this.state = {comic: ""};
  }

  /** fetchContent upon mount */
  componentDidMount(){
}


  render() {
    return (
        <div className="PotterlyDiv">
        <h3>Potterly</h3>
          <img className="PotterlyImage"
               src={PotterlyImage}
               alt="potterly"
          />
        </div>
    );
  }
}

export default Potterly;
