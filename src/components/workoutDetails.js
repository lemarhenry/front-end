import Table from 'react-bootstrap/Table';


//workout PROP from Home page line 35
const WorkoutDetailsTable =({workout})=> {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Exercise Name</th>
          <th>Reps</th>
          <th>Weights (LB)</th>
          <th>Sets</th>
		   <th>Created at</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{workout.exerciseName}</td>
          <td>{workout.reps}</td>
          <td>{workout.weights}</td>
          <td>{workout.sets}</td>
		   <td>{workout.createdAt}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default WorkoutDetailsTable;