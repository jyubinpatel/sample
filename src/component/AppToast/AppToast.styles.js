import {StyleSheet} from 'react-native';

export default styles = () =>
  StyleSheet.create({
    viewStyle: type => ({
      position: 'absolute',
      top: 5,
      borderRadius: 10,
      flexDirection: 'row',
      paddingVertical: 5,
      backgroundColor:
        type === 'info' ? 'blue' : type === 'error' ? 'red' : 'green',
    }),
    subView: {
      left: 2,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textWrapper: {
      width: '87%',
      textAlign: 'left',
      fontSize: 18,
      alignSelf: 'center',
      color: 'grey',
    },
  });
