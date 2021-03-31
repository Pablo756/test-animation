import React, {Component} from 'react';
import {StyleSheet, Text, Animated, PanResponder} from 'react-native';

import {windowWidth, windowHeight} from '../utils/Dimensions';

export default class SwipeableCardView extends Component {
  constructor() {
    super();

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,

      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,

      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderMove: (evt, gestureState) => {
        this.Xposition.setValue(gestureState.dx);

        if (gestureState.dx > windowWidth - 350) {
          this.setState({
            RightText: true,

            LeftText: false,
          });
        } else if (gestureState.dx < -windowWidth + 350) {
          this.setState({
            LeftText: true,

            RightText: false,
          });
        }
      },

      onPanResponderRelease: (evt, gestureState) => {
        if (
          gestureState.dx < windowWidth - 300 &&
          gestureState.dx > -windowWidth + 300
        ) {
          this.setState({
            LeftText: false,

            RightText: false,
          });

          Animated.spring(
            this.Xposition,
            {
              toValue: 0,
              speed: 5,
              bounciness: 10,
            },
            {useNativeDriver: true},
          ).start();
        } else if (gestureState.dx > windowWidth - 300) {
          Animated.parallel(
            [
              Animated.timing(this.Xposition, {
                toValue: windowWidth,
                duration: 200,
              }),

              Animated.timing(this.CardView_Opacity, {
                toValue: 0,
                duration: 200,
              }),
            ],
            {useNativeDriver: true},
          ).start(() => {
            this.setState({LeftText: false, RightText: false}, () => {
              this.props.removeCardView(this.props.item.id);
            });
          });
        } else if (gestureState.dx < -windowWidth + 300) {
          Animated.parallel(
            [
              Animated.timing(this.Xposition, {
                toValue: -windowWidth,
                duration: 200,
              }),

              Animated.timing(this.CardView_Opacity, {
                toValue: 0,
                duration: 200,
              }),
            ],
            {useNativeDriver: true},
          ).start(() => {
            this.setState({LeftText: false, RightText: false}, () => {
              this.props.removeCardView(this.props.item.id);
            });
          });
        }
      },
    });

    this.state = {RightText: false, LeftText: false};

    this.Xposition = new Animated.Value(0);
    this.CardView_Opacity = new Animated.Value(1);
  }

  render() {
    const rotateCard = this.Xposition.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['-20deg', '0deg', '20deg'],
    });

    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[
          styles.cardView_Style,
          {
            backgroundColor: this.props.item.backgroundColor,
            opacity: this.CardView_Opacity,
            transform: [{translateX: this.Xposition}, {rotate: rotateCard}],
          },
        ]}>
        <Text style={styles.CardView_Title}>
          {' '}
          {this.props.item.cardView_Title}{' '}
        </Text>

        {this.state.LeftText ? (
          <Text style={styles.Left_Text_Style}> Left Swipe </Text>
        ) : null}

        {this.state.RightText ? (
          <Text style={styles.Right_Text_Style}> Right Swipe </Text>
        ) : null}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardView_Style: {
    width: windowWidth / 1.3,
    height: windowHeight / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: windowWidth / 40,
  },

  CardView_Title: {
    color: '#fff',
    fontSize: windowWidth / 14,
  },

  Left_Text_Style: {
    top: windowWidth / 22,
    right: windowWidth / 32,
    position: 'absolute',
    color: '#fff',
    fontSize: windowWidth / 20,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },

  Right_Text_Style: {
    top: windowWidth / 22,
    left: windowWidth / 32,
    position: 'absolute',
    color: '#fff',
    fontSize: windowWidth / 20,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});
