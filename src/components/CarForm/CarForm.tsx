import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName,choosePrice } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@mui/material';

//Access Api
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?: string;
    data?: {}
}

interface CarState {
    name: string;
    price: string;
}

export const DroneForm = (props:CarFormProps) =>{
    const dispatch = useDispatch()
    let { carData, getData} = useGetData();
    const store = useStore()
    const name = useSelector<CarState>(state => state.name)
    const price = useSelector<CarState>(state => state.price)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await server_calls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(choosePrice(data.price))
            await server_calls.create(store.getState())
            window.location.reload()
        }
    }
}