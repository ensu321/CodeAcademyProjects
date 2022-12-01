import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class Main {
    static final DateTimeFormatter LAIKO_FORMATAS = DateTimeFormatter.ofPattern("HH:mm:ss");

    public static void main(String[] args) {
//        LocalDateTime localDateTime = LocalDateTime.now();
//        System.out.println(localDateTime);
//       LocalDateTime localDateTimeMinus3Hours = localDateTime.minusHours(3);
//        System.out.println(localDateTimeMinus3Hours);
//        LocalDateTime localdateTimePlusDays = localDateTime.plusDays(5);
//        System.out.println(localdateTimePlusDays);
//        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm");
//        String localDateTimeFormated = localDateTime.format(format);
//        System.out.println(localDateTimeFormated);


//        Scanner scanner = new Scanner(System.in);
//        System.out.println("Iveskite laika ir data tokiu formatu: 2000-01-01 00:00 ");
//        String inputDate = scanner.nextLine();
//        DateTimeFormatter systemFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
//        LocalDateTime inputdateParse = LocalDateTime.parse(inputDate, systemFormat);
//
//        LocalDateTime add5Hours = inputdateParse.plusHours(5).plusMinutes(15);
//        System.out.println("Plius 5 valandos: " + add5Hours.format(systemFormat));
//
//        DayOfWeek dayOfWeek = inputdateParse.getDayOfWeek();
//        DayOfWeek dayOfWeekAddedHours = add5Hours.getDayOfWeek();
//
//        if(dayOfWeek.equals(dayOfWeekAddedHours)) {
//            System.out.println("savaites diena nepakito");
//        } else {
//            System.out.println("savaites diena pakito");
//        }
//
//
//        LocalDateTime currentTime = LocalDateTime.now();
//        if (inputdateParse.isAfter(currentTime)) {
//            System.out.println("is after");
//
//        } else if (inputdateParse.equals(currentTime)) {
//            System.out.println("tokia pati data");
//        } else {
//            System.out.println("is before");
//        }
//
//        scanner.close();
//
//        Scanner scanner = new Scanner(System.in);
//        int userProvidedNumber = 0;
//
//        for (int i = 0; i< 2  ; i++) {
//            System.out.println("Vartotojo ivestas skaicius: ");
//            userProvidedNumber = scanner.nextInt();
//            if (scanner.hasNextInt()) {
//
//                System.out.println(userProvidedNumber);
//            } else if (scanner.hasNextInt() == "End") {
//
//            } else {
//
//                System.out.println("Netinkamai ivestas skaicius " +
//                        "\"" + scanner.next() + "\"" );
//            }
//
//            if (userProvidedNumber % 2 == 0) {
//                System.out.println("[" + LocalDateTime.now().format(LAIKO_FORMATAS) + "] " + userProvidedNumber + " Lyginis");
//                System.out.println("Iveskite skaiciu: ");
//            } else if (true) {
//                System.out.println("true");
//            } else {
//                System.out.println("[" + LocalDateTime.now().format(LAIKO_FORMATAS) + "] " + userProvidedNumber + " Nelyginis");
//                System.out.println("Iveskite skaiciu: ");
//            }
//
//
//
//
//
//        }
//
//
//
//        scanner.close();
//            String firstString = "amalas";
//            String secondString = "amalas";
//
//            if(firstString == secondString) {
//                System.out.println("true");
//            } else {
//                System.out.println("false");
//            }
//
//            String a = new String("zodis");
//            String b = new String("zodis");
//            b=a;
//        if(a == b) {
//            System.out.println("a true");
//        } else {
//            System.out.println("b false");
//        }
//
//        String c = new String("zodis");
//        String d = new String("zodis");
//        d=c;
//        if(c == d) {
//            System.out.println("c true");
//        } else {
//            System.out.println("d false");
//        }
//
//
//        Tankas tankas = new Tankas("Didelis", "T45");
//        Tankas tanka2 = new Tankas("Didlis", "T456");
//        tankas=tanka2;
//
//        if(tankas.equals(tanka2) ) {
//            System.out.println("tankas true");
//        } else {
//            System.out.println("tankas false");
//        }

        Tankas tankas = new Tankas("Didelis", "T45");
         Tankas tanka2 = new Tankas("Didelis", "T456");

         String temp = tankas;
         tankas =
        System.out.println(tankas.Modelis);
        tanka2.Modelis = tankas.Modelis;
        System.out.println(tanka2.Modelis);
}}