import React, { Component } from 'react';
import { Tabs } from './Router';
import { Provider } from 'react-redux';
import { store } from '../store';

export default class SourceComponent extends Component {
  render() {
    return(
      <Provider store = { store }>
        <Tabs />
      </Provider>
    )
  }
}
