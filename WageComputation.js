{
    const full_time=1;
    const half_time=2;
    const full_time_hour=8;
    const half_time_hour=4;
    const wage_per_hour=20;
    function getWorkinghour(check){
        if(check==full_time)return full_time_hour;
        else if(check==half_time)return half_time_hour;
        else 
        return 0;
    }
    let net_income=0;
    let total_time=0;
    for(let i=0;i<20;i++){
    let check=Math.floor(Math.random()*10)%3;
    let curr_working_hour=getWorkinghour(check);
    if(total_time+curr_working_hour<160){
    net_income+=wage_per_hour*curr_working_hour;
    total_time+=curr_working_hour;
    }
    }
    console.log("The net income of the employee is :"+net_income + " the total working hour of the employee is :"+total_time);


}

