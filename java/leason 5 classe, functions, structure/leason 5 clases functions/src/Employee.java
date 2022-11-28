public class Employee {
    private int salary;
    private int hoursWorked;


    public Employee(int salary, int hoursWorked) {
        this.salary = salary;
        this.hoursWorked = hoursWorked;
    }

    public Employee(int salary) {
       this.salary = salary +5;
    }
    public String addJob(int hoursWorked) {

        return this.salary + " hours worked:" + hoursWorked;
    }

   public int addSalary() {
        if(this.salary <= 500) {
           return this.salary + 10;
        } else {
            return this.salary;
        }
   }





    public String getInfo() {

        return "Atlyginimas: " + this.salary + "; Dirbu valandu skaciius: " + this.hoursWorked;
    }



}
