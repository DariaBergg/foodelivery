import React, {useState} from 'react';
import './App.css';
import PanaCotaImg from './img/pana-cota.jpeg';
import PastelDeNataImg from './img/pastel-de-nata.jpeg'
import PistachioIceCreamIng from './img/pistacio-icecream.jpeg'
import TiramisuImg from './img/tiramisu.jpeg'
import CremeBruleImg from './img/creme-brule.jpeg';
import { useCart } from './CartContext';
import { useSearch } from './SearchContext';


const DessertsItems = ({ items, onAddToCart}) => {
    return (
      <div className='desserts-menu'>
        {items.map((item, index) => (
          <div key={index} className="desserts-item">
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
      case 'Pistachio ice cream':
        return 'pistachio-ice-cream-image';
      case 'Tiramisu':
        return 'tiramisu-image';
      case 'Crème Brûlée':
        return 'creme-brulee-image';
      default:
        return 'default-dessert-image';
    }
  };

const Desserts = () => {
  const { searchText } = useSearch();
    const initialItems = [
      { name: 'Panna Cotta', description: 'An Italian dessert of sweetened cream thickened with gelatin and molded', price: 105, image: PanaCotaImg },
      { name: 'Pistachio ice cream', description: 'An ice cream flavor made with pistachio nuts', price: 70, image: PistachioIceCreamIng },
      { name: 'Tiramisu', description: 'An Italian dessert made of savoiardi dipped in coffee, layered with a whipped mixture of eggs, sugar and mascarpone', price: 105, image: TiramisuImg },
      { name: 'Pastel de Nata', description: 'A Portuguese egg custard tart pastry, optionally dusted with cinnamon', price: 80, image: PastelDeNataImg },
      { name: 'Crème Brûlée', description: 'a dessert consisting of a rich custard base topped with a layer of hardened caramelized sugar.', price: 75, image: CremeBruleImg }
    ];
  
    const [dessertsItems] = useState(initialItems);
    const {onAddToCart} = useCart();
    

    return (
      <div>
        <DessertsItems items={dessertsItems}  onAddToCart={onAddToCart}/>
      </div>
    );
  };
  
  export default Desserts;