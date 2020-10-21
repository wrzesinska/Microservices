import { randomBytes } from "crypto";
import path from "path"
import { NotFoundError } from "../middlewares/errors";

const pages = [
    { id: 1, name: 'O nas' },
    { id: 2, name: 'Kontakt' },
    { id: 3, name: 'Główna' },
    { id: 4, name: 'Wishlist' },
];

export const savePages = async (payload) => {
    payload.id = randomBytes(12).toString('hex')
    pages.push(payload);
    return payload
}

export const getPages = async () => {
    return pages
}

export const getPageById = async (pageId) => {

    let filteredPages = pages.find(page => page.id == pageId);

    if (!filteredPages) {
        throw new NotFoundError(`Sorry the page under ${pageId} id doesn't exist`)
    }

    return filteredPages
}

