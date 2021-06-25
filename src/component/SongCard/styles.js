import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  containerView: {
    padding: 7,
    borderRadius: 4,
    marginVertical: 8,
    marginHorizontal: 8,
    flexDirection: 'row',
    backgroundColor: '#eaeaee',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 4,
  },
  imageView: {
    width: 70,
    height: 70,
    marginLeft: 2,
    alignSelf: 'center',
    borderRadius: 4,
  },
  detailView: {
    marginLeft: 15,
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  artistText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
});
