import React from 'react';
import { Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Api from '../../../Api';

import {
  Container,
} from './style';

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