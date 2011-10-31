// JavaScript Document
var persist = Components.classes["@mozilla.org/embedding/browser/nsWebBrowserPersist;1"]
              .createInstance(Components.interfaces.nsIWebBrowserPersist);
var file = Components.classes["@mozilla.org/file/local;1"]
           .createInstance(Components.interfaces.nsILocalFile);
file.initWithPath("C:\\a\\path\\file.bin"); // download destination
var obj_URI = Components.classes["@mozilla.org/network/io-service;1"]
              .getService(Components.interfaces.nsIIOService)
              .newURI(aURLToDownload, null, null);
persist.progressListener = {
  onProgressChange: function(aWebProgress, aRequest, aCurSelfProgress, aMaxSelfProgress, aCurTotalProgress, aMaxTotalProgress) {
    var percentComplete = (aCurTotalProgress/aMaxTotalProgress)*100;
    var ele = document.getElementById("progress_element");
    ele.innerHTML = percentComplete +"%";
  },
  onStateChange: function(aWebProgress, aRequest, aStateFlags, aStatus) {
    // do something
  }
}
persist.saveURI(obj_URI, null, null, null, "", file);