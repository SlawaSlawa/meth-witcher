const burgerMenu = (option) => {
	const { 
		selectorBurger = '.burger',
		activeBurger = 'burger_active',
		selectorMenu,
		openMenuSelector
		} = option

		const burger = document.querySelector(selectorBurger)
		const menu = document.querySelector(selectorMenu)

		burger.addEventListener('click', () => {
			menu.classList.toggle(openMenuSelector)
			burger.classList.toggle(activeBurger)
		})
}

export default burgerMenu