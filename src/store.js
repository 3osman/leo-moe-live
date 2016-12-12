import reducers from './reducers';
import { createStore} from 'redux';

// Add the reducer to your store on the `routing` key
const store = createStore(reducers);

export default store;
