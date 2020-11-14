import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './style';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

export default () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Text>Preload</Text>
        </Container>
    );
}