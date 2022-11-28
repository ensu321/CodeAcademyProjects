import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Employee firstEmployee = new Employee(400, 200);
        Employee secondEmployee = new Employee(200);
        System.out.println(firstEmployee.getInfo());
        System.out.println(firstEmployee.addSalary());
        System.out.println(secondEmployee.addJob(400));

//        Person person1 = new Person();
//        person1.setName("Aleksas");
//        person1.setSurname("Briliovas");
//
//        String fullName = person1.printFullName();
//
//        person1.notCool();
//
//        System.out.println(person1.legalAge(19));
//        System.out.println(person1.getName());
//        System.out.println(person1.getSurname());
//        System.out.println(fullName);






//        double d1 = m1();
//        double d2 = m2();
//        System.out.println(d1 + d2);
//
////        spausdink("Alekas", "Briliovas", "java");
////        spausdink("Alekas", "Briliovas", "java", 3);
//    }
//
//    public static double m1() {
//        return 123.5;
//    }
//    public static double m2() {
//        Scanner sc = new Scanner(System.in);
//        System.out.println("Iveskite skaiciu");
//        double a = sc.nextDouble();
//        sc.close();
//        return a;
//    }


//    public static void spausdink(String vardas, String pavarde, String kalba, int savaiciuSkaicius) {
//        System.out.println("Aš " + vardas + " "+ pavarde + " "+  "tikrai išmoksiu programuoti " + kalba + " kalba per "+ savaiciuSkaicius + " savaiates" );
//    }
//
//    public static void spausdink(String vardas, String pavarde, String kalba) {
//        System.out.println("Aš " + vardas + " "+ pavarde + " "+  "tikrai išmoksiu programuoti " + kalba + " kalba");
//    }


//    public static void spausdink(String vardas, String pavarde, String kalba, int savaiciuSkaicius) {
//        System.out.println("Aš " + vardas + " "+ pavarde + " "+  "tikrai išmoksiu programuoti " + kalba + " kalba per "+ savaiciuSkaicius + " savaiates" );
//    }
//    public static void m1() {
//        System.out.println("pirma funkcija");
//        m2();
//    }
//    public static void m2() {
//        System.out.println("Antra funkcija");
//        m3();
//    }
//    public static void m3() {
//        System.out.println("trecia funkcija");
//    }


}}