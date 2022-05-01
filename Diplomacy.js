// defining the objects for each nation

let Relations = {
    Israel_Jordan: 80,
    Israel_Egypt: 50,
    Egypt_Jordan: 30
}
//past relation1
let RelationsPast = {
    Israel_Jordan: 80,
    Israel_Egypt: 50,
    Egypt_Jordan: 30
}

let MilitaryPact = {
    Israel_Jordan: false,
    Israel_Egypt: false,
    Egypt_Jordan: false
}

let BorderDispute = {
    Israel_Jordan: false,
    Israel_Egypt: false,
    Egypt_Jordan: false
}

let WarCountdown = {
    Israel_Jordan: 3,
    Israel_Egypt: 3,
    Egypt_Jordan: 3
}






let LoopIteration=0;
let LoopSystem=true;
while(LoopSystem){


for (const key in Relations) {
   //RelationsPast[key]= Relations[key];

  //  console.log('Loop Iteration: '+ LoopIteration);
   // for (const key in Relations) {console.log(`${key}: ${Relations[key]}     ${RelationsPast[key]}   ${MilitaryPact[key]}   ${BorderDispute[key]}   ${WarCountdown[key]}`);}
        //If no special conditions
        //----------------------------------------------------------------------------------------
       // if statement for purely random relations
        if (BorderDispute[key] == false && MilitaryPact[key] == false && RelationsPast[key] == Relations[key] ) {
//                    console.log(' Purely Random Relations');  
            RelationsPast[key]= Relations[key]; 
            Relations[key]=Relations[key]+Math.floor(Math.random() * 21)-10;
                //activation of the border dispute
                if(Relations[key] <= 20){BorderDispute[key] = true;} 
                //activation of the Military Pact
                if(Relations[key] >= 80){MilitaryPact[key] = true;} 
        }
        //if it imporved on the last turn rigged to be more likely improve a little more this turn
        else if (BorderDispute[key] == false && MilitaryPact[key] == false && RelationsPast[key] < Relations[key] ) {
           // console.log('Slightly rigged relations better');   
            RelationsPast[key]= Relations[key];  
            Relations[key]= Relations[key]+Math.floor(Math.random() * 21)-10+5;
             //activation of the border dispute
              if(Relations[key] <= 20){BorderDispute[key] = true;} 
              //activation of the Military Pact
              if(Relations[key] >= 80){MilitaryPact[key] = true;} 
        }
            //if it degraded on the last turn rigged to be more likely degrade a little more this turn
        else if (BorderDispute[key] == false && MilitaryPact[key] == false && RelationsPast[key] > Relations[key] ) {
           // console.log('Slightly rigged relations worse');
            RelationsPast[key]= Relations[key];  
          //  console.log(RelationsPast[key]);
            Relations[key]=Relations[key]+Math.floor(Math.random() * 21)-10-5;
             //activation of the border dispute
             if(Relations[key] <= 20){BorderDispute[key] = true;} 
             //activation of the Military Pact
             if(Relations[key] >= 80){MilitaryPact[key] = true;} 
        }
    
        

        
        //If there is an active border dispute        
        //------------------------------------------------------------------------------------------
        if (BorderDispute[key] == true) {
           // console.log('Border dispute');   
            Relations[key] = 0; 
            RelationsPast[key] = 0; 
            //activate war
            let WarBreak = Math.floor(Math.random() * 101);
            if (WarCountdown[key] == 0)
            {
               // console.log('War'); 
            }
          // low potential to get the peace back
            
            else if (WarBreak < 5 ) {MilitaryPact[key] = false; Relations[key] = 31; RelationsPast[key] = 30; console.log('Break War'); WarCountdown[key] =3;}

            //countdown further to war
            else {WarCountdown[key] = WarCountdown[key] -1;}
        }
        //------------------------------------------------------------------------------------------
        //If there is a military pact       
        //------------------------------------------------------------------------------------------
        if (MilitaryPact[key] == true) {
            //console.log('Military Pact');   
            Relations[key] = 94; 
            RelationsPast[key] = 94; 
            // A 10 percent chance to break the pact
            let PactBreak = Math.floor(Math.random() * 101);
            if (PactBreak < 10 ) {Relations[key] = 70; RelationsPast[key] = 71; console.log('Break Pact'); MilitaryPact[key] = false; }
            // If at war with ally degrade relations
            
           else if (MilitaryPact[key] == true){
                // if Israel has Pact Jordan, degrade relations with Eygpt on war 
                if (key == 'Israel_Jordan' && WarCountdown.Israel_Jordan > 3) {
                Relations[Egypt_Jordan] = Relations[Egypt_Jordan] -16; 
                console.log('running');
                }   
              
                // if Israel has Pact Jordan, degrade relations with Eygpt on war 
                if (key == 'Israel_Jordan' && WarCountdown.Egypt_Jordan < 3 ) {
                    Relations.Israel_Egypt = Relations.Israel_Egypt -16; 
                    console.log('running');
                }   
                // if Israel has Pact Egypt, degrade relations with Jordan on war 
                if (key == 'Israel_Egypt' && WarCountdown.Israel_Jordan < 3) {
                Relations.Egypt_Jordan = Relations.Egypt_Jordan -16; 
                console.log('running');
                }   
                // if Israel has Pact with Egypt, degrade relations with Eygpt on war 
                if (key == 'Israel_Egypt' && WarCountdown.Israel_Jordan < 3) {
                    Relations.Egypt_Jordan = Relations.Egypt_Jordan -16; 
                    console.log('running');
                }   
                // if Israel has Pact Egypt, degrade relations with Jordan on war 
                if (key == 'Egypt_Jordan' && WarCountdown.Israel_Jordan < 3) {
                Relations.Israel_Egypt = Relations.Israel_Egypt -16; 
                console.log('running');
                }   
                // if Israel has Pact with Egypt, degrade relations with Eygpt on war 
                if (key == 'Egypt_Jordan' && WarCountdown.Israel_Egypt < 3) {
                    Relations.Israel_Jordan = Relations.Israel_Jordan -16; 
                    console.log('running');
                }  
                //to break alliances in case ione is alligned with 2 warring nations   
               // for (const key in Relations) { if (Relations[key] == 78) {MilitaryPact[key]=false; RelationsPast[key] == 79;}}

            }
        }
        //------------------------------------------------------------------------------------------
    }
       LoopIteration=LoopIteration+1;
       console.log('Loop Iteration: '+ LoopIteration);
       for (const key in Relations) {console.log(`${key}: ${Relations[key]}     ${RelationsPast[key]}   ${MilitaryPact[key]}   ${BorderDispute[key]}   ${WarCountdown[key]}`);}
       if(LoopIteration == 100)
       {break;}
}




