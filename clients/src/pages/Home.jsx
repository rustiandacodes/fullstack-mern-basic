import React, { useEffect } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const { tes, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch('api/workouts');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json });
      }
    };
    if (user) {
      fetchWorkout();
    }
  }, [dispatch, user ]);

  return (
    <div className="home">
      <div className="workouts">{tes && tes.map((workout) => <WorkoutDetails key={workout._id} workout={workout} />)}</div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
