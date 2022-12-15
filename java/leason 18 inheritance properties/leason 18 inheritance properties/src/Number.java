public abstract class Number {

    int sum;
    public final int  min = 20;
    private final int  maximum = 200;
    public final int range= maximum-min+1;

     int randomNumber = (int)(Math.random() * range) + min;

    protected int[] numbers = new int[randomNumber];


     abstract void generate();

     public int sum(int[] numberArray) {
         for (int i = 0; i < numbers.length; i++) {
             sum += numberArray[i];
         }
         return sum;
     }

}
