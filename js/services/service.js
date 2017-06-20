/*
 * Security contexts
 */

/*
 * Service settings
 */
var HCJquizDB_settings = {
    "database_id": "5930beb22e22d76ace4c378d"
}

/*
 * Services
 */

var HCJquizDB_answers_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/answers',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': HCJquizDB_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});

var HCJquizDB_login_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/login',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': HCJquizDB_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": null
    }
});

var HCJquizDB_signup_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': HCJquizDB_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": null
    }
});

var HCJquizDB_photoInfos_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/photoInfos',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': HCJquizDB_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});

var HCJquizDB_participants_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/participants',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': HCJquizDB_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});

var HCJquizDB__files_upload_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/files',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'serviceSettings': HCJquizDB_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});

var HCJquizDB_userSelection_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/userSelection',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': HCJquizDB_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});

var hcjSelectedPhotosQuery_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/9a2eab87-848d-4610-985d-d9ee15ceda51/exec',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'defaultRequest': {
        "headers": {
            "Content-Type": "text/plain"
        },
        "parameters": {},
        "body": null
    }
});

var HCJquizDB_photoInfos_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/photoInfos',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': HCJquizDB_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});

var HCJphotoList_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/568c0821-e513-474a-b967-fbb7c9fb86b6/exec',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'defaultRequest': {
        "headers": {
            "Content-Type": "text/plain"
        },
        "parameters": {},
        "body": null
    }
});

var HCJphotoLike_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/764bf593-655c-402f-aa5a-8279c6f7d6c2/exec',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'defaultRequest': {
        "headers": {
            "Content-Type": "text/plain"
        },
        "parameters": {},
        "body": null
    }
});

var HCJtop10likes_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/124cb516-8636-4e4a-a096-b21386f31d70/exec',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'defaultRequest': {
        "headers": {
            "Content-Type": "text/plain"
        },
        "parameters": {},
        "body": null
    }
});

var HCJquizDB_thumbnails_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/thumbnails',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': HCJquizDB_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});

var hcjUpdateReloadCheck_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/222eb650-63f0-4db0-b3a6-6c58cd15f99f/exec',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'defaultRequest': {
        "headers": {
            "Content-Type": "text/plain"
        },
        "parameters": {},
        "body": null
    }
});

var hcjUserSelectionDelete_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/e2a2d9fc-43cb-476e-a0e0-b89576d5a2f6/exec',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'defaultRequest': {
        "headers": {
            "Content-Type": "text/plain"
        },
        "parameters": {},
        "body": null
    }
});

var hcjMosaicView_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/877c6ab0-16de-4c4c-9d8c-6cabdfc240fa/exec',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'defaultRequest': {
        "headers": {
            "Content-Type": "text/plain"
        },
        "parameters": {},
        "body": null
    }
});