import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function CryptoCard({name, symbol, price, totalSupply, iconUrl, coinDescr, currency}) {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 345, marginLeft: 1.5, marginRight: 1.5 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Price: {price.toFixed(3)} {currency}
                </Typography>
                <img src={iconUrl} alt="icon" />
                <Typography variant="body2" color="text.secondary">
                    Symbol: {symbol}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Total supply: {totalSupply}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description: {coinDescr}
                </Typography>
            </CardContent>
        </Card>
    );
}

