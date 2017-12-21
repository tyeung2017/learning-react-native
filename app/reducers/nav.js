import { NavigationActions } from 'react-navigation';
import routes from '../config/routes';

const initialState = routes.router.getStateForAction(NavigationActions.init());

export default (state = initialState, action) => {
  const nextState = routes.router.getStateForAction(action, state);
  return nextState || state;
};
