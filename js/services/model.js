/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "String": {
        "type": "string"
    },
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "sessionToken": new $a.LocalStorage("sessionToken", "String"),

    "username": new $a.LocalStorage("username", "String"),

    "password": new $a.LocalStorage("password", "String"),

    "photoFilename": new $a.LocalStorage("photoFilename", "String"),

    "hcjName": new $a.LocalStorage("hcjName", "String"),

    "hcjFirstname": new $a.LocalStorage("hcjFirstname", "String"),

    "likePhoto_photoName": new $a.LocalStorage("likePhoto_photoName", "String"),

    "likePhoto_folkName": new $a.LocalStorage("likePhoto_folkName", "String")
};