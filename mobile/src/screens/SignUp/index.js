import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import { 
    Container,
    SignUpButton,
    SignUpButtonText,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    InputArea,
    SignMessageButton
} from './style';

import Logo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';

import SignInput from '../../componets/SignInput';


export default () => {
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }

    const handleSignClick = () => {
        
    }


    return (
        <Container>
            <Logo width='100%' height='160' />
            <InputArea>
                <SignInput 
                    Icone={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                     />
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
                <SignUpButton onPress={handleSignClick}>
                    <SignUpButtonText>CADASTRAR</SignUpButtonText>
                </SignUpButton>
            </InputArea>
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}