
import {useFonts} from 'expo-font'
import { Provider } from 'react-redux';
import store from './src/store';
import IndexNavigation from './src/navigation' 
import { init } from './src/db';

init()
  .then(()=>console.log('base de datos concectada'))
  .catch((err)=>{
    console.log('fallo de conecccion con la base de datos')
    console.log(err.message)
  })

export default function App() {
  const [loaded] = useFonts({
    'josefinSans-regular':require('./src/assets/fonts/JosefinSans-Regular.ttf')
  })

  if(!loaded){
    return null
  }

  return (
    <Provider store={store}>
      <IndexNavigation/>
    </Provider>
  )

  }
