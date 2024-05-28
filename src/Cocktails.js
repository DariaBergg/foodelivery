import React, { useState } from 'react';
import './App.css';
import OldFashionedImg from './img/old-fashioned.jpeg';
import FoxRainBoxImg from './img/fox-rainbow.jpeg'
import CloudNineDreamImg from './img/Cloud-nine-dream.jpeg'
import CreamsicleSourImg from './img/Creamsicle-sour.jpeg'
import BittersweetSymphonyImg from './img/ Bittersweet-symphony.jpeg';
import { useCart } from './CartContext';
import { useSearch } from './SearchContext';


const CocktailItems = ({ items, onAddToCart }) => {

    return (
      <div className='cocktail-menu'>
        {items.map((item, index) => (
          <div key={index} className="cocktail-item">
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

const Cocktails = () => {
    const { searchText } = useSearch();
    console.log("searchText:", searchText);
    const initialItems = [
      { name: 'Old Fashioned cocktail', description: 'The Old Fashioned is a timeless cocktail that features a rich amber color from its whiskey base', price: 205, image: OldFashionedImg },
      { name: 'Fox Rainbow cocktail', description: 'The Fox River cocktail is a visually stunning drink that features a mesmerizing gradient of deep blue at the bottom.', price: 210, image: FoxRainBoxImg },
      { name: 'Cloud Nine Dream cocktail', description: 'A sweet, whimsical creation that looks as magical as it tastes, perfect for special occasions.', price: 210, image: CloudNineDreamImg },
      { name: 'Creamsicle sour cocktail', description: 'The Creamsicle Sour is a delightful blend of tangy and creamy flavors.', price: 180, image: CreamsicleSourImg },
      { name: 'Bittersweet Symphony cocktail', description: 'This Bittersweet Symphony cocktail offers a delightful interplay of sweet and bitter flavors.', price: 275, image: BittersweetSymphonyImg }
    ];
  
    const [cocktailItems] = useState(initialItems);
    // const [searchText, setSearchText] = useState('');
    const {onAddToCart} = useCart();
    
    const filteredItems = cocktailItems.filter(item => item.name.toLowerCase().includes(searchText));

    return (
      <div>
        <CocktailItems items={cocktailItems} onAddToCart={onAddToCart}/>
      </div>
    );
  };
  
  export default Cocktails;