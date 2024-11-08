import { createStore } from "vuex"

const store =  createStore({
    state: {
        personalData: [],
        childrenData: [],
    },
    mutations: {
        setPersonalData(state, personalData) {
            state.personalData = personalData;
        },
        setChildrenData(state, childrenData) {
            state.childrenData = childrenData;
        },
    },
    getters: {
        getPersonalData(state) {
            return state.personalData;
        },
        getChildrenData(state) {
            return state.childrenData;
        }
    }
})

export default store