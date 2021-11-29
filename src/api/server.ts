let token = `a3ae6aabc27729090a3601f065599577bcca3cc7606c94df`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://cool-car-collection.herokuapp.com/api/drones`, {
            method : 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            }
        });
        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://cool-car-collection.herokuapp.com/api/drones`, {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create a new car on server')
        }
        return await response.json()
    },
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://cool-car-collection.herokuapp.com/api/drones`, {
            method : 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update a new car on server')
        }
        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`https://cool-car-collection.herokuapp.com/api/drones`, {
            method : 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            },
        });
        if(!response.ok){
            throw new Error('Failed to delete a new car on server')
        }
        return await response.json()
    },
}