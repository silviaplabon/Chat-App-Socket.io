// import { StackActions, NavigationActions, DrawerActions } from 'react-navigation';
import { CommonActions } from '@react-navigation/native';

let navigator;

const setTopLevelNavigator = (navigatorRef) => {
    navigator = navigatorRef;
}
const navigate = (routeName) => {
    navigator.dispatch(
        CommonActions.navigate({
            name: routeName,
        })
    );
}

const goBack = () => {
    navigator.dispatch(
        CommonActions.goBack()
    );
}


const replace = (routeName) => {
    navigator.dispatch(
        CommonActions.reset({
            index: 1,
            routes: [
                { name: routeName },
            ],
        })
    );

}


export default { navigate, goBack, setTopLevelNavigator, replace };