import React from 'react';
import Me from '../assets/images/me.png'


class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {comic: ""};
  }

  /** fetchContent upon mount */
  componentDidMount(){
}


  render() {
    return (
        <div className="AboutDiv">
          <img className="MeDiv"
               src={Me}
               alt="lex"
          />
          <div className="aboutInfo">
            <h2 id="aboutName">Lex Spirtes</h2>
            <p id="aboutDetails">She is a full-stack engineer, ceramicist, and queer woman.</p>
          </div>
        </div>
    );
  }
}

export default About;
