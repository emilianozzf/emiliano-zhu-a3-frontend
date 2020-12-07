import React from 'react';
import {NavLink} from "react-router-dom";
import Axios from 'axios';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      urlList: [],
      _id: '',
      longURL: '',
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/url')
    .then(response => {
        this.setState({urlList: response.data})
    });
  }

  onChange(key, event) {
    this.setState(
        {[key]: event.target.value}
    )
  }

  onSubmit() {
    Axios.post(
      'http://localhost:3000/api/url',
      {
        _id: this.state._id,
        longURL: this.state.longURL,
      }
    ).then(function() {
      return Axios.get('http://localhost:3000/api/url')
    })
    .then(response => {
      this.setState({urlList: response.data})
    })
    .catch(error => console.log(error))
    .finally(() => this.setState(
        {
        _id: '',
        longURL: '',
        }
      )
    )
  }

  render() {
    return (
      <div>
        <h1>URL List</h1>
        <h2> These are the urls!</h2>
        <div>
          {this.state.urlList.map(url =>
            <div>
              <span><NavLink exact to={"/url/"+url._id}>{url._id}</NavLink>: </span>
              <span>{url.longURL}</span>
            </div>
          )
          }

          <label for="name">Short URL:</label>
          <input id="name" value={this.state._id}
          onChange={(e) => this.onChange('_id', e)}></input>

          <label for="name">Long URL:</label>
          <input id="name" value={this.state.longURL}
          onChange={(e) => this.onChange('longURL', e)}></input>
          <button onClick={() => this.onSubmit()}>Submit</button>
        </div>
      </div>
    )
  }
}