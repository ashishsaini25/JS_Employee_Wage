{
    const full_time=1;
    const half_time=2;
    const full_time_hour=8;
    const half_time_hour=4;
    const wage_per_hour=20;
    const Maximum_Working_hour=160;
    let empdailywagemap =new Map();
    let empdailyhrsmap =new Map();
    let dailywagerecode= new Array();
    function getWorkinghour(check){
        if(check==full_time)return full_time_hour;
        else if(check==half_time)return half_time_hour;
        else 
        return 0;
    }
    function Calculatedailywage(working_hour){
        return working_hour*wage_per_hour;
    }
    function DailyWage(value){
        console.log(value);
    }
    let total_time=0;

let empinfo=new Array();
for(let i=1;i<=20;i++){
    let check=Math.floor(Math.random()*10)%3;
    let curr_working_hour=getWorkinghour(check);
    if(total_time+curr_working_hour<Maximum_Working_hour){
      empinfo.push(
          {
              daynum:i,
              dayhours:curr_working_hour,
              daywage:Calculatedailywage(curr_working_hour),
          }
      );
    total_time+=curr_working_hour;
    }
    }
    console.log(empinfo);
   


}

