import *  as React from 'react' ;
import logo from '../logo.svg';
export class SpinningAtom extends React.Component<any, any> {
  constructor(props:any) {
    super(props)
    this.state = {speed: 5};
  }

  updateSpeed() {
    this.setState({ speed: this.state.speed *0.9});
  }

  render() {
    return(
      <div>
        <button onClick={() => this.updateSpeed()} value='faster'>Faster</button>
        <img src={logo} className = "App-logo" alt="logo" style={{ animation:"App-logo-spin infinite "+this.state.speed+"s linear"}}/>

      </div>
    );
  }
}