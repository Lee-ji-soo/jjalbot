class SearchInput {
    constructor(
        { $searchInput,
            onSubmit }) {
        this.$searchInput = $searchInput
        this.onSubmit = onSubmit

        this.evtBinding()

    }

    evtBinding() {
        this.$searchInput.addEventListener('change', this.onSubmit)
    }
}
export default SearchInput
