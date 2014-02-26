function getLocalIp() {
    var ssfield = document.getElementById("signalStrengthField");
    var rssfield = document.getElementById("relSignalStrengthField");
    var lsfield = document.getElementById("linkSpeedField");
    var ipfield = document.getElementById("ipAddressField");
    
    var info = navigator.mozWifiManager.connectionInformation;
    
    if(info) {    
        var ss = info.signalStrength;
        var rss = info.relSignalStrength;
        var ls = info.linkSpeed;
        var ip = info.ipAddress;

        ssfield.textContent = ss;
        rssfield.textContent = rss;
        lsfield.textContent = ls;
        ipfield.textContent = ip;
    } else {
        ssfield.textContent = "null";
        rssfield.textContent = "null";
        lsfield.textContent = "null";
        ipfield.textContent = "null";
    }    
}

function getMobileVoice() {
    <!-- MozMobileCellInfo --> 
    var vcicidfield = document.getElementById("vgsmCellIdField");
    var vcilacfield = document.getElementById("vgsmLocationAreaCodeField");
        
    var vctdfield = document.getElementById("vconnectedField");
    var vecofield = document.getElementById("vemergencyCallsOnlyField");
    var vlkmfield = document.getElementById("vlastKnownMccField");
        
    <!-- MozMobileNetworkInfo -->
    var vnwklnfield = document.getElementById("vlongNameField");
    var vnwkmccfield = document.getElementById("vmccField");
    var vnwkmncfield = document.getElementById("vmncField");
    var vnwksnfield = document.getElementById("vshortNameField");
    var vnwkstfield = document.getElementById("vstateField");
    
    var vrssfield = document.getElementById("vrelSignalStrengthField");
    var vrmgfield = document.getElementById("vroamingField");
    var vssfield = document.getElementById("vsignalStrengthField");
    var vstcfield = document.getElementById("vstateConnectionField");
    var vtpfield = document.getElementById("vtypeField");    
        
    var mc = navigator.mozMobileConnections[0];
    
    if(mc) {
        var v = mc.voice;
        var vci = v.cell;
        var vcicid = vci.gsmCellId;    
        var vcilac = vci.gsmLocationAreaCode;    
        
        var vctd = v.connected;    
        var veco = v.emergencyCallsOnly;    
        var vlkm = v.lastKnownMcc;            
        var vnwk = v.network;    
        var vnwkln = vnwk.longName;    
        var vnwkmcc = vnwk.mcc;    
        var vnwkmnc = vnwk.mnc;    
        var vnwksn = vnwk.shortName;    
        var vnwkst = vnwk.state;    
    
        var vrss = v.relSignalStrength;            
        var vrmg = v.roaming;    
        var vss = v.signalStrength;    
        var vstc = v.state;            
        var vtp = v.type;    
        
        <!-- MozMobileCellInfo --> 
        vcicidfield.textContent = vcicid;
        vcilacfield.textContent = vcilac;
        
        vctdfield.textContent = vctd;
        vecofield.textContent = veco;
        vlkmfield.textContent = vlkm;
        
        <!-- MozMobileNetworkInfo -->
        vnwklnfield.textContent = vnwkln;
        vnwkmccfield.textContent = vnwkmcc;
        vnwkmncfield.textContent = vnwkmnc;
        vnwksnfield.textContent = vnwksn;
        vnwkstfield.textContent = vnwkst;
    
        vrssfield.textContent = vrss;
        vrmgfield.textContent = vrmg;
        vssfield.textContent = vss;
        vstcfield.textContent = vstc;
        vtpfield.textContent = vtp;    
    } else {
        <!-- MozMobileCellInfo --> 
        vcicidfield.textContent = "null";
        vcilacfield.textContent = "null";
        
        vctdfield.textContent = "null";
        vecofield.textContent = "null";
        vlkmfield.textContent = "null";
        
        <!-- MozMobileNetworkInfo -->
        vnwklnfield.textContent = "null";
        vnwkmccfield.textContent = "null";
        vnwkmncfield.textContent = "null";
        vnwksnfield.textContent = "null";
        vnwkstfield.textContent = "null";
    
        vrssfield.textContent = "null";
        vrmgfield.textContent = "null";
        vssfield.textContent = "null";
        vstcfield.textContent = "null";
        vtpfield.textContent = "null";
    }
}

