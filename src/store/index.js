import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        PersonsNotes: [
            {
            name:"Hans",
            sirname:"Peter",
            age:"32",
            relationshitatus:"",
            partnerName:"",
            location:"Berlin",
            job:"",
            mainHobby:""
        },
        {
            name:"Petra",
            sirname:"Hansen",
            age:"32",
            relationshitatus:"",
            partnerName:"",
            location:"",
            job:"",
            mainHobby:""
        }
    ]
    },
    mutations: {
        
    },
    actions: {
        
    },
    getters:{
        notes (state){
            return state.PersonsNotes;
        }
    }
}
)