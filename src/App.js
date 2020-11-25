import logo from './logo.svg';
import './App.css';
import TabComp from './Components/TabsComp/TabComp'

function App() {
  return (
    <div className="App">
        <label className="products">Our Products</label>
        <div>
          <TabComp />
        </div>
    </div>
  );
}

export default App;
