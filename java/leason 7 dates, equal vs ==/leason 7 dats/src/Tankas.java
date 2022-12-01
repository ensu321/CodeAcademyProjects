import java.util.Objects;

public class Tankas {
    String Pavadinimas;
    String Modelis;


    public Tankas(String pavadinimas, String modelis) {
        Pavadinimas = pavadinimas;
        Modelis = modelis;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tankas tankas = (Tankas) o;
        return Objects.equals(Pavadinimas, tankas.Pavadinimas);
    }

}
