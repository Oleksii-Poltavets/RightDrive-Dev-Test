import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import CryptoCardsContainer from './components/CryptoCardsContainer';

function App() {

    return (
        <div className="App">
            <Typography variant='h3' component='h1' sx={{paddingTop: 5}}>CryptoView</Typography>
            <CryptoCardsContainer/>
        </div>
    );
}

export default App;
