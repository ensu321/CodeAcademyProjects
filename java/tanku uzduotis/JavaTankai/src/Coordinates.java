import java.util.ArrayList;
import java.util.Comparator;

public class Coordinates {
    private int x;
    private int y;

    ArrayList<String> historyArrray = new ArrayList<>();
    public Coordinates(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }


    private String printCoordiantes() {
        String formatedCoordinates = String.format("(%d; %d)", this.x, this.y);
    Tankas.tankCoordinates.add(formatedCoordinates);
        return formatedCoordinates;

    }

    private void find00() {

        try {
            int indexOF00 = Tankas.tankCoordinates.indexOf("(1; 0)");
            Tankas.tankCoordinates.remove(indexOF00);
            Tankas.tankCoordinates.add("(1; 1)");
            System.out.println(Tankas.tankCoordinates.get(indexOF00));
        } catch (IndexOutOfBoundsException e) {
            System.out.println("");
        }
    }


    public void tankMovementHistory() {
        for (String tankCoordinate : Tankas.tankCoordinates
        ) {
            String formatedCoordinates = String.format("(%d; %d)\n", this.x, this.y);
            System.out.printf(formatedCoordinates);
        }

    }







}
