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
            });
        },
        fetchComplete: function() {
            let self = this;
            fetch("/api/list/complete")
            .then(res => res.json())
            .then(data => {
                self.complete = data
            });
        },
        addItem: function() {

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
        deleteItem: function(content) {
            
        },
        empty: function() {
            this.notComp = [];
            this.complete = [];
        }
    }
})

// On page load, get initial list item data and state
vm.fetchNotComp();
vm.fetchComplete();