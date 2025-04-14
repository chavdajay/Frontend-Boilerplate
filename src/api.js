import axios from 'axios';

export const createDemo = async(demo)=>{
    try{
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/create`, demo, {
            headers:{
                'Content-Type' : 'application/json'
            },
        });
        return response.data;
    }catch(err){
        console.log('error creating demo..', err);
    }
};

export const fetchDemo = async()=>{
    try{
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/fetch`, {
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        return response.data;

    }catch(err){
        console.log('error Fetching demo..', err);
    }
}

export const updateDemo = async(id, demo) =>{
    try{
         const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/update/${id}`, demo, {
            headers:{
                'Content-Type' : 'application/json'
            }
         });
         return response.data;

    }catch(err){
        console.log('error Update the demo..', err);
    }
}

export const deleteDemo = async(id) =>{
    try{
        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/delete/${id}`,{
            headers:{
                'Content-Type':'application/json'
            }
        });
         
        return response.data;
    }catch(err){
        console.log('error delete demo', err);
    }
}