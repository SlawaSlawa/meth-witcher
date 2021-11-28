import getData from './getData.js'

const getCard = function(dataCard) {
	const {
		link,
		preview,
		description,
		picture,
		name,
		price
	} = dataCard

    const li = document.createElement('li')
    li.classList.add('card')

    switch (this) {
        case 'video':
        	li.classList.add('card_video')
            li.innerHTML = `
				<a href="${link}" class="card__link">
                    <figure>
                        <img src="${preview}" alt="${description}" class="card__video-img">
                        <figcaption>
                            ${description}
                        </figcaption>
                    </figure>
                </a>
			`
            break
        case 'photo':
        	li.classList.add('card_img')
            li.innerHTML = `
				<img class="card__photo-img" src="${link}" alt="${description}">
			`
            break
        case 'goods':
        	li.classList.add('card_product')
            li.innerHTML = `
				<article class="product">
                    <img src="${picture}" alt="${name}" class="product__img">
                    <h2 class="product__title">
                        ${name}
                    </h2>
                    <div class="product__wrapper-buy">
                    <p class="product__price">${price}₽</p>
                    <button class="product__btn-buy">
                        <svg class="product__btn-icon">
                            <use xlink:href="#add" />
                        </svg>
                    </button>
                    </div>
                </article> 
			`
            break
        default:
            li.innerHTML = '<h3>Нет данных</h3>'
            break
    }

    return li
}

const renderTabs = async (i = 0) => {
    const tabsContent = document.querySelectorAll('.tabs__content')
    const type = tabsContent[i].dataset.base

    const data = await getData(`db/${type}.json`)

    const listElem = data.map(getCard, type)

    tabsContent[i].textContent = ''

    tabsContent[i].append(...listElem)
}

export default renderTabs