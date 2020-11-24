import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { tabDataService } from '../../Controllers/tabDataController'
import ImageSrc from './ImageSrc'
import './tabCompStyles.css'


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
   
  },
}));



const TabComp = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [categories, setCategories] = React.useState([])

  useEffect(() => {
        tabDataService()
        .then(data => {
            const resp = data.data.category_list
            setCategories(resp)
        })
        .catch(err => console.log(err))
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        <div class="tabContainer">
        {categories.map(item => (<span class="tab"><Tab key={item.category_id} label={item.category_name} icon={<ImageSrc img={item.category_image}/>}/></span>))}
        </div>
        
          
         
        </Tabs>
      </AppBar>
      
    </div>
  );
}

export default TabComp;


