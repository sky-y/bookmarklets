(function(){
  var id = 'YOUR_AMAZON_AFFILIATE_ID'

  // Original: https://gist.github.com/peccu/d59939959881c34bf9e1d10b2aa6f468#file-copytoclipboard-js
  function copy (copyText, successCB) {
    if(!successCB){
        successCB = function(text){
            alert("Copied! Try to paste it!\n\nCopied: " + text);
        };
    }
    if(window.clipboardData){
        window.clipboardData.setData("Text", copyText);
        return;
    }
    var tmpElem=document.createElement('div');
    tmpElem.style.position = 'absolute';
    tmpElem.style.left = '-1000px';
    tmpElem.style.top = '-1000px';
    tmpElem.innerText = copyText;
    document.body.appendChild(tmpElem);

    var range = document.createRange();
    range.selectNodeContents(tmpElem);

    var selection;
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    var success = true;
    try{
        success = document.execCommand("copy", false, null);
    }
    catch(e){
        copyToClipboardFF(copyText);
    }
    if(success){
        successCB(copyText);
        tmpElem.remove();
    }
  }

  if (location.href.search(/[^0-9A-Z]([B0-9][0-9A-Z]{9})([^0-9A-Z]|$)/) != -1) {
    var u = 'http://' + location.host + '/dp/' + RegExp.$1 + '/' + id;
    var t = '[' + document.title + '](' + u + ')';
    copy(t, function(text) {
      prompt('Amazon URL: Copied!', text);
    });
  }
}());
