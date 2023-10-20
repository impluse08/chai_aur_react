import React, { useEffect } from "react";
import { useState } from "react";
function Github(){
    const [data, setData] = useState([])
    useEffect(() =>
    {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }
    , [])
    return(
        <div className="bg-gray-700 text-white">Github followers: {data.followers}</div>
    );
}

export default Github