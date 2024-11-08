new Vue ({
    el: "#app",
    data: {
        newTodo: '',
        todos:[
            'طراحی وب',
            'یادگیری ویو جی اس',
            'نوشتن مقاله',
            'خواندن درس',
            'تحقیق',
            'سوشیال',
    ]
},
methods: {
    addTodo: function () {
     if (this.newTodo == "") {
        alert('لطفا چیزی به لیست اضافه نمایید!')
     }   else {
        this.todos.push(this.newTodo)
        this.newTodo = ''
     }
    },
    removeTodo: function (index) {
        this.todos.splice(index , 1)
    }
}
})