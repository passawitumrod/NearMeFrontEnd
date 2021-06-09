//This file is to demonstrate getting a created component to show up in initial route, from chapter 2 video 2
//This file is also to demonstrate the navigation through buttons, from chapter 4
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";  //added this line from what we created
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen"
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import ApiTest from "./src/screens/ApiTest";
import SqaureScreen2 from "./src/screens/SquareScreen2";

//Below are screens that utilized better template styling
import NicerHomeScreen from "./src/screens/NicerHomeScreen";
import CartScreen from "./src/screens/CartScreen";
import OnBoardScreen from "./src/screens/OnBoardScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,                       //name that we want, then colon, then first function from that file we import from, then comma
    Components: ComponentsScreen,           
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Api: ApiTest,
    Square2: SqaureScreen2,
    NicerHome: NicerHomeScreen,
    Cart:CartScreen,
    OnBoard: OnBoardScreen,
    Details:DetailsScreen,
  },
  {
    initialRouteName: "Home",               //changed from default which is home
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
