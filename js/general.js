
function deviceOS() {

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        others: function() {
            return (isMobile.Android() || isMobile.iOS() || isMobile.BlackBerry() || isMobile.Opera() || isMobile.Windows());
        }
    };

    // OS
	var OS = 'N/D';
    if (isMobile.Android()) OS = 'android';
	if (isMobile.iOS()) OS = 'iOS';
    localStorage.setItem('deviceOS', OS);

}

function pastBetaVersionMark(page) {
    var betaMark = $('<div id=betaMark" >beta</div>');
    $("#"+page+"_mobileheader").append(betaMark);
    betaMark[0].classList.add("betaDiv");
}

function chekSignIn() {

    var v1 = localStorage.getItem('hcjName'),
        v2 = localStorage.getItem('hcjFirstname');
        
        // console.log("hcjName",v1);
        // console.log("hcjFirstname",v2);        
        
    if (v1 == "" || v1 == null || v2 == "" || v2 == null) {

        $("#loginPage_signUpInputGrid").show();
        $("#loginPage_loginPageNavGrid").hide();

    } else {

        $("#loginPage_signUpInputGrid").hide();
        $("#loginPage_loginPageNavGrid").show();

    }

}

var $timeout;
function progressBar(i) {

    var gate = localStorage.getItem('progressBarGate');

   //  clearTimeout($timeout);

    console.log('gate = '+gate);
        

    if ( gate == "1" ) {
        
        console.log("coming to setTimeout"); 
        
        //$timeout = setTimeout( function() {
        setTimeout( function() {
        
            console.log('i = '+i);
            
            if ( i == 1 ) {    
                
                $("#progressCell1").show();
                $("#progressCell2").hide();
                $("#progressCell3").hide();
            
            }    
            if ( i == 2 ) {

                $("#progressCell1").hide();
                $("#progressCell2").show();
                $("#progressCell3").hide();

            }
            if ( i == 3 ) {

                $("#progressCell1").hide();
                $("#progressCell2").show();
                $("#progressCell3").hide();

            }

            
        /*    if ( i == 1 ) {    
                
                $("#progressCell1").css('background-color',"#049bd0");
                $("#progressCell2").css('background-color',"#ffffff");
                $("#progressCell3").css('background-color',"#ffffff");
            
            }    
            if ( i == 2 ) {

                $("#progressCell1").css('background-color',"#ffffff");
                $("#progressCell2").css('background-color',"#049bd0");
                $("#progressCell3").css('background-color',"#ffffff");

            }
            if ( i == 3 ) {

                $("#progressCell1").css('background-color',"#ffffff");
                $("#progressCell2").css('background-color',"#ffffff");
                $("#progressCell3").css('background-color',"#049bd0");

            } */
            
            if ( i < 3 ) {
                i++;       
            } else {
                i=1;
            }
            progressBar(i);
            
        },500,i);

    } else {
        
        clearTimeout($timeout);
        
    }
    
}

function formatData2str(data) {

    str = data.htmlStr;

    // separate by group of 10 imgs only
    // <div class="moreButton" onclick="loadMore('+k+')">more pictures</div>
    //                                  012345678  9  01234567890123456789012
    //                                                1         2         3

    pos = str.indexOf("loadMore(");
    console.log('pos = ' + pos);

    var shortStr = "",
        lsNum = 0;

    if (pos != "-1") {

        // console.log('coming to separate');

        do {

            shortStr = str.substring(0, pos + 32);
            // console.log('shortStr = ' + shortStr);
            lsNum = Number(str.substring(pos + 9, pos + 10)) - 1;
            // console.log('lsNum = ' + lsNum);
            str = str.substring(pos + 32, str.length);
            // console.log('new str = ' + str);

            localStorage.setItem('morePhotos' + lsNum, shortStr);

            pos = str.indexOf("loadMore(");
            // console.log('pos ' + pos);

        } while (pos != "-1");

        lsNum = lsNum + 1;
        localStorage.setItem('morePhotos' + lsNum, str);

    } else {

        localStorage.setItem('morePhotos0', str);

    }

    document.getElementById("photoViewer").innerHTML = localStorage.getItem('morePhotos0');

    localStorage.setItem('LS_index', 0);

    // open sort popup only if loading for the 1st time
    var load1chk = localStorage.getItem('ViewPage1stTimeLoad');
    if( load1chk == "1" ) {
        $("#viewingPage_loadPopup").popup("open");        
        localStorage.setItem('ViewPage1stTimeLoad',"0");
    } else {
        $("#viewingPage_loadPopup").popup("close");
    }

}

