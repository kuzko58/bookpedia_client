import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import Layout from './components/Layout';
import { store } from './redux/store/store';
import Library from './pages/Library';
import apolloClient from './ApolloClient';

import './App.css';

function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <Layout>
                    <Library />
                </Layout>
            </Provider>
        </ApolloProvider>
    );
}

export default App;
