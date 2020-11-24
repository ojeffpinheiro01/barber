import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63C2D1;
`;
export const SearchArea = styled.View`
  background-color: #4EADBE;
  height: 40px;
  border-radius: 20px;
  padding: 0 20px;
  margin: 20px;
  margin-bottom: 0px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #ffffff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 30px;
`;
export const ListArea = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const EmptyWarning = styled.Text`
    text-align:center;
    margin-top:30px;
    color:#FFFFFF;
    font-size:25px;
`;

export const HeaderArea = styled.View`
  height:50px;
  justify-content:center;
  padding:0 20px;
`;
export const HeaderTitle = styled.Text`
  font-size:18px;
  color:#FFFFFF;
  font-weight:bold;
  text-align:left;
`;
