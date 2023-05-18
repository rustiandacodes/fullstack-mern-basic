import { WorkoutsContext } from '../context/workoutsContext';
import { useContext } from 'react';

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw Error('userWorkoutContext must be used inside an WorkoutsContextProvider');
  }
  return context;
};
