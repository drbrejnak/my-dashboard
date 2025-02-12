import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { mockTransactions } from '../data/mockData'

const columns = [
    {field: 'user', headerName: 'User'},
    {field: 'date', headerName: 'Date'},
    {field: 'cost', headerName: 'Cost'},
    {field: 'txId', headerName: 'ID'},
];

const rows = mockTransactions.map((obj, index) => ({...obj, id: index+1}));

const paginationModel = { page: 0, pageSize: 5 };

const RecentTransactions = () => {

    return(
        <Paper sx={{ height: 400, width: '30vw', boxShadow:'0 0 1px 1px rgb(240, 240, 240)' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
          />
        </Paper>
    )
}

export default RecentTransactions