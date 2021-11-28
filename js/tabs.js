const tabs = option => {
	const {
		selectorTabsButtons,
		activeClassButton,
		selectorTabsElement,
		activeClassTab,
		callback = () => {}
	} = option

	const tabsBtn = document.querySelectorAll(selectorTabsButtons)
	const tabsElem = document.querySelectorAll(selectorTabsElement)

	tabsBtn.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			for (let i = 0; i < tabsBtn.length; i++) {
				if (tabsBtn[i] === btn) {
					tabsBtn[i].classList.add(activeClassButton)
					tabsElem[i].classList.add(activeClassTab)
					callback(i)
				}else {
					tabsBtn[i].classList.remove(activeClassButton)
					tabsElem[i].classList.remove(activeClassTab)
				}
			}
		})
	})
}

export default tabs