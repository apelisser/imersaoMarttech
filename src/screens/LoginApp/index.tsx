import React from 'react';
import { Image, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    Container, 
    ContainerLogo, 
    ContainerFormulario,
    ContainerTexto,
    Email,
    BotaoLogin,
    TextoLogin,
    BotaoCadastro,
    TextoCadastro
} from './styles';

const LoginApp = () => {
  return (
    <Container>
        <ContainerLogo>
            <Image
                source={require('../../assets/logo.jpg')}
                resizeMode="cover"
            ></Image>
        </ContainerLogo>
        <ContainerFormulario>
            <ContainerTexto>
                <Email placeholder="seu@email.com"></Email>
            </ContainerTexto>

            <ContainerTexto>
                <Email placeholder="sua.senha"></Email>
                <Icon name="eye" size={24} color="#000" style={{position: 'relative', paddingTop: 10}} />
            </ContainerTexto>

            <BotaoLogin>
                <TextoLogin> Login </TextoLogin>
            </BotaoLogin>
            <BotaoCadastro>
                <TextoCadastro> Cadastre-se </TextoCadastro>
            </BotaoCadastro>

        </ContainerFormulario>
    
    </Container>
  );
};
export default LoginApp;