import {createSelector} from "reselect";

const shopSelector = state => state.shop

export const midCollectionsSelector = createSelector(
    [shopSelector],
    shop => shop.collections
);

export const collectionsSelector = createSelector(
    [midCollectionsSelector],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [midCollectionsSelector],
    collections => collections? (collections[collectionUrlParam]) : null
);

export const selectIsCollectionFetching = createSelector(
    [shopSelector],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [shopSelector],
    shop => !!shop.collections
)