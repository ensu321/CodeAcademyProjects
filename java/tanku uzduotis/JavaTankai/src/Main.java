import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    private static final DateTimeFormatter TIME_FORMAT = DateTimeFormatter.ofPattern("[HH:mm:ss]");


    public static void main(String[] args) {
        Tankas tankas = new Tankas(0, 0, Directions.East);

        Scanner scanner = new Scanner(System.in);
        boolean runProgram = true;

        while (runProgram) {
            printCommands();
            String playerInput = scanner.nextLine().toLowerCase();

            switch (playerInput) {
                case "s" -> tankas.moveSouth();
                case "n" -> tankas.moveNorth();
                case "e" -> tankas.moveEast();
                case "w" -> tankas.moveWest();
                case "*" -> tankas.strike();
                case "i" -> tankas.info();
                case "x" -> runProgram = false;
                default -> System.out.println("Blogai ivesta komanda");
            }
            getTimeStamp();
        }
        scanner.close();

    }

    public static String getTimeStamp() {
        LocalDateTime time = LocalDateTime.now();
        String formatedTime = time.format(TIME_FORMAT);
        String getTimeStamp = String.format("[%s]", formatedTime);
        return getTimeStamp;
    }

    public static void printCommands() {

        System.out.println(AvailableCommands.MoveSouth.formattedString);

        System.out.println(AvailableCommands.MoveNorth.formattedString);

        System.out.println(AvailableCommands.MoveEast.formattedString);

        System.out.println(AvailableCommands.MoveWest.formattedString);

        System.out.println(AvailableCommands.Strike.formattedString);

        System.out.println(AvailableCommands.Info.formattedString);

        System.out.println(AvailableCommands.EndGame.formattedString);

        System.out.println("Select command:");

    }





}