import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
//     String liepa = "Liepa";
//     String antradienis = "Antradienis";
//
//     StringBuilder liepaAntradienis  = new StringBuilder(liepa).append(antradienis);
//        System.out.println(liepaAntradienis);
//
//        liepaAntradienis.reverse();
//        System.out.println(liepaAntradienis);
//
//        liepaAntradienis.replace(0,liepaAntradienis.length(), "dartai");
//        System.out.println(liepaAntradienis);
//
//       liepaAntradienis.delete(3,6).append(2018);
//        System.out.println(liepaAntradienis);
//
//        liepaAntradienis.replace(0, 3, "Darom").insert(5, " ");
//        System.out.println(liepaAntradienis);
//
//        liepaAntradienis.replace(0,liepaAntradienis.length(), "10");
//        System.out.println(liepaAntradienis);


//        Scanner scanner = new Scanner(System.in);
//        System.out.println("Iveskite zodi");
//        String inputString = scanner.nextLine();
//
//        StringBuilder input = new StringBuilder(inputString);
//       String stringInput =  input.toString();
//        System.out.println(stringInput);
//
//        StringBuilder reverseInput = new StringBuilder(stringInput).reverse();
//        String reverseinputString = reverseInput.toString();
//        System.out.println(reverseinputString);
//
//
//        if(stringInput.equals(reverseinputString)) {
//            System.out.println("palindromas");
//        }
//        else {
//            System.out.println("ne polindromas");
//        }
//
//        scanner.close();
//        int number;
//        int sum = 0;
//        int temp = 0;
//        int accumulator = 1;
//        Scanner scanner = new Scanner(System.in);
//        System.out.print("Iveskite skaiciu: ");
//        number = scanner.nextInt();
//        System.out.print("Rezultatas:");
//
//        for (int i = 1; i <= number; i++) {
//            sum = temp;
//            temp = accumulator;
//            accumulator = sum + temp;
//            System.out.print(sum + " ");
//        }
//
//        scanner.close();
        String[] stringArray = {"As", "Tikrai", "Ismoksiu", "programuoti", "Java"};
        Person person1 = new Person("Aleksas", "Briliovas", 1800, 1.90);
        Person person2 = new Person("Petras", "Briliovas", 1991, 1.46);
        Person person3 = new Person("Jonas", "Briliovas", 1855, 1.57);
        Person person4 = new Person("Maryte", "Briliova", 1800, 2.01);
        Person.printInfoUpgrage(stringArray);


    }
}