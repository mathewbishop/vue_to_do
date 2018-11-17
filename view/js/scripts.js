const vm = new Vue({
    el: "#app",
    data: {
        notComp: [],
        complete: []
    },
    methods: {
        fetchItems: function() {
            let self = this
            fetch("/api/todolist")
            .then(res => res.json())
            .then(data => {
                data.forEach(item => {
                    if (item.completed === 0) {
                        self.notComp.push(item);
                    }
                    if (item.completed === 1) {
                        self.complete.push(item)
                    }
                })
            });
        },
        addItem: function() {
            let self = this
            let newItem = {
                list_item: document.getElementById("li-input").value
            }
            fetch("/api/todolist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newItem)
            })
            .then(response => response.json())
            .then(data => {
                self.notComp = data;
            })
            document.getElementById("li-form").reset();
        },
        markComplete: function(id) {
            fetch("/api/todolist/:id", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(id)
            })
            .then(res => {
                console.log(res)
            })
        },
        deleteItem: function(id) {
            fetch(`/api/todolist/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "text" },
                body: id
            })
            .then(res => {
                console.log(res)
            })
        },
        empty: function() {
            this.notComp = [];
            this.complete = [];
        }
    }
})

// On page load, get initial list item data and state
vm.fetchItems();

