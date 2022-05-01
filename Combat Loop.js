//Defining the Forces
let IDFInfantryJordanBorder = 500000;
let JAFInfantryIsraelBorder = 500000;

let IDFTanksJordanBorder = 2000;
let JAFTanksIsraelBorder = 2000;

let IDFHelisJordanBorder = 500;
let JAFHelisIsraelBorder = 500;

let IDFATGMJordanBorder = 2000;
let JAFATGMIsraelBorder = 2000;

let IDFStingerJordanBorder = 2000;
let JAFStingerIsraelBorder = 2000;

let IDFJetJordanBorder = 500;
let JAFJetIsraelBorder = 500;

let IDFSAMJordanBorder = 300;
let JAFSAMIsraelBorder = 300;

//Defining the Arrays for the various unit types 
let IDFJordan = [IDFInfantryJordanBorder,IDFTanksJordanBorder,IDFHelisJordanBorder,IDFATGMJordanBorder,IDFStingerJordanBorder,IDFJetJordanBorder,IDFSAMJordanBorder];
let JAFIsrael = [JAFInfantryIsraelBorder,JAFTanksIsraelBorder,JAFHelisIsraelBorder,JAFATGMIsraelBorder,JAFStingerIsraelBorder,JAFJetIsraelBorder,JAFSAMIsraelBorder];

//Defining objects to determine the hit probabilities
let InfantryHitProbability = {
Infantry: 0.1,
Tank: 0.0001,
SAM: 0.000012,
ATGM: 0.0003,
Stinger: 0.0005,
Jet: 0.000001    
};

let TankHitProbability = {
    Infantry: 20,
    Tank: 0.03,
    SAM: 0.00012,
    Stinger: 0.001  
};

let HeliHitProbability = {
    Infantry: 2,
    Tank: 0.06,
    ATGM: 0.005
};

let ATGMHitProbability = {
    Tank: 0.0125
};

let StingerHitProbability = {
    Jet:  0.009,
    Heli: 0.05 
};

let JetHitProbability = {
    Infantry: 10,
    Heli: 0.015,
    Tank: 0.1,
    ATGM: 4
};
let SAMHitProbability = {
    Jet:  0.012,
    Heli: 0.1 
};




//function to generate random numbers for combat rolls 
//let randvar = Math.random()*2;
//console.log(randvar);



//writing the call functions for the different phases of the battle
console.log('Running the Battle call function');

function BattleCallFunction(IDFJordan,JAFIsrael) {
console.log('The state of the forces on the front is as follows');
console.log('Beligerant:   ' + 'Israel' + ' ' + 'Jordan');
console.log('Leader:       ' + 'Naftali Bennet' + ' ' + 'Abdullah the 2nd');
console.log('Infantry:     ' + IDFJordan[0] + ' ' + JAFIsrael[0]);
console.log('Tanks:        ' + IDFJordan[1] + ' ' + JAFIsrael[1]);
console.log('Helis:        ' + IDFJordan[2] + ' ' + JAFIsrael[2]);
console.log('ATGMs:        ' + IDFJordan[3] + ' ' + JAFIsrael[3]);
console.log('Stingers:     ' + IDFJordan[4] + ' ' + JAFIsrael[4]);
console.log('Jets:         ' + IDFJordan[5] + ' ' + JAFIsrael[5]);
console.log('SAMs:         ' + IDFJordan[6] + ' ' + JAFIsrael[6]);

}



