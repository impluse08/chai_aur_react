import { useEffect, useState } from "react"
const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json'

function useCurrenyInfo(curreny){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[curreny]))
        console.log(data);
    },[curreny])
    console.log(data);
    return data
}

export default useCurrenyInfo;