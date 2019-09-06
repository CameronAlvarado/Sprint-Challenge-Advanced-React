import React from 'react';
import { render } from "@testing-library/react";
import App from "./App";
import PlayerCard from './components/PlayerCard';
import PlayerList from './components/PlayerList';
import Header from './components/Header.js'

test("App renders without crashing", () => {
  render(<App />);
});

test('should have text Marta', ()=>{
  const {getByText} = render(<Header />);
  getByText(/world cup/i);
});


