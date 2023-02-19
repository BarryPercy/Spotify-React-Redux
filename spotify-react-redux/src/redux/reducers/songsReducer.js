const initialState = {
    songList: [],
    songsSearched:false,
    currentSong:"",
  }

  const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                songsSearched:true,
                songList: action.payload, 
            }
        case 'SET_CURRENT_SONG':  
            return {
                ...state,
                currentSong:action.payload
            }
        default:
            return state
    }
  }
  
  export default songsReducer
  