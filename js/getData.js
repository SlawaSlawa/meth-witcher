const getData = async(url) => {
	const response = await fetch(url)

	if (response.status === 200 && response.ok === true) {
		return response.json()
	}else {
		throw `Error: ${response.status}`
	}
}

export default getData

