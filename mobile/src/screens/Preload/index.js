import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import Logo from '../../assets/barber.svg'

import { Container, LoadingIcon } from './style';

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                
            } else {
                navigation.navigate("SignIn");
            }
        };

        checkToken();
    }, [])

    return (
        <Container>
            <Logo width="100%" height="160" />
            <LoadingIcon size='large' color='#FFFFFF'/>
        </Container>
    );
}