import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, View, Text } from 'react-native';
//import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StackActions } from '@react-navigation/native';
import BrandSvg from './../assets/brand.svg';
import LogoSvg from './../assets/logo.svg';

export function SplashScreen() {
    const navigator = useNavigation();
    /*const splashAnimation = useSharedValue(0);


    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [0 -50],
                        Extrapolate.CLAMP
                    )
                }
            ]
        }
    });

    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, .3, 1]),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [-50, 0],
                        Extrapolate.CLAMP
                    )
                }
            ]
        }
    });

    

    useEffect(() => {
        let mount = true;

        splashAnimation.value = withTiming(
            50,
            { duration: 1000 },
            () => {
                if (mount) {
                    'worklet'
                    runOnJS(startApp)();
                }
            }
        )
        return () => { mount = false };
    }, []);*/

    function startApp() {
        navigator.dispatch(StackActions.replace('Goal'))
    }

    return (
        <View style={styles.container}>
            {/* <Animated.View style={[brandStyle, { position: 'absolute' }]}>
                <BrandSvg with={80} height={50} />
            </Animated.View>

            <Animated.View style={[logoStyle, { position: 'absolute' }]}>
                <LogoSvg with={180} height={20} />
            </Animated.View> */}

            <Text>Splash Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkorange'
    }
});