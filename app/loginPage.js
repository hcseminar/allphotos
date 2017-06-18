/*
 * JS for loginPage generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '978a88be-e229-4d16-9f0c-afd594072543';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "uploadPage",
    "location": "uploadPage.html"
}, {
    "name": "loginPage",
    "location": "loginPage.html"
}, {
    "name": "viewingPage",
    "location": "viewingPage.html"
}];

function loginPage_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_3': 'loginPage_mobilegrid_3',
        'mobilegridcell_4': 'loginPage_mobilegridcell_4',
        'mobilegridcell_5': 'loginPage_mobilegridcell_5',
        'mobileimage_9': 'loginPage_mobileimage_9',
        'mobilegridcell_8': 'loginPage_mobilegridcell_8',
        'mobilegrid_42': 'loginPage_mobilegrid_42',
        'mobilegridcell_43': 'loginPage_mobilegridcell_43',
        'mobilegridcell_44': 'loginPage_mobilegridcell_44',
        'html_40': 'loginPage_html_40',
        'mobilegridcell_47': 'loginPage_mobilegridcell_47',
        'signUpInputGrid': 'loginPage_signUpInputGrid',
        'mobilegridcell_16': 'loginPage_mobilegridcell_16',
        'nameInput': 'loginPage_nameInput',
        'firstnameInput': 'loginPage_firstnameInput',
        'pwInput': 'loginPage_pwInput',
        'mobilelabel_12': 'loginPage_mobilelabel_12',
        'mobilebutton_10': 'loginPage_mobilebutton_10',
        'loginPageNavGrid': 'loginPage_loginPageNavGrid',
        'mobilegridcell_14': 'loginPage_mobilegridcell_14',
        'uploadPicButton': 'loginPage_uploadPicButton',
        'quizButton': 'loginPage_quizButton',
        'mobilelabel_41': 'loginPage_mobilelabel_41',
        'mobilegrid_17': 'loginPage_mobilegrid_17',
        'mobilegridcell_18': 'loginPage_mobilegridcell_18',
        'mobilegridcell_19': 'loginPage_mobilegridcell_19',
        'mobileimage_24': 'loginPage_mobileimage_24',
        'mobilegridcell_22': 'loginPage_mobilegridcell_22',
        'mobilelabel_33': 'loginPage_mobilelabel_33',
        'mobilelabel_34': 'loginPage_mobilelabel_34',
        'mobilelabel_35': 'loginPage_mobilelabel_35',
        'mobilegrid_26': 'loginPage_mobilegrid_26',
        'mobilegridcell_27': 'loginPage_mobilegridcell_27',
        'mobilegridcell_28': 'loginPage_mobilegridcell_28',
        'mobileimage_32': 'loginPage_mobileimage_32',
        'mobileimage_36': 'loginPage_mobileimage_36',
        'mobilegridcell_31': 'loginPage_mobilegridcell_31',
        'mobilelabel_37': 'loginPage_mobilelabel_37',
        'mobilebutton_38': 'loginPage_mobilebutton_38'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["loginPage_login_service_onsuccess_mapping_0"] = {
        "homeScreen": "loginPage",
        "directions": [

        {
            "from_name": "login_service",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "sessionToken",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body']['sessionToken']",
                "target": "$"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["loginPage_login_service_onbeforesend_mapping_0"] = {
        "homeScreen": "loginPage",
        "directions": [

        {

            "to_name": "login_service",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}",
                    "Content-Type": "application/json"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "target_transformation": function(value) {
                    var v1 = localStorage.getItem('hcjName');
                    var v2 = localStorage.getItem('hcjFirstname');
                    var uname = v1 + v2;
                    return uname;
                },
                "target": "$['body']['username']"

            },

            {

                "target_transformation": function(value) {
                    var pw = localStorage.getItem('hcjFirstname');
                    return pw;
                },
                "target": "$['body']['password']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["loginPage_signup_service_onsuccess_mapping_0"] = {
        "homeScreen": "loginPage",
        "directions": [

        {
            "from_name": "signup_service",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "sessionToken",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body']['sessionToken']",
                "target": "$"

            }

            ]
        },

        {
            "from_name": "signup_service",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "username",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body']['username']",
                "target": "$"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["loginPage_signup_service_onbeforesend_mapping_0"] = {
        "homeScreen": "loginPage",
        "directions": [

        {

            "to_name": "signup_service",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}",
                    "Content-Type": "application/json"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "target_transformation": function(value) {
                    var v1 = localStorage.getItem('hcjName');
                    var v2 = localStorage.getItem('hcjFirstname');
                    var uname = v1 + v2;
                    return uname;
                },
                "target": "$['body']['username']"

            },

            {

                "target_transformation": function(value) {
                    var pw = localStorage.getItem('hcjFirstname');
                    localStorage.setItem('password', pw);
                    return pw;

                },
                "target": "$['body']['password']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.login_service = Apperyio.datasources.login_service = new Apperyio.DataSource(HCJquizDB_login_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["loginPage_login_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["loginPage_login_service_onsuccess_mapping_0"]);
            $("#loginPage_mobilebutton_10").slideUp();
            $("#loginPage_loginPageNavGrid").closest('[data-wrapper-for]').slideDown("slow");
            alert("Congratulations! you are in.");
        },
        "onError": function(jqXHR, textStatus, errorThrown) {
            alert('Oops! something went wrong. Pls try again.');
        }
    });

    window.signup_service = Apperyio.datasources.signup_service = new Apperyio.DataSource(HCJquizDB_signup_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["loginPage_signup_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["loginPage_signup_service_onsuccess_mapping_0"]);
            $("#loginPage_signUpInputGrid").closest('[data-wrapper-for]').slideUp("slow");
            $("#loginPage_loginPageNavGrid").closest('[data-wrapper-for]').slideDown("slow");
            localStorage.setItem('signUp', 1);
            alert("Congratulations! you are in.");;
        },
        "onError": function(jqXHR, textStatus, errorThrown) {
            alert('Oops! something went wrong. Pls try again.');
        }
    });

    Apperyio.CurrentScreen = 'loginPage';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var loginPage_onLoad = function() {
            loginPage_elementsExtraJS();

            pastBetaVersionMark("loginPage");
            chekSignIn();
            try {
                // try to use localStorage
                localStorage.test = 2;
            } catch (e) {

                $("#loginPage_privateNavPopup").popup("open");
                // there was an error so...
                // alert('You are in Privacy Mode\nPlease deactivate Privacy Mode and then reload the page.');
            };

            loginPage_deviceEvents();
            loginPage_windowEvents();
            loginPage_elementsEvents();
        };

    // screen window events


    function loginPage_windowEvents() {

        $('#loginPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#loginPage').on({
            pageshow: function(event) {
                deviceOS();
                // localStorage.setItem('deviceOS','iOS');

                pastBetaVersionMark("loginPage");
                chekSignIn();;
            },
        });

    };

    // device events


    function loginPage_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function loginPage_elementsExtraJS() {
        // screen (loginPage) extra code

        /* privateNavPopup */
        $("#loginPage_privateNavPopup").popup("option", "positionTo", "#loginPage_mobileheader");

    };

    // screen elements handler


    function loginPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#loginPage_mobilecontainer [name="mobilebutton_10"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) { // set versionNum to check for update
                    localStorage.setItem('uploadPageVersionNum', 0);
                    localStorage.setItem('viewingPageVersionNum', 0);

                    // set 1st time viewingPage load to 1
                    localStorage.setItem('ViewPage1stTimeLoad', "1");
                    // set 1st time loadingPage load to 1
                    localStorage.setItem('loadingPage1stTimeLoad', "1");

                    var v1 = $("#loginPage_nameInput").val(),
                        v2 = $("#loginPage_firstnameInput").val(),
                        v3 = $("#loginPage_pwInput").val();

                    if (v3 == "photoRome") {

                        if (v1 == null || v1 == "" || v2 == null || v2 == "") {

                            alert("Please key in both Name and Firstname. Thank you.")

                        } else {

                            setTimeout(function() {
                                localStorage.setItem('hcjName', v1);
                                localStorage.setItem('hcjFirstname', v2);
                                //             signup_service.execute({});
                                $("#loginPage_signUpInputGrid").closest('[data-wrapper-for]').slideUp("slow");
                                $("#loginPage_loginPageNavGrid").closest('[data-wrapper-for]').slideDown("slow");

                                alert("Hello " + v2 + ", Welcome to the HC Seminar's photoViewer ... You are in!");

                            }, 500);
                        }

                    } else {

                        alert("Wrong password. Try again!");

                    };

                }
            },
        }, '#loginPage_mobilecontainer [name="mobilebutton_10"]');

        $(document).off("click", '#loginPage_mobilecontainer [name="uploadPicButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('uploadPage', {
                        reverse: false
                    });

                }
            },
        }, '#loginPage_mobilecontainer [name="uploadPicButton"]');
        $(document).off("click", '#loginPage_mobilecontainer [name="quizButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('viewingPage', {
                        reverse: false
                    });

                }
            },
        }, '#loginPage_mobilecontainer [name="quizButton"]');

        $(document).off("click", '#loginPage_privateNavPopup [name="mobilebutton_38"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('privateNavPopup').popup('close');

                }
            },
        }, '#loginPage_privateNavPopup [name="mobilebutton_38"]');

    };

    $(document).off("pagebeforeshow", "#loginPage").on("pagebeforeshow", "#loginPage", function(event, ui) {
        Apperyio.CurrentScreen = "loginPage";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    loginPage_onLoad();
};

$(document).off("pagecreate", "#loginPage").on("pagecreate", "#loginPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    loginPage_js();
});