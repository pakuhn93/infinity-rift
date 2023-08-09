import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </ApolloProvider>
    );
}

export default App;
