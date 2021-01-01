
/*
String Functionality
*/
var numChar = function(str, char) {
        return (str.split(char).length - 1);
    },

    breakOut = function(str, delim) {
        var arr = str.split(delim);
        return arr.map(function(val) {
            return val.trim();
        });
    };

//public: numChar, breakOut