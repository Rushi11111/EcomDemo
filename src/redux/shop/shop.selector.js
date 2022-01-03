import {createSelector} from "reselect";

const shopSelector = state => state.shop

export const midCollectionsSelector = createSelector(
    [shopSelector],
    shop => shop.collections
);

export const collectionsSelector = createSelector(
    [midCollectionsSelector],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => createSelector(
    [midCollectionsSelector],
    collections => (collections[collectionUrlParam])
);