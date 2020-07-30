const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']")

let lastChecked;

function checkHandler() {
    //check if they had the shift button down
    //AND check that they are checking it, not unchecking

    if (event.shiftKey && this.checked) {
        let inBetween = false
        for (let i = 0; i < checkboxes.length; i++) {
            // if (checkboxes[i].checked) {
            //     inBetween = true
            // }
            // if (inBetween) {
            //     checkboxes[i].checked = true;
            // }
            // if (nextCheck == checkboxes[i]) {
            //     inBetween = false
            // }

            if (checkboxes[i] === this || checkboxes[i] === lastChecked) {
                inBetween = !inBetween
            }

            if (inBetween) {
                checkboxes[i].checked = true;
            }
        }

    }
    lastChecked = this;
    console.log(lastChecked);

}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", checkHandler)
})