function MidBattleCallFunction(IDFJordan,JAFIsrael) {
    console.log('After casulaties the state of the front is as follows');
    console.log('Beligerant:   ' + 'Israel' + ' ' + 'Jordan');
    console.log('Leader:       ' + 'Naftali Bennet' + ' ' + 'Abdullah the 2nd');
    console.log('Infantry:     ' + IDFJordan[0] + ' ' + JAFIsrael[0]);
    console.log('Tanks:        ' + IDFJordan[1] + ' ' + JAFIsrael[1]);
    console.log('Helis:        ' + IDFJordan[2] + ' ' + JAFIsrael[2]);
    console.log('ATGMs:        ' + IDFJordan[3] + ' ' + JAFIsrael[3]);
    console.log('Stingers:     ' + IDFJordan[4] + ' ' + JAFIsrael[4]);
    console.log('Jets:         ' + IDFJordan[5] + ' ' + JAFIsrael[5]);
    console.log('SAMs:         ' + IDFJordan[6] + ' ' + JAFIsrael[6]);
    }

    function EndBattleCallFunction(IDFJordan,JAFIsrael) {
        console.log('The Final Results of the battle are in');
        console.log('Beligerant:   ' + 'Israel' + ' ' + 'Jordan');
        console.log('Leader:       ' + 'Naftali Bennet' + ' ' + 'Abdullah the 2nd');
        console.log('Infantry:     ' + IDFJordan[0] + ' ' + JAFIsrael[0]);
        console.log('Tanks:        ' + IDFJordan[1] + ' ' + JAFIsrael[1]);
        console.log('Helis:        ' + IDFJordan[2] + ' ' + JAFIsrael[2]);
        console.log('ATGMs:        ' + IDFJordan[3] + ' ' + JAFIsrael[3]);
        console.log('Stingers:     ' + IDFJordan[4] + ' ' + JAFIsrael[4]);
        console.log('Jets:         ' + IDFJordan[5] + ' ' + JAFIsrael[5]);
        console.log('SAMs:         ' + IDFJordan[6] + ' ' + JAFIsrael[6]);
        }
    











//writing a note for the output
console.log('Running the battle calculation function');




