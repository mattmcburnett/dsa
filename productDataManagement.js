/*
 * Complete the 'getMatchingProducts' function below.
 *
 * The function is expected to return a 2D_STRING_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_STRING_ARRAY products
 *  2. 2D_STRING_ARRAY queries
 */

// O(n^2) time complexity

function getMatchingProducts(products, queries) {
    const returnArray = [];
    for (let query of queries) {
        if (query[0] === 'Type1') {
            const yearArray = [];
            for (let product of products) {
                if (product[2] === query[1]) yearArray.push(product[0]);
            }
            returnArray.push(yearArray);
        }
        if (query[0] === 'Type2') {
            const lessPrice = [];
            for (let product of products) {
                if (parseInt(product[1]) < query[1]) lessPrice.push(product[0]);
            }
            returnArray.push(lessPrice);
        }
        if (query[0] === 'Type3') {
            const morePrice = [];
            for (let product of products) {
                if (parseInt(product[1]) > query[1]) morePrice.push(product[0]);
            }
            returnArray.push(morePrice);
        }
    }

    return returnArray;

}
