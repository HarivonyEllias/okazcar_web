import React from 'react';
import '../assets/css/nicelist.css';
import Annonce from './Annonce';

const NiceList = ({title}) => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div className="nice-list-container">
      <h2>{title}</h2>
      <ul className="nice-list">
        {items.map((item, index) => (
          <li key={index} className="nice-list-item">
            <Annonce owner={"Jean Charles"}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NiceList;
