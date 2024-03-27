import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Total = () =>{
    const[total, setTotal] = useState(0);
    const updateTotal = (event) => {
        switch (event.target.id) {
          case "product1":
            setTotal(total => total + 29.99);
            break;
          case "product2":
            setTotal(total => total + 14.99);
            break;
          case "product3":
            setTotal(total => total + 59.99);
            break;
          case "product4":
            setTotal(total => total + 39.99);
            break;
          case "product5":
            setTotal(total => total + 25.99);
            break;
          default:
            break;
        }
      };

      return (
        total
      )
}



export default Total;