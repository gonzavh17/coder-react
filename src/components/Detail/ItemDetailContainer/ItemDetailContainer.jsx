import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ItemDetailContainer() {

    const [data, setData] = useState({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                console.log("solucion")
            }, 1000);
        })
        getData.then(res => setData(res));

    }, [])

  return <div>ItemDetailContainer</div>;
}

export default ItemDetailContainer;
