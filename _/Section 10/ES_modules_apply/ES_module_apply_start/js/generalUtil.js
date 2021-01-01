
/*
Other Utilities
*/

var domReady = function(funct) {
    document.addEventListener('DOMContentLoaded', function(){ 
        if (typeof funct === "function") {
            funct();
        }
    }, false);
};

//public: domReady