public class Tankas {

    static int x = 0;
    static int y = 0;



   public static void moveNorth() {
        y++;
       System.out.println(y);
    }
    public static void moveSouth() {
        y--;
        System.out.println(y);
    }

    public static void moveEast() {
        x++;
        System.out.println(x);
    }
    public static void moveWest() {
        x--;
        System.out.println(x);
    }



    public static void printCommands() {
        System.out.println("[s] - go south");
        System.out.println("[n] - go north");
        System.out.println("[e] - go east");
        System.out.println("[w] - go west");
        System.out.println("[*] - strike");
        System.out.println("[i] - info");
        System.out.println("[x] - end game");
    }



}
