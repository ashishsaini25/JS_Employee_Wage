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
    let net_income=0;
    let total_time=0;
    for(let i=0;i<20;i++){
    let check=Math.floor(Math.random()*10)%3;
    let curr_working_hour=getWorkinghour(check);

    if(total_time+curr_working_hour<maximum_working_hour){
    dailywagerecode.push(Calculatedailywage(curr_working_hour));
    total_time+=curr_working_hour;
    }
    }
    function sum(total,daily){
        return total+daily;
    }
    let i=0;
    function dailydata(value){
        i++;
        return i+"= "+value;
    }
    i=0;
    function fulltimewage(dailywagerecode){
        return dailywagerecode.includes("160");
    }
    function isallfulltimewage(dailywagerecode){
        return dailywagerecode.includes("160");
    }
    function issomeparttimewage(dailywagerecode){
        return dailywagerecode.includes("160");
    }
    function Totalnumberofdaysworked(numberofdays,dailywage){
        if(dailywage>0)return numberofdays+1;
        return numberofdays;
    }
    let total_wage=dailywagerecode.filter(dailywage=>dailywage>0).reduce(sum,0);
    console.log("UC 7 A");
    console.log("The net income of the employee is :"+total_wage + " the total working hour of the employee is :"+total_time);
    let dailyrecord=dailywagerecode.map(dailydata);
    console.log("UC 7 B");
    console.log(dailyrecord);
    let full_time_day=dailyrecord.filter(fulltimewage);
    console.log("UC 7 C");
    console.log(full_time_day);
    let first_full_time_wage_occurence=dailyrecord.find(fulltimewage);
    console.log("UC 7 D");
    console.log(first_full_time_wage_occurence);
    console.log("UC 7 E Check all elements have full time wage :"+full_time_day.every(isallfulltimewage));
    console.log("UC 7 F check some part time day work is present:"+dailyrecord.some(issomeparttimewage));
    let number_of_working_days=dailywagerecode.reduce(Totalnumberofdaysworked,0);
    console.log("UC 7G number of days employee worked: "+number_of_working_days);




}