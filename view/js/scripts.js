const vm = new Vue({
    el: "#app",
    data: {
        notComp: []
    },
    methods: {
        fetchNotComp: function() {
            fetch("/api/list/not-complete")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
        }
    }
})

vm.fetchNotComp();