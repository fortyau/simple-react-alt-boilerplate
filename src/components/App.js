import '../assets/stylesheets/base.scss';
import connectToStores from 'alt-utils/lib/connectToStores';
import React, { Component } from 'react';
import AppStore from '../stores/appStore';

import AppActions from '../actions/appActions'


// class AppView extends Component {
//   static getStores() {
//     return [AppStore];
//   }
//
//
//   static getPropsFromStores() {
//     return AppStore.getState();
//   }
//
//   // onChange(state) {
//   //   this.setState(state);
//   // }
//
//   componentDidMount() {
//     console.log(this.props);
//     console.log(this.state);
//     setTimeout(function(){
//       console.log('Setting a timer');
//       AppActions.updateTodo("Hello")
//
//     }, 2000);
//
//     // AppStore.listen(this.onChange);
//   }
//
//   render() {
//     // console.log(this.state.todos);
//     if(this.state && this.state.todos){
//       const todoCount = <strong>{this.state.todos.length} To Dos</strong>;
//     } else {
//       console.log('SERIOUSLY');
//       const todoCount = <strong>No Todos</strong>;
//     }
//     console.log('What the fuck');
//     // console.log(todoCount);
//
//     return(
//       <div>
//         <h1>Hello, {this.props.name}!</h1>
//         {/* {todoCount} */}
//       </div>
//     )
//   }
// }

const AppView = React.createClass({
  getInitialState() {
    return AppStore.getState();
  },

  componentDidMount() {
    AppStore.listen(this.onChange);

    setTimeout(function(){
      console.log('Setting a timer');
      AppActions.updateTodo("Hello")

    }, 2000);
  },

  componentWillUnmount() {
    AppStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    return(
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <strong>{this.state.todos.length}</strong>
      </div>
    )
  }
});

module.exports = AppView;
