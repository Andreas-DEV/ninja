class ShowActor {

    constructor(data) {

        /* MENU */

        const menuContainer = document.createElement('nav')
        menuContainer.id = "menuContainer"
        document.body.appendChild(menuContainer)

        const menuItemContainer = document.createElement('ul')
        menuItemContainer.id = "menuItemContainer"
        menuContainer.appendChild(menuItemContainer)

        data.forEach((el, index) => {

            const menuItem = document.createElement('li')
            menuItem.setAttribute("data-index", `${index}`)
            menuItem.className = "menuItem"
            menuItem.textContent = el.name
            menuItemContainer.appendChild(menuItem)

        });

        /* MENU END */

    }

}

export default ShowActor; 