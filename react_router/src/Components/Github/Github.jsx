import React, { useEffect, useState } from "react";

function Github(){

    const[Data , setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/kotharihimanshi')
       .then(response => response.json())
       .then(Data => {
        console.log(Data);
        setData(Data);
       })
    })
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers: {Data.followers}
        </div>
    )
}

export default Github;