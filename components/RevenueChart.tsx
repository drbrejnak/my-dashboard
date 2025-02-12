import * as React from 'react'
import { LineChart } from '@mui/x-charts'
import { mockTransactions } from '../data/mockData'

const RevenueChart = () => {

    const transactionDates = mockTransactions.map((transaction) => transaction.date).sort().map(dateString => {
        const year = parseFloat(dateString.slice(0, 4));
        const month = parseFloat(dateString.slice(5, 7));
        const day = parseFloat(dateString.slice(8, 10));
        return new Date(`${month}-${day}-${year}`);
      })

    const transactionRev = mockTransactions.sort((a, b) => new Date(a.date) - new Date(b.date)).map((transaction) => transaction.cost).map(Number)

    console.log(transactionDates)
    console.log(transactionRev)

    return(
        <LineChart
        sx={{bgcolor: 'rgb(240, 240, 240)'}}
            xAxis={[
                {
                label: "Date",
                data: transactionDates,
                tickInterval: (time) => time.getHours() === 0,
                scaleType: "time",
                valueFormatter: (date) =>
                    date.toLocaleDateString('fr-FR', {
                      month: '2-digit',
                      day: '2-digit',
                      year: '2-digit'
                    }),
                },
            ]}
            series={[
            {
                label: "Daily Revenue",
                data: transactionRev,
                valueFormatter: (number) => `$${number}`
            },
            ]}
            width={500}
            height={300}
        />
    )
}

export default RevenueChart