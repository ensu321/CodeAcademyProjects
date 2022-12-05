import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Tankas tankas = new Tankas();
        Scanner scanner = new Scanner(System.in);
        boolean runProgram = true;


        while (runProgram) {
            Tankas.printCommands();
            char playerInput = scanner.next ().charAt (0);
            runProgram = false;




        }

        scanner.close();

    }
}