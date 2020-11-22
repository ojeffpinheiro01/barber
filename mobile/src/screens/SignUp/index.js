import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { 
    Container,
    InputArea,
    SignUpButton,
    SignUpButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './style';

import SignInput from '../../componets/SignInput';
import { UserContext } from '../../contexts/UserContext'
import Api from '../../Api';

import Logo from '../../assets/barber.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if (nameField != '' && emailField != '' && passwordField != '') {
            let res = await Api.signUp(nameField, emailField, passwordField);

            if (res.data.idToken) {
                await AsyncStorage.setItem('idToken', res.data.idToken);

                userDispatch({
                    type: 'setUserContext',
                    payload: {
                        avatar: res.data.avatar,
                        type: res.data.type
                    }
                });
                
                navigation.reset({
                    routes: [{ name: 'MainTab' }]
                });
            } else {
                console.log(res.error)
                alert("Oops: " + res.error)
            }
        } else {
            alert('Preencha os campos!')
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
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