import React, {useState, useEffect } from 'react';
import {server_calls} from '../api';

export const useGetData = () => {
    const [carData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }
    // Introducing the useEffect hook to add data to react State
    useEffect( () =>{
        handleDataFetch();
    }, [])

    return {carData, getData:handleDataFetch}
}