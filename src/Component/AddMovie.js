import React, { useState } from 'react';
import { Modal,Form,InputGroup,FormControl,Button } from 'react-bootstrap';


const AddMovie = ({movies , setMovies}) => {
    const [newTitle , setTitle] =useState('')
    const [newDescrption ,setNewDescription]=useState('')
    const [newRate , setRate] =useState(0)
    const [newPoster ,setPoster]=useState('')
    const [show , setShow]= useState(false)

    const newMovies=()=>{
        let newMovies =
        {Title: newTitle,
        Description : newDescrption,
        Rate : newRate,
        Poster: newPoster}

        setMovies([...movies,newMovies])
        handleClose();

    };

const handleShow = () => setShow (true) ;
const handleClose = () => setShow (false);

  
    return (
        <div>

        <button onClick = {handleShow}>AddNew</button>

        <Modal
        show={show}
        onHide ={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text 
            id="inputGroup-sizing-default"
            
            >Enter Movie title</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setTitle(e.target.value)}
                 
              />
            </InputGroup>
             <br />

             <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Enter Movie Rating</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setRate(e.target.value)}

                 
              />
            </InputGroup>
             <br />

             <InputGroup className="mb-3">
             <InputGroup.Text id="inputGroup-sizing-default">Enter Movie PosterURL</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setPoster(e.target.value)}
                 
              />
            </InputGroup>
             <br />

             


             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Enter Movie Description</Form.Label>
               <Form.Control as="textarea" rows={3} onChange ={(e) => setNewDescription(e.target.value)} />
             </Form.Group>


             
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={newMovies}>Save</Button>
        </Modal.Footer>
      </Modal>
  
        </div>
    )
}


export default AddMovie
