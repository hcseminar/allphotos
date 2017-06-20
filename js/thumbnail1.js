function thumbnailB64data() {

    var img = $("#thumbnailImg");
    img.attr('crossOrigin', 'anonymous');

    var photoName = localStorage.getItem("photoFilename");
    var imgSrc = "https://api.appery.io/rest/1/db/files/5930beb22e22d76ace4c378d/" + photoName;

    img.attr("src", imgSrc);

    var gate4callbk = 0; // there is a callbk with img.bind that may trigger create_service twice :(

    img.bind("load", function() {

        // console.log('coming to canvasing');

        var nW = img.get(0).naturalWidth;
        // console.log('nW = ' + nW);
        localStorage.setItem("uploadImgNaturalWidth", nW);

        var nH = img.get(0).naturalHeight;
        // console.log('nH = ' + nH);
        localStorage.setItem("uploadImgNaturalHeight", nH);


        // NO Base64 ENCODING ANY LONGER
        /* 
        var x0, y0, x1, y1;

        if (nH > nW) { // picture taken portrait

            x0 = 0;
            y0 = (nH - nW) / 2;
            x1 = nW;
            y1 = nW;

        } else { // pic taken landscape

            x0 = (nW - nH) / 2;
            y0 = 0;
            x1 = nH;
            y1 = nH;

        }

        var canvas = jQuery('<canvas id="thumbnailCan" width="120" height="120"></canvas>');
        jQuery("#thumbnailParent").append(canvas);
        var c = canvas[0];
        // console.log('c.id = '+c.id);
        var ctx = c.getContext("2d");
        // sample size img
        ctx.drawImage(img[0], x0, y0, x1, y1, 0, 0, 120, 120);
        var b64StringSample = c.toDataURL();
        localStorage.setItem('thumbnailPic2upload', b64StringSample);

        // console.log('str canvas = '+localStorage.getItem('thumbnailPic2upload'));

        c.parentNode.removeChild(c);

        */

        if (gate4callbk == 0) {
            
            thumbnail_create_service.execute({});
            
            gate4callbk = 1;
            
        }

    });

}

function enlargePhoto(photoName, rotateClass) {
    // watch out! js and jq are mixed

    // not implemented for this time !!!
    // send request to DB to get caption information
    // localStorage.setItem("photoFilename",photoName);
    //viewer_mosaicCaption_query_service.execute({});

    // call the picture and layout both popup and pic
    var jsImg = document.getElementById('viewingPage_mosaicViewPopup');
    var img = $("#viewingPage_mosaicViewerImg");
    var inW = window.innerWidth;
    var imgW = inW * 0.9; // 90% is the popup's width
    var nW = undefined,
        nH = undefined,
        popup = document.getElementById("viewingPage_mosaicViewPopup");

    jsImg.classList.remove("mosaicLargeRotate90cw");
    jsImg.classList.remove("mosaicLargeRotate180");

    var gate = 0;

    img.bind("load", function() {

        if (gate == 0) {

            gate = 1;

            $("#viewingPage_mosaicViewPopup").popup("open");

            if (rotateClass == "mosaicLargeRotate90cw" || rotateClass == "mosaicLargeRotate180") {

                jsImg.classList.add(rotateClass);

                jsImg.style.left = (inW - imgW) / 2 + "px";
                jsImg.style.top = "40px";
                nW = img.get(0).naturalWidth;
                nH = img.get(0).naturalHeight;
                popup.style.width = imgW + 4 + "px";
                popup.style.height = nH / nW * imgW + 4 + "px";
                popup.style.left = (inW - imgW) / 2 - 2 + "px";
                popup.style.top = "38px";

            } else {

                jsImg.style.left = "10px";
                jsImg.style.top = "30px";
                nW = img.get(0).naturalWidth;
                nH = img.get(0).naturalHeight;
                popup.style.width = imgW + 4 + "px";
                popup.style.height = nH / nW * imgW + 4 + "px";
                popup.style.left = "8px";
                popup.style.top = "28px";

            }

        }
    });

    img.attr('src', "https://api.appery.io/rest/1/db/files/5930beb22e22d76ace4c378d/" + photoName);

}

function format2mosaicCaption(data) {

    console.log('data = ' + JSON.stringify(data));

    // data = [{"_id":"5943e464a4289334a2731ab1","dateTime":"2017/06/16 - 23:00","owner":"Eric Duchemin","exifCode":"6","peopleTags":"Japan Ken shooting","photoName":"6a9e15bd-7d5c-4a73-9de5-a1f17346eb6e.IMG_0719.JPG","likes":"0","acl":{"*":{"write":true,"read":true}},"_createdAt":"2017-06-16 14:00:04.323","_updatedAt":"2017-06-17 02:54:13.457","thumbnail_id":"594499c62e22d745017639c5"}]

    var winW = window.innerWidth;
    winW = winW * 0.90;
    var likeColWidth = 50;
    var tagColWidth = winW - likeColWidth;

    var photoNameWquotes = "'" + data[0].photoName + "'";
    var v1 = localStorage.getItem('hcjName');
    var v2 = localStorage.getItem('hcjFirstname');
    var userWquotes = "'" + v2 + ' ' + v1 + "'";

    var str = '<table><colgroup><col style="width:' + likeColWidth + 'px;"><col style="width:' + tagColWidth + 'px;"></colgroup><tbody><tr><td><div id="like' + data[0].photoName + '" class="photoButton likeButton" onclick="likePhoto(' + photoNameWquotes + ')">Like ' + data[0].likes + '</div></td><td><div id="caption' + data[0].photoName + '" class="imgCaption"><strong>' + data[0].peopleTags + '</strong><br><owner>' + data[0].owner + '</owner> - ' + data[0].dateTime + '</div></td></tr></tbody></table>';

    document.getElementById("mosaicViewCaption").innerHTML = str;

    $("#viewingPage_mosaicViewCaptionPopup").popup("open");

}