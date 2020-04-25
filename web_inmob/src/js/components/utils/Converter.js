import { EstateTypeCombo } from "./Enums"

export const GetEstateTypeById = (id) =>
{    
    var test = EstateTypeCombo.find( el => el.id==id );    
    return test.label;
}