public class Person {

    String name;
    String surname;
    int birthDate;
    double height = 0d;

    //String[] stringArray = {"As", "Tikrai", "Ismoksiu", "programuoti", "Java"};

    public Person(String name, String surname, int birthDate, double height) {
        this.name = name;
        this.surname = surname;
        this.birthDate = birthDate;
        this.height = height;
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

    public int getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(int birthDate) {
        this.birthDate = birthDate;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public void printInfo() {
        String format = String.format("Asmens %s %s, gimusio %dm., ūgis yra %.2f m. \n", this.name, this.surname, this.birthDate, this.height);
        System.out.printf(format);

    }


    public static void printInfoUpgrage(String[] stringArray) {
        String format = String.format("| %20s " );
    for ( String element: stringArray){

        System.out.printf(format, element);


    }




    }
}
