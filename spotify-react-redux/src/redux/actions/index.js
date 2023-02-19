export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const SEARCH = 'SEARCH'
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG'

export const addToFavourites = (song)=>{
    return{
        type: 'ADD_TO_FAVOURITES',
        payload: song,
    }   
}

export const removeFromFavourites = (id)=>{
    return{
        type: 'REMOVE_FROM_FAVOURITES',
        payload: id,
    }
}

export const search = (query) =>{
    return async (dispatch, getState)=>{
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
            if (response.ok) {
              const jobs = await response.json()
              dispatch({
                type: SEARCH,
                payload: jobs.data,
              })
            } else {
              console.log("Uh oh!")
            }
          } catch (error) {
            console.log(error)
          }
    }
}

export const setCurrentSong = (currentSong)=>{
    return{
        type: 'SET_CURRENT_SONG',
        payload: currentSong,
    }
}