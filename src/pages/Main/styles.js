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
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.25,
    marginVertical: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,

  },
  input: {
    color: '#FFD700',
    fontSize: 20,
    //fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#FFD700',
    paddingBottom: 8,
    borderRadius: 4,

  },
  Search: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default styles;
