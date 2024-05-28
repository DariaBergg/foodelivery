import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import PlainBagelImg from './img/plain-bagel.jpeg';
import EggBagelImg from './img/egg-bagel.jpeg'
import SourdoughBagelImg from './img/sourdough-bagel.jpeg'
import BluberryBagelImg from './img/blueberry-bagel.jpeg'
import PumpernickelBagelImg from './img/pumpernickel-bagel.jpeg';
import { useCart } from './CartContext';
import { useSearch } from './SearchContext';


const BakeryItems = ({ items, onAddToCart}) => {
  const { getQuantityInCart } = useCart();
    return (
      <div className='bagel-menu'>
        {items.map((item, index) => (
          <div key={index} className="bagel-item">
            <img src={item.image} alt={item.name} />
            <div className='item-description'>
            <div className='name-and-add-button'>
            <h2>{item.name}</h2>
           <button onClick={()=> onAddToCart(item)}> + </button> 
            </div>
            <div className='description-and-price'>
            <p className='description'>{item.description}</p>
            <p className='price'>Price: {item.price} Kč</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    );
  };

const Bakery = () => {
  const { searchText } = useSearch();
    const initialItems = [
      { name: 'Plain bagel', description: 'The plain bagel does not include any additional toppings besides an egg.', price: 65, image: PlainBagelImg },
      { name: 'Egg bagel', description: 'This humble ingredient can actually elevate the flavor.', price: 70, image: EggBagelImg },
      { name: 'Sourdough bagel', description: 'Sourdough bagels have a much more distinct flavor.', price: 65, image: SourdoughBagelImg },
      { name: 'Blueberry bagel', description: 'Blueberry-flavored bagels are less-savory bagels', price: 80, image: BluberryBagelImg },
      { name: 'Pumpernickel bagel', description: 'Pumpernickel is a type of flour made from the entire rye grain.', price: 75, image: PumpernickelBagelImg }
    ];
  
    const [bakeryItems] = useState(initialItems);
    // const [searchText, setSearchText] = useState('');
    const {onAddToCart} = useCart();
    
  
    // const handleSearchInputChange = (event) => {
    //   setSearchText(event.target.value.toLowerCase());
    // };
  
    // const clearSearch = () => {
    //   setSearchText('');
    // };
  
    const filteredItems = bakeryItems.filter(item => item.name.toLowerCase().includes(searchText));
    return (
      <div>
        {/* <div className='search'>
        <input  type="text" placeholder="Search..." value={searchText} onChange={handleSearchInputChange} />
        <button onClick={clearSearch}> x </button>
        </div> */}
        {/* <BakeryItems items={bakeryItems}  onAddToCart={onAddToCart}/> */}
      
      <BakeryItems items={bakeryItems}  onAddToCart={onAddToCart}/>
    
       </div>
    );
  };
  
  export default Bakery;