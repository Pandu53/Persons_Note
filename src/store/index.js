import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        PersonsNotes: [
            {
            id:0,
            name:"Hans",
            sirname:"Peter",
            age:"32",
            relationshitatus:"",
            partnerName:"",
            location:"Berlin",
            job:"",
            mainHobby:"",
            birthdate:""
        },
        {
            id:1,
            name:"Petra",
            sirname:"Hansen",
            age:"32",
            relationshitatus:"",
            partnerName:"",
            location:"",
            job:"",
            mainHobby:"",
            birthdate:""
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