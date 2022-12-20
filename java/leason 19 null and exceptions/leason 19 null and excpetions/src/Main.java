import task1.Lektuvas;
import task1.Priezastis;

public class Main {
    public static void main(String[] args) {

//        Adresas adresas = new Adresas();
//        System.out.println(gautiMiestoPavadinimas(adresas));
//
//        Adresas adresas2 = new Adresas(new Miestas("Kaunas"));
//        System.out.println(gautiMiestoPavadinimas(adresas2));

        Lektuvas lektuvas = new Lektuvas();


        for (int i = 0; i < 10; i++) {
            try {
                lektuvas.iskelsitiVaziuokle();
            } catch (ArithmeticException e) {
                System.out.println("Ivyko klaida dalyba is nulio, vaziuokles iskelsiti nepavyko");
            } catch (StringIndexOutOfBoundsException e) {
                System.out.println(e.getMessage());
            } finally {
                System.out.println("Lektuvas skrenda");
            }
        }
    }


    private static String gautiMiestoPavadinimas(Adresas adresas) {
        Miestas miestasIsAdreso = adresas.getMiestas();
        if (miestasIsAdreso != null) {
            return miestasIsAdreso.getPavadinimas();
        }
        return "Lietuvoje";
    }
}