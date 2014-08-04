define(['getString'], function (getString) {
    var reneString = getString('rene');

    document.querySelector('#display_name').innerText = eval(reneString);
    document.querySelector('#display_code').innerText = reneString;
});