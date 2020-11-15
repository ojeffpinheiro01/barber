import React, { useState, useEffect } from 'react';
import { Platform, RefreshControl, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import Api from '../../Api';

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
  ListArea
} from './style';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {
    return(
        <Container>
            <Text>Appointments</Text>
        </Container>
    )
}