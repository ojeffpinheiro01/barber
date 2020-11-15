import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { 
    Container,
    InputArea,
    LoginButton,
    LoginButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './style';

import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext'
import SignInput from '../../componets/SignInput';

import Logo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != '') {

                let json = await Api.signIn(emailField, passwordField);

                if(json.token) {
                    await AsyncStorage.setItem('token', json.token);

                    userDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: json.data.avatar
                        }
                    });
                    
                    navigation.reset({
                        routes:[{name:'MainTab'}]
                    });
                } else {
                    console.error(json.error)
                    alert('E-mail e/ou senha incorretos');
                }
            } else {
                alert("Preencha os campos!");
            }
    }
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    return (
        <Container>
            <Logo width="100%" height="160" />
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
                <LoginButton onPress={handleSignClick}>
                    <LoginButtonText>LOGIN</LoginButtonText>
                </LoginButton>
            </InputArea>
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}