public class Main {
    public static void main(String[] args) {

//        String s = "Mano vardas....";
//        String result1 = s.substring(0, 4);
//        String rezult2 = s.substring(4);
//        Boolean result3 = s.startsWith("Mano");
//        String result4 = s.replace("Mano", "Tavo");
//        int result5 = s.indexOf('M');
        String s = "Su studentais nebeprisikiškiakopūsteliaudavome";
        String fraze = "Su studentais";
        int ilgi1  = fraze.length();
        int result1 = s.indexOf(fraze) + ilgi1;
        String result2 = s.substring(result1).trim();


        System.out.println(result2);
    }
}