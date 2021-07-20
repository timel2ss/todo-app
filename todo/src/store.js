import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const MAKE_TODO = 'MAKE_TODO';

export default new Vuex.Store({
    state: {
        todos: [],
    },
    mutations: {
        [MAKE_TODO](state, input) {
            const todo =  {
                content: input,
                createdAt: getCurrentDateTime(),
            };
            state.todos.push(todo);
        },
    },
})

function getCurrentDateTime() {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    return year + '/' + month + '/' + date + " " + hours + ":" + minutes;
}
