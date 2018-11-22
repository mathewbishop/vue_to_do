const vm = new Vue({
    el: "#app",
    data: {
        notComp: [],
        complete: [],
        lightTheme: "https://unpkg.com/bulmaswatch/flatly/bulmaswatch.min.css",
        darkTheme: "https://unpkg.com/bulmaswatch/darkly/bulmaswatch.min.css",
        isActive: false
    },
    methods: {
        // GET all list items
        fetchItems: function() {
            let self = this
            // Fetch (GET) request
            fetch("/api/todolist")
            // Extract the JSON response body
            .then(res => res.json())
            // Sort the response and push to the appropriate array (completed and not-completed list items)
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
        // POST method for adding a new item to the todo list
        addItem: function() {
            // Save the value of the input for to a variable
            let newItem = {
                list_item: document.getElementById("li-input").value
            }
            // Fetch POST request
            fetch("/api/todolist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newItem)
            })
            // Push the value of the input form (newItem) into the array of not completed items
            this.notComp.push(newItem)
            // Clear the input form
            document.getElementById("li-form").reset()
        },
        // PUT method to mark a list item as completed
        markComplete: function(id) {
            // Fetch PUT request
            fetch("/api/todolist/:id", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(id)
            })
            // Save the index of the item being clicked to a variable
            let index = this.notComp.indexOf(id)
            // Remove that item from the 'notComp' array
            this.notComp.splice(index, 1)
            // Add the item to the 'completed' array
            this.complete.push(id)
            
        },
        // DELETE method to remove a completed item
        deleteItem: function(id) {
            // Fetch DELETE request
            fetch(`/api/todolist/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "text" },
                body: id
            })
            // Save the index of the item clicked
            let index = this.complete.indexOf(id)
            // Remove the item from the 'completed' array
            this.complete.splice(index, 1)
        },
        // Select light theme
        lightThemeToggle: function() {
            let theme = document.getElementById("theme")
            theme.href = this.lightTheme
            let lightBtn = document.getElementById("lightBtn");
            lightBtn.classList.add("is-info");
            let darkBtn = document.getElementById("darkBtn");
            darkBtn.classList.remove("is-info");
        },
        // Select dark theme
        darkThemeToggle: function() {
            let theme = document.getElementById("theme")
            theme.href = this.darkTheme
            let darkBtn = document.getElementById("darkBtn");
            darkBtn.classList.add("is-info");
            let lightBtn = document.getElementById("lightBtn");
            lightBtn.classList.remove("is-info");
        }
    }
})

// On page load, get initial todo list items
vm.fetchItems();