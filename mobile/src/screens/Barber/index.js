import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  Container,
  Texto,
  Scroller,
  PageBody,
  BackButton,
  LoadingIcon,
  
  FakeSwiper,
  SwipeDot,
  SwipeDotActive,
  SwipeImage,
  SwipeItem,

  UserInfoArea,
  UserInfoName,
  UserInfo,
  UserFavButton,
  UserAvatar,
  
  ServiceItem,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceArea,
  ServiceChooseButton,
  ServiceChooseButtonText,
  ServiceTitle,
  
  TestimonialArea,
  TestimonialInfo,
  TestimonialItem,
  TestimonialName,
  TestimonialBody,
} from './style';

import Api from '../../Api';
import Swiper from 'react-native-swiper';
import Stars from '../../componets/Stars';

import FavoriteFullIcon from '../../assets/favorite_full';
import FavoriteIcon from '../../assets/favorite';
import BackIcon from '../../assets/back';
import NavPrevIcon from '../../assets/nav_prev';
import NavNextIcon from '../../assets/nav_next';
import BarberModal from '../../componets/BarberModal';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [selectedService, setSelectedService] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [favorited, setFavorited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  useEffect(() => {
    const getBarberInfo = async () => {
      let res = await Api.getBarber(userInfo.id);
      if (res.error == '') {
        setUserInfo(res.data);
        setFavorited(res.data.favorited);
      } else {
        alert('Oops: ' + res.error);
      }
    };
    getBarberInfo();
  }, []);

  const handleFavClick = () => {
    setFavorited( !favorited)
    Api.setFavorite(userInfo.id) 
  }

    const handleBackButton = () => {
      navigation.goBack();
    };

    const handleServiceChoose = key => {
      setSelectedService(key)
      setShowModal(true)
    }

    return (
      <Container>
          {/*Scroller para arrasta a tela para cima
            Swiper = carrousel, props dot = ponto, activeDot é a qual está selecionada
            fakeswiper para quando não houver imagem
            PageBody é o restante das informações
            quando for um icone coloca width e fill para cor
            */}
          <Scroller>
            {userInfo.photos && userInfo.photos.length > 0 ? (
                <Swiper
                  style={{height: 240}}
                  dot={<SwipeDot />}
                  activeDot={<SwipeDotActive />}
                  paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
                  autoplay={true}>
                  {userInfo.photos.map((item, key) => (
                      <SwipeItem key={key}>
                        <SwipeImage source={{uri: item.url}} resizeMode="cover" />
                      </SwipeItem>
                  ))}
                </Swiper>
            ) : (
                <FakeSwiper></FakeSwiper>
            )}
            <PageBody>
                <UserInfoArea>
                  <UserAvatar source={{uri: userInfo.avatar}} />
                  <UserInfo>
                      <UserInfoName>{userInfo.name}</UserInfoName>
                      <Stars note={userInfo.stars} showN />
                  </UserInfo>
                  <UserFavButton onPress={handleFavClick}>
                      {favorited ? (
                        <FavoriteFullIcon width="24" height="24" fill="#FF0000" />
                      ) : (
                        <FavoriteIcon width="24" height="24" fill="#FF0000" />
                      )}
                  </UserFavButton>
                </UserInfoArea>
                {loading && <LoadingIcon size="large" color="#000000" />}
                <ServiceArea>
                  <ServiceTitle>Lista de serviços</ServiceTitle>
                  {userInfo.services ? (
                      userInfo.services.map((item, key) => (
                        <ServiceItem key={key}>
                            <ServiceInfo>
                              <ServiceName>{item.name}</ServiceName>
                              <ServicePrice>R$ {item.price.toFixed(2).replace('.',',')}</ServicePrice>
                            </ServiceInfo>
                            <ServiceChooseButton onPress={()=>handleServiceChoose(key)}>
                              <ServiceChooseButtonText>Agendar</ServiceChooseButtonText>
                            </ServiceChooseButton>
                        </ServiceItem>
                      ))
                  ) : (
                      <LoadingIcon size="large" color="#000000" />
                  )}
                </ServiceArea>
                {userInfo.testimonials && userInfo.testimonials.length > 0 && (
                  <TestimonialArea>
                      <Swiper
                        style={{height: 110}}
                        showsPagination={false}
                        showsButtons={true}
                        prevButton={
                            <NavPrevIcon width="35" height="35" fill="#000000" />
                        }
                        nextButton={
                            <NavNextIcon width="35" height="35" fill="#000000" />
                        }>
                        {userInfo.testimonials.map((item, key) => (
                            <TestimonialItem key={key}>
                              <TestimonialInfo>
                                  <TestimonialName>{item.name}</TestimonialName>
                                  <Stars note={item.rate} showN={false} />
                              </TestimonialInfo>
                              <TestimonialBody>{item.body}</TestimonialBody>
                            </TestimonialItem>
                        ))}
                      </Swiper>
                  </TestimonialArea>
                )}
            </PageBody>
          </Scroller>
          <BackButton onPress={handleBackButton}>
            <BackIcon width="44" height="44" fill="#FFFFFF" />
          </BackButton>

          <BarberModal 
            show={showModal}
            setShow={setShowModal}
            user={userInfo}
            service={selectedService}
          />
      </Container>
    );
};