define(function () {
    'use strict'

    function getString (str) {
        var type = {
            e: "([] + !![])[!![] + !![] + !![]]",
            n: "([] + [][[]])[![] + !![]]",
            r: "([] + !![])[![] + !![]]"
        };

        // Kein String? Dann Exception
        if (typeof str !== 'string')
            throw new Error('String pls!');

        // Leer-String? --> early return
        if (!str.trim())
            return;

        var strSplit = str.split('');

        var result = [];
        strSplit.forEach(function (elem) {
            result.push(type[elem]);
        });

        return result.join('+');
    }

    return getString;
});