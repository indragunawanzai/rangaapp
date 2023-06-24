import React, { useEffect } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { splash_logo } from '../../assets';
import { hp, wp } from '../../utils/Utils';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp');
        }, 3000)
    }, [navigation])

    return (
        <View style={styles.page}>
            {/* <Image source={splash_logo} style={styles.imgSplash}/> */}
            <Text style={{
                fontSize: 20,
                fontWeight: '500',
                color: 'black'
            }}>aiman</Text>
            <Text>app</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#7FFF00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgSplash: {
        width: wp(100),
        height: hp(100),
        resizeMode: 'contain'
    }
})