$(document).ready(function() {
    var drop = $("#drop");

    // Tells the browser that we *can* drop on this target
    addEvent(drop, 'dragover', cancel);
    addEvent(drop, 'dragenter', cancel);

    addEvent(drop, 'drop', function(event) {
        // stops the browser from redirecting off to the text.
        if (event.preventDefault) {
            event.preventDefault();
        }
        var image= event.dataTransfer.getData('content');
        this.appendChild(document.getElementById(image));
        return false;
    });

    var dragItems = document.querySelectorAll('[draggable=true]');
    for (var i = 0; i < dragItems.length; i++) {
        addEvent(dragItems[i], 'dragstart', function(event) {
            // store the ID of the element, and collect it on the drop later on
            event.dataTransfer.setData('content', this.id);
        });

    }


    function cancel(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        return false;
    }
});
