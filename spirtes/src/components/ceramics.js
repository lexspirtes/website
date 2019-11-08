import React from 'react';
import ceramic from '../assets/images/pots/lex-pottery-3.jpg'


function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../assets/images/pots', false, /\.(png|jpe?g|svg)$/))

class Ceramics extends React.Component {
  constructor(props){
    super(props);
    this.state = {comic: ""};
  }

  /** fetchContent upon mount */
  componentDidMount(){
}

//       { images.forEach(function(element) {
//          <img src={element}/> })
//        }


  render() {
    return (
        <div className="CeramicsDiv">
        { images.map(x => <img className="potImage" src={x} />) }
        </div>
    );
  }
}

export default Ceramics;