function loadMore(i) {

    // this is the moreButton table in the server code. must be removed when adding up more pictures
    // <table width="100%"><colgroup><col style="width:auto;"><col style="width:120px;"><col style="width:auto;"
    // 765432109876543210987654321098765432109876543210987654321098765432109876543210987654321098765432109876543
    // ></colgroup><tbody><tr><td></td><td><div class="moreButton" onclick="loadMore(' + k + ')">more pictures</div></td
    // 21098765432109876543210987654321098765432109876543210987654321098765432109876543210987654321098765432109876543210
    // ><td></td></tr></tbody></table>
    // 0987654321098765432109876543210

    var currentHTML = document.getElementById('photoViewer').innerHTML;

    document.getElementById("photoViewer").innerHTML = currentHTML.substring(0, currentHTML.length - 245) + localStorage.getItem('morePhotos' + i);
    
    localStorage.setItem('LS_index', i);

}

function formatData2mosaicView(data) {

    str = data.htmlStr;
    
    localStorage.setItem('mosaicViewPhotoStr', str);

    document.getElementById("photoViewer").innerHTML = str;
    
    $("#viewingPage_loadPopup").popup("close");

}

// xxxxxxxxxx  L I K E  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// LIKE from the overall view
function likePhoto(photoName) {
    
    // console.log('likePhoto param = '+photoName);
    
    var LSindex = localStorage.getItem('LS_index');
        console.log('LSindex = '+LSindex);
    var LSstring = localStorage.getItem('morePhotos'+LSindex);
        // console.log("LSstring = "+LSstring);
    // <div><img id="imgAAAAAAAAAAAAA" src="https://api.appery.io/rest/1/db/files/5930beb22e22d76ace4c378d/xxxxxxxx.jpg" width="360"/></div><div>	<table><colgroup><col style="width:60px;"><col style="width:300px;">			<!-- <col style="width:50px;"> --></colgroup><tbody><tr><td><div id="likeAAAAAAAAAAAAA" class="photoButton likeButton" onclick="likePhoto(AAAAAAAAAAAAA)">Like</div></td><td><div id="captionAAAAAAAAAAAAA" class
    //                                                                         0123457890123
    // ="imgCaption"><strong>' + query1[i].peopleTags + '</strong><br><owner>' + query1[i].owner + '</owner> - ' + query1[i].dateTime + '</div></td><!-- <td><div class="photoButton rotateButton" onclick="rotatePhoto(xxxx)">Rotate</div></td> --></tr></tbody></table></div><br>'
    var posBeg = LSstring.indexOf( 'img' + photoName );
    var shortStr = LSstring.substring( posBeg, LSstring.length );
    var posEnd = shortStr.indexOf( '</owner>' );
    shortStr = shortStr.substring( 0, posEnd );
    // console.log('shortStr to End = '+shortStr);
    posBeg = shortStr.indexOf( '<owner>' );
    //                          0123456
    
    // console.log('posBeg = '+posBeg);
    // console.log('shortStr.ln = '+shortStr.length );
    
    var owner = shortStr.substring( posBeg+7, shortStr.length ).toLowerCase();
    // console.log( 'owner = '+owner );
    
    var v1 = localStorage.getItem('hcjName').toLowerCase(),
        v2 = localStorage.getItem('hcjFirstname').toLowerCase();
        // console.log('likingFolk = '+v2+' '+v1);

    if ( v2+' '+v1 == owner ) {
        alert('You cannot like your own photo!');
    } else {
        localStorage.setItem('likePhoto_photoName',photoName);
        localStorage.setItem('likePhoto_folkName',v2+' '+v1);
        viewer_photoLike_service.execute({});
    }
    
}

function likeNumResponse(data) { // receive data as either an integer of likesNum or "likedBefore"
    
    // console.log('like data.response = '+data.response);
    
    if ( data.response != "likedBefore" ) {
        
        var photoName = localStorage.getItem('likePhoto_photoName');
        document.getElementById('like'+photoName).innerHTML = "Like "+data.response;
        
    } else {
        
        alert("You've already liked this picture!");
        
    }
    
}

