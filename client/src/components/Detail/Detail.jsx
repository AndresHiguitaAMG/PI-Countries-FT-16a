import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCountriesById } from '../../redux/action';

const Detail = (props) => {
  const dispatch = useDispatch();
  // const { id } = props.match.params;
  const { detail } = useSelector(state => state);
  console.log(detail);

  useEffect (() => {
    dispatch(getCountriesById(props.match.params.id));
  }, [dispatch, props]);



  return (
    <div>
      <div className = "card-foot">
        <NavLink to="/home">Home</NavLink>
      </div>
         {/* <button onClick={handleGoToBack}>To return◀</button> */}

            {
                detail.length > 0 ?
                <div className= "container-detail">
                    <div className = "tarjeta">
                        <div className = "tarjeta-image">
                            <img src={detail[0].flag} alt="img not found" width="350px" heigth="290px"/>
                        </div>
                        
                        <div tajeta-text>
                            <h3>{detail[0].name}</h3>
                        </div>

                        <div>
                          {detail[0].capital}
                        </div>
                        
                        <div>
                            <p>{detail[0].continent}</p>
                        </div>

                        <div>
                          <p>{detail[0].subregión}</p>
                        </div>
                        
                        <div>
                          <p>{detail[0].area}</p>
                        </div>

                        <div>
                          <p>{detail[0].population}</p>
                        </div>

                        <div>
                          <p>{detail[0].activities.map((act) => (
                        <li key={act.id}>
                       <p>
                        <strong>{act.name}</strong> ({act.season}) | Duration:{' '}
                        {act.duration} - Difficulty: {act.difficulty}
                      </p>
                      </li>
                      ))}</p>
                        </div> 
                    </div>  
                </div>
                :
                <div>Loading</div>
            }
    </div>
  )
}

export default Detail;