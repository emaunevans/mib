import React from 'react';
import Auth from '../modules/Auth';
import SendBottle from '../pages/SendBottle.jsx';
const store = require('store');


class MessagePage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {},
      message: {
        body: "",
        title: ""
      }
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user
        });
      }
    });
    xhr.send();
    if (store.get('bottle')) {
      let bottle = store.get('bottle')
      this.setState({
        title: bottle.title,
        message: bottle.message
      })

    }
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    store.set('bottle', {
      title: this.state.title,
      message: this.state.message
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.message) {

      API.saveMessage({
        title: this.state.title,
        message: this.state.message
      })

        .then(res => {

          store.clearAll();
        })
        .catch(err => console.log(err));
    }
  };

  /**
   * Render the component.
   */
  render() {
    return (<SendBottle
      secretData={this.state.secretData}
      user={this.state.user}
      onSubmit={this.handleFormSubmit}
      onChange={this.handleInputChange}
      errors={this.state.errors}
      title={this.state.title}
      body={this.state.body}
    />);
  }

}

export default MessagePage;
