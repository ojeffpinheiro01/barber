import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import {UserContext} from '../../contexts/UserContext';

import { 
    Container,
    InputArea,
    SignUpButton,
    SignUpButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './style';

import Api from '../../Api';
import SignInput from '../../componets/SignInput';
import Logo from '../../assets/barber';
import EmailIcon from '../../assets/email';
import LockIcon from '../../assets/lock';
import PersonIcon from '../../assets/person'


export default () => {

    const {dispatch: userDispatch} = useContext(UserContext);

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != ''){
            let res = await Api.signUp(nameField, emailField, passwordField);

            if(res.token){
                await AsyncStorage.setItem('token', res.token); // 1° Passo:Salva no AsyncStorage

                userDispatch({      // 2° Passo: Salva no Context.
                    type:'setAvatar',
                    payload:{
                        name: res.data.name,
                        avatar: res.data.avatar,
                        email: res.data.email
                    }
                });
                
                navigation.reset({      // 3° Passo: Envia o usuário para MainTab.
                    routes:[{name:'MainTab'}]
                });

            }else{
                alert("Oops: " + res.error);
            }
        }else{
            alert("Por favor, preencha os campos!")
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes:[{name: 'SignIn'}]
        });
    }

    return (
        <Container>
            <Logo width="100%" height="160" />
            <InputArea>

                <SignInput 
                    Icone={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t => setNameField(t)}
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

            <SignMessageButton onPress={handleMessageButtonClick} >
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}