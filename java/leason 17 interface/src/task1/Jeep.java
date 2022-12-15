package task1;

import java.util.ArrayList;

public class Jeep implements IsLandVehicle {
    void soundHorn() {}

    private String name;
    private int maxPassengers;
    private int maxSpeed;


    @Override
    public Integer getNumWheels() {
        return null;
    }

    @Override
    public void setNumberWheels() {

    }

    @Override
    public void drive() {
        System.out.println("Transporto priemone vaziuoja");
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
        return "task1.Jeep{" +
                "name='" + name + '\'' +
                '}';
    }


    public static class Main {
        public static void main(String[] args) {


            ArrayList<Object> objects = new ArrayList<>();


            Jeep jeep = new Jeep();
            Jeep jeep2 = new Jeep();
            jeep.drive();
            jeep.setName("name");
            jeep2.setName("name2");
            objects.add(jeep);
            objects.add(jeep2);


            System.out.println(objects);

            Figate figate = new Figate();
            Figate figate2 = new Figate();
            figate.setName("figate1");
            figate2.setName("figate2");

            figate.fireGun();
            objects.add(figate);
            objects.add(figate2);
            System.out.println(objects);
            checkObjectInstace(objects);

        }


        static void checkObjectInstace(ArrayList objects) {
            for (Object object: objects
            ) {
                if(object instanceof IsVehicle) {
                    System.out.printf("%s, with name:%s  is the intance of vehicles\n",  object.getClass(), ((IsVehicle) object).getName());
                }
            }
        }
    }
}
