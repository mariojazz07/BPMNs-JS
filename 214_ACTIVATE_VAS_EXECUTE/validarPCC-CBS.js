
var vCreatePcc = false;
var allowError = true;
var doPCC=false;
var doCBS=false;
var vCounter2=0;
var doLoop=false;
var vPCCArray=new Array();


if (vPCCService!= 'undefined' && vPCCService != 'NA')
{
	doPCC=true;
	vPCCArray=vPCCService.split(',');
	vSrvPcc=vPCCArray[vCounter2];
}

if(vOfferingPlanVAS != 'undefined' && !vIsPrimary){
	doCBS=true;
	vOffCbs=vOfferingPlanVAS;
}