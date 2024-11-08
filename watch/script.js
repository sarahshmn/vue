new Vue ({
    el: "#app",
    data: {
        GB: null,
        MB: null,
        Message: '',
        isTyping: false,
    },
    watch:{ 
        GB: function(val){
            this.MB = val * 1024;
        },
        MB : function(val) {
            this.GB = val / 1024;

        },
        Message : function() {
            this.isTyping = true
            setTimeout(()=> {
                this.isTyping = false
            }, 2000)
            
        }
        

    }

})