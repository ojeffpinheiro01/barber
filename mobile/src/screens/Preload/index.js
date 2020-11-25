import React, { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';

import Logo from '../../assets/barber'

import { Container, LoadingIcon } from './style';
import { UserContext } from '../../contexts/UserContext';

export default () => {
    const navigation = useNavigation();

    const { dispatch: userDispatch } = useContext(UserContext);

    useEffect(() => {
        const checkToken = async () => {
          const token = await AsyncStorage.getItem('token');
          if (token) {
            let res = await Api.checkToken(token);
            if (res.token) {
              await AsyncStorage.setItem('token', res.token);
              userDispatch({
                type: 'setAvatar',
                payload: {
                  name: res.data.name,
                  avatar: res.data.avatar,
                  email: res.data.email
                },
              });
              navigation.reset({
                routes: [
                  {
                    name: 'MainTab',
                  },
                ],
              });
            } else {
              navigation.navigate('SignIn');
            }
          } else {
            navigation.navigate('SignIn');
          }
        };
        checkToken()
      }, []);
    
    return (
        <Container>
            <Logo width="100%" height="160" />
            <LoadingIcon size='large' color='#FFFFFF'/>
        </Container>
    )
}