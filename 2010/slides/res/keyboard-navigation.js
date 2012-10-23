/* JavaScript functions used for keyboard navigation (thanks Laza) */

var KeyBoardNavigation = {

    keyPressed: function(e) {
        // Add compability with widgets that uses user input (like the Commenting widget)
        if(typeof _jaWidgetFocus != 'undefined' && _jaWidgetFocus) {
            return true;
        }
        // If no event has been set then set event to window.event
        e = !e ? window.event : e;
        if(e.keyCode) {
            keyCode = e.keyCode;
        } else if(e.which) {
            keyCode = e.which;
        }
        // This function is defined in index-scripts.inc and slide-scripts.inc
        return KeyBoardNavigation.handleKeyCode(keyCode);
    },

    setupListeners: function() {
        if (document.addEventListener) {
            document.addEventListener('keypress', this.keyPressed, false);
        } else if (document.attachEvent) {
            document.attachEvent('onkeydown', this.keyPressed);
        }
    }
};

window.onload = function() {
	KeyBoardNavigation.setupListeners();
};
