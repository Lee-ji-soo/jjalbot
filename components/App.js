import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { fetchJjals } from './api.js'

class App {
    constructor(
        $searchInput,
        $searchResult
    ) {
        this.$searchInput = $searchInput

        const onSubmit = async (keyword) => {
            console.log('hi')
            await fetchJjals(keyword)
        }

        this.searchInput = new SearchInput({
            $searchInput,
            onSubmit
        })
    }
}

export default App 