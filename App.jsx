import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MusicProvider } from './src/constants/music';
import MusicPlayer from './src/components/MusicPlayer';

import HomeScreen from './src/screens/HomeScreen';
import PlacesScreen from './src/screens/PlacesScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import AlbumScreen from './src/screens/AlbumScreen';
import TimelineScreen from './src/screens/TimelineScreen';
import ScoreboardScreen from './src/screens/ScoreboardScreen';
import StoriesScreen from './src/screens/StoriesScreen';
import FullStoryScreen from './src/screens/FullStoryScreen';
import CrapsGameScreen from './src/screens/CrapsGameScreen';

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
                        <Stack.Screen 
                            name="AlbumScreen" 
                            component={AlbumScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="TimelineScreen" 
                            component={TimelineScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="ScoreboardScreen" 
                            component={ScoreboardScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="StoriesScreen" 
                            component={StoriesScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="FullStoryScreen" 
                            component={FullStoryScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="CrapsGameScreen" 
                            component={CrapsGameScreen} 
                            options={{ headerShown: false }} 
                        />
                    </Stack.Navigator>
                </NavigationContainer>
        </MusicProvider>
    );
};

export default App;
