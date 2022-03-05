import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

import ThemeManager from 'Themes';
import { AppNavigator } from 'Navigation';

const App = ({ params }) => {
    const [assetsLoaded, setAssetsLoaded] = useState(false);

    /* Loading custom fonts in async */

    useEffect(() => {
        setTimeout(() => {
            setAssetsLoaded(true)
        }, 1500)
    });

    return assetsLoaded ? (
        <ThemeManager>
            <AppNavigator />
        </ThemeManager>
    ) : (
        <ThemeManager >
            <ActivityIndicator size='large'></ActivityIndicator>
        </ThemeManager>
    );
};

export default App;
