import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Main {
    public static void main(String[] args)
    {
        LocalDateTime localDateTime = LocalDateTime.now();
        System.out.println(localDateTime);
       LocalDateTime localDateTimeMinus3Hours = localDateTime.minusHours(3);
        System.out.println(localDateTimeMinus3Hours);
        LocalDateTime localdateTimePlusDays = localDateTime.plusDays(5);
        System.out.println(localdateTimePlusDays);
        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm");
        String localDateTimeFormated = localDateTime.format(format);
        System.out.println(localDateTimeFormated);



    }
}