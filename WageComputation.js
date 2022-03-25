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
    for(let i=1;i<=20;i++){
    let check=Math.floor(Math.random()*10)%3;
    let curr_working_hour=getWorkinghour(check);
    if(total_time+curr_working_hour<Maximum_Working_hour){
    dailywagerecode.push(Calculatedailywage(curr_working_hour));
    empdailywagemap.set(i,Calculatedailywage(curr_working_hour));
    empdailyhrsmap.set(i,curr_working_hour);
    total_time+=curr_working_hour;
    }
    }

    let full_time_working_day= new Array();
    let half_time_working_day= new Array();
    let absent_on_the_Day =new Array();
    empdailyhrsmap.forEach((value,key,map)=>{
        if(value==8)full_time_working_day.push(key);
        else if(value==4)half_time_working_day.push(key);
        else
        absent_on_the_Day.push(key);

    });
    console.log("Full day ");
    full_time_working_day.forEach(DailyWage);

    console.log("half day ");
     console.log(half_time_working_day);
    

    console.log(" absent ");
   absent_on_the_Day.forEach(DailyWage);

    
}

