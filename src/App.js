import logo from './logo.svg';
import './App.css';
import TabComp from './Components/TabsComp/TabComp'
import ProdComp from './Components/ProductsComp/ProdComp'

function App() {
  return (
    <div className="App">
        <label className="products">Our Products</label>
        <div>
          <TabComp />
          <ProdComp/>
        </div>
    </div>
  );
}

export default App;
