const initialState = {
    favourites: {
      songs: [],
    },
  }

  const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVOURITES':
        if(state.favourites.songs.some((song)=>song.id===action.payload.id)){
            return {
                favourites:{
                    ...state.favourites,
                }
            }
        }else{
            return {
                favourites: {
                    ...state.favourites,
                    songs: [...state.favourites.songs, action.payload],
                    
                },
            }
        }
  
      case 'REMOVE_FROM_FAVOURITES':
        console.log("removin!",state,action.payload)
        return {
          favourites: {
            songs: state.favourites.songs.filter((song) => song.id !== action.payload),
          },
        }
  
      default:
        return state
    }
  }
  
  export default favouritesReducer
  