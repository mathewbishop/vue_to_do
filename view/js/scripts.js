const vm = new Vue({
    el: "#app",
    data: {
        notComp: [],
        complete: []
    },
    methods: {
        fetchNotComp: function() {
            let self = this
            fetch("/api/list/not-complete")
            .then(res => res.json())
            .then(data => {
                self.notComp = data
                // data.forEach(item => {
                //     let listItem = item.list_item;
                //     self.notComp.push(listItem);
                // });
            });
        },
        fetchComplete: function() {
            let self = this;
            fetch("/api/list/complete")
            .then(res => res.json())
            .then(data => {
                data.forEach(item => {
                    let listItem = item.list_item;
                    self.complete.push(listItem);
                });
            });
        },
        markComplete: function(content) {
            fetch("/api/list/item-update", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(content)
            })
            .then(this.fetchComplete())
            .then(this.fetchNotComp())
        },
        empty: function() {
            this.notComp = [];
            this.complete = [];
        }
    }
})

vm.fetchNotComp();
vm.fetchComplete();