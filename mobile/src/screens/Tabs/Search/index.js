import React, {useState} from 'react';
import {
  Container,
  SearchArea,
  SearchInput,
  Scroller,
  LoadingIcon,
  ListArea,
  EmptyWarning,
} from './style';
import BarberItem from '../../../componets/BarberItem';
import Api from '../../../Api';

export default () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [emptyList, setEmptyList] = useState(false);

  const searchBarbers = async () => {
    setEmptyList(false);
    setLoading(true);
    setList([]);

    if (searchText != '') {
      let res = await Api.search(searchText);

      if (res.error == '') {
        if (res.list.length > 0) {
          setList(res.list);
        } else {
          setEmptyList(true);
        }
      } else {
        alert('Error: ' + res.error);
      }
    }
    setLoading(false);
  };

  return (
    <Container>
      <SearchArea>
        <SearchInput
          placeholder="Digite o nome do barbeiro"
          placeholderTextColor="#FFFFFF"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
          onEndEditing={searchBarbers}
          returnKeyType="search"
          autofocus
          selectTextOnFocus
        />
      </SearchArea>

      <Scroller>
        {loading && <LoadingIcon size="large" color="#000000" />}
        {emptyList && (
          <EmptyWarning>
            "{searchText}" não encontrado(a)
          </EmptyWarning>
        )}
        <ListArea>
          {list.map((item, k) => (
            <BarberItem data={item} key={k} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};