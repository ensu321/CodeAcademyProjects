import java.sql.SQLOutput;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

//        String s = "Mano vardas....";
//        String result1 = s.substring(0, 4);
//        String rezult2 = s.substring(4);
//        Boolean result3 = s.startsWith("Mano");
//        String result4 = s.replace("Mano", "Tavo");
//        int result5 = s.indexOf('M');
//        String s = "Su studentais nebeprisikiškiakopūsteliaudavome";
//        String fraze = "Su studentais";
//        int ilgi1  = fraze.length();
//        int result1 = s.indexOf(fraze) + ilgi1;
//        String result2 = s.substring(result1).trim();
//        System.out.println(result2);

        Scanner sc = new Scanner(System.in);

        System.out.println("iveskite varda:");
        String vardas = sc.nextLine();

        System.out.println("Iveskite pavarde:");
        String pavarde = sc.nextLine();

        System.out.println("Iveskite amziu");
        int amzius = sc.nextInt();

        System.out.println("Jusu vardas:" + vardas);
        System.out.println("Jusu pavarde: " + pavarde);
        System.out.println("Jusu amzius: " + amzius);
        sc.close();
   }
}