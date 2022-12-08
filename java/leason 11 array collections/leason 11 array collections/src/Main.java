import java.util.ArrayList;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

        //  Scanner scanner = new Scanner(System.in);
//        ArrayList<String> words = new ArrayList<>();
//        boolean loopContinuew = true;
//        while (loopContinuew) {
//            String saveInput = scanner.nextLine();
//            if (saveInput.equals("x")) {
//                loopContinuew = false;
//                break;
//            };
//
//            if (words.contains(saveInput)) {
//                System.out.println("Toks zodis jau egzistuoja");
//            } else if (words.size() > 4) {
//                words.clear();
//                words.add(saveInput);
//                System.out.println(words);
//            } else {
//                words.add(saveInput);
//                System.out.println(words);
//            }
//        }

//        scanner.close();

        /// second task ---------------------------------------------------------------

//
//
//        ArrayList<String> words = new ArrayList<>();
//        words.add("namas");
//        words.add("kiauras");
//        words.add("ilgas labai zodis");
//        words.add("upe");
//        words.add("ir");
//
//        System.out.println(words);
//        int i = 0;
//        String longestString = "";
//
//        for (String word : words
//        ) {
//            if(word.length() > i) {
//                i  = word.length();
//                longestString = word;
//
//            }
//        }
//        System.out.println("longest word: " +"\""  +longestString + "\"" + " and his length: " + i);

//


        /// trecia uzduotis ---------------------------------------------------
//        ArrayList<String> words = new ArrayList<>();
//        words.add("namas");
//        words.add("namas");
//        words.add("ilgas labai zodis");
//        words.add("upe");
//        words.add("ir");
//
//
//
//        ArrayList<String> filteredArray = new ArrayList<>();
//
//        for (String word: words
//             ) {
//            if(!filteredArray.contains(word)) {
//                filteredArray.add(word);
//            }
//
//
//        }
//
//        System.out.println(filteredArray);

/////.4 uzduotis
//            ArrayList<Integer> integersList = new ArrayList<>();
//
//
//        integersList.add(1);
//        integersList.add(2);
//        integersList.add(3);
//
//        System.out.println(integersList);
//
//        integersList.remove(0);
//        integersList.remove(0);
//        System.out.println(integersList);

///5 uzduotis

        Scanner scanner = new Scanner(System.in);
        ArrayList<String> words = new ArrayList<>();


        boolean loopContinuew = true;


        String userInput = "";
        while (loopContinuew) {
            if (userInput.equals("x")) {
                loopContinuew = false;
                break;
            };

            while (loopContinuew) {


                if (userInput.equals("x")) {

                    break;
                }

                else  {
                    System.out.println("Iveskite zodi kuri norite isaugoti sarase");
                    userInput = scanner.nextLine().toLowerCase();
                    if(userInput.equals("x")) {
                        break;
                    }
                    words.add(userInput);
                    System.out.println(words);
                }

            }

            System.out.println("Koki zodi rasti?");
            userInput = scanner.nextLine().toLowerCase();

            for (int i = 0; i < words.size(); i++) {
                if(words.contains(userInput)) {
                    System.out.println("Numeris sarase: "+ i);
                }
                else {
                    System.out.println("zodis nerastas");
                }
            }

            System.out.println("koki zodi istrinti?");
            userInput = scanner.nextLine().toLowerCase();
            for (int i = 0; i < words.size(); i++) {
                if(words.contains(userInput)) {
                    words.remove(words.get(i));
                    System.out.println("zodis buvo istrintas");
                }
                else {
                    System.out.println("zodis nerastas");
                }
            }
            System.out.println(words);
            words.clear();
        }

        scanner.close();


    }
}