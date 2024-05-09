import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RecipeReducer, { getData } from '../../Redux/RecipeSlice';
import { store } from '../../Redux/Store';

export default function Recipe() {
    let dispatch= useDispatch();
   let { recipeList,isloading,isErr}= useSelector((store)=>store.recipeData)
    useEffect(()=>{
        dispatch(getData());
    },[])

  return (
    <div className='container mt-3'>
            <div className="row">
                {recipeList.map((recipe) => (
                    <div className="col-md-4 mb-4" key={recipe.recipe_id}>
                        <div className="card h-100 shadow-sm d-flex flex-column">
                            <img src={recipe.image_url} className='card-img-top w-100'
                             style={{ height: '200px', objectFit: 'cover' }} alt={recipe.title} />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.title}</h5>
                                <h5 className="card-title"><span className='text-main'>Publisher: </span>{recipe.publisher}</h5>
                              
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}
 