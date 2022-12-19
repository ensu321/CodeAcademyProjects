import java.util.Arrays;

public class PositiveNumber extends Number{
    int sum;


    @Override
    int[] generate() {
        for (int j = 0; j < randomNumber; j++) {
            int min = 0;
            int max = 199;
            int range1 = max - min + 1;
            numbers[j] = (int)(Math.random() * range1) + min;
        }
        return numbers;
    }


}
