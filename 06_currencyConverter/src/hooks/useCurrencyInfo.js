import { useEffect, useState } from "react";

//let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
        const data = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>{
            res.json();
        })
        .then((res)=>{
            setData(res[currency]);
        })
    },[currency])
    console.log(data.currency);
    return data;
    
}

export default useCurrencyInfo;