import React from 'react';
import './App.scss';
import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';
import { ProjectProvider, SelectedProjectProvider } from './context';

export const App = () => (
  <SelectedProjectProvider>
    <ProjectProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ProjectProvider>
  </SelectedProjectProvider>
);
