import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 12,
    textAlign: 'center',
  },
  back: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
    color: '#FFD700',
  },
  logo: {
    height: Dimensions.get('window').height * 0.09,
    marginVertical: Dimensions.get('window').height * 0.02,
    width: Dimensions.get('window').height * 0.07 * (1950 / 662),
  },
  welcome: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name: {
    color: '#FFD700',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default styles;
