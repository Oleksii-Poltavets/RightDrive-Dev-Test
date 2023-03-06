import * as React from 'react';
import { connect } from 'react-redux';
import CryptoCard from './CryptoCard';
import { getCoinsTC, getCoinsInfoTC } from '../redux/cardsReducer';
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import PaginationCont from './Pagination';

function CryptoCardsContainer (props) {

    const {getCoinsTC, getCoinsInfoTC} = props;
    const [currentPage, setCurrentPage] = React.useState(1);

    React.useEffect(()=>{
        const fetchData = () => {
            getCoinsTC();
            getCoinsInfoTC();
        }
        fetchData();
    }, []);

    if(!props.coinsData && !props.iconAndDescr) {
        return 'Loading';
    }

    //getCurrentCoinCards
    const indexOfLastPost = currentPage * props.pageSize;
    const indexOfFirstPost = indexOfLastPost - props.pageSize;
    const currentCoinCards = props.coinsData.slice(indexOfFirstPost, indexOfLastPost);

    return <>
        {
            props.isFetch ? 'loading' :
            <div>
                <Container maxWidth='xl'>
                    <Box sx={{mt: 5, display: 'flex', justifyContent: 'center'}}>
                        {currentCoinCards.map((coin) => {
                            return(
                                <CryptoCard 
                                id={coin.id}
                                name={coin.name}
                                symbol={coin.symbol}
                                price={coin.quote['USD'].price}
                                currency={Object.keys(coin.quote)[0]}
                                totalSupply={coin['total_supply']}
                                iconUrl={props.iconAndDescr[coin.id].logo}
                                coinDescr={props.iconAndDescr[coin.id].description}
                                {...props}/>
                            )
                        })}
                    </Box>
                    <PaginationCont currentPage={currentPage} setCurrentPage={setCurrentPage} count={props.totalcardsCount}/>
                </Container>
            </div>
        }
    </>
}

const mapStateToProps = (state) => {
    const coinsInfo = state.cardsPage.coinsData;
    return {
        isFetch: state.cardsPage.isFetch,
        coinsData: coinsInfo.data,
        cards: state.cardsPage.cards,
        iconAndDescr: state.cardsPage.iconAndDescriptionData.data,
        // currentPage: state.cardsPage.currentPage,
        pageSize: state.cardsPage.pageSize,
        totalcardsCount: state.cardsPage.totalcardsCount
    }
}

export default connect(mapStateToProps, {getCoinsTC, getCoinsInfoTC})(CryptoCardsContainer);

