import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { tabDataService } from '../../Controllers/tabDataController'
import ImageSrc from '../ImageCcomp/ImageSrc'
import './tabCompStyles.css'

const TabComp = (props) => {
 
    
  const [categories, setCategories] = React.useState([])
  const [categoryId, setCategoryId] = React.useState(185)

  useEffect(() => {
        tabDataService()
        .then(data => {
            const resp = data.data.category_list
            setCategories(resp)
        })
        .catch(err => console.log(err))
  },[])

  const handleClick = (newValue) => {
      
      setCategoryId(newValue)
  }
  

  return (
    <div className="Tab_Component">
      <AppBar position="static" color="default">
        <Tabs
         className="appbar"
         variant="scrollable"
          scrollButtons="auto">
        <div className="tabContainer">
        {categories.map(item => (
            <span onClick={() => handleClick(item.category_id)} key={item.category_id} className="tabLayout">
                <Tab icon={<ImageSrc img={item.category_image}/>}/>
                <span className="centered">{item.category_name}</span>
            </span>
        ))}
        </div>
        </Tabs>
      </AppBar>
      
    </div>
  );
}

export default TabComp;


