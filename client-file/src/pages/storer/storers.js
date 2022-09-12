import { createStore, combineReducers as cr } from 'redux';
import todo from '../reducersFiles/exp';
import filt from '../reducersFiles/filt';

// CREATING STORE
export default () => {
    const store = createStore(
        cr({
            exp: todo,
            filter: filt
        })
    );
    return store;
};