import { createContext, useReducer } from 'react';

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        tes: action.payload,
      };
    case 'CREATE_WORKOUT':
      return {
        tes: [action.payload, ...state.tes],
      };
    case 'DELETE_WORKOUT':
      return {
        tes: state.tes.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { tes: null });

  return <WorkoutsContext.Provider value={{ ...state, dispatch }}>{children}</WorkoutsContext.Provider>;
};
