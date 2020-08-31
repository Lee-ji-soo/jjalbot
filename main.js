import App from './components/App.js'

    ; (async function () {
        new App({
            $searchInput: document.querySelector('#search-keyword'),
            $searchResult: document.querySelector('#search-result')
        })
    })()
