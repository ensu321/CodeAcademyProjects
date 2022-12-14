package task2;

public abstract class Person {
    String name;
    String surname;

    public Person(String name, String surname) {
        this.name = name;
        this.surname = surname;
    }

    public abstract void printInfo();

    @Override
    public String toString() {
        return super.toString();
    }
}
