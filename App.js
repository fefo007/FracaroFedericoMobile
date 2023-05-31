
import { NavigationContainer } from '@react-navigation/native'
import {useFonts} from 'expo-font'
import ButtonTabNav from './src/navigation/buttomTabNav/ButtomTabNav'
import { Provider } from 'react-redux';
import store from './src/store';


export default function App() {
  const [loaded] = useFonts({
    'josefinSans-regular':require('./src/assets/fonts/JosefinSans-Regular.ttf')
  })

  if(!loaded){
    return null
  }

  return (
    // <Provider store={store}>
      <NavigationContainer >
        <ButtonTabNav/>
      </NavigationContainer>
    // {/* </Provider> */}
  )

  }
