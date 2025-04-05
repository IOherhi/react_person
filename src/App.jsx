import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

export const App = () => (
  <div className="App">
    <Person
      age={misha.age}
      sex={misha.sex}
      name={misha.name}
      isMarried={misha.isMarried}
      partnerName={misha.partnerName}
    />

    <Person
      age={olya.age}
      sex={olya.sex}
      name={olya.name}
      isMarried={olya.isMarried}
      partnerName={olya.partnerName}
    />

    <Person
      age={alex.age}
      sex={alex.sex}
      name={alex.name}
      isMarried={alex.isMarried}
      partnerName={alex.partnerName}
    />
  </div>
);
