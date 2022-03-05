import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
import Home from '../../Screens';
import Homes from '../../Screens/Home';
import Profile from '../../Screens/Profile';

const Stacks = ({ params }) => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Homes"
                component={Homes}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default Stacks