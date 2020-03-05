import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import FormConnect from '../components/FormConnect'
import SendPics from '../components/SendPics'

const SearchStackNavigator  = createStackNavigator({
        FormConnect: {
            screen: FormConnect,
            navigationOptions: {
                title: "Connect"
            }
         },
         SendPics: {
             screen: SendPics
         }

}) ;

export default createAppContainer(SearchStackNavigator)