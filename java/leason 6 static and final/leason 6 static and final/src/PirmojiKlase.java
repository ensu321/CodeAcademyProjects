public class PirmojiKlase {

    static int number;

    public PirmojiKlase() {
        System.out.println(number);
        number++;
    }
    public static void isvalyti() {
        System.out.println(number);
       number = 0;
        System.out.println(number);
    }
}
