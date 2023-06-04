import { useAuthContext } from './useAuthContext';
import { useWorkoutsContext } from './useWorkoutsContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutsContext } = useWorkoutsContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user');
    // dispatch logout action
    dispatch({ type: 'LOGOUT' });
    workoutsContext({ type: 'SET_WORKOUTS' });
  };
  return { logout };
};
