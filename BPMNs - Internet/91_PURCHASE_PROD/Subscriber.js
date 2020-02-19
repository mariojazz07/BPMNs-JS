var typeSubscriber = 'PRE,HIC,CIN,HIB,HIB20,POS';
var vSubscriberFound = false;
var vPaidType = '0';

if (typeof vSubscriberType != 'undefined') {
    if (typeSubscriber.indexOf(vSubscriberType) < 0) {
        vSubscriberType = 'POS';
    }
    if (vSubscriberType == 'CIN') {
        vSubscriberType = 'HIC';
    }
    switch (vSubscriberType) {
        case 'PRE':
            vPaidType = '0';
            break;
        default:
            vPaidType = '1';
    }
    vSubscriberFound = true;
}
LOGGER.info(tLinea + 'Llego a Validar Suscriptor' + tLinea);

var vCBSSubscriberInfo=getJSON(vSubscriberInfoJson);
var vBillingDay=vCBSSubscriberInfo.QueryCustomerInfoResultMsg.QueryCustomerInfoResult.Account.AcctInfo.BillCycleInfo.BillCycleType;