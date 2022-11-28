public class NotStatic {
    private int numberI;

    public NotStatic(int numberI) {
        this.numberI = numberI;
    }

    public int setValue(int i) {

        return i;
    }

    public static int staticMethod(int j) {

        return j;
    }


}
