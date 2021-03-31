import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LogoutButton from '../components/LogoutButton';
import {AuthContext} from '../navigation/AuthProvider';
import SwipeableCardView from '../components/SwipeableCardView';
import {windowWidth} from '../utils/Dimensions';

export default function HomeScreen() {
  const {logout} = useContext(AuthContext);
  const [visibleText, setVisibleText] = useState(false);
  const [itemsArray, setItemsArray] = useState([
    {
      id: '1',
      cardView_Title: 'CardView 1',
      backgroundColor: '#4CAF50',
    },

    {
      id: '2',
      cardView_Title: 'CardView 2',
      backgroundColor: '#607D8B',
    },

    {
      id: '3',
      cardView_Title: 'CardView 3',
      backgroundColor: '#9C27B0',
    },

    {
      id: '4',
      cardView_Title: 'CardView 4',
      backgroundColor: '#00BCD4',
    },

    {
      id: '5',
      cardView_Title: 'CardView 5',
      backgroundColor: '#FFC107',
    },
  ]);

  const removeCard = (id) => {
    const newArr = itemsArray.filter((card) => card.id !== id);
    setItemsArray(newArr);
    console.log(newArr);
    newArr.length === 0 && setVisibleText(true);
  };

  return (
    <View style={styles.container}>
      {itemsArray.map((item, key) => (
        <SwipeableCardView
          key={item.id}
          item={item}
          removeCardView={removeCard}
        />
      ))}
      {visibleText && <Text style={styles.text}>No More CardViews Found.</Text>}
      <LogoutButton onPress={() => logout()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: windowWidth / 18,
    color: '#000',
  },
});
