import {createStore} from 'redux';
import ToggleTheme from './reducer'

const Store = createStore(ToggleTheme , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default Store;