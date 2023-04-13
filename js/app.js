const app = Vue.createApp({
    data() {
        return {
            todos: [],
            newTodo: ''
        }
    },
    mounted() {
        axios.get('todos.json')
            .then(response => {
                this.todos = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo.trim(), done: true });
                this.saveTodo();
                this.newTodo = '';
            }
        },
    }
});

app.mount('#app');