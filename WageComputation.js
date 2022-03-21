{ 
    const Is_Present=1;
    let check=Math.floor(Math.random()*10)%2;
    if(check==Is_Present)
    {
       console.log("Employee is present");
    }
else{
    console.log("Employee is absent");
    }
}

{
    const full_time=1;
    const half_time=2;
    const full_time_hour=8;
    const half_time_hour=4;
    const wage_per_hour=20;
    let net_income=0;
    let check=Math.floor(Math.random()*10)%3;
    switch(check){
        case full_time:
            net_income=full_time_hour*wage_per_hour;
            break;
        case half_time:
            net_income=half_time_hour*wage_per_hour;
            break;
        default:
            console.log("Employee is Absent");
            break;
        
    }
    console.log("The net income of the employee is :"+net_income);
}
