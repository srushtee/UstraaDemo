import React from 'react'
import  {productDataService}  from '../../Controllers/productDataController'
import UnitProductComp from '../UnitProductComp/UnitProductComp'
import './prodCompStyles.css'

const ProdComp = () => {

    const [products, setProducts] = React.useState([])
    
    const [category_id, setCategory_id] = React.useState(185)

    React.useEffect(() => {
        productDataService(category_id)
        .then(data => (
           
            setProducts(data.data.products)
        ))
        .catch(err => console.log(err))
    },[category_id])

    return (
        <div className="product_layout">
            {products.map(item => (
               <UnitProductComp key={item.id} props={item}/>
            ))}
        </div>
    )
}

export default ProdComp
