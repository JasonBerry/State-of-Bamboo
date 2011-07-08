(function (window, undefined) {
    window.StateOfBamboo = {
        common: {
            addClass: function (element, className) {
                if (element && className && !StateOfBamboo.common.hasClass(element, className)) {
                    element.className = StateOfBamboo.common.trim(element.className + " " + className);
                }
            },
            hasClass: function (element, className) {
                if (element && className) {
                    var classes = element.className.split(" ");
                    
                    for (var i = 0, l = classes.length; i < l; i++) {
                        if (className == classes[i]) {
                            return true;
                        }
                    }
                }
                
                return false;
            },
            removeClass: function (element, className) {
                if (element && className) {
                    var classes = element.className.split(" ");
                    
                    for (var i = 0, l = classes.length; i < l; i++) {
                        if (className == classes[i]) {
                            classes.splice(i, 1);
                            
                            element.className = StateOfBamboo.common.trim(classes.join(" "));
                            
                            break;
                        }
                    }
                }
            },
            trim: function (string) {
                return string.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
            }
        },
        classes: {
            NSW: "origin-nsw",
            QLD: "origin-qld"
        },
        cycleBodyClass: function () {
            var bodyEl =  document.body;
            
            if (StateOfBamboo.common.hasClass(bodyEl, StateOfBamboo.classes.NSW)) {
                StateOfBamboo.common.removeClass(bodyEl, StateOfBamboo.classes.NSW);
                StateOfBamboo.common.addClass(bodyEl, StateOfBamboo.classes.QLD)
            } else if (StateOfBamboo.common.hasClass(bodyEl, StateOfBamboo.classes.QLD)) {
                StateOfBamboo.common.removeClass(bodyEl, StateOfBamboo.classes.NSW);
                StateOfBamboo.common.removeClass(bodyEl, StateOfBamboo.classes.QLD)
            } else {
                StateOfBamboo.common.addClass(bodyEl, StateOfBamboo.classes.NSW)
            }
        }
    };
})(window);