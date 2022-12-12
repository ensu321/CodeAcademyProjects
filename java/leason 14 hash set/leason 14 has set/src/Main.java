import java.util.*;

public class Main {

    static HashMap<String, Studentas> theStudentMAP = new HashMap<>();

    public static void main(String[] args) {


//hasset task
//        HashSet<String> stringHashSet = new HashSet<>();
//        stringHashSet.add("nmas");
//        stringHashSet.add("krumas");
//        stringHashSet.add("butelois");
//        stringHashSet.add("kreivas");
//
//        System.out.println(stringHashSet);
//        System.out.println(stringHashSet.size());
//
//
//        System.out.println(stringHashSet.contains("krumas"));
//        if (stringHashSet.contains("krumas")) {
//            stringHashSet.remove("krumas");
//            System.out.println(stringHashSet);
//
//            System.out.println(stringHashSet.size());
//        }
//        stringHashSet.clear();
//        System.out.println(stringHashSet);
//        HashMap<Integer, String> numberHasMap = new HashMap<>();
//        numberHasMap.put(1, "vienas");
//        numberHasMap.put(2, "du");
//        numberHasMap.put(3, "tris");
//        numberHasMap.put(4, "keturi");
//        numberHasMap.put(5, "penki");
//        numberHasMap.put(6, "sesi");
//        System.out.println(numberHasMap);
//
//        System.out.println(numberHasMap.containsKey(1));
//        System.out.println(numberHasMap.containsValue("vienas"));
//        System.out.println(numberHasMap.get(1));
//
//
//
//        for (Map.Entry<Integer, String> entry: numberHasMap.entrySet()
//             ) {
//
//            System.out.printf("Raktas %d, Reikšmė: %s \n", entry.getKey(), entry.getValue());
//        }
        // 2 uzduotys ----------------------------------------------------------
//   //     printMap(numberHasMap);


        /// 3 uzduotys-----------------------------------------------
//        convertMap(numberHasMap);

        ///4 uzduotys ---------------------------------------------------------------------------------

        Scanner scanner = new Scanner(System.in);

        boolean keepLooping = true;


        while (keepLooping) {
            printCommands();

            switch (scanner.nextLine()) {
                case "1" -> enterStudentData(scanner);
                case "2" -> getStudent(scanner);
                case "3" -> keepLooping = false;
                default -> System.out.println("incorrect input");
            }

        }
        scanner.close();

    }

    private static void printCommands() {
        System.out.println("[1] - enter student:");
        System.out.println("[2] - get student by the student number:");
        System.out.println("[3] - end program");
    }

    static void enterStudentData(Scanner scanner) {

        System.out.println("Enter name");
        String studentNameFromInput = scanner.nextLine();


        System.out.println("Enter surname");
        String studentSurnameFromInput = scanner.nextLine();


        System.out.println("Enter student number");
        String studentNumber = scanner.nextLine();


        System.out.println("Enter university");
        String university = scanner.nextLine();


        theStudentMAP.put(studentNumber, new Studentas(studentNameFromInput, studentSurnameFromInput, university));
        System.out.println(theStudentMAP);
    }

    static void getStudent(Scanner scanner) {
        System.out.println("Enter student number");
        String studentNumber = scanner.nextLine();
        System.out.printf("Vardas: %s\nPavarde: %s\nUniversity: %s\n", theStudentMAP.get(studentNumber).name,
                theStudentMAP.get(studentNumber).surname,  theStudentMAP.get(studentNumber).university);


    }


    // 2 uzduotys hashmap
//    private static void printMap(HashMap<Integer,String> mapas) {
//        System.out.println("-------------------------");
//        mapas.remove(1);
//
//        for (Map.Entry<Integer, String> entry: mapas.entrySet()
//        ) {
//
//         //   System.out.printf("Raktas %d, Reikšmė: %s \n", entry.getKey(), entry.getValue());
//        }
//        mapas.clear();
//
//        for (Map.Entry<Integer, String> entry: mapas.entrySet()
//        ) {
//
//         //   System.out.printf("Raktas %d, Reikšmė: %s \n", entry.getKey(), entry.getValue());
//        }
//
//
//    }

//    private static void convertMap(HashMap<Integer,String> mapas) {
//        HashMap<String, Integer> newNumberHashMap = new HashMap<>();
//        for (Map.Entry<Integer, String> entry: mapas.entrySet()
//        ) {
//
//            newNumberHashMap.put(entry.getValue(),entry.getKey() );
//            System.out.printf("Raktas %s, Reikšmė: %d \n", entry.getValue(), entry.getKey());
//
//        }
//        System.out.println(newNumberHashMap.keySet());
//    }


}