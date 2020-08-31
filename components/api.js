const fetchJjals = async (keyword) => {
    const res = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
    console.log(res)
}

export { fetchJjals } 