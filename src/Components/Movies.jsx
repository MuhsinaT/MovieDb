import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getMovies, getDelete } from '../Services/AllApi';
import { toast } from 'react-toastify';

function Movies({ result }) {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    getdata()
  }, [result])

  const getdata = async () => {
    const result = await getMovies()
    console.log(result);
    if (result.status === 200) {
      setMovieList(result.data)
    }
  }

  const handleDelete = async (id) => {
    const res = await getDelete(id)
    console.log(res);
    if (res.status === 200) {
      getdata()
      toast.success("Movie Removed")
    }
  }

  return (
    <>
      <h3 className='mt-4'>All Movies</h3>
      <div className='border border-2 border-black p-3'>
        {
          movieList.length > 0 ?
            <div className='row'>
              {
                movieList.map((item) => (
                  <div key={item.id} className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center'>
                    <Card style={{ width: '18rem' }} className='m-3'>
                      <Card.Img variant="top" src={item?.imageUrl} />
                      <Card.Body>
                        <Card.Title>{item?.title}</Card.Title>
                        <Card.Text className='d-flex justify-content-between'>
                          <span>{item?.year}</span>
                          <span>{item?.language}</span>
                        </Card.Text>
                        <button className='btn' onClick={() => { handleDelete(item.id) }}>
                          <i className='fa-solid fa-trash fa-lg' style={{ color: "#f11e3d" }}></i>
                        </button>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              }
            </div>
            :
            <h2>No Movies Available</h2>
        }
      </div>
    </>
  )
}

export default Movies
