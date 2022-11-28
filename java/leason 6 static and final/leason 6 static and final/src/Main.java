public class Main {
    public static void main(String[] args) {

        NotStatic notStatic = new NotStatic(10);

        System.out.println(notStatic.setValue(10));
        System.out.println(NotStatic.staticMethod(10));



    }
}