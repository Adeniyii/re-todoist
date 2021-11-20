import React from 'react';
import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';
import './App.scss';

export const App = () => (
  <div className="App">
    <Header />
    <Content />
  </div>
);
