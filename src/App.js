import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text.js'
import Link from './Link.js'
import Greeting from './Greeting.js'
import Header from './Header.js'
import {BrowserRouter, Route} from 'react-router-dom'
import About from './About.js'
import Home from './Home.js'
import News from './News.js'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

// const links = [
//   {url: "https://google.pl", text: "Google"},
//   {url: "https://wykop.pl", text: "Wykop"}
// ]

const links = [
  {url: "/", text: "Home"},
  {url: "/news", text: "News"},
  {url: "/about", text: "About"}
]

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    const name = 'Stars'
    return (
      // //---
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      // //---
      <MuiThemeProvider>
      <BrowserRouter>
        <div>
          {/* <header>
          <p><Link url="https://google.pl" text="Google"/></p>
          <p><Link url="https://wykop.pl" text="Wykop"/></p>
          </header> */}

          <RaisedButton
            label="Open Drawer"
            onClick={this.handleToggle}
          />
          <Drawer open={false}>
            <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
          </Drawer>

          <Header links={links}/>
          <Route path='/' exact component={Home}/>
          <Route path='/news' exact component={News}/>
          <Route path='/about' exact component={About}/>
          Hello world and {name}!
          <Text/>
          <Text title=' Second sentence'/>
          <p><Route path='/' component={Greeting}/></p>
          <Greeting name='Bob'/>
          <Greeting name='Mike' color='red'/>
        </div>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

// const Greeting = props => {
//   return (
//   <div>
//     {
//     props.color
//     ? `Hello my name is ${props.name} and my favourite color is ${props.color}`
//     : `Hello my name is ${props.name}`
//     }
//   </div>
//   )
// }

// const Link = props => {
//   return (
//     <a href={props.url}>{props.text}</a>
//   )
// }

// const Text = props => {
//   return (
//     <div>
//       Some info from text component!
//       {props.title}
//     </div>
//   );
// }

export default App;
