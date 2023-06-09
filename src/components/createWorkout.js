import { useState } from "react"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import Modal from 'react-bootstrap/Modal';


const WorkoutForm = () =>{
	const [exerciseName,setExerciseName] = useState('')
	const [reps,setReps] = useState('')
	const [weights,setWeights] = useState('')
	const [sets,setSets] = useState('')
	const [error,setError] =useState(null)
 	const [show, setShow] = useState(false);
	const [showT,setShowT] = useState(false)
	const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
	const showToast =()=>setShowT(true);



    const handleSubmit = async(e) => {
		// e.preventDefault() to prevent the submit event from firing on each key stroke
		e.preventDefault()
		// created a workout object with the following properties from the form
		const workout={exerciseName,reps,weights,sets}

		const response = await fetch('http://localhost:8080/api/workouts/', {
		method: 'POST',
		// converted the workout object to json 
		body:JSON.stringify(workout),
		headers: {"Content-Type": "application/json"
		}

		})
			// saving the response now in json format in a new constant json
			const json = await response.json()

			if(!response.ok){
				setError(json.error.errors.message)
				showToast()
			}
			if(response.ok){
				

				setExerciseName('')
				setReps('')
				setWeights('')
				setSets('')
				setError(null)
			
				

				// response.message
				console.log(json.message)

			}

	}




 return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Create a new workout Plan
      </Button>

      <Modal show={show} onHide={handleClose} onSubmit ={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Exercise Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Push ups"
                autoFocus
				onChange={(e)=> setExerciseName(e.target.value)}
				value ={exerciseName}
              />
            {/* </Form.Group> */}
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> */}
              <Form.Label>Reps</Form.Label>
              <Form.Control
                type="number"
                placeholder="10"
                autoFocus
				onChange={(e)=> setReps(e.target.value)}
				value ={reps}
              />
            {/* </Form.Group>
			 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> */}
              <Form.Label>Weights in LB</Form.Label>
              <Form.Control
                type="number"
                placeholder="100"
                autoFocus
				onChange={(e)=> setWeights(e.target.value)}
				value ={weights}
              />
            {/* </Form.Group>
			 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> */}
              <Form.Label>Sets</Form.Label>
              <Form.Control
                type="number"
                placeholder="10"
                autoFocus
				//onChange to change grab the data that is input from the user and set it to the value on submit
				onChange={(e)=> setSets(e.target.value)}
				//two way data binding
				value ={sets}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
		  <Toast show={showT} onHide={handleClose}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Error</strong>
        <small>1 mins ago</small>
       </Toast.Header>
        <Toast.Body>{error}</Toast.Body>
      </Toast>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default WorkoutForm