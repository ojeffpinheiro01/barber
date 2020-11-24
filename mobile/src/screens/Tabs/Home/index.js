import React, {useState, useEffect} from 'react';
import {Platform, RefreshControl} from 'react-native';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  LocationArea,
  LocationFinder,
  LocationInput,
  SearchButton,
  LoadingIcon,
  ListArea
} from './style';
import {PERMISSIONS, request} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import {useNavigation} from '@react-navigation/native';

import SearchIcon from '../../../assets/search';
import MyLocationIcon from '../../../assets/my_location';
import Api from '../../../Api';
import BarberItem from '../../../componets/BarberItem'

export default () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false)

  useEffect(()=>{
    getBarbers()
  },[])

  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );

    if (result === 'granted') {
      setLoading(true);
      setLocationText('');
      setList([]);

      Geolocation.getCurrentPosition((info) => {
        setCoords(info.coords);
        getBarbers();
      });
    }
  };
  const getBarbers = async () => {
    setLoading(true)
    setList([])

    let lat = null;
    let lgn = null;
    if(coords){
      lat = coords.latitude;
      lgn = coords.longitude;
    }

    let res = await Api.getBarbers(lat, lgn, locationText);
      if(res.error == ""){
          if(res.loc){
            setLocationText(res.loc)
          }
          setList(res.data)
      } else {
        alert("Oops: " + res.error)
      }
      setLoading(false)
  };

  const onRefresh = () => {
    setRefreshing(false)
    getBarbers()
  }

  const handleLocationSearch = () => {
    setCoords({})
    getBarbers()
  }

  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito.
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde você está ?"
            placeholderTextColor="#FFFFFF"
            value={locationText}
            onChangeText={(e) => setLocationText(e)}
            onEndEditing={handleLocationSearch}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
          </LocationFinder>
        </LocationArea>

        {loading && <LoadingIcon size="large" color="#FFFFFF" />}

        <ListArea>
          {list.map((item, key) => (
            <BarberItem key={key} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};