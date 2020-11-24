import React, {useEffect, useState} from 'react';
import {
  Container,
  HeaderArea,
  HeaderTitle,
  Scroller,
  LoadingIcon,
  ListArea,
  EmptyWarning,
} from './style';
import {RefreshControl} from 'react-native'
import BarberItem from '../../../componets/BarberItem';
import Api from '../../../Api';

export default () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getFavorites()
  },[])

  const getFavorites = async () => {
    setLoading(true);
    setList([]);
    let res = await Api.getFavorites();
    if(res.error == ''){
      setList(res.list)
    } else {
      alert("Erro: " + res.error)
    }
    setLoading(false);
  };

  return (
    <Container>
        <HeaderArea>
          <HeaderTitle>Favoritos</HeaderTitle>
        </HeaderArea>
      <Scroller refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getFavorites}/>
      }>
        {!loading && list.length === 0 &&
        <HeaderTitle>Você não escolheu nenhum barbeiro(s) como favorito(s). </HeaderTitle>}
        <ListArea>
          {list.map((item, k) => (
            <BarberItem data={item} key={k} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};