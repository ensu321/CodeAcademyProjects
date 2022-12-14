import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Vehicles {
    LocalDateTime registrationDate;
    String color;

    public Vehicles(LocalDateTime registrationDate, String color) {
        this.registrationDate = registrationDate;
        this.color = color;
    }

    @Override
    public String toString() {
        return "Vehicles{" +
                "registrationDate=" + registrationDate +
                ", color='" + color + '\'' +
                '}';
    }

    public Vehicles() {
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void drive() {

    }

    public String getRegistrationDate() {
        return registrationDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
    }
}
