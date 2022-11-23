
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {


        int[] intArray = new int[] {52,45,32,64,12,87,78,98,23,7};
//        int temp = 0;
//
//        System.out.println("Original array: ");
//        for (int i = 0; i < intArray.length; i++) {
//            System.out.println(intArray[i] + " ");
//        }
//
//        for (int i = 0; i < intArray.length ; i++) {
//            for (int j = i+1; j < intArray.length; j++) {
//                if (intArray[i] > intArray[j]) {
//                    temp = intArray[i];
//                    intArray[i] = intArray[j];
//                    intArray[j] = temp;
//                }
//            }
//        }
//        System.out.println("\nArray sorted in ascending order: ");
//        for (int i = 0; i <intArray.length; i++) {
//            System.out.print(intArray[i] + " ");
//        }
            Arrays.sort(intArray);
        System.out.println(Arrays.toString(intArray));

//        Scanner sc = new Scanner(System.in);





//        System.out.println("Iveskite neigiama skaiciu");
//        int number;
//
//        do {
//            number = sc.nextInt();
//            if (number < 0 ) {
//                System.out.println("Thank you!");
//            } else {
//                System.out.println("Entered number is not negative");
//            }
//        } while (number > 0);



//        sc.close();

//        System.out.println("iveskite 10 skaicius");
//
//        int[] skaiciai = new int[10];
//        int counter = 0;
//
//        for (int i = 0; i < skaiciai.length; i++) {
//            skaiciai[i] = sc.nextInt();
//            System.out.println(Arrays.toString(skaiciai));
//
//            if (counter >= skaiciai.length - 1) {
//                System.out.println("uztenka");
//            } else {
//                counter++;
//                System.out.println("iveskite sekanti skaiciu, dabar ivesta: " + counter);
//            }
//        }
//
//        int maxValue = skaiciai[0];
//        int minValue = maxValue;
//        for (int number: skaiciai) {
//            if(number > maxValue) {
//                maxValue = number;
//            }
//            if (number < minValue) {
//                minValue = number;
//            }
//        }
//        System.out.println(maxValue);
//        System.out.println(minValue);


        // System.out.println("Iveskite zvaigduciu kieki: ");
//        int stars = sc.nextInt();
//        String tree = "";
//        StringBuilder result = new StringBuilder();
//        for (int i = 1; i < stars; i++) {
//           tree += "*";
//            System.out.println(tree);
//        }

//        String[] vardai = new String[10];
//
//        System.out.println("Iveskite pirmą vardą: ");
//        vardai[0] = sc.nextLine().toUpperCase();
//        String vardai1result =  vardai[0] + "-" + vardai[0].length()  + "-" + 0;
//        System.out.println(vardai1result);
//
//        System.out.println("Iveskite antrą vardą: ");
//        vardai[1] = sc.nextLine().toUpperCase();
//        String vardai2result =  vardai[1] + "-" + vardai[1].length() + "-" + 1;
//        System.out.println(vardai2result);
//
//        System.out.println("Iveskite trečia vardą: ");
//        vardai[2] = sc.nextLine().toUpperCase();
//        String vardai3result =  vardai[2] + "-" + vardai[2].length()  + "-" + 2;
//        System.out.println(vardai3result);
//
//        System.out.println("Iveskite ketvirtą vardą: ");
//        vardai[3] = sc.nextLine().toUpperCase();
//        String vardai4result =  vardai[3] + "-" + vardai[3].length()  + "-" + 3;
//        System.out.println(vardai4result);
//
//        System.out.println("Iveskite penktą vardą: ");
//        vardai[4] = sc.nextLine().toUpperCase();
//        String vardai5result =  vardai[4] + "-" + vardai[4].length()  + "-" + 4;
//        System.out.println(vardai5result);
//
//        System.out.println("Iveskite šeštą vardą: ");
//        vardai[5] = sc.nextLine().toUpperCase();
//        String vardai6result =  vardai[5] + "-" + vardai[5].length()  + "-" + 5;
//        System.out.println(vardai6result);
//
//        System.out.println("Iveskite septintą vardą: ");
//        vardai[6] = sc.nextLine().toUpperCase();
//        String vardai7result =  vardai[6] + "-" + vardai[6].length()  + "-" + 6;
//        System.out.println(vardai7result);
//
//        System.out.println("Iveskite aštuntą vardą: ");
//        vardai[7] = sc.nextLine().toUpperCase();
//        String vardai8result =  vardai[7] + "-" + vardai[7].length()  + "-" + 7;
//        System.out.println(vardai8result);
//
//        System.out.println("Iveskite devintą vardą: ");
//        vardai[8] = sc.nextLine().toUpperCase();
//        String vardai9result =  vardai[8] + "-" + vardai[8].length()  + "-" + 8;
//        System.out.println(vardai9result);
//
//        System.out.println("Iveskite 10 vardą: ");
//        vardai[9] = sc.nextLine().toUpperCase();
//        String vardai10result =  vardai[9] + "-" + vardai[9].length()  + "-" + 9;
//        System.out.println(vardai10result);



    }
}