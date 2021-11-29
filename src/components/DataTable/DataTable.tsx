import React from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

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

export const DataTable = () => {
  let { carData, getData } = useGetData();
  return (
    <div style={{ height: 400, width: '100%'}}>
        <h2>Cars in Inventory</h2>
        <DataGrid rows={carData} 
                  columns={columns} 
                  pageSize={5} 
                  checkboxSelection
                  />
    </div>
  )
}