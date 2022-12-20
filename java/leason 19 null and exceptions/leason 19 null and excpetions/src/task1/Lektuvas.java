package task1;

import java.util.Random;

public class Lektuvas {

    public void iskelsitiVaziuokle() {
        int X = new Random().nextInt(0, 10);
        int rezultatas = 4 / X;
        System.out.println("Okey vaziuokle sekmingai iskleista");
        if(X==5) {
            "skrendu".charAt(20);
        }
    }

    public void vaziuokle() throws VaziuoklesIsskleidimoKlaida {
        int Y = new Random().nextInt(0, 10);
        switch (Y) {
            case 1 -> throw new VaziuoklesIsskleidimoKlaida("Neatsidaro drus");
        }

    }
}
