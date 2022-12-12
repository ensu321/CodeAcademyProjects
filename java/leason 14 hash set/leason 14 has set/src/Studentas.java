import java.util.HashMap;
import java.util.Scanner;

public class Studentas {

    String name;
    String surname;
    String university;


    public Studentas() {
        this.name = "Aleksas";
        this.surname = "Briliovas";
        this.university = "Vilniaus Kolegija";
    }

    public Studentas(String name, String surname, String university) {
        this.name = name;
        this.surname = surname;
        this.university = university;
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


    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }


    @Override
    public String toString() {
        return "Studentas{" +
                "name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", university='" + university + '\'' +
                '}';
    }


}
