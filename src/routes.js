import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Bio from '~/pages/Bio';
//import Details from '~/pages/Details';


const Routes = createAppContainer(createSwitchNavigator({
  Main,
  Bio,
 // Details,

}));

export default Routes;
