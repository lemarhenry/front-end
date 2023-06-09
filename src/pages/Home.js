// import Table from 'react-bootstrap/Table';
import {useEffect, useState} from 'react'
import WorkoutDetailsTable from '../components/workoutDetails'
import WorkoutForm from '../components/createWorkout'





const Home = ()=>{
	//creating workout state
	const [workouts,setWorkouts]=useState(null)
	//use effect hook to get the data from the api backend
	useEffect(()=>{
		const fetchWorkouts =async()=>{
		const response = await fetch('http://localhost:8080/api/workouts/')
		const data = await response.json()

		if(response.ok){
			setWorkouts(data)

	
		}
	
	}

	fetchWorkouts()
},[])



	return(
		<div className="home">
		 	<div className="workouts">
			{/* checks to ensure workouts is not null before mapping over them */}
			{workouts&&workouts.data.map((workout)=>(

				//passing the workout PROP to the workoutDetails
				<WorkoutDetailsTable key={workout.id} workout={workout}/>

			))}


			</div>
			<WorkoutForm/>
		</div>
	)
}

export default Home