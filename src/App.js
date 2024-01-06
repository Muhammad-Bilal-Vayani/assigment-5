import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Header} from './component/Header/Header';
import HeroSection from './component/HeroSection/HeroSection';
import PremiumHome from "./component/PremiumHome/PremiumHome";
import BestSell from './component/BestSell/BestSell';
 import ProductArray from './component/BestSell/ProductArray';
import WinterDiscount from './component/WinterDiscount/WinterDiscount';
import AllProductArray from './component/AllProduct/AllProductArray';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <>
      <Header/>
      {
        data ? <div>
        <HeroSection/>
        <PremiumHome />
        <BestSell newFun={newFun} arrayProduct={ProductArray} title="Best Sell" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
        <WinterDiscount/>
        <BestSell arrayProduct={AllProductArray} title="All Products" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
  
        <Footer/> 
        </div>:
        <div className="productData">
        <h1>Title:{data.title} </h1>
        <h1>Price:{data.price}  </h1>
      </div>

      }


    </>
  )
}
export default App
