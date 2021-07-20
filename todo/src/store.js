import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const MAKE_TODO = 'MAKE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export default new Vuex.Store({
    state: {
        todos: [],
    },
    mutations: {
        [MAKE_TODO](state, input) {
            const todo =  {
                id: setId(state),
                content: input,
                createdAt: getCurrentDateTime(),
            };
            state.todos.push(todo);
        },
        [REMOVE_TODO](state, id) {
            const findOne = state.todos.find(element => {
                return element.id === id;
            })
            const idx = state.todos.indexOf(findOne);
            if (idx > -1) {
                state.todos.splice(idx, 1);
            }
        }
    },
})

function setId(state) {
    if (state.todos.length > 0) {
        return state.todos[state.todos.length - 1].id + 1;
    } else {
        return 1;
    }
}

function getCurrentDateTime() {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    return year + '/' + month + '/' + date + " " + hours + ":" + minutes;
}
