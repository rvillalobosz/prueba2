(function () {
    function activar(quien, momento, objeto) {
        if (objeto === void 0) { objeto = 'batiseñal'; }
        if (momento) {
            console.log(quien + "activo la " + objeto + " muy " + momento);
        }
        else
            console.log(quien + " activo la " + objeto);
    }
    activar('Gordon', 'tarde');
})();
