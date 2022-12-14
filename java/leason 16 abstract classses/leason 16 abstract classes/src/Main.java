import task2.Lecturer;
import task2.Student;
import task3.Circles;
import task3.Squares;

import java.time.LocalDateTime;

public class Main {
    public static void main(String[] args) {

//task 1
//       Vehicles vehicles = new Vehicles(LocalDateTime.now(), "White");
//
//        System.out.println(vehicles.getRegistrationDate());
//
//        Car car = new Car(LocalDateTime.now(), "White", "2l");
//        System.out.println(car.getRegistrationDate());


//// task 2
//        Student student = new Student("Aleksas", "bRILIOVAS");
//        student.printInfo();
//        Lecturer lecturer = new Lecturer("Aleksas", "bRILIOVAS");
//        lecturer.printInfo();


//task 3
        Circles circles = new Circles(6);
        System.out.println(circles.getArea());
        System.out.println(circles.getPerimeter());



        Squares squares = new Squares(10);
        System.out.println( squares.getArea());
        System.out.println(squares.getPerimeter());

        ;





    }
}