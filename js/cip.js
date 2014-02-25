function getLocalIp() {
    var ssfield = document.getElementById("signalStrengthField");
    var rssfield = document.getElementById("relSignalStrengthField");
    var lsfield = document.getElementById("linkSpeedField");
    var ipfield = document.getElementById("ipAddressField");

	var info = navigator.mozWifiManager.connectionInformation;

	var ss = info.signalStrength;
	var rss = info.relSignalStrength;
	var ls = info.linkSpeed;
	var ip = info.ipAddress;

    ssfield.textContent = ss;
    rssfield.textContent = rss;
    lsfield.textContent = ls;
    ipfield.textContent = ip;
}

var el = document.getElementById("btn-refresh");
el.addEventListener("click", getLocalIp, false);
