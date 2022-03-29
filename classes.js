class Employee{
   constructor(name,age,phone,address,designation){
       this.name=name;
       this.age=age;
       this.phone=phone;
       this.address=address;
       this.designation=designation;
   }
   to_string(){
       return this.name+this.age +this.phone+this.address+this.designation;
   }

}
const emp=new Employee("ashish",20,7007231604,"113/236","software Engineer");
console.log(emp.to_string());