import React from 'react';
import {
  View,
} from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import ToDosList from './pages/todos/List';

const App = () => {
    return (
        <Provider store={store}>
            <View>
                <ToDosList />
            </View>
        </Provider>
    )
}

export default App;