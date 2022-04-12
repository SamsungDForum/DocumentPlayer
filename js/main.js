/* ! Copyright (c) 2021, Samsung Electronics Co., Ltd


* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
 

* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
 

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE. */

//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    log('init() called');
	tizen.tvinputdevice.registerKeyBatch(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'ColorF0Red', 'ColorF1Green', 'ColorF2Yellow', 'ColorF3Blue']);
    getVersion();

    document.addEventListener('visibilitychange', function() {
        if(document.hidden){
            // Something you want to do when hide or exit.
        } else {
            // Something you want to do when resume.
        }
    });
 
    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	switch (e.keyCode) {
			case 48: //0
					goTo();
				break;
			case 49: //1
					openDoc();
				break;
			case 50: //2
					closeDoc();
				break;
			case 51: //3
					playDoc();
				break;
			case 52: //4
					pauseDoc();
				break;
			case 53: //5
					resumeDoc();
				break;
			case 54: //6
					stopDoc();
				break;
			case 55: //7
					previousPage();
				break;
			case 56: //8
					nextPage();
				break;
			case 57: //9
					rotate();
				break;
	}
    });
};
// window.onload can work without <body onload="">
window.onload = init;

function log(msg) {
	var logsEl = document.getElementById('logs');

	if (msg) {
		// Update logs
		logsEl.innerHTML += msg + '<br />';
	} else {
		// Clear logs
		logsEl.innerHTML = '';
	}

	logsEl.scrollTop = logsEl.scrollHeight;
}

// Get document module version
function getVersion(){ 
    var Version = null;
		  
    try {
        Version = webapis.document.getVersion();
    } catch (e) {
        console.log("[getVersion] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
    }
    
    if (null !== Version) {
        console.log("[getVersion] call syncFunction type: " + Version);
    }		
}

// Prepare the Doc to play and set the necessary values for play
function openDoc(){
    var onsuccess = function(val) {
        log("[open] success : " + val);
    };

    var onerror = function(error) {
        log("[open] code :" + error.code + " error name: " + error.name + "  message " + error.message);
    };

    var docinfo = {
        "docpath"    : "http://www.africau.edu/images/default/sample.pdf", // document file path
        "rectX"      : 0, // document x coordinate
        "rectY"      : 0, // document y coordinate
        "rectWidth"  : 960, // document width coordinate
        "rectHeight" : 540 // document height coordinate
    };
    try {
        webapis.document.open(docinfo, onsuccess, onerror);
    } catch (e) {
        log("[open] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
    }
};

//Close doc
function closeDoc(){
    var onsuccess = function(val) {
        log("[close] success : " + val);
    };
    
    var onerror = function(error) {
        log("[close] code :" + error.code + " error name: " + error.name + "  message " + error.message);
    };
    try {
        webapis.document.close(onsuccess, onerror);
    } catch (e) {
        log("[close] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
    }		
}

// Play doc - display it on the screen, change slide in given time interval (seconds)
function playDoc(){
    var onsuccess = function(val) {
        log("[play] success : " + val);
    };
    
    var onerror = function(error) {
        log("[play] code :" + error.code + " error name: " + error.name + "  message " + error.message);
    };
    try {
        webapis.document.play(5, onsuccess, onerror);
    } catch (e) {
        log("[play] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
    }
}

// Pause doc
function pauseDoc(){
    var onsuccess = function(val) {
        log("[pause] success : " + val);
    };
    
    var onerror = function(error) {
        log("[pause] code :" + error.code + " error name: " + error.name + "  message " + error.message);
    };
    try {
        webapis.document.pause(onsuccess, onerror);			
    } catch (e) {
        log("[pause] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
    }	
}

// Resume doc playback
function resumeDoc(){  
    var onsuccess = function(val) {
        log("[resume] success : " + val);
    };
    
    var onerror = function(error) {
        log("[resume] code :" + error.code + " error name: " + error.name + "  message " + error.message);
    };
    try {
        webapis.document.resume(onsuccess, onerror);			
    } catch (e) {
        log("[resume] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
    }
}

// Stop doc playback
function stopDoc(){
    var onsuccess = function(val) {
        log("[stop] success : " + val);
    };
    
    var onerror = function(error) {
        log("[stop] code :" + error.code + " error name: " + error.name + "  message " + error.message);
    };	
    try {
        webapis.document.stop(onsuccess, onerror);	
    } catch (e) {
        log("[stop] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
    }
}

// Display previous doc page
function previousPage(){  
    var onsuccess = function(val) {
        log("[prevPage] success : " + val);
    };
    
    var onerror = function(error) {
        log("[prevPage] code :" + error.code + " error name: " + error.name + "  message " + error.message);
    };
    try {
        webapis.document.prevPage(onsuccess, onerror);		
    } catch (e) {
        log("[prevPage] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
    }	
}

// Display next doc page
function nextPage(){  
    var onsuccess = function(val) {
        log("[nextPage] success : " + val);
    };
    
    var onerror = function(error) {
        log("[nextPage] code :" + error.code + " error name: " + error.name + "  message " + error.message);
    };
    try {
        webapis.document.nextPage(onsuccess, onerror);		
    } catch (e) {
        log("[nextPage] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
    }	
}

// Change document orientation
function rotate(){ 
    var onsuccess = function(val) {
        log("[setDocumentOrientation] success : " + val);
    };
    
    var onerror = function(error) {
        log("[setDocumentOrientation] code :" + error.code + " error name: " + error.name + "  message " + error.message);
    };
    try {
        webapis.document.setDocumentOrientation(onsuccess, onerror);			
    } catch (e) {
        log("[setDocumentOrientation] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
    }
}

// Go to particular doc page
function goTo(){
    var onsuccess = function(val) {
        log("[gotoPage] success : " + val);
    };
    
    var onerror = function(error) {
        log("[gotoPage] code :" + error.code + " error name: " + error.name + "  message " + error.message);
    };
    try {
        webapis.document.gotoPage(3, onsuccess, onerror);		
    } catch (e) {
        log("[gotoPage] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
    }
}