//Defining the battle function
function Battle(IDFJordan,JAFIsrael) {
  let roundCount=0;
  let LoopSystem=true;
  while(LoopSystem){
roundCount=roundCount+1;
  //Infanrty battle begins
 console.log('Israeli Infantry fire at Jordanian Infantry');
 let HitCounter1=Math.floor(IDFJordan[0]*(InfantryHitProbability.Infantry*Math.random()*2));
 console.log('Israeli Infantry Kill ' + HitCounter1 + ' Jordainian soldiers');
 console.log('Jordanian Infantry fire at Israeli Infantry');
 let HitCounter2=Math.floor(JAFIsrael[0]*(InfantryHitProbability.Infantry*Math.random()*2));
 console.log('Jordanian Infantry Kill ' + HitCounter2 + ' Israeli soldiers');
 //Implementing losses
 IDFJordan[0]=IDFJordan[0]-HitCounter2;
 if ( IDFJordan[0] < 0)  IDFJordan[0] = 0;
 JAFIsrael[0]=JAFIsrael[0]-HitCounter1;
 if ( JAFIsrael[0] < 0) JAFIsrael[0] = 0;
 //infantry battle ends

  //Infanrty vs Tank battle begins
  console.log('Israeli Infantry fire at Jordanian Tanks');
  HitCounter1=Math.floor(IDFJordan[0]*(InfantryHitProbability.Tank*Math.random()*2));
  console.log('Israeli Infantry Kill ' + HitCounter1 + ' Jordainian Tanks');
  console.log('Jordanian Infantry fire at Israeli Tanks');
  HitCounter2=Math.floor(JAFIsrael[0]*(InfantryHitProbability.Tank*Math.random()*2));
  console.log('Jordanian Infantry Kill ' + HitCounter2 + ' Israeli Tanks');
  //Implementing losses
  IDFJordan[1]=IDFJordan[1]-HitCounter2;
  if ( IDFJordan[1] < 0)  IDFJordan[1] = 0;
  JAFIsrael[0]=JAFIsrael[0]-HitCounter1;
  if ( JAFIsrael[1] < 0) JAFIsrael[1] = 0;
  //Infanrty vs Tank battle ends

  //Infanrty vs SAM battle begins
  console.log('Israeli Infantry fire at Jordanian SAMs');
  HitCounter1=Math.floor(IDFJordan[0]*(InfantryHitProbability.SAM*Math.random()*2));
  console.log('Israeli Infantry Kill ' + HitCounter1 + ' Jordainian SAMs');
  console.log('Jordanian Infantry fire at Israeli SAMs');
  HitCounter2=Math.floor(JAFIsrael[0]*(InfantryHitProbability.SAM*Math.random()*2));
  console.log('Jordanian Infantry Kill ' + HitCounter2 + ' Israeli SAMs');
  //Implementing losses
  IDFJordan[6]=IDFJordan[6]-HitCounter2;
  if ( IDFJordan[6] < 0)  IDFJordan[6] = 0;
  JAFIsrael[6]=JAFIsrael[6]-HitCounter1;
  if ( JAFIsrael[6] < 0) JAFIsrael[6] = 0;
  //Infanrty vs SAM battle ends

  //Infanrty vs ATGMs battle begins
  console.log('Israeli Infantry fire at Jordanian ATGMs');
  HitCounter1=Math.floor(IDFJordan[0]*(InfantryHitProbability.ATGM*Math.random()*2));
  console.log('Israeli Infantry Kill ' + HitCounter1 + ' Jordainian ATGMs');
  console.log('Jordanian Infantry fire at Israeli ATGMs');
  HitCounter2=Math.floor(JAFIsrael[0]*(InfantryHitProbability.ATGM*Math.random()*2));
  console.log('Jordanian Infantry Kill ' + HitCounter2 + ' Israeli ATGMs');
  //Implementing losses
  IDFJordan[3]=IDFJordan[3]-HitCounter2;
  if ( IDFJordan[3] < 0)  IDFJordan[3] = 0;
  JAFIsrael[3]=JAFIsrael[3]-HitCounter1;
  if ( JAFIsrael[3] < 0) JAFIsrael[3] = 0;
  //Infanrty vs ATGMs battle ends

//Infanrty vs Stringers battle begins
console.log('Israeli Infantry fire at Jordanian Stingers');
HitCounter1=Math.floor(IDFJordan[0]*(InfantryHitProbability.Stinger*Math.random()*2));
console.log('Israeli Infantry Kill ' + HitCounter1 + ' Jordainian Stingers');
console.log('Jordanian Infantry fire at Israeli Stingers');
HitCounter2=Math.floor(JAFIsrael[0]*(InfantryHitProbability.Stinger*Math.random()*2));
console.log('Jordanian Infantry Kill ' + HitCounter2 + ' Israeli Stingers');
//Implementing losses
IDFJordan[4]=IDFJordan[4]-HitCounter2;
if ( IDFJordan[4] < 0)  IDFJordan[4] = 0;
JAFIsrael[4]=JAFIsrael[4]-HitCounter1;
if ( JAFIsrael[4] < 0) JAFIsrael[4] = 0;
//Infanrty vs Stingers battle ends

//Infanrty vs Jets battle begins
console.log('Israeli Infantry fire at Jordanian Jets');
HitCounter1=Math.floor(IDFJordan[0]*(InfantryHitProbability.Jet*Math.random()*2));
console.log('Israeli Infantry Kill ' + HitCounter1 + ' Jordainian Jets');
console.log('Jordanian Infantry fire at Israeli Jets');
HitCounter2=Math.floor(JAFIsrael[0]*(InfantryHitProbability.Jet*Math.random()*2));
console.log('Jordanian Infantry Kill ' + HitCounter2 + ' Israeli Jets');
//Implementing losses
IDFJordan[5]=IDFJordan[5]-HitCounter2;
if ( IDFJordan[5] < 0)  IDFJordan[5] = 0;
JAFIsrael[5]=JAFIsrael[5]-HitCounter1;
if ( JAFIsrael[5] < 0) JAFIsrael[5] = 0;
//Infanrty vs Jets battle ends




//----------------------------------------------------------------------------------------------









//----------------------------------------------------------------------------------------------
 //Tanks attack Infantry begins
 console.log('Israeli tanks fire at Jordanian infantry');
 HitCounter1=Math.floor(IDFJordan[1]*(TankHitProbability.Infantry*Math.random()*2));
 console.log('Israeli tanks Kill ' + HitCounter1 + ' Jordainian soldiers');
 console.log('Jordanian tanks fire at Israeli infantry');
 HitCounter2=Math.floor(JAFIsrael[1]*(TankHitProbability.Infantry*Math.random()*2));
 console.log('Jordanian tanks Kill ' + HitCounter2 + ' Israeli soldiers');
 //Implementing losses
 IDFJordan[0]=IDFJordan[0]-HitCounter2;
 if ( IDFJordan[0] < 0) IDFJordan[0] = 0;
 JAFIsrael[0]=JAFIsrael[0]-HitCounter1;
 if ( JAFIsrael[0] < 0) JAFIsrael[0]  = 0;
 //Tanks attack infantry ends

 //Tank vs tank begins
   console.log('Israeli tanks fire at Jordanian tanks');
   HitCounter1=Math.floor(IDFJordan[1]*(TankHitProbability.Tank*Math.random()*2));
   console.log('Israeli tanks Kill ' + HitCounter1 + ' Jordainian tanks');
   console.log('Jordanian tanks fire at Israeli tanks');
   HitCounter2=Math.floor(JAFIsrael[1]*(TankHitProbability.Tank*Math.random()*2));
   console.log('Jordanian tanks Kill ' + HitCounter2 + ' Israeli tanks');
   //Implementing losses
   IDFJordan[1]=IDFJordan[1]-HitCounter2;
   if ( IDFJordan[1] < 0) IDFJordan[1] = 0;
   JAFIsrael[1]=JAFIsrael[1]-HitCounter1;
   if ( JAFIsrael[1] < 0) JAFIsrael[1] = 0;
   //Tank vs tank ends

 //Tank vs SAM begins
 console.log('Israeli tanks fire at Jordanian SAMs');
 HitCounter1=Math.floor(IDFJordan[1]*(TankHitProbability.SAM*Math.random()*2));
 console.log('Israeli tanks Kill ' + HitCounter1 + ' Jordainian SAMs');
 console.log('Jordanian tanks fire at Israeli SAMs');
 HitCounter2=Math.floor(JAFIsrael[1]*(TankHitProbability.SAM*Math.random()*2));
 console.log('Jordanian tanks Kill ' + HitCounter2 + ' Israeli SAMs');
 //Implementing losses
 IDFJordan[6]=IDFJordan[6]-HitCounter2;
 if ( IDFJordan[6] < 0) IDFJordan[6] = 0;
 JAFIsrael[6]=JAFIsrael[6]-HitCounter1;
 if ( JAFIsrael[6] < 0) JAFIsrael[6] = 0;
 //Tank vs SAM ends


 //Tank vs Stinger begins
 console.log('Israeli tanks fire at Jordanian Stingers');
 HitCounter1=Math.floor(IDFJordan[1]*(TankHitProbability.Stinger*Math.random()*2));
 console.log('Israeli tanks Kill ' + HitCounter1 + ' Jordainian Stingers');
 console.log('Jordanian tanks fire at Israeli Stingers');
 HitCounter2=Math.floor(JAFIsrael[1]*(TankHitProbability.Stinger*Math.random()*2));
 console.log('Jordanian tanks Kill ' + HitCounter2 + ' Israeli Stingers');
 //Implementing losses
 IDFJordan[4]=IDFJordan[4]-HitCounter2;
 if ( IDFJordan[4] < 0) IDFJordan[4] = 0;
 JAFIsrael[4]=JAFIsrael[4]-HitCounter1;
 if ( JAFIsrael[4] < 0) JAFIsrael[4] = 0;
 //Tank vs Stinger ends
//----------------------------------------------------------------------------------------------







//----------------------------------------------------------------------------------------------
 //Heli vs Infantry begins
 console.log('Israeli Helicopters fire at Jordanian Infantry');
 HitCounter1=Math.floor(IDFJordan[2]*(HeliHitProbability.Infantry*Math.random()*2));
 console.log('Israeli Helicopters Kill ' + HitCounter1 + ' Jordainian Infantry');
 console.log('Jordanian Helicopters fire at Israeli Infantry');
 HitCounter2=Math.floor(JAFIsrael[2]*(HeliHitProbability.Infantry*Math.random()*2));
 console.log('Jordanian Helicopters Kill ' + HitCounter2 + ' Israeli Infantry');
 //Implementing losses
 IDFJordan[0]=IDFJordan[0]-HitCounter2;
 if ( IDFJordan[0] < 0) IDFJordan[0] = 0;
 JAFIsrael[0]=JAFIsrael[0]-HitCounter1;
 if ( JAFIsrael[0] < 0) JAFIsrael[0] = 0;
 //Heli vs Infanty ends

 
  //Heli vs Tank begins
  console.log('Israeli Helicopters fire at Jordanian Tanks');
  HitCounter1=Math.floor(IDFJordan[2]*(HeliHitProbability.Tank*Math.random()*2));
  console.log('Israeli Helicopters Kill ' + HitCounter1 + ' Jordainian Tanks');
  console.log('Jordanian Helicopters fire at Israeli Tanks');
  HitCounter2=Math.floor(JAFIsrael[2]*(HeliHitProbability.Tank*Math.random()*2));
  console.log('Jordanian Helicopters Kill ' + HitCounter2 + ' Israeli Tanks');
  //Implementing losses
  IDFJordan[1]=IDFJordan[1]-HitCounter2;
  if ( IDFJordan[1] < 0) IDFJordan[1] = 0;
  JAFIsrael[1]=JAFIsrael[1]-HitCounter1;
  if ( JAFIsrael[1] < 0) JAFIsrael[1] = 0;
  //Heli vs Tank ends


  //Heli vs ATGM begins
  console.log('Israeli Helicopters fire at Jordanian ATGM');
  HitCounter1=Math.floor(IDFJordan[2]*(HeliHitProbability.ATGM*Math.random()*2));
  console.log('Israeli Helicopters Kill ' + HitCounter1 + ' Jordainian ATGMs');
  console.log('Jordanian Helicopters fire at Israeli ATGMs');
  HitCounter2=Math.floor(JAFIsrael[2]*(HeliHitProbability.ATGM*Math.random()*2));
  console.log('Jordanian Helicopters Kill ' + HitCounter2 + ' Israeli ATGMs');
  //Implementing losses
  IDFJordan[3]=IDFJordan[3]-HitCounter2;
  if ( IDFJordan[3] < 0) IDFJordan[3] = 0;
  JAFIsrael[3]=JAFIsrael[3]-HitCounter1;
  if ( JAFIsrael[3] < 0) JAFIsrael[3] = 0;
  //Heli vs ATGM ends
//----------------------------------------------------------------------------------------------







//----------------------------------------------------------------------------------------------
 //ATGM vs Tanks begins
 console.log('Israeli ATGMs fire at Jordanian Tanks');
 HitCounter1=Math.floor(IDFJordan[3]*(ATGMHitProbability.Tank*Math.random()*2));
 console.log('Israeli ATGMs Kill ' + HitCounter1 + ' Jordainian Tanks');
 console.log('Jordanian ATGMs fire at Israeli Tanks');
 HitCounter2=Math.floor(JAFIsrael[3]*(ATGMHitProbability.Tank*Math.random()*2));
 console.log('Jordanian ATGMs Kill ' + HitCounter2 + ' Israeli Tanks');
 //Implementing losses
 IDFJordan[1]=IDFJordan[1]-HitCounter2;
 if ( IDFJordan[1] < 0) IDFJordan[1] = 0;
 JAFIsrael[1]=JAFIsrael[1]-HitCounter1;
 if ( JAFIsrael[1] < 0) JAFIsrael[1] = 0;
 //ATGM vs Tanks ends
//----------------------------------------------------------------------------------------------







//----------------------------------------------------------------------------------------------
 //Stingers vs Helis begins
 console.log('Israeli Stingers fire at Jordanian Helicopters');
 HitCounter1=Math.floor(IDFJordan[4]*(StingerHitProbability.Heli*Math.random()*2));
 console.log('Israeli Stingers Kill ' + HitCounter1 + ' Jordainian Helicopters');
 console.log('Jordanian Stingers fire at Israeli Helicopters');
 HitCounter2=Math.floor(JAFIsrael[4]*(StingerHitProbability.Heli*Math.random()*2));
 console.log('Jordanian Stingers Kill ' + HitCounter2 + ' Israeli Helicopters');
 //Implementing losses
 IDFJordan[2]=IDFJordan[2]-HitCounter2;
 if ( IDFJordan[2] < 0) IDFJordan[2] = 0;
 JAFIsrael[2]=JAFIsrael[2]-HitCounter1;
 if ( JAFIsrael[2] < 0) JAFIsrael[2] = 0;
 //Stingers vs Helis ends

 //Stingers vs Jets begins
 console.log('Israeli Stingers fire at Jordanian Helicopters');
 HitCounter1=Math.floor(IDFJordan[4]*(StingerHitProbability.Jet*Math.random()*2));
 console.log('Israeli Stingers Kill ' + HitCounter1 + ' Jordainian Jets');
 console.log('Jordanian Stingers fire at Israeli Jets');
 HitCounter2=Math.floor(JAFIsrael[4]*(StingerHitProbability.Jet*Math.random()*2));
 console.log('Jordanian Stingers Kill ' + HitCounter2 + ' Israeli Jets');
 //Implementing losses
 IDFJordan[5]=IDFJordan[5]-HitCounter2;
 if ( IDFJordan[5] < 0) IDFJordan[5] = 0;
 JAFIsrael[5]=JAFIsrael[5]-HitCounter1;
 if ( JAFIsrael[5] < 0) JAFIsrael[5] = 0;
 //Stingers vs Jets ends
//----------------------------------------------------------------------------------------------







//----------------------------------------------------------------------------------------------
 //SAMs vs Helis begins
 console.log('Israeli SAMs fire at Jordanian Helicopters');
 HitCounter1=Math.floor(IDFJordan[6]*(SAMHitProbability.Heli*Math.random()*2));
 console.log('Israeli SAMs Kill ' + HitCounter1 + ' Jordainian Helicopters');
 console.log('Jordanian SAMs fire at Israeli Helicopters');
 HitCounter2=Math.floor(JAFIsrael[6]*(SAMHitProbability.Heli*Math.random()*2));
 console.log('Jordanian SAMs Kill ' + HitCounter2 + ' Israeli Helicopters');
 //Implementing losses
 IDFJordan[2]=IDFJordan[2]-HitCounter2;
 if ( IDFJordan[2] < 0) IDFJordan[2] = 0;
 JAFIsrael[2]=JAFIsrael[2]-HitCounter1;
 if ( JAFIsrael[2] < 0) JAFIsrael[2] = 0;
 //SAMs vs Helis ends

 //SAMs vs Jets begins
 console.log('Israeli SAMs fire at Jordanian Helicopters');
 HitCounter1=Math.floor(IDFJordan[6]*(SAMHitProbability.Jet*Math.random()*2));
 console.log('Israeli SAMs Kill ' + HitCounter1 + ' Jordainian Jets');
 console.log('Jordanian SAMs fire at Israeli Jets');
 HitCounter2=Math.floor(JAFIsrael[6]*(SAMHitProbability.Jet*Math.random()*2));
 console.log('Jordanian SAMs Kill ' + HitCounter2 + ' Israeli Jets');
 //Implementing losses
 IDFJordan[5]=IDFJordan[5]-HitCounter2;
 if ( IDFJordan[5] < 0) IDFJordan[5] = 0;
 JAFIsrael[5]=JAFIsrael[5]-HitCounter1;
 if ( JAFIsrael[5] < 0) JAFIsrael[5] = 0;
 //SAMs vs Jets ends
//----------------------------------------------------------------------------------------------







//----------------------------------------------------------------------------------------------
//Jets vs Infantry begins
console.log('Israeli Jets fire at Jordanian Infantry');
HitCounter1=Math.floor(IDFJordan[4]*(JetHitProbability.Infantry*Math.random()*2));
console.log('Israeli Jets Kill ' + HitCounter1 + ' Jordainian Infantry');
console.log('Jordanian Jets fire at Israeli Infantry');
HitCounter2=Math.floor(JAFIsrael[4]*(JetHitProbability.Infantry*Math.random()*2));
console.log('Jordanian Jets Kill ' + HitCounter2 + ' Israeli Infantry');
//Implementing losses
IDFJordan[0]=IDFJordan[0]-HitCounter2;
if ( IDFJordan[0] < 0) IDFJordan[0] = 0;
JAFIsrael[0]=JAFIsrael[0]-HitCounter1;
if ( JAFIsrael[0] < 0) JAFIsrael[0] = 0;
//Jets vs Infantry ends

//Jets vs Helis begins
console.log('Israeli Jets fire at Jordanian Helicopters');
HitCounter1=Math.floor(IDFJordan[4]*(JetHitProbability.Heli*Math.random()*2));
console.log('Israeli Jets Kill ' + HitCounter1 + ' Jordainian Helicopters');
console.log('Jordanian Jets fire at Israeli Helicopters');
HitCounter2=Math.floor(JAFIsrael[4]*(JetHitProbability.Heli*Math.random()*2));
console.log('Jordanian Jets Kill ' + HitCounter2 + ' Israeli Helicopters');
//Implementing losses
IDFJordan[2]=IDFJordan[2]-HitCounter2;
if ( IDFJordan[2] < 0) IDFJordan[2] = 0;
JAFIsrael[2]=JAFIsrael[2]-HitCounter1;
if ( JAFIsrael[2] < 0) JAFIsrael[2] = 0;
//Jets vs Helis ends

//Jets vs Tanks begins
console.log('Israeli Jets fire at Jordanian Tanks');
HitCounter1=Math.floor(IDFJordan[4]*(JetHitProbability.Tank*Math.random()*2));
console.log('Israeli Jets Kill ' + HitCounter1 + ' Jordainian Tanks');
console.log('Jordanian Jets fire at Israeli Tanks');
HitCounter2=Math.floor(JAFIsrael[4]*(JetHitProbability.Tank*Math.random()*2));
console.log('Jordanian Jets Kill ' + HitCounter2 + ' Israeli Tanks');
//Implementing losses
IDFJordan[1]=IDFJordan[1]-HitCounter2;
if ( IDFJordan[1] < 0) IDFJordan[1] = 0;
JAFIsrael[1]=JAFIsrael[1]-HitCounter1;
if ( JAFIsrael[1] < 0) JAFIsrael[1] = 0;
//Jets vs Tanks ends

//Jets vs ATGMs begins
console.log('Israeli Jets fire at Jordanian ATGMs');
HitCounter1=Math.floor(IDFJordan[4]*(JetHitProbability.ATGM*Math.random()*2));
console.log('Israeli Jets Kill ' + HitCounter1 + ' Jordainian ATGMs');
console.log('Jordanian Jets fire at Israeli ATGMs');
HitCounter2=Math.floor(JAFIsrael[4]*(JetHitProbability.ATGM*Math.random()*2));
console.log('Jordanian Jets Kill ' + HitCounter2 + ' Israeli ATGMs');
//Implementing losses
IDFJordan[3]=IDFJordan[3]-HitCounter2;
if ( IDFJordan[3] < 0) IDFJordan[3] = 0;
JAFIsrael[3]=JAFIsrael[3]-HitCounter1;
if ( JAFIsrael[3] < 0) JAFIsrael[3] = 0;
//Jets vs ATGMs ends
//----------------------------------------------------------------------------------------------







//----------------------------------------------------------------------------------------------
// Checking to see if the battle is resolved
if (IDFJordan[0] == 0 && IDFJordan[1] == 0 && IDFJordan[2] == 0 && IDFJordan[3] == 0 && IDFJordan[4] == 0 && IDFJordan[5] == 0 && IDFJordan[6] == 0 && JAFIsrael[0] == 0 && JAFIsrael[1] == 0 && JAFIsrael[2] == 0 && JAFIsrael[3] == 0 && JAFIsrael[4] == 0 && JAFIsrael[5] == 0 && JAFIsrael[6] == 0) {
    console.log('The battle has concluded in a draw between Israel and Jordan');
    console.log('Number of Rounds  ' + roundCount)
    EndBattleCallFunction(IDFJordan,JAFIsrael); 
    break;
    }
    else if (IDFJordan[0] == 0 && IDFJordan[1] == 0 && IDFJordan[2] == 0 && IDFJordan[3] == 0 && IDFJordan[4] == 0 && IDFJordan[5] == 0 && IDFJordan[6] == 0) {
     console.log('The Israelis have been defeated by the Jordanians');
     console.log('Number of Rounds  ' + roundCount)
     EndBattleCallFunction(IDFJordan,JAFIsrael); 
     break;
     }
     else if (JAFIsrael[0] == 0 && JAFIsrael[1] == 0 && JAFIsrael[2] == 0 && JAFIsrael[3] == 0 && JAFIsrael[4] == 0 && JAFIsrael[5] == 0 && JAFIsrael[6] == 0) {
        console.log('The Israelis have been victorious over the Jordanians'); 
        console.log('Number of Rounds  ' + roundCount)
        EndBattleCallFunction(IDFJordan,JAFIsrael);  
        break;
        }
//        else if {
 //   console.log('The battle is not yet resolved and is goind to a new round');
 //   }
    else if (roundCount == 50) {
        EndBattleCallFunction(IDFJordan,JAFIsrael); 
        break;    
    }


//End of battle resolution check

   MidBattleCallFunction(IDFJordan,JAFIsrael);

  }
}


Battle(IDFJordan,JAFIsrael)





