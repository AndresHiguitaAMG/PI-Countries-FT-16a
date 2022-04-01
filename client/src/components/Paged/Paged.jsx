import React from 'react'
import './Paged.modules.css';

const Paged = ({ countriesPerPage, allCountries, totalPages }) => {
    const pageNumber = [];
    //Redondea todos mis paises sobre la cantidad de paises que quiero por pagina
    const paginado = Math.ceil(allCountries/countriesPerPage); //la cantidad de páginas es igual a la cantidad de perros dividido por la cantidad de perros por pagina
    for (let i = 1; i <= paginado; i++) {
        //Push a mi arreglo vacio para que tome el valor de esa itreción
        pageNumber.push(i)
    }
    return (
        //Renderizo y si tengo ese arreglo lo mapeo y devuelvo en ese arreglo cada uno de los numeros que duvuelva el totalPages
        <>
            <ul className="pageNumbers">
                {pageNumber?.map(el =>(
                    
                    <li key={el}>
                        <a onClick={()=> totalPages(el)}>{el}</a>
                    </li>
                ))}
            </ul>
        </>
    )
}
 
export default Paged;