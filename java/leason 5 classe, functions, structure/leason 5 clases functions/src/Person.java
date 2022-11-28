public class Person {
    private String name;
    private String surname;
    private int Age;

    private String fullName() {
        return this.name + this.surname;
    }

    public String legalAge(int age) {
        if (age >= 18) {
            return "legal age";
        } else {
            return "not legal age";
        }
    }

    public void notCool() {
        String fullName = this.name + this.surname;

    }

    public String printFullName() {
        return this.name + this.surname;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public int getAge() {
        return Age;
    }

    public void setAge(int age) {
        Age = age;
    }
}
