import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Tankas {
    public int x;
    public int y;

    Directions direction;

    private static int counterStrikesNorth = 0;
    private static int counterStrikesSouth = 0;
    private static int counterStrikesEast = 0;
    private static int counterStrikesWest = 0;

    public Tankas(int x, int y, Directions direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    public Tankas() {
        this.x = 0;
        this.y = 0;
        this.direction = Directions.North;
    }

    public void moveNorth() {
        y++;
        direction =  Directions.North;
        System.out.printf("%s Tank moved to north (y:%d,x:%d)\n", Main.getTimeStamp(), y, x);

    }

    public void moveSouth() {
        y--;
        direction =  Directions.South;
        System.out.printf("%s Tank moved to south (y:%d,x:%d)\n", Main.getTimeStamp(), y, x); //isketi i funkcija kuri printintu, pakeisti vieta kur yra orentiation variable


    }

    public void moveEast() {
        x++;
        direction =  Directions.East;
        System.out.printf("%s Tank moved to east (y:%d,x:%d)\n", Main.getTimeStamp(), y, x);


    }

    public void moveWest() {
        x--;
        System.out.printf("%s Tank moved to West (y:%d,x:%d)\n", Main.getTimeStamp(), y, x);
        direction =  Directions.West;

    }

    public void strike() {
        System.out.printf("%s Tank striked to: %s \n", Main.getTimeStamp(),  direction);
        switch (direction) {
            case North -> counterStrikesNorth++;
            case South -> counterStrikesSouth++;
            case East -> counterStrikesEast++;
            case West -> counterStrikesWest++;
        };
        ;
    }


    private int countStrikes() {

        return  counterStrikesNorth+ counterStrikesSouth+counterStrikesEast+counterStrikesWest;
    }

    public void info() {
        System.out.printf("INFO: Tank coordinates (y:%d,x:%d), orientation: %s \n", y, x, direction);
        System.out.printf("INFO: Tank strikes: %d to North, %d to East, %d to south, %d to west. Total strikes: %d \n",
                counterStrikesNorth, counterStrikesEast, counterStrikesSouth, counterStrikesWest,  countStrikes());

    }



}
