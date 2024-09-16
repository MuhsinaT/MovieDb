import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addMovie } from '../Services/AllApi';
import { toast } from 'react-toastify';

function Add({res}) {


    const [show, setShow] = useState(false);

    const [movie,setMovie]=useState({
        title:"",language:"",year:"",imageUrl:""
    })


    const handleAdd=async()=>{
        console.log(movie);
        const {title,language,year,imageUrl}=movie
        if(!title || !language ||!year || !imageUrl){
            toast.warning("Please Enter Valid Input")
        }
        else{
            const result=  await addMovie(movie)
            console.log(result);
            if(result.status==201){
                toast.success("Movie added successfully")
                handleClose()
                setMovie({
                    title:"",language:"",year:"",imageUrl:""
                })
                res(result)
            }
            else{
                toast.error("Adding Failed")
            }
            
        }
        
    }



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <div className='d-grid p-4'>
        <button className='btn btn-info' onClick={handleShow}>
            Add  Movies
        </button>


        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div>
            <input type="text" placeholder='Movie Name'  onChange={(e)=>(setMovie({...movie,title:e.target.value}))} className='form-control mb-4' />
            <input type="text" placeholder='Language'  onChange={(e)=>(setMovie({...movie,language:e.target.value}))}className='form-control mb-4' />
            <input type="text" placeholder='Year' onChange={(e)=>(setMovie({...movie,year:e.target.value}))} className='form-control mb-4' />
            <input type="text" placeholder='Poster Url'  onChange={(e)=>(setMovie({...movie,imageUrl:e.target.value}))} className='form-control mb-4' />



         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}

export default Add
