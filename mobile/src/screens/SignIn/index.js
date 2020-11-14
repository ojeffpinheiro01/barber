import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import { 
    Container,
    LoginButton,
    LoginButtonText,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    InputArea,
    SignMessageButton
} from './style';

import Logo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import SignInput from '../../componets/SignInput';


export default () => {
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
    }

    const handleSignClick = () => {

    }


    return (
        <Container>
            <Logo width='100%' height='160' />
            <InputArea>
                <SignInput 
                    Icone={EmailIcon}
                    placeholder="Digite seu email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                     />
                <SignInput 
                    Icone={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    pass={true}
                    />
                <LoginButton>
                    <LoginButtonText>LOGIN</LoginButtonText>
                </LoginButton>
            </InputArea>
            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}