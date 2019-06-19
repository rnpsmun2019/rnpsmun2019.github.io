document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var options={'draggable':true};
    var instances = M.Sidenav.init(elems, {});

    var elem = document.querySelectorAll('.fixed-action-btn');
    var instance = M.FloatingActionButton.init(elem, {});

    var ele = document.querySelectorAll('.tap-target');
    var instanc = M.TapTarget.init(ele, {});

    var e = document.querySelectorAll('.modal');
    var instan = M.Modal.init(e, {});

  });