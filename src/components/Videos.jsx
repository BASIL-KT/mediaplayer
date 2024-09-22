import React,{useEffect,useState} from 'react'
import Videocard from './Videocard'
import { getVideosApi } from '../services/allApi'

function Videos(result) {

  const [data,setData]=useState([])
  const [resp,setResp]=useState({})

  useEffect(()=>{
    getData()
  }, [result,resp])

  const getData=async()=>{
    const result=await getVideosApi()
    console.log(result)
    if (result.status == 200){
      setData(result.data)
    }
  }
  return (
    <>
    <div className='container-fluid border border-3'>
      {
        data.length>0 ?
        <div className='row p-2 justify-content-around'>
          {data?.map(item=>(
                 <Videocard video={item} res={setResp}/>

          ))}
        </div>

        :
        <h4 className='text-danger text-center'>NO videos available</h4>
      }
    </div>
    </>
  )
}

export default Videos