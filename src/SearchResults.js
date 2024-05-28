import React, { useState, useEffect } from 'react';
import './App.css';
import OldFashionedImg from './img/old-fashioned.jpeg';
import FoxRainBoxImg from './img/fox-rainbow.jpeg'
import CloudNineDreamImg from './img/Cloud-nine-dream.jpeg'
import CreamsicleSourImg from './img/Creamsicle-sour.jpeg'
import BittersweetSymphonyImg from './img/ Bittersweet-symphony.jpeg';
import { useCart } from './CartContext';
import { useSearch } from './SearchContext';
import PlainBagelImg from './img/plain-bagel.jpeg';
import EggBagelImg from './img/egg-bagel.jpeg'
import SourdoughBagelImg from './img/sourdough-bagel.jpeg'
import BluberryBagelImg from './img/blueberry-bagel.jpeg'
import PumpernickelBagelImg from './img/pumpernickel-bagel.jpeg';
import misterBaconImg from './img/misterBacon.png';
import misterCheeseImg from './img/mistercheese.png'
import misterChickenImg from './img/misterChicken.png'
import misterSuperBaconImg from './img/misterSuperBacon.png'
import misterVeganImg from './img/mistervegan.png';
import PanaCotaImg from './img/pana-cota.jpeg';
import PastelDeNataImg from './img/pastel-de-nata.jpeg'
import PistachioIceCreamIng from './img/pistacio-icecream.jpeg'
import TiramisuImg from './img/tiramisu.jpeg'
import CremeBruleImg from './img/creme-brule.jpeg';

const ProductsItems = ({ items, onAddToCart }) => {
    return (
      <div className='product-menu'>
        {items.map((item, index) => (
          <div key={index} className="product-item">
            <img src={item.image} alt={item.name} />
            <div className='item-description'>
            <div className='name-and-add-button'>
            <h2>{item.name}</h2>
            <button onClick={()=> onAddToCart(item)}> + </button>
            </div>
            <p>{item.description}</p>
            <p>Price: {item.price} Kč</p>
          </div>
          </div>
        ))}
      </div>
    );
  };

const Products = () => {
    const { searchText } = useSearch();
    // console.log("searchText:", searchText);
    const initialItems = [
      { name: 'Old Fashioned cocktail', description: 'The Old Fashioned is a timeless cocktail that features a rich amber color from its whiskey base', price: 205, image: OldFashionedImg },
      { name: 'Fox Rainbow cocktail', description: 'The Fox River cocktail is a visually stunning drink that features a mesmerizing gradient of deep blue at the bottom.', price: 210, image: FoxRainBoxImg },
      { name: 'Cloud Nine Dream cocktail', description: 'A sweet, whimsical creation that looks as magical as it tastes, perfect for special occasions.', price: 210, image: CloudNineDreamImg },
      { name: 'Creamsicle sour cocktail', description: 'The Creamsicle Sour is a delightful blend of tangy and creamy flavors.', price: 180, image: CreamsicleSourImg },
      { name: 'Bittersweet Symphony cocktail', description: 'This Bittersweet Symphony cocktail offers a delightful interplay of sweet and bitter flavors.', price: 275, image: BittersweetSymphonyImg },
      { name: 'Plain bagel', description: 'the plain bagel does not include any additional toppings besides an egg or starch-wash for color.', price: 65, image: PlainBagelImg },
      { name: 'Egg bagel', description: 'this humble ingredient can actually elevate the flavor, texture, and color of a plain bagel', price: 70, image: EggBagelImg },
      { name: 'Sourdough bagel', description: 'Sourdough bagels have a much more distinct flavor than other bagels due to the use of a naturally-leavened culture of yeast and bacteria.', price: 65, image: SourdoughBagelImg },
      { name: 'Blueberry bagel', description: 'Blueberry-flavored bagels are less-savory bagels with pockets of tangy, sweet blueberries baked inside. ', price: 80, image: BluberryBagelImg },
      { name: 'Pumpernickel bagel', description: 'Pumpernickel is a type of flour made from the entire rye grain; the grain is usually made into sliced rye bread. Rye grain naturally has very low gluten content compared to other types of flour', price: 75, image: PumpernickelBagelImg },
      { name: 'Mister Bacon Burger', description: 'Mouthwatering Bacon burger with beef meat', price: 165, image: misterBaconImg },
      { name: 'Mister Cheese Burger', description: 'Mouthwatering Сheese burger with beef meat', price: 170, image: misterCheeseImg },
      { name: 'Mister Chicken Burger', description: 'Mouthwatering burger with chicken meat', price: 165, image: misterChickenImg },
      { name: 'Mister Superbacon Burger', description: 'Mouthwatering Bacon burger with extra bacon and beef meat', price: 180, image: misterSuperBaconImg },
      { name: 'Mister Vegan Burger', description: 'Mouthwatering Vegan burger without meat', price: 175, image: misterVeganImg},
      { name: 'Panna Cotta', description: 'An Italian dessert of sweetened cream thickened with gelatin and molded', price: 105, image: PanaCotaImg },
      { name: 'Pistachio ice cream', description: 'An ice cream flavor made with pistachio nuts', price: 70, image: PistachioIceCreamIng },
      { name: 'Tiramisu', description: 'An Italian dessert made of savoiardi dipped in coffee, layered with a whipped mixture of eggs, sugar and mascarpone', price: 105, image: TiramisuImg },
      { name: 'Pastel de Nata', description: 'A Portuguese egg custard tart pastry, optionally dusted with cinnamon', price: 80, image: PastelDeNataImg },
      { name: 'Crème Brûlée', description: 'a dessert consisting of a rich custard base topped with a layer of hardened caramelized sugar.', price: 75, image: CremeBruleImg }
    
    ];
  
    const [productItems] = useState(initialItems);
    const {onAddToCart} = useCart();
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
    const newFilteredItems = productItems.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
    // if (newFilteredItems.length > 0 ) {
    setFilteredItems(newFilteredItems);
    // }
  }, [searchText, productItems]);

    return (
      <div className='results-text'>
        {
        (searchText=== ''|| filteredItems.length === 0)  ? (
          <h2>Nothing has found</h2>
        ) : (
        <ProductsItems items={filteredItems} onAddToCart={onAddToCart}/>
        )}
      </div>
    );
  };
  
  export default Products;