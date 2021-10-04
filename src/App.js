import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { latitude: null, errMessage: "" };
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       this.setState({ latitude: position.coords.latitude });
  //     },
  //     (err) => {
  //       this.setState({ errMessage: err.message });
  //     }
  //   );
  // }

  state = { latitude: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),

      (err) => this.setState({ errMessage: err.message })
    );
  }

  renderContent(){
    if (this.state.errMessage && !this.state.latitude) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude}/>;
    } else {
      return <Spinner message="PLEASE ACCEPT LOCATİON REQUEST"/>;
    }
    
  }
  render() {
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    )
    
  }
}

export default App;
