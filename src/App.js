import React from 'react';
import NavBar from './NavBar';
import { orginals, action, comedy, horror, romance } from './urls';
import Banner from './Banner';
import Rowpost from './Rowpost';
import './style.css';

export default function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Rowpost url={orginals} title="Netflix orginals" />
      <Rowpost url={action} title="Action" issmall />
      <Rowpost url={comedy} title="Comedy Movies" issmall />
      <Rowpost url={horror} title="Comedy Movies" issmall />
      <Rowpost url={romance} title="Romance Movies" issmall />
    </div>
  );
}
