import React, {useState} from 'react';
import './App.css';
import misterBaconImg from './img/misterBacon.png';
import misterCheeseImg from './img/mistercheese.png'
import misterChickenImg from './img/misterChicken.png'
import misterSuperBaconImg from './img/misterSuperBacon.png'
import misterVeganImg from './img/mistervegan.png';
import { useCart } from './CartContext';
import { useSearch } from './SearchContext';


const BurgersItems = ({ items, onAddToCart}) => {
    return (
      <div className='burger-menu'>
        {items.map((item, index) => (
          <div key={index} className="burger-item">
            <img src={item.image} alt={item.name} className={getImageClass(item.name)}/>
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

  const getImageClass = (name) => {
    switch (name) {
      case 'Mister Chicken':
        return 'mister-chicken-image';
      default:
        return 'default-dessert-image';
    }
  };

const Burgers = () => {
  const { searchText } = useSearch();
    const initialItems = [
      { name: 'Mister Bacon Burger', description: 'Mouthwatering Bacon burger with beef meat', price: 165, image: misterBaconImg },
      { name: 'Mister Cheese Burger', description: 'Mouthwatering Сheese burger with beef meat', price: 170, image: misterCheeseImg },
      { name: 'Mister Chicken Burger', description: 'Mouthwatering burger with chicken meat', price: 165, image: misterChickenImg },
      { name: 'Mister Superbacon Burger', description: 'Mouthwatering Bacon burger with extra bacon and beef meat', price: 180, image: misterSuperBaconImg },
      { name: 'Mister Vegan Burger', description: 'Mouthwatering Vegan burger without meat', price: 175, image: misterVeganImg }
    ];
  
    const [burgersItems] = useState(initialItems);
    const {onAddToCart} = useCart();
    

    return (
      <div>
        <BurgersItems items={burgersItems}  onAddToCart={onAddToCart}/>
      </div>
    );
  };
  
  export default Burgers;