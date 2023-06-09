import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../constants/colors'
import styles from './styles'
import StackProductsNav from '../../navigation/stackProductsNav/StackProductsNav'
import FavoriteScreen from '../../screens/tabFavoriteScreen/FavoriteScreen'
import OrdersScreen from '../../screens/tabOrdersScreen/OrdersScreen'
import StackUserNav from '../stackUserNav/StackUserNav'
import StackCartNavigation from '../stackCartNavigation/StackCartNavigation'
import { useSelector } from 'react-redux';


const buttomTab = createBottomTabNavigator()

const ButtomTabNav = () => {

    const cartItems = useSelector(state=>state.cart.quantity)
    console.log(cartItems)

    return (
        <buttomTab.Navigator
        screenOptions={{
            initialRouteName:'Home',
            tabBarShowLabel:false,
            tabBarStyle:styles.tabBar,
            headerStyle:{
                backgroundColor:colors.tertiaryColor,
            },
            headerTinColor:colors.primaryColor,
            headerTitleStyle:{
                fontWeight:'bold'
            },
            headerShown:true,
            headerTitleContainerStyle:{width:'50%'},
            headerRightContainerStyle:{flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            paddingBottom:10,
            width:'50%'}
        }}
        >
            <buttomTab.Screen 
            name='HomeTabNav' 
            component={StackProductsNav} 
            options={{
                title:'Artesanias O&E',
                tabBarIcon:({focused})=>{
                let iconName = focused ? "home" : "home-outline"
                return(
                    <View>
                        <Ionicons 
                        name={iconName} 
                        size={30} 
                        color={colors.primaryColor} 
                        />
                    </View>
                )
            }}}/>
            <buttomTab.Screen 
            name='FavoriteTabNav' 
            component={FavoriteScreen}
            options={
                {
                title:'Mis Favoritos',    
                tabBarIcon:({focused})=>{
                let iconName = focused ?"heart" : "heart-o"
            return(
                    <View>
                        <FontAwesome 
                        name={iconName} 
                        size={30} 
                        color={colors.primaryColor} 
                        />
                    </View>
                )
            }}}
            />
            <buttomTab.Screen
            name='CartTabNav' 
            component={StackCartNavigation}
            options={
                {
                title:'Mi Carrito',
                tabBarBadge:`${cartItems}`,     
                tabBarIcon:({focused})=>{
                let iconName = focused ? "cart":"cart-outline"
            return(
                    <View>
                        <Ionicons 
                        name={iconName} 
                        size={30} 
                        color={colors.primaryColor} 
                        />
                    </View>
                )
            }}}
            />
            <buttomTab.Screen 
            name='OrdersTabNav' 
            component={OrdersScreen}
            options={
                {
                title:'Mis Compras', 
                tabBarIcon:({focused})=>{
                let iconName = focused ? "shopping":"shopping-outline"
            return(
                    <View>
                        <MaterialCommunityIcons 
                        name={iconName} 
                        size={30} 
                        color={colors.primaryColor}
                        />
                    </View>
                )
            }}}
            />
                        <buttomTab.Screen 
            name='UserTabNav' 
            component={StackUserNav}
            options={
                {
                title:'Mis Datos',    
                tabBarIcon:({focused})=>{
                let iconName = focused ?"user" : "user-o"
            return(
                    <View>
                        <FontAwesome 
                        name={iconName} 
                        size={30} 
                        color={colors.primaryColor} 
                        />
                    </View>
                )
            }}}
            />
        </buttomTab.Navigator>
    )
}

export default ButtomTabNav