/**
 * myModule - https://github.com/mpurham/example-module
 *
 * Functions:
 *
 * UPPERCASE
 * DOWNCASE
 * CAMELCASE
 *
 */
(function() {
    var myModule;

    myModule = {

        function uppercase(str) {
            return str.toUpperCase();
        }

        function downcase(str) {
            return str.toLowerCase();
        }

        function camelCase(str) {
            return str.split(' ').map(function(word,index) {
            // If it is the first word make sure to lowercase all the chars.
            if(index == 0){
              return word.toLowerCase();
            }
            // If it is not the first word only upper case the first char and lowercase the rest.
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join('');
        }
    };

    // module.exports and AMD are mutually exclusive.
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = myModule; 
    }
    
    // that's it!
    return myModule;
})();
