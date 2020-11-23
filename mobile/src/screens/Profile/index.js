import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import Api from '../../Api';

import {
  Container,
} from './style';

import SearchIcon from '../../assets/search';
import MyLocationIcon from '../../assets/my_location';

export default () => {
    const navigation = useNavigation();
    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name: 'SignIn'}]
        })
    }

    return(
        <Container>
            <Text>Perfil</Text>
            <Button title="SAIR" onPress={handleLogoutClick} />
        </Container>
    )
}