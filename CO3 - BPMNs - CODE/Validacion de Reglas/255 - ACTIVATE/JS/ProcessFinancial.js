var MSFinancial = JsonMS;
LOGGER.info(tLinea + MSFinancial + tLinea);

var vDeudaInitDate = getMSAttributes('FECHA_INICIO_EQUIPO', MSFinancial);
var vEquipoInitDate = getMSAttributes('FECHA_INICIO_EQUIPO', MSFinancial);
var vDeudaEndDate = getMSAttributes('FECHA_FIN_DEUDA', MSFinancial);
var vEquipoEndDate = getMSAttributes('FECHA_FIN_EQUIPO', MSFinancial);
var vSysdate = new Date();
var vDeudaVigente = false;
var vEquipoVigente = false;
//var vJson={Installments:[]};
var vJson = {};

if (typeof vDeudaInitDate != 'undefined') {
    vDeudaInitDate = getFinancialDate(vDeudaInitDate);

}

if (typeof vDeudaEndDate != 'undefined') {

    vDeudaEndDate = getFinancialDate(vDeudaEndDate);


    if (vDeudaEndDate >= vSysdate) {
        vDeudaVigente = true;
    }
}

if (typeof vEquipoInitDate != 'undefined') {
    vEquipoInitDate = getFinancialDate(vEquipoInitDate);

}

if (typeof vEquipoEndDate != 'undefined') {
    vEquipoEndDate = getFinancialDate(vEquipoEndDate);
    if (vEquipoEndDate >= vSysdate) {
        vEquipoVigente = true;
    }
}


var vIsOK = false;

if (!vDeudaVigente && !vEquipoVigente) {
    vIsOK = true;
} else if (!vDeudaVigente && vEquipoVigente) {
    vIsOK = true;
} else if (vDeudaVigente && !vEquipoVigente) {
    vIsOK = true;
}