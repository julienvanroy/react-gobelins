const initialState = {
    chartData: [],
    historique: [],
  };
  
  const single = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CHARTDATA':
        return {...state, chartData: action.chartData};
        case 'SET_HISTORIQUE':
        return {...state, historique: action.historique};
      default:
        return state;
    }
  };
  
  export default single;
  