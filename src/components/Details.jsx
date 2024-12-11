import React, { useRef, useEffect, useState } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from 'react-native-maps';
import Icons from "./Icons";

const { height } = Dimensions.get('window');

const Details = ({ place }) => {
    const mapRef = useRef(null);
    const navigation = useNavigation();
    const [isMap, setIsMap] = useState(false);

    const handleShowMap = () => {
        if (isMap) {
            setIsMap(false)
        } else {
            setIsMap(true)
        }
    };

    return (
        <ImageBackground source={require('../assets/back/2.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <View style={styles.iconsContainer}>

                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                        <Icons type={'back'} light />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.back} onPress={handleShowMap}>
                        <Icons type={'map'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.back}>
                        <Icons type={'camera'} />
                    </TouchableOpacity>

                </View>

                {
                    isMap ? (
                        <View style={styles.mapContainer}>
                            <MapView
                                ref={mapRef}
                                style={styles.map}
                                initialRegion={{
                                    latitude: place.coordinates[0].lat,
                                    longitude: place.coordinates[0].lng,
                                    latitudeDelta: 0.02,
                                    longitudeDelta: 0.02,
                                }}
                            >
                                <Marker
                                    key={place.name}
                                    coordinate={{
                                        latitude: place.coordinates[0].lat,
                                        longitude: place.coordinates[0].lng,
                                    }}
                                >
                                    <View>
                                        <Image
                                            source={place.image}
                                            style={styles.markerImage}
                                        />
                                    </View>
                                </Marker>
                            </MapView>
                        </View>            
                    ) : (
                        <Image source={place.image} style={styles.image} />
                    )
                }
                

                <Text style={styles.name}>{place.name}</Text>

                <Text style={styles.address}>
                    <Text style={{fontWeight: '700'}}>Address: </Text>
                    {place.address}
                </Text>

                <ScrollView style={{width: '100%'}}>
                    <Text style={styles.description}>{place.description}</Text>
                    <Text style={styles.subTitle}>Historical significance</Text>
                    <Text style={styles.description}>{place.history}</Text>
                    <View style={{height: 50}} />
                </ScrollView>

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: height * 0.05,
    },

    iconsContainer: {
        position: 'absolute',
        left: 30,
        top: height * 0.07,
        zIndex: 10
    },

    back: {
        width: 40,
        height: 40,
        zIndex: 10,
        marginVertical: 10,
    },

    mapContainer: {
        width: '100%',
        height: height * 0.35,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: height * 0.03,
    },

    map: {
        width: '100%',
        height: '100%',
    },

    markerImage: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#f69809',
        width: 60,
        height: 60
    },

    image: {
        width: '100%',
        height: height * 0.35,
        borderRadius: 12,
        marginBottom: height * 0.03,
        resizeMode: 'cover'
    },

    name: {
        fontSize: 22,
        fontWeight: '900',
        color: '#915320',
        textAlign: 'center',
        marginBottom: height * 0.02
    },

    address: {
        fontSize: 16,
        fontWeight: '500',
        color: '#946231',
        marginBottom: height * 0.02
    },

    description: {
        fontSize: 17,
        textAlign: 'justify',
        color: '#3d3227',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: height * 0.015
    },

    subTitle: {
        fontSize: 20,
        fontWeight: '900',
        color: '#915320',
        textAlign: 'center',
        marginBottom: height * 0.01
    }

});

export default Details;