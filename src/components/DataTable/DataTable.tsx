import React from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 140 },
    {
      field: 'name',
      headerName: 'Car name',
      width: 130,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 130,
    },
    {
      field: 'make',
      headerName: 'Make',
      width: 130,
    },
    {
      field: 'model',
      headerName: 'Model',
      width: 130,
    },
    {
      field: 'max_speed',
      headerName: 'Max Speed',
      width: 130,
    },
    {
      field: 'series',
      headerName: 'Series',
      width: 130,
    },
  ];
  
//   interface gridData{
//     data:{
//       id?:string;
//     }
//   }

const rows = [
    { id: 1, name: 'Snow', make: 'Jon', price: 35 },
    { id: 2, name: 'Lannister', make: 'Cersei', price: 42 },
    { id: 3, name: 'Lannister', make: 'Jaime', price: 45 },
    { id: 4, name: 'Stark', make: 'Arya', price: 16 },
    { id: 5, name: 'Targaryen', make: 'Daenerys', price: null },
    { id: 6, name: 'Melisandre', make: null, price: 150 },
    { id: 7, name: 'Clifford', make: 'Ferrara', price: 44 },
    { id: 8, name: 'Frances', make: 'Rossini', price: 36 },
    { id: 9, name: 'Roxie', make: 'Harvey', price: 65 },
  ];

export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%'}}>
            <h2>Cars in Inventory</h2>
            <DataGrid rows={rows} 
                      columns={columns} 
                      pageSize={5} 
                      checkboxSelection/>
        </div>
    )
}