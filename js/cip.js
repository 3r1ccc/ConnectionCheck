function getMobileNetworkInfo() {
    <!-- MozMobileNetworkInfo -->
    var mclknfield = document.getElementById("mclastKnownNetworkField");
    var mclkhnfield = document.getElementById("mclastKnownHomeNetworkField");

    var mclknfield2 = document.getElementById("mclastKnownNetworkField2");
    var mclkhnfield2 = document.getElementById("mclastKnownHomeNetworkField2");

    var mc = navigator.mozMobileConnections[0];
    var mc2 = navigator.mozMobileConnections[1];

    if(mc) {
        <!-- MozMobileNetworkInfo -->
        var mclkn = mc.lastKnownNetwork;
        var mclkhn = mc.lastKnownHomeNetwork;
        mclknfield.textContent = mclkn;
        mclkhnfield.textContent = mclkhn;
    } else {
        <!-- MozMobileNetworkInfo -->
        mclknfield.textContent = "null";
        mclkhnfield.textContent = "null";
    }

    if(mc2) {
        <!-- MozMobileNetworkInfo -->
        var mclkn2 = mc2.lastKnownNetwork;
        var mclkhn2 = mc2.lastKnownHomeNetwork;
        mclknfield2.textContent = mclkn2;
        mclkhnfield2.textContent = mclkhn2;
    } else {
        <!-- MozMobileNetworkInfo -->
        mclknfield2.textContent = "null";
        mclkhnfield2.textContent = "null";
    }
}

var vel = document.getElementById("btn-refresh-mobile");
vel.addEventListener("click", getMobileNetworkInfo, false);
