{
    const full_time=1;
    const half_time=2;
    const full_time_hour=8;
    const half_time_hour=4;
    const wage_per_hour=20;
    const maximum_working_hour=160;
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
    let dailywagemap=new Map();
    let total_time=0;
    for(let i=0;i<20;i++){
    let check=Math.floor(Math.random()*10)%3;
    let curr_working_hour=getWorkinghour(check);

    if(total_time+curr_working_hour<maximum_working_hour){
    dailywagerecode.push(Calculatedailywage(curr_working_hour));
    dailywagemap.set(i+1,Calculatedailywage(curr_working_hour));
    total_time+=curr_working_hour;
    }
    }
    console.log(dailywagemap);
    function totalwage(total,dailywage){
        return total+dailywage;
    }
    let net_income=Array.from(dailywagemap.values()).reduce(totalwage,0);
    console.log("The total income of the "+net_income);



}