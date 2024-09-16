import React, { useState } from 'react'
import Add from '../Components/Add'
import Movies from '../Components/Movies'
import { Row,Col } from 'react-bootstrap'

function Home() {
    const[response,setResponse]=useState("")
    
  return (
    <>
    <div className='container-fluid'>
        <Row>
            <Col sm={12} md={3}>
            <Add  res={setResponse} />
            </Col>

            <Col sm={12} md={9}>
            <Movies result={response}/>
            </Col>
        </Row>
    </div>
    
    </>
  )
}

export default Home
