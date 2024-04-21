import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddActivity({ show, handleClose, handleAddActivity }) {
 const [activityData, setActivityData] = useState({
   name: '',
   minScore: '',
   maxScore: ''
 });
 
 const handleChange = (e) => {
   const { name, value } = e.target;
   // Validate if the value is negative for maxScore and minScore
   if ((name === 'maxScore' || name === 'minScore') && parseFloat(value) < 0) {
     // If value is negative, set it to 0
     setActivityData({ ...activityData, [name]: 0 });
   } else {
     // Otherwise, update the state normally
     setActivityData({ ...activityData, [name]: value });
   }
 };
/*  const handleSubmit = (e) => {
   e.preventDefault();
   // Validate input data
   if (
     activityData.name.trim() === '' ||
     isNaN(activityData.minScore) ||
     isNaN(activityData.maxScore) ||
     parseFloat(activityData.minScore) < 0 ||
     parseFloat(activityData.maxScore) < 0 ||
     parseFloat(activityData.minScore) > parseFloat(activityData.maxScore)
   ) {
     // Display error message
     console.error('Invalid activity data.');
     return;
   }
   // Call handleAddActivity if data is valid
   handleAddActivity(activityData);
 }; */

 return (
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>Add New Activity</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form onSubmit={handleSubmit}>
<Form.Group controlId="formActivityName">
<Form.Label>Name</Form.Label>
<Form.Control
             type="text"
             name="name"
             value={activityData.name}
             onChange={handleChange}
             required
           />
</Form.Group>
<Form.Group controlId="formActivityMinScore">
<Form.Label>Min Score</Form.Label>
<Form.Control
             type="number"
             name="minScore"
             value={activityData.minScore}
             onChange={handleChange}
             required
           />
</Form.Group>
<Form.Group controlId="formActivityMaxScore">
<Form.Label>Max Score</Form.Label>
<Form.Control
             type="number"
             name="maxScore"
             value={activityData.maxScore}
             onChange={handleChange}
             required
           />
</Form.Group>
<Button variant="primary" type="submit">
           Add Activity
</Button>
</Form>
</Modal.Body>
</Modal>
 );
}

export default AddActivity;