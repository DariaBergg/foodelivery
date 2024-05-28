import React, {useState, useEffect} from "react";
import { useCart } from "./CartContext";
import LogoImg from './img/logo-foodelivery.jpeg';
import autoComplete from "@tarekraafat/autocomplete.js";

//search function
const API_KEY = 'l8ht95GXniHSCgOjfAhYYBHHekQDPZ_FvhCHehhDBB4';



function Registration () {
    //for modal to open 
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { getTotalCost, clearCart} = useCart();

   
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: ''
    });

//for search
useEffect(() => {
    const inputElem = document.querySelector("#autoComplete");
    const autoCompleteJS = new autoComplete({
        selector: () => inputElem,
        placeHolder: "Enter your address...",
        searchEngine: (query, record) => `<mark>${record}</mark>`,
        data: {
            keys: ["value"],
            src: async (query) => {
                try {
                    const fetchData = await fetch(`https://api.mapy.cz/v1/suggest?lang=cs&limit=5&type=regional.address&apikey=${API_KEY}&query=${query}`);
                    const jsonData = await fetchData.json();
                    return jsonData.items.map(item => ({
                        value: item.name,
                        data: item,
                    }));
                } catch (exc) {
                    console.log(exc);
                    return [];
                }
            },
            cache: false,
        },
        resultItem: {
            element: (item, data) => {
                const itemData = data.value.data;
                const desc = document.createElement("div");
                desc.style = "overflow: hidden; white-space: nowrap; text-overflow: ellipsis;";
                
                item.style.padding = "10px";
                item.style.borderBottom = "1px solid #ccc";
                item.style.cursor = "pointer";

                desc.innerHTML = `${itemData.label}, ${itemData.location}`;
                item.append(desc);
            },
            highlight: true
        },
        resultsList: {
            element: (list, data) => {
                const resultsContainer = document.createElement("div");
                resultsContainer.className= "autocomplete-results-container";

                resultsContainer.style.position = 'absolute';
                resultsContainer.style.top = `${inputElem.offsetTop + inputElem.offsetHeight}px`;
                resultsContainer.style.left = `${inputElem.offsetLeft}px`;
                resultsContainer.style.background = "orange";
    

                resultsContainer.appendChild(list);
                document.body.appendChild(resultsContainer);
            },
            noResults: true
        }
    });

    inputElem.addEventListener("selection", event => {
        const origData = event.detail.selection.value.data;
        console.log(origData);
        inputElem.value = origData.name;
    });

    return () => {
        autoCompleteJS.unInit();
    };
}, []);

const closeModal = () => {
    setModalIsOpen(false);
    document.getElementById("myForm").reset(); 
    clearCart();
}

const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const form = e.target;
    if (form.checkValidity()) {
        setModalIsOpen(true); // Open the modal if the form is valid
    } else {
        form.reportValidity(); // Show browser's native validation messages
    }
};


    return (
        <div className="registration-form">
            <div className="form">
                <h1>Almost done!</h1>
                <h4>Please fill in the form below.</h4>
        <form onSubmit={handleSubmit} id='myForm'>
            <label htmlFor="first-name">First name</label>
            <br />
            <input type="text" name='first-name'  required></input>
            <br />
            <label htmlFor="last-name">Last name</label>
            <br />
            <input type="text" name='last-name' ></input>
            <br />
            <label htmlFor="number">Number</label>
            <br />
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{3}" required />
            <br />
            <label htmlFor="Address">Address</label>
            <br />
            <input id="autoComplete" type="text"  required />
            <br />
            <button className="proceed-button" type="submit" >Proceed to order {getTotalCost()} Kč</button>
        </form>
        </div>

            {modalIsOpen && (
                <div className="modal" id="modal">
                    <div className="modal-header">
                        <button onClick={closeModal} className="close-modal-button">&times;</button>
                    </div>
                    <div className="modal-body">Your order is completed!</div>
                </div>
            )}

        {modalIsOpen && <div id="overlay"></div>}
         <div className="logoImg">
        <img src={LogoImg} alt ='logo-img' />
        </div>
        </div>
    )
}

export default Registration;

//API key mapy.cz
//l8ht95GXniHSCgOjfAhYYBHHekQDPZ_FvhCHehhDBB4