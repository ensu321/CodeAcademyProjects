import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

//        Scanner sc = new Scanner(System.in);
//        System.out.println("Iveskite metus: ");
//        int year = sc.nextInt();
//
//        if(year % 4 != 0) {
//            System.out.println("it is a common year");
//        } else if (year % 100 != 0) {
//            System.out.println("it is a leap year");
//        } else if (year % 400 != 0) {
//            System.out.println("it is a common year");
//        } else {
//            System.out.println("it is a leap year");
//        }
//
//        sc.close();
        Scanner sc = new Scanner(System.in);
        System.out.println("Įveskite mėnesio numerį: ");
        int skaicius = sc.nextInt();


        if (skaicius < 0 || skaicius > 13) {
            System.out.println("Netinkamas skaičius");
        } else if (skaicius % 2 == 0) {
            switch (skaicius) {
                case 2 -> System.out.println("Vasaris");
                case 4 -> System.out.println("Balandis");
                case 6 -> System.out.println("Birzelis");
                case 8 -> System.out.println("Rūgpjutiss");
                case 10 -> System.out.println("Spalis");
                case 12 -> System.out.println("Gruodis");
            }
        } else {
            switch (skaicius) {
                case 1 -> System.out.println("SAUSIS");
                case 3 -> System.out.println("KOVAS");
                case 5 -> System.out.println("GEGUŽĖ");
                case 7 -> System.out.println("LIEPA");
                case 9 -> System.out.println("RUGSEJIS");
                case 11 -> System.out.println("LAPKRITIS");
            }
        }
        sc.close();
    }
}