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
        ArrayList<String> words = new ArrayList<>();
        words.add("namas");
        words.add("namas");
        words.add("ilgas labai zodis");
        words.add("upe");
        words.add("ir");



        ArrayList<String> filteredArray = new ArrayList<>();

        for (String word: words
             ) {
            if(!filteredArray.contains(word)) {
                filteredArray.add(word);
            }


        }

        System.out.println(filteredArray);




    }
}