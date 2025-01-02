export const getKomikRespo = async (resource, query) => {
    const response = await fetch(`${process.env.API_URL}/${resource}?${query}`)
    const komik = await response.json()
    return komik
}