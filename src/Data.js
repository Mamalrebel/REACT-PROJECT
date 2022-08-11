import React, { useState } from 'react'

const Data = () => {
    const [cartValue, setcartValue] = useState([]);
    fetch("https://api.jsonbin.io/v3/b/62b2f1d4449a1f382115026d")
        .then(res => {
        res.json()
        }).then(data => {
        setcartValue(data.record);
        }) 
        return (
            cartValue
        )
}
