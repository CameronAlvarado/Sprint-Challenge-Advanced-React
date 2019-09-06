import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import PlayerCard from './components/PlayerCard';
import PlayerList from './components/PlayerList';

test("App renders without crashing", () => {
  render(<App />);
});

test('should have text Marta', async ()=>{
  const {findByText} = await render(<App />);
  findByText(/marta/i)
});