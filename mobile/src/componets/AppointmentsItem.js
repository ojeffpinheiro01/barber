import React from 'react';
import styled from 'styled-components';

const Area = styled.View`
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 20px;
`;
const UserArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  margin-right: 20px;
`;
const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;
const SplitArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
const ServiceText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;
const DateText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #4eadbe;
`;

export default ({data}) => {
  let d = data.datetime.split(' ');
  //TEMPO
  let time = d[1].substring(0, 5);

  //DATA
  let date = new Date(d[0]);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;

  let dateString = `${day}/${month}/${year}`;

  return (
    <Area>
      <UserArea>
        <Avatar source={{uri: data.barber.avatar}} />
        <UserName>{data.barber.name}</UserName>
      </UserArea>

      <SplitArea>
        <ServiceText>{data.service.name}</ServiceText>
        <ServiceText>
          R$ {data.service.price.toFixed(2).replace('.', ',')}
        </ServiceText>
      </SplitArea>

      <SplitArea>
        <DateText>{dateString}</DateText>
        <DateText>{time}</DateText>
      </SplitArea>
    </Area>
  );
};