export const SET_ESTATE = 'SET_ESTATE';

export function storeEstate(estate) 
{
    return { type: 'SET_ESTATE', estate }
}