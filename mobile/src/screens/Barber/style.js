import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
export const Scroller = styled.ScrollView`
  flex: 1;
`;
export const FakeSwiper = styled.View`
  height: 240px;
  background-color: #63c2d1;
`;
export const PageBody = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 50px;
  min-height: 400px;
  margin-top: -50px;
`;

export const UserInfoArea = styled.View`
  flex-direction: row;
  margin-top: -30px;
`;
export const UserInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  border-width: 4px;
  border-color: #ffffff;
`;
export const UserInfoName = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const UserFavButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 2px solid #999999;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #63c2d1;
`;
export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;
export const ServiceArea = styled.View`
  margin-top: 20px;
`;
export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 3px;
`;
export const SwipeDotActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 5px;
  margin: 3px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ServiceItem = styled.View`
  flex-direction: row;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
`;
export const ServiceTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #268596;
  margin-left: 30px;
  margin-bottom: 20px;
`;
export const ServiceInfo = styled.View`
  flex: 1;
`;
export const ServiceName = styled.Text`
  font-size: 16px;
  color: #268596;
  font-weight: bold;
`;
export const ServicePrice = styled.Text`
  font-size: 14px;
  color: #268596;
`;
export const ServiceChooseButton = styled.TouchableOpacity`
  background-color: #4eadbe;
  border-radius: 10px;
  padding: 10px 15px;
`;
export const ServiceChooseButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
`;

export const TestimonialArea = styled.View`
  margin-top: 30px;
  margin-bottom:50px;
`;
export const TestimonialItem = styled.View`
  background-color: #268596;
  padding: 15px;
  border-radius: 10px;
  height: 110px;
  justify-content:center;
  margin-left:40px;
  margin-right:40px;
`;
export const TestimonialInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`;
export const TestimonialName = styled.Text`
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
`;
export const TestimonialBody = styled.Text`
    color: #FFF;
    font-size: 13px;
`;