function getMobileData() {
    <!-- MozMobileCellInfo --> 
    var dcicidfield = document.getElementById("dgsmCellIdField");
    var dcilacfield = document.getElementById("dgsmLocationAreaCodeField");
        
    var dctdfield = document.getElementById("dconnectedField");
    var decofield = document.getElementById("demergencyCallsOnlyField");
    var dlkmfield = document.getElementById("dlastKnownMccField");
        
    <!-- MozMobileNetworkInfo -->
    var dnwklnfield = document.getElementById("dlongNameField");
    var dnwkmccfield = document.getElementById("dmccField");
    var dnwkmncfield = document.getElementById("dmncField");
    var dnwksnfield = document.getElementById("dshortNameField");
    var dnwkstfield = document.getElementById("dstateField");
    
    var drssfield = document.getElementById("drelSignalStrengthField");
    var drmgfield = document.getElementById("droamingField");
    var dssfield = document.getElementById("dsignalStrengthField");
    var dstcfield = document.getElementById("dstateConnectionField");
    var dtpfield = document.getElementById("dtypeField");    
        
    var mc = navigator.mozMobileConnections[0];
    
    if(mc) {
        var d = mc.data;
        var dci = d.cell;
        var dcicid = dci.gsmCellId;    
        var dcilac = dci.gsmLocationAreaCode;    
        
        var dctd = d.connected;    
        var deco = d.emergencyCallsOnly;    
        var dlkm = d.lastKnownMcc;            
        var dnwk = d.network;    
        var dnwkln = dnwk.longName;    
        var dnwkmcc = dnwk.mcc;    
        var dnwkmnc = dnwk.mnc;    
        var dnwksn = dnwk.shortName;    
        var dnwkst = dnwk.state;    
    
        var drss = d.relSignalStrength;            
        var drmg = d.roaming;    
        var dss = d.signalStrength;    
        var dstc = d.state;            
        var dtp = d.type;    
        
        <!-- MozMobileCellInfo --> 
        dcicidfield.textContent = dcicid;
        dcilacfield.textContent = dcilac;
        
        dctdfield.textContent = dctd;
        decofield.textContent = deco;
        dlkmfield.textContent = dlkm;
        
        <!-- MozMobileNetworkInfo -->
        dnwklnfield.textContent = dnwkln;
        dnwkmccfield.textContent = dnwkmcc;
        dnwkmncfield.textContent = dnwkmnc;
        dnwksnfield.textContent = dnwksn;
        dnwkstfield.textContent = dnwkst;
    
        drssfield.textContent = drss;
        drmgfield.textContent = drmg;
        dssfield.textContent = dss;
        dstcfield.textContent = dstc;
        dtpfield.textContent = dtp;    
    } else {
        <!-- MozMobileCellInfo --> 
        dcicidfield.textContent = "null";
        dcilacfield.textContent = "null";
        
        dctdfield.textContent = "null";
        decofield.textContent = "null";
        dlkmfield.textContent = "null";
        
        <!-- MozMobileNetworkInfo -->
        dnwklnfield.textContent = "null";
        dnwkmccfield.textContent = "null";
        dnwkmncfield.textContent = "null";
        dnwksnfield.textContent = "null";
        dnwkstfield.textContent = "null";
    
        drssfield.textContent = "null";
        drmgfield.textContent = "null";
        dssfield.textContent = "null";
        dstcfield.textContent = "null";
        dtpfield.textContent = "null";
    }
}

var wel = document.getElementById("btn-refresh-local-wifi");
wel.addEventListener("click", getLocalIp, false);
var mel = document.getElementById("btn-refresh-mobile-voice");
mel.addEventListener("click", getMobileVoice, false);
var mel = document.getElementById("btn-refresh-mobile-data");
mel.addEventListener("click", getMobileData, false);
