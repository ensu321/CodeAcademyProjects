import java.text.DateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Formatter;

public class Car extends Vehicles {

    String bootSize;

    public Car(LocalDateTime registrationDate, String color, String bootSize) {
        super(registrationDate, color);
        this.bootSize = bootSize;
    }

    public void setRegistrationDate(LocalDateTime registrationDate) {
        this.registrationDate = registrationDate;
    }




}
