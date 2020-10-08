import { combineReducers } from 'redux';


const songsReducer = () =>{
    
  return[
    { title: 'google ', duration: '4:05'  },
    { title: 'Microsoft ', duration: '5:43'  },
    { title: 'Yahoo', duration: '3:15'  },
    { title: 'Alt star ', duration: '7:58'  },
    { title: 'Netflex', duration: '1:45'}

  ];
}; 

const selectedSongreducer = (selectedSong = null, action) =>{
  
  if(action.type === 'SONG_SELCTED'){
       
     return action.payload;
  } 
  return selectedSong
   
};

export default  combineReducers({

   songs: songsReducer,
   selectedSongreducer: selectedSongreducer


});