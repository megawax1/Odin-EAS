let container = document.querySelector("#container");
let getSize = document.querySelector("#getsize");

let usersWidth = 12;
let usersHeight = 4;
let containerWidth = usersWidth * 50 + "px";
let containerHeight = usersHeight * 50 + "px";

getSize.addEventListener("click", (event) => {
    usersWidth = prompt("Grid width?");
    usersHeight = prompt("Grid height?") - 1;
    if (usersWidth > 100 || usersHeight > 100) {
        usersWidth = prompt("Grid width?");
        usersHeight = prompt("Grid height?") - 1;
    };
    containerWidth = usersWidth * 50 + "px";
    containerHeight = usersHeight * 50 + "px";
    container.style.width = containerWidth;
    container.style.height = containerHeight;
    squareGrid();
})



function squareGrid() {
    for (let width = 0; width < usersWidth; width++) {
        let newCell = document.createElement("div");
        newCell.style.background = "red";
        newCell.style.height = "50px";
        newCell.style.width = "50px";
        newCell.style.display = "flex";
        newCell.style.flexShrink = "0";
        newCell.style.flexWrap = "wrap";
        newCell.addEventListener("mouseenter", (event) => {
            event.target.style.background = "purple";    
        })
        container.appendChild(newCell);
        getSize.addEventListener("click", (event) => {
            newCell.remove();
        })
        container.style.width = containerWidth;
        container.style.height = containerHeight;
        for (let height = 0; height < usersHeight; height++) {
            let newCell = document.createElement("div");
            newCell.style.background = "red";
            newCell.style.height = "50px";
            newCell.style.width = "50px";
            newCell.style.display = "flex";
            newCell.style.flexShrink = "0";
            newCell.style.flexWrap = "wrap";
                    newCell.addEventListener("mouseenter", (event) => {
            event.target.style.background = "purple";    
        })
            container.appendChild(newCell);
            getSize.addEventListener("click", (event) => {
                newCell.remove();
            })
            container.style.width = containerWidth;
            container.style.height = containerHeight;
        }
    }
}
squareGrid();