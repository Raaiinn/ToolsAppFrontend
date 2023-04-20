/**
 * This interface represents the abstraction of the entity Tool
 * @param username
 * This string represents the username of the user trying to log in
 * @param password
 * This string represents the password of the user trying to log in
 * @param token
 * This string represents where the user token will be stored
 */


export interface User {
    username : string;
    password : string;
    token :  string;
}
