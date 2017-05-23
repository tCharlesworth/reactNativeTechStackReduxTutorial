import React from 'react';
import { View, Text } from 'react-native';
// Redux Imports
import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// Components
import { Header } from './components/common';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText="Tech Stack" />
            </View>
        </Provider>
    )
}

export default App;