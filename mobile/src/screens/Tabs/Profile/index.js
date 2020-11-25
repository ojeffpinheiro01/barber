import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../../../contexts/UserContext';

import Api from '../../../Api';

import {
  Container,
  AvatarIcon,
  UserName,
  UserEmail,
  ButtonSignOut,
  ButtonSignOutText
} from './style';

export default () => {
    const navigation = useNavigation();
    const { state: user } = useContext(UserContext);
    console.log(user)
    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name: 'SignIn'}]
        })
    }

    return(
        <Container>
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <AvatarIcon source={{uri: user.avatar}} />
            <ButtonSignOut onPress={handleLogoutClick}>
                    <ButtonSignOutText>SAIR</ButtonSignOutText>
                </ButtonSignOut>
        </Container>
    )
}