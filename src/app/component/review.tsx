import React, { useEffect, useState } from 'react'
import { getReviewByProductId } from '../utils/api';
import axios from 'axios';
import { backendurl } from '../utils/constant';
import apiClient from '../utils/apiclient';

type ReviewProps = {
    productId:string|undefined,
}

const Review = ({productId}:ReviewProps) => {
    const [data,setData]= useState([]);

    useEffect(() => {
        apiClient.get(`/products/${productId}/reviews`).then((res)=>{console.log("Result",res);setData(res.data)}).catch((err)=>console.log(err));
    }, [])

    if(data.length<=0){
        return <div>No Reviews</div>
    }
    
  return (
    <div>
        {
            data.map((res,i)=>(
                <div key={i}>
                    <h6>{res.username}</h6>
                    <h6>{res.comment}</h6>
                </div>
            ))
        }
    </div>
  )
}

export default Review