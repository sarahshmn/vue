new Vue({
     el: "#app",
     data: {
        colors: ['red', 'yellow', 'blue', 'green'],
        mainColor: 'black',
     },
     methods: {
        productColor: function(color) {
            this.mainColor = color
        }
     }
})