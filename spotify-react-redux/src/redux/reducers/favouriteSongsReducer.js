const initialState = {
    favourites: {
      songs: [],
    },
  }

  const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVOURITES':
        let existsAlready = false;
        state.favourites.songs.forEach(song => {
          if(song.id===action.payload.id){
            existsAlready = true;
            console.log("exists already!")
          }
        });
        if(existsAlready){
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
  