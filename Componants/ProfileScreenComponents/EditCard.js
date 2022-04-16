import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const EditCard = props => {
  return (
    <View style={styles.Card}>
      <Text
        style={{
          color: AppColors.FontsColor,
          paddingStart: 12,
          fontFamily: 'Poppins-Regular',
        }}>
        {props.Title}
      </Text>
      <TextInput
        style={{
          marginStart: 12,
          paddingVertical: 0,
          color: AppColors.infoFonts,
          fontFamily: 'Poppins-Regular',
        }}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Card: {
    backgroundColor: AppColors.CardColor,
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: Height / 90,
  },
});
export default EditCard;
