import { Link } from "react-router-dom"

const Header = () =>{
    return(
        <header>
            <h2>LapTopShopUA</h2>
            <nav>
                <Link to="/"><div>Home</div></Link>
                <Link to="/catalogue"><div>Catalogue</div></Link>
                <Link to="/cart"><div>Cart</div></Link>
            </nav>
        </header>
    )
}

export default Header