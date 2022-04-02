import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllCountries, setOrder } from '../../redux/action';

const OrderByName = () => {
    const dispatch = useDispatch();

    const handleSelectName = (e) => {
        dispatch(setOrder(e.target.value));
        dispatch(getAllCountries({order: e.target.value}));
    }

  return (
    <div>
        <span>Order By Name: </span>
        <select onChange={handleSelectName}>
          <option value={"all"}>-- All --</option>
          <option value={"asc"}>-- Ascendente --</option>
          <option value={"desc"}>-- Descendente --</option>
        </select>
    </div>
  )
}

export default OrderByName;