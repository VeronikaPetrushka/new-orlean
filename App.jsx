import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MusicProvider } from './src/constants/music';
import MusicPlayer from './src/components/MusicPlayer';

import HomeScreen from './src/screens/HomeScreen';
import PlacesScreen from './src/screens/PlacesScreen';
import DetailsScreen from './src/screens/DetailsScreen';

import WelcomeModal from './src/components/WelcomeModal';

enableScreens();

const Stack = createStackNavigator();

const App = () => {
    const [modalVisible, setModalVisible] = useState(true);

    const handleModalVisible = () => {
        setModalVisible(!modalVisible);
    };
  
    return (
        <MusicProvider>
            <MusicPlayer />
                <NavigationContainer>
                    <WelcomeModal visible={modalVisible} onClose={handleModalVisible}/>
                    <Stack.Navigator initialRouteName="HomeScreen">
                        <Stack.Screen 
                            name="HomeScreen" 
                            component={HomeScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="PlacesScreen" 
                            component={PlacesScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="DetailsScreen" 
                            component={DetailsScreen} 
                            options={{ headerShown: false }} 
                        />
                    </Stack.Navigator>
                </NavigationContainer>
        </MusicProvider>
    );
};

export default App;
