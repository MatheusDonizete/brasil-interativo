'use strict';

setTimeout(function () {
    const data = {
        AC: ['UFAC'],
        RO: ['FIMCA', 'UNISL', 'unir', 'facimed'],
        RR: ['UFRR'],
        AM: ['UEA'],
        AP: ['UNIFAP'],
        PA: ['UFPA', 'UEPA', 'CESUPA', 'UEPA', 'FAMAZ'],
        MA: ['UEMA'],
        PI: ['UNINOVAFAPI', 'UESPI', 'UFPI', 'UFPI - Picos', 'UFPI - Phb', 'FACID DEVRY'],
        CE: ['UFC - Fortaleza', 'UFC - Sobral', 'UNICHRISTUS', 'UNIFOR'],
        PB: ['UFCG', 'FCMCG', 'FCMPB'],
        RN: ['UFRN', 'UNP', 'UERN', 'UFERSA'],
        SE: ['FPS', 'UPE', 'UFS'],
        PE: ['UPE', 'UFAL'],
        BA: ['FASA', 'UNINASSAU', 'UNIFACS', 'UESB', 'UFBA CAT', 'UFRB', 'UNIT'],
        DF: ['UCB', 'FACIPLAC'],
        MS: ['UNIDERP', 'UNIC', 'UNIVAG'],
        MT: ['UFMT'],
        GO: ['PUC GO', 'FAMP'],
        TO: ['ITPAC - Araguaína', 'ITPAC - Porto'],
        RJ: ['UFRJ', 'UNIG', 'UNIGRANRIO', 'FMV', 'UNIFESO'],
        ES: ['UVV'],
        MG: ['FIPMOC', 'FUNORTE', 'UNIMONTES', 'UFJF', 'SUPREMA', 'FAMINAS', 'FAGOC', 'UFU', 'UFJF - GV', 'UNIFAMINAS'],
        SP: ['UNILUS', 'UNIMES', 'FCMSCSP', 'FMUSP', 'UNINOVE', 'UNIFESP', 'FAMERP', 'FMABC', 'UNISA', 'FACISB', 'FAMECA', 'PUCCAMP', 'PUCSP', 'UNIMAR', 'FAMEMA', 'UNAERP', 'CBM', 'ESTÁCIO RP', 'FMT', 'USF', 'UMC', 'SÃO CAMILO', 'FASM', 'UAM', 'USCS', 'USCS-BV', 'UNICAMP', 'UNIFEV', 'Anhembi Morumbi', 'UNIOESTE', 'FAM'],
        PR: ['UEL', 'PUC PR', 'UEM', 'UEPG', 'UNICESUMAR', 'FPP', 'UFPR', 'UP'],
        SC: ['UNISUL', 'UNIVILLE', 'UFSC', 'ULBRA'],
        RS: ['FURB', 'UFPEL', 'UCS', 'UCPEL', 'UPF', 'UFRGS']
    };

    const transformData = name => data[name].map(e => `<li>${e}</li>`).reduce((previous, current) => previous + current);

    function bindEvents() {
        const list = document.getElementById('list');
        const links = [].slice.call(document.querySelectorAll('svg a'));
        links.forEach(e => {
            e.addEventListener('click', function(evt){
                list.innerHTML = transformData(this.getAttribute('data-symbol'));
                links.forEach(e => e.classList.remove('active'));
                [].forEach.call(document.querySelectorAll(`svg a[data-region=${this.getAttribute('data-region')}]`), e => e.classList.add('active'));
            }, false);
        });
    }

    window.addEventListener('DOMContentLoaded', function (evt) {
        fetch('assets/by-states.svg')
            .then(res => res.text())
            .then(map => {
                document.getElementById('svg-container').innerHTML = map;
                bindEvents();
            });
    }, true);
}, 0);
