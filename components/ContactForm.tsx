import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', message: '', submitted: false };
  }

  handleChange = (event) => {
    if (event.target.value !== '') {
      this.setState({ ...this.state, name: event.target.value });
    }
  }

  handleMessageChange = (event) => {
    if (event.target.value !== '') {
      this.setState({ ...this.state, message: event.target.value });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name.length && this.state.message.length) {
      this.setState({
        submitted: true
      })
    }
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name<br/>
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Message<br/>
            <textarea  value={this.state.message} onChange={this.handleMessageChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div>
          {this.state.submitted ? `Thanks for your message ${this.state.name}` : null}
        </div>
      </>
    );
  }
}

export default ContactForm