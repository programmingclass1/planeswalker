var diceCount = 0;
// model to be used by knockout
var viewModel = {};

// function that will be called on page load
$(function() {
    viewModel.fieldId = "123-456-789";
    viewModel.diceCounters = [];

    viewModel = ko.mapping.fromJS(viewModel);

    ko.applyBindings(viewModel);

    setupInteract();
    
    // add single diceCounter by default
    addNewDiceClick();
});

function setupInteract(selector) {
    interact(".draggable").draggable({
        // enable inertial throwing
        inertia: false,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "parent",
            endOnly: false,
            elementRect: {
                top: 0,
                left: 0,
                bottom: 1,
                right: 1
            }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function(event) {
            var textEl = event.target.querySelector('p');

            textEl && (textEl.textContent =
                'moved a distance of ' +
                (Math.sqrt(event.dx * event.dx +
                    event.dy * event.dy) | 0) + 'px');
        }
    });
}

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;

function addNewDiceClick() {
    diceCount++;

    var dc = ko.mapping.fromJS(new diceCounter());
    dc.id = "dc_" + diceCount;
    dc.labelText = "Player " + diceCount;

    viewModel.diceCounters.push(ko.mapping.fromJS(dc));
}
