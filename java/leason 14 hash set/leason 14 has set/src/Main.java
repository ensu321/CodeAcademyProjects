import java.util.HashSet;

public class Main {
    public static void main(String[] args) {

        HashSet<String> stringHashSet = new HashSet<>();
        stringHashSet.add("nmas");
        stringHashSet.add("krumas");
        stringHashSet.add("butelois");
        stringHashSet.add("kreivas");

        System.out.println(stringHashSet);
        System.out.println(stringHashSet.size());


        System.out.println(stringHashSet.contains("krumas"));
        if (stringHashSet.contains("krumas")) {
            stringHashSet.remove("krumas");
            System.out.println(stringHashSet);

            System.out.println(stringHashSet.size());
        }
        stringHashSet.clear();
        System.out.println(stringHashSet);


    }
}