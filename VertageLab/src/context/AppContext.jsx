import { createContext, useContext, useReducer } from "react";
import { generate } from "shortid";

export const AppStateContext = createContext();
export const AppDispatchContext = createContext();

const initialState = {
  gradients: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addGradient":
      return {
        gradients: [...state.gradients, { ...action.gradient, id: generate() }],
      };
    case "updateGradient":
      return {
        gradients: state.gradients.map((g) =>
          g.id === action.gradient.id ? action.gradient : g
        ),
      };
    case "deleteGradient":
      return {
        gradients: state.gradients.filter((g) => g.id !== action.gradient.id),
      };

    default:
      throw Error("something went wrong");
  }
}

export const AppProviders = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw Error("useAppContext must be called within AppContextProvider");
  }
  return context;
};

export const useDispatchContext = () => {
  const context = useContext(AppDispatchContext);
  if (!context) {
    throw Error("useDispatchContext must be called within AppContextProvider");
  }
  return context;
};

export const useAddGradient = () => {
  const dispatch = useDispatchContext();
  return function (gradient) {
    dispatch({ type: "addGradient", gradient });
  };
};
export const useUpdateGradient = () => {
  const dispatch = useDispatchContext();
  return function (gradient) {
    dispatch({ type: "updateGradient", gradient });
  };
};

export const useSaveGradient = () => {
  const addGradient = useAddGradient();
  const updateGradient = useUpdateGradient();
  return function (gradient) {
    return gradient.id ? updateGradient(gradient) : addGradient(gradient);
  };
};

export const useDeleteGradient = () => {
  const dispatch = useDispatchContext();
  return function (gradient) {
    dispatch({ type: "deleteGradient", gradient });
  };
};
