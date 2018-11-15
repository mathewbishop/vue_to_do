const vm = new Vue({
    el: "#app",
    data: {
        notComp: [],
        complete: []
    },
    methods: {
        fetchNotComp: function() {
            let self = this;
            fetch("/api/list/not-complete")
            .then(res => res.json())
            .then(data => {
                data.forEach(item => {
                    let listItem = item.list_item;
                    self.notComp.push(listItem);
                });
            });
        }
    }
})

vm.fetchNotComp();
