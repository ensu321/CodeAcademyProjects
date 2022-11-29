public class Main {
    public static void main(String[] args) {

//        NotStatic notStatic = new NotStatic(10);
//
//        System.out.println(notStatic.setValue(10));
//        System.out.println(NotStatic.staticMethod(10));
//        for (int i = 0; i < 5; i++) {
//            PirmojiKlase pirmojiKlase = new PirmojiKlase();
//        }
//        PirmojiKlase.isvalyti();

//        TestFinal testFinal = new TestFinal();
//        TestFinal testFina2 = new TestFinal();
//        testFinal.keisti("word", 4);
//        testFina2.keisti("sentence", 5);

//        StaticTestFinal staticTestFinal = new StaticTestFinal();
//        StaticTestFinal staticTestFina2 = new StaticTestFinal();
//        staticTestFinal.priskirk(2,1);
//        staticTestFinal.priskirk(4,5);
            StaticTestFinal  staticTestFinal = new StaticTestFinal();
       double rezultas =  StaticTestFinal.calculate(14);
        System.out.println(rezultas);

    }
}