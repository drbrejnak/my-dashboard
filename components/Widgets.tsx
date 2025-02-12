import * as React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { mockTransactions } from '../data/mockData'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const transactionDates = mockTransactions.map((transaction) => transaction.date).sort().map(dateString => {
    const year = parseFloat(dateString.slice(0, 4));
    const month = parseFloat(dateString.slice(5, 7));
    const day = parseFloat(dateString.slice(8, 10));
    return new Date(`${month}-${day}-${year}`);
});

const transactionYear = transactionDates[transactionDates.length-1].getFullYear();

const currentSales = transactionDates.filter((sale) => sale.getFullYear() === transactionYear).length;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgb(240, 240, 240)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));

const Widgets = () => {

    return(
        <Box sx={{ flexGrow: 1, mb:'5vh' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                    <Item>
                        <Card sx={{  }}>
                            <CardContent>
                                <PointOfSaleIcon />
                                <Typography variant="h5" component="div">
                                {mockTransactions.length}
                                </Typography>
                                <Typography variant="body2">
                                Total Historical Sales
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                    <Item>
                        <Card sx={{  }}>
                            <CardContent>
                                <PersonAddIcon />
                                <Typography variant="h5" component="div">
                                {currentSales}
                                </Typography>
                                <Typography variant="body2">
                                Sales Obtained Since {transactionYear}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Widgets