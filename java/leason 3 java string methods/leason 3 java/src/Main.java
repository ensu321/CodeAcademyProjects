public class Main {
    public static void main(String[] args) {

        String s = "Mano vardas....";
        String result1 = s.substring(0, 4);
        String rezult2 = s.substring(4);
        Boolean result3 = s.startsWith("Mano");
        String result4 = s.replace("Mano", "Tavo");
        int result5 = s.indexOf('M');
        System.out.println(result5);
    }
}