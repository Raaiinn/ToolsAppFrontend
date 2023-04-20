/**
 * This interface represents the abstraction of the entity Tool
 * @param name : This string represents the name of the tool
 * @param description : This string represents the tool's description
 * @param imageURL : This string represents where the image of a tool is stored
 * @param brand : brand represents the brand of a tool, a brand owns a parameter name too!
 */
export interface Tool {
    name : string;
    description : string;
    imageURL : string;
    brand : {
        name: string
    }
}