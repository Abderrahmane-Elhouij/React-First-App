import { Component } from "react";

class Control extends Component {
  state = { input: "", nom: "" };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };
  handleClick = () => {
    this.setState({ nom: this.state.input });
  };
  render() {
    const { name, job } = this.props;

    return (
      <>
        <input type="text" onChange={this.handleChange} />
        <br />
        <button onClick={this.handleClick}>click</button><br/>
        Hello {this.state.nom} you work as a {job}
      </>
    );
  }
}

export default Control;
