export const SELECT_BOOK = "select_book";
export const DESELECTBOOK = "deselect_book";


export const selectBook = (book) => {
    return {
        type : SELECT_BOOK,
        payload : book
    }
}


export const deselectBook = () => {
    return {
        type : DESELECTBOOK
    }
}

