import React from 'react';
import { Trash2 } from 'feather-icons-react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>
          Load (kg) : <strong>{workout.load}</strong>
        </strong>
      </p>
      <p>
        <strong>
          Reps : <strong>{workout.reps}</strong>
        </strong>
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>
        <Trash2 size={20} />
      </span>
    </div>
  );
};

export default WorkoutDetails;
