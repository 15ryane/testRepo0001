export const combineReducers = <Reducer extends Function, State, Action>(
  ...reducers: Reducer[]
): React.Reducer<State, Action> => {
  const combinedReducer = (state: State, action: Action): State => {
    for (let i = 0; i < reducers.length; i++) {
      const newState = reducers[i](state, action);
      if (newState !== state) return newState;
    }
    return state;
  };
  return combinedReducer;
};
