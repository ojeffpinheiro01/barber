import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63C2D1;
  align-items: center;
  justify-content: center;
`;

export const AvatarIcon = styled.Image`
  margin: 50px;
  width: 240px;
  height: 240px;
  border-radius: 120px;
`;
export const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export const UserEmail = styled.Text`
  font-size: 15px;
  color: #fff;
`;
export const ButtonSignOut = styled.TouchableOpacity`
  width: 80%;
  height: 8%;
  background-color: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const ButtonSignOutText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;