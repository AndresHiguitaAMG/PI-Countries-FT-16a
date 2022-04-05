import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByName, setOrder, setPage } from '../../redux/action';

const OrderByName = () => {
    const dispatch = useDispatch();
    
    const handleSelectName = (e) => {
        dispatch(orderByName(e.target.value));
        dispatch(setPage(1));
        dispatch(setOrder(`order ${e.target.value}`));
    };

  return (
    <div>
        <span>Order By Name: </span>
        <select onChange={handleSelectName}>
          <option value={"asc"}>-- Ascendente --</option>
          <option value={"desc"}>-- Descendente --</option>
        </select>
    </div>
  )
}

export default OrderByName;