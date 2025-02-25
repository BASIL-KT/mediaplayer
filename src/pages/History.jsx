import React,{useState,useEffect} from 'react'
import { getHistoryapi,deleteHistory } from '../services/allApi'


function History() {

  const [historylist,setHistorylist]=useState([])
  const [resp,setResp]=useState({})

  useEffect(()=>{
    getData()
  },[resp])

  const getData=async()=>{
    const result=await getHistoryapi()
    if(result.status==200){
      setHistorylist(result.data)
      console.log(result.data)
    }
  }

  const deleteHis=async(id)=>{
    const result=await deleteHistory(id)
    if(result.status==200){
      setResp(result)
    }
  }
  return (

    <>
    <h2>Watch History</h2>

    {
      historylist.length>0 ?
      <table className="table table-dark">
      <thead>
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Video URL</td>
          <td>Date and Time</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {
          historylist.map(item=>(
            <tr>
          <td>{item.vid}</td>
          <td>{item.title}</td>
          <td>{item.url}</td>
          <td>{item.date}</td>
          <td>
            <button className='btn' onClick={()=>{deleteHis(item.id)}}>
            <i className="fa-solid fa-trash fa-2xl" style={{color: "#cf0707",}} />
            </button>
          </td>
        </tr>
          ))
        }
        
      </tbody>
    </table>

    :
    <h3>NO history</h3>
    }

    
    </>
  )
}

export default History