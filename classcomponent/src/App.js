import React from 'react';
import ShopItemClass from './components/ShopItemClass';
import './style/App.css';
import Item from './components/Item';

function App() {
  const item = new Item('Tiger of Sweden', 'Leonard coat', 'Minimalistic coat in cotton-blend', 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.', 399, '£')

  return (
    <div className="window">
      <ShopItemClass item={item} />
    </div>
  );
}

export default App;
