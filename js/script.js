new Vue({
    el: "#app",
    data: {
        togglePassword: document.getElementsByClassName('toggle-password')
    },
    methods: {
        changeEye: function() {
            if(document.getElementById('password-field').type=="text") {
                document.getElementById('password-field').type="password"
                this.togglePassword[0].classList.remove('active')
            } else {
                document.getElementById('password-field').type="text"
                this.togglePassword[0].classList.add('active')
            }
        }
    }

})