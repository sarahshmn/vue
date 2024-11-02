new Vue({
    el: "#app",
    data: {
        togglePassword: document.getElementsByClassName('toggle-password')
    },
    methods: {
        changeEye: function() {
            if(document.getElementById('password-field').type=="text") {
                document.getElementById('password-field').type="password"
            } else {
                document.getElementById('password-field').type="text"

            }
        }
    }

})