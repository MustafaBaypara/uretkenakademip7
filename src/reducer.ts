
const initialState = {
    count: 0,
  };
  
const reducer = (state: { count: number }, action: any) => {
    switch (action.type) {
      case "ARTTIR":
        return {
          ...state,
          count: state.count + 1,
        };
      case "AZALT":
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };

export { initialState, reducer };
  