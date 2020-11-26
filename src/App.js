import React from 'react'

import './App.css';
import TabComp from './Components/TabsComp/TabComp'
import ProdComp from './Components/ProductsComp/ProdComp'

function App() {

  const [categoryId, setCategoryId] = React.useState(185)

  const handleCategoryId = (newValue) => {
   
      setCategoryId(newValue)
  }

  return (
    <div className="App">
        <label className="products">Our Products</label>
        <div>
          <TabComp onChange={handleCategoryId} />
          <ProdComp category={categoryId}/>
        </div>
    </div>
  );
}

export default App;
