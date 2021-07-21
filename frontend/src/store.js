import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const MAKE_TODO = 'MAKE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const INIT_TODO = 'INIT_TODO';

export const FETCH_TODO = 'FETCH_TODO';
export const SAVE_TODO = 'SAVE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export default new Vuex.Store({
    state: {
        todos: [],
    },
    mutations: {
        [INIT_TODO](state, todos) {
            state.todos = todos;
        },
        [MAKE_TODO](state, todo) {
            state.todos.push(todo);
        },
        [REMOVE_TODO](state, id) {
            const findOne = state.todos.find(element => {
                return element.postId === id;
            })
            const idx = state.todos.indexOf(findOne);
            if (idx > -1) {
                state.todos.splice(idx, 1);
            }
        }
    },
    actions: {
        [FETCH_TODO](context) {
            axios.get('http://localhost:8080/post')
                .then((todos) => {
                    context.commit(INIT_TODO, todos.data);
                })
        },
        [SAVE_TODO](context, input) {
            axios.post('http://localhost:8080/post/new', { content: input })
                .then((todo) => {
                    context.commit(MAKE_TODO, todo.data);
                })
        },
        [DELETE_TODO](context, id) {
            axios.delete(`http://localhost:8080/post/${id}`)
                .then(() => context.commit(REMOVE_TODO, id));
        }
    }
})
