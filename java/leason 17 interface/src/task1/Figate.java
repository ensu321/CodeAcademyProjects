package task1;

public class Figate implements IsSeaVessel {

    String name;
    void fireGun(){
        System.out.println("Saudau");
    };


    @Override
    public void launch() {

    }

    @Override
    public Integer getDisplacement() {
        return null;
    }

    @Override
    public void setDisplacement() {

    }

    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public void setName() {

    }

    @Override
    public void setName(String name) {
        this.name = name;
    }


    @Override
    public int getMaxPassengers() {
        return 0;
    }

    @Override
    public void setMaxPassengers(int number) {

    }

    @Override
    public int getMaxSpeed() {
        return 0;
    }

    @Override
    public void setMaxSpeed() {

    }

    @Override
    public String toString() {
        return "task1.Figate{" +
                "name='" + name + '\'' +
                '}';
    }
}
