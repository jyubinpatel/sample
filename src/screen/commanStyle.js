import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  splashView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: 250,
    padding: 10,
    borderRadius:10,
    color: '#f4511e',
  },
  containerView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'gray',
  },
  imageView: {
    width: '45%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: 4,
  },
  detailView: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 30,
    textAlign: 'center',
  },
  artistText: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 25,
  },
  durationText: {
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  detailText: {
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 18,
  },
  dateText: {
    fontSize: 24, 
    fontStyle: 'italic', 
    lineHeight: 30,
  }
});
