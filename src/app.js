import React from 'react';
import { View, Text } from 'react-native';
// Redux Imports
import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
    return (
        <Provider store={createStore}>
            <View>
                <Text>App</Text>
            </View>
        </Provider>
    )
}

export default App;