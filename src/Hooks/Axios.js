import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const useAxios = (url) => {
const[response,setResponse]=useState(null);
const[loading,setLoading]=useState(true);
const[error,setError]=useState('');
    const history = useNavigate()



    useEffect(() => {
        let unmouting=true
        if (unmouting) {
            axios.get(url)
                .then(res => setResponse(res.data.results))
                .catch(error => setError(error))
                .finally(() => setLoading(false))
        }else {
            history('/')
        }


        return () => {
            unmouting = false
        }

    }, [url]);
    return {response, loading, error}
};

export default useAxios;