// LIKE from the mosaic view
function mosaicLikePhoto(photoName) {
    
    // console.log('likePhoto param = '+photoName);
    
    var LSindex = localStorage.getItem('LS_index');
        console.log('LSindex = '+LSindex);
    var LSstring = localStorage.getItem('morePhotos'+LSindex);
        // console.log("LSstring = "+LSstring);
    // <div><img id="imgAAAAAAAAAAAAA" src="https://api.appery.io/rest/1/db/files/5930beb22e22d76ace4c378d/xxxxxxxx.jpg" width="360"/></div><div>	<table><colgroup><col style="width:60px;"><col style="width:300px;">			<!-- <col style="width:50px;"> --></colgroup><tbody><tr><td><div id="likeAAAAAAAAAAAAA" class="photoButton likeButton" onclick="likePhoto(AAAAAAAAAAAAA)">Like</div></td><td><div id="captionAAAAAAAAAAAAA" class
    //                                                                         0123457890123
    // ="imgCaption"><strong>' + query1[i].peopleTags + '</strong><br><owner>' + query1[i].owner + '</owner> - ' + query1[i].dateTime + '</div></td><!-- <td><div class="photoButton rotateButton" onclick="rotatePhoto(xxxx)">Rotate</div></td> --></tr></tbody></table></div><br>'
    var posBeg = LSstring.indexOf( 'img' + photoName );
    var shortStr = LSstring.substring( posBeg, LSstring.length );
    var posEnd = shortStr.indexOf( '</owner>' );
    shortStr = shortStr.substring( 0, posEnd );
    // console.log('shortStr to End = '+shortStr);
    posBeg = shortStr.indexOf( '<owner>' );
    //                          0123456
    
    // console.log('posBeg = '+posBeg);
    // console.log('shortStr.ln = '+shortStr.length );
    
    var owner = shortStr.substring( posBeg+7, shortStr.length ).toLowerCase();
    // console.log( 'owner = '+owner );
    
    var v1 = localStorage.getItem('hcjName').toLowerCase(),
        v2 = localStorage.getItem('hcjFirstname').toLowerCase();
        // console.log('likingFolk = '+v2+' '+v1);

    if ( v2+' '+v1 == owner ) {
        alert('You cannot like your own photo!');
    } else {
        localStorage.setItem('likePhoto_photoName',photoName);
        localStorage.setItem('likePhoto_folkName',v2+' '+v1);
        viewer_photoLike_service.execute({});
    }
    
}



// xxxxxx  ORIENTATION + ROTATE  xxxxxxxxxx

function rotateImg(i) {
    console.log('rotateImg' + i);
    document.getElementById('viewerImg' + i).classList.add("rotate90cw");
}

function getOrientation(file, callback) {
  var reader = new FileReader();
  reader.onload = function(e) {

    var view = new DataView(e.target.result);
    if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
    var length = view.byteLength, offset = 2;
    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;
      if (marker == 0xFFE1) {
        if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
        var little = view.getUint16(offset += 6, false) == 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;
        for (var i = 0; i < tags; i++)
          if (view.getUint16(offset + (i * 12), little) == 0x0112)
            return callback(view.getUint16(offset + (i * 12) + 8, little));
      }
      else if ((marker & 0xFF00) != 0xFF00) break;
      else offset += view.getUint16(offset, false);
    }
    return callback(-1);
  };
  reader.readAsArrayBuffer(file);
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function selectPhoto( photoName, user, thumbnail_id ) {

    // save params 4 services
    localStorage.setItem( 'selectPhotoName', photoName );
    localStorage.setItem( 'selectUser', user );
    localStorage.setItem( 'thumbnail_id', thumbnail_id );

    // find out if this photo is selected 
    var i = localStorage.getItem('LS_index');
    var str = localStorage.getItem('morePhotos'+i);
    var pos = str.indexOf('<div id="selx'+photoName);
    var shortStr = str.substring(pos, str.length);
    pos = shortStr.indexOf('class="');
    //                      01234567
    shortStr = shortStr.substring(pos+7);
    pos = shortStr.indexOf('" onclick');
    shortStr = shortStr.substring(0,pos);
    console.log('class = '+shortStr);

    // call services   
    if ( shortStr == "selectButton" ) {
       
        viewer_selectPhoto_create_service.execute({});

    } else {
        
        var r = confirm('Do you want to remove this picture from your selection ? Yes [OK] / No [cancel]');
        
        if ( r == true ) {
            
            viewer_selectPhoto_delete_service.execute({});
            
        }
        
    }
    
}

function updateHTMLstr(photoName,buttonClass) {
    
    // find the photo's div
    var i = localStorage.getItem('LS_index');
    var str = localStorage.getItem('morePhotos'+i);
    var pos = str.indexOf('<div id="selx'+photoName);

    // store 1st part of the str up to photo's div
    var str1stPart = str.substring(0, pos);

    // change div's class
    var shortStr = str.substring(pos, str.length);
    pos = shortStr.indexOf('class="');
    //                      01234567
    var shortStr1 = shortStr.substring(0, pos+7);
    pos = shortStr.indexOf('" onclick');
    var shortStr2 = shortStr.substring(pos, shortStr.length);

    // console.log('class = '+shortStr);

    var str = str1stPart+shortStr1+buttonClass+shortStr2;
    
    localStorage.setItem('morePhotos'+i,str);

}
