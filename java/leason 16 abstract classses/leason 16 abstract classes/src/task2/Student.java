package task2;

public class Student extends Person{

    public Student(String name, String surname) {
        super(name, surname);
    }

    @Override
    public void printInfo() {
        System.out.printf("Name: %s, Surname: %s\n", this.name, this.surname);
    }
}
