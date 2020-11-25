import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { tabDataService } from '../../Controllers/tabDataController'
import ImageSrc from '../ImageCcomp/ImageSrc'
import './tabCompStyles.css'

const TabComp = () => {
 
 
  const [categories, setCategories] = React.useState([])

  useEffect(() => {
        tabDataService()
        .then(data => {
            const resp = data.data.category_list
            setCategories(resp)
        })
        .catch(err => console.log(err))
  },[])

  return (
    <div className="Tab_Component">
      <AppBar position="static" color="default">
        <Tabs
         className="appbar"
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        <div class="tabContainer">
        {categories.map(item => (
            <span className="tabLayout">
                <Tab  key={item.category_id} icon={<ImageSrc img={item.category_image}/>}/>
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


