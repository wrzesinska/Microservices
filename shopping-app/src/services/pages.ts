import path from "path"

const pages = [
    {id: 1, name: 'O nas'},
    {id: 2, name: 'Kontakt'},
    {id: 3, name: 'Główna'},
    {id: 4, name: 'Wishlist'},
];

export const savePages = async (payload) => {
    pages.push(payload);
    return pages
}

export const getPages = async () => {
    return pages
}

export const checkIfPageExists = async (pageId) => {

    let filteredPages =  pages.filter(function(page) {
        return page.id == pageId;
    });

    if (filteredPages.length !== 0) {
        return filteredPages
    } else {
        return `Sorry the page under ${pageId} id doesn't exist`
    }
}

