import '../style.css'
import tuf15 from "../images/tuf15.png"
import asp5 from "../images/asp5.png"
import flex5i from "../images/flex5i.png"
import victus from "../images/victus.png"
import dash15 from "../images/dash15.png"
import nitro5 from "../images/nitro5.png"
import gv15 from "../images/gv15.png"
import gl66 from "../images/gl66.png"
import triton500 from "../images/triton500.png"
import scar15 from "../images/scar15.png"
import m16 from "../images/m16.png"
import swiftx from "../images/swiftx.png"
import produo from "../images/produo.png"
import hp17 from "../images/hp17.png"
import pavilion15 from "../images/pavilion15.png"
import hp15 from "../images/hp15.png"
import { useEffect } from 'react'

const Catalogue = (props) =>{
    useEffect(() => {
        document.title = props.title
    })
    return(
        <div>
            <div className="catalogue-container">
                <h1>Catalogue</h1>
                <section>
                    <div className="product-card">
                        <img src={tuf15} alt="ASUS TUF F15"></img>
                        <h4><span className='new-item'>NEW </span>ASUS TUF Gaming F15 15,6"</h4>
                        <p>Intel Core i5-10300H, GeForce GTX 1650, 8GB DDR4, 512GB SSD, Wi-Fi 6, Windows 11</p>
                        <p>$679.00</p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelectorAll('p')[ev.target.parentElement.querySelectorAll('p').length - 1],
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={asp5} alt="Acer Aspire 5"></img>
                        <h4>Acer Aspire 5 A515 15.6"</h4>
                        <p>Ryzen 3 3350U, 4GB DDR4, 128GB SSD, Wi-Fi 6, Windows 11</p>
                        <p>$369.99</p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelectorAll('p')[ev.target.parentElement.querySelectorAll('p').length - 1],
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={flex5i} alt="Ideapad Flex 5i"></img>
                        <h4>Lenovo IdeaPad Flex 5i 2022 13.3"</h4>
                        <p>Intel Core i3 11th Gen, 8GB RAM, 256GB SSD, ChromeOS</p>
                        <p>$429.99</p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelectorAll('p')[ev.target.parentElement.querySelectorAll('p').length - 1],
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={victus} alt="Victus"></img>
                        <h4>HP Victus 15.6"</h4>
                        <p>AMD Ryzen 7 5800H, RTX 3050 Ti, 16 GB DDR4, 512GB SSD, 144Hz FHD IPS, Wi-Fi 6, Windows 11</p>
                        <p><span className='prev-price'>$1099.99</span><span className='new-price'>$809.49</span></p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelector('[class="new-price"]'),
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={dash15} alt="ASUS TUF Dash F15"></img>
                        <h4>ASUS TUF Dash 15 2022 15.6"</h4>
                        <p>Intel Core i7-12650H, GeForce RTX 3060, 16GB DDR5, 512GB SSD, 144Hz FHD, Windows 11</p>
                        <p><span className='prev-price'>$1299.99</span><span className='new-price'>$1216.99</span></p>
                        <p className='low-stock'>Only 4 left. Buy now!</p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelector('[class="new-price"]'),
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={nitro5} alt="Acer Nitro 5"></img>
                        <h4>Acer Nitro 5</h4>
                        <p>Intel Core i7-11800H, RTX 3050 Ti, 8GB DDR4, 512GB SSD, WiFi 6, FHD 144Hz IPS</p>
                        <p><span className='prev-price'>$929.99</span><span className='new-price'>$848.88</span></p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelector('[class="new-price"]'),
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={gv15} alt="MSI GV15"></img>
                        <h4>MSI GV15 15.6"</h4>
                        <p>Intel Core i5-11400H, GTX 1650 8GB, 8GB DDR4, 256GB SSD, 144Hz FHD, Windows 11</p>
                        <p>$724.99</p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelectorAll('p')[ev.target.parentElement.querySelectorAll('p').length - 1],
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={gl66} alt="MSI Pulse GL66"></img>
                        <h4>MSI Pulse GL66</h4>
                        <p>Intel Core i7-12700H, RTX 3070, 16GB DDR4, 512GB SSD, 144Hz FHD, Windows 11</p>
                        <p>$1559.99</p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelectorAll('p')[ev.target.parentElement.querySelectorAll('p').length - 1],
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={triton500} alt="Acer Predator Triton"></img>
                        <h4>Acer Predator Triton 500 SE 16"</h4>
                        <p>Intel Core i9-12900H , RTX 3080 Ti, 32GB LPDDR5, 1TB SSD, Wi-Fi 6E, WQXGA 240Hz</p>
                        <p>$3000.00</p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelectorAll('p')[ev.target.parentElement.querySelectorAll('p').length - 1],
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={scar15} alt="ASUS ROG Strix Scar 15"></img>
                        <h4>ASUS ROG Strix Scar 15 15.6”</h4>
                        <p>Intel Core i9 12900H, RTX 3070 Ti, 16GB DDR5, 1TB SSD, 300Hz IPS FHD, Windows 11</p>
                        <p>$2699.00</p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelectorAll('p')[ev.target.parentElement.querySelectorAll('p').length - 1],
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={m16} alt="MSI Creator M16"></img>
                        <h4>MSI Creator M16 16"</h4>
                        <p>Intel Core i7-12650H, RTX 3060, 32GB DDR4, 1TB SSD, QHD+ 16:10 60Hz, Windows 11</p>
                        <p>$1749.99</p>
                        <p className='low-stock'>Only 1 left. Buy now!</p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelectorAll('p')[ev.target.parentElement.querySelectorAll('p').length - 1],
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={swiftx} alt="Acer Swift X"></img>
                        <h4>Acer Swift X SFX14-42G-R607 14"</h4>
                        <p>AMD Ryzen 7 5825U, RTX 3050 Ti, 16GB LPDDR4X, 512GB SSD, Wi-Fi 6, Windows 11</p>
                        <p><span className='prev-price'>$1099.99</span><span className='new-price'>$926.99</span></p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelector('[class="new-price"]'),
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={produo} alt="ASUS ZenBook Pro Duo 15"></img>
                        <h4>ASUS ZenBook Pro Duo 15</h4>
                        <p>Intel Core i7-12700H, RTX 3060, 16GB DDR4, 1TB SSD, OLED 4K Touch Display, Windows 11</p>
                        <p>$2999.99</p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelectorAll('p')[ev.target.parentElement.querySelectorAll('p').length - 1],
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={hp17} alt="HP Laptop 17"></img>
                        <h4>HP Laptop 17 17.3"</h4>
                        <p>Ryzen 5 5500U, 8GB DDR4, 512GB SSD, Windows 11</p>
                        <p><span className='prev-price'>$850.99</span><span className='unavailable'>Unavailable</span></p>
                        <button type='button' className='button-locked' disabled>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={pavilion15} alt="HP Pavilion 15"></img>
                        <h4>HP Pavilion 15</h4>
                        <p>Intel Core i7-1255U, 16GB DDR4, 512GB SSD, Windows 11</p>
                        <p>$1099.00</p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelectorAll('p')[ev.target.parentElement.querySelectorAll('p').length - 1],
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                    <div className="product-card">
                        <img src={hp15} alt="HP 15"></img>
                        <h4>HP 15 15.6"</h4>
                        <p>Intel Core i7-1165G7, 16GB DDR4, 1TB SSD, Touchscreen, Windows 10</p>
                        <p>$930.45</p>
                        <button type='button' onClick={(ev) => {props.setItemArray([...props.itemArray, 
                            {name: ev.target.parentElement.querySelector('h4').innerHTML, 
                            price: ev.target.parentElement.querySelectorAll('p')[ev.target.parentElement.querySelectorAll('p').length - 1],
                            image: ev.target.parentElement.querySelector('img').src}])
                            console.log(props.itemArray)
                            }}>Add to cart</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Catalogue