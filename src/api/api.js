import axios from 'axios';

// https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&convert=USD

const instance = axios.create( {
    baseURL: 'https://pro-api.coinmarketcap.com',
    headers: {
        'X-CMC_PRO_API_KEY': '5bd71834-9162-4cf0-80a5-99bc76810975',
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip',
    }
});

export const cryptoApi = {
    getAssetsData() {
        return instance.get('/v1/cryptocurrency/listings/latest?start=1&convert=USD');
    },
    getLogoAndDescription(coinsId = '1,825,1027,1839') {
        return instance.get(`/v2/cryptocurrency/info?id=${coinsId},2&aux=logo,description`, {
            headers: {
                'X-CMC_PRO_API_KEY': '5bd71834-9162-4cf0-80a5-99bc76810975',
                'Accept': 'application/json',
                'Accept-Encoding': 'deflate, gzip',
            }
        })
    }
};