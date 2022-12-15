package task1;

interface IsSeaVessel extends IsVehicle {
    String displacement = null;

    void launch();
    Integer getDisplacement();
    void setDisplacement();

    void setName();

    void setName(String name);
}
