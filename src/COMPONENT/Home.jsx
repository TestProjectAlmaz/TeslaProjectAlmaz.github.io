import Banner from "./banner/Banner"
import Text from "./textSection/Text"
import Products from "./products/Products"
import TestSlider from "./TestSlider"

const Home = (props) => {
    return (
        <>
        
  <TestSlider />      
      <Banner />        
         <Products
          items = {props.items} 
          cartItems = {props.cartItems}
          setCartItems = {props.setCartItems}
          setSearch = {props.setSearch}
          search = {props.search}
          favoritesItems = {props.favoritesItems}
          setFavoritesItems = {props.setFavoritesItems}
          loading = {props.loading}
       />
              <Text />     
       </>
    )
}

export default Home