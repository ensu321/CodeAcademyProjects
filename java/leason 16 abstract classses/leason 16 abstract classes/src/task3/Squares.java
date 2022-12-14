package task3;

public  class Squares extends Figure{
        int side;
        int perimeter;

    public Squares(int side) {
        this.side = side;
    }

    @Override
    public double getArea() {
        area = side*side;
        return area;
    }

    @Override
    public double getPerimeter() {
        perimeter = 4*side;
        return perimeter;
    }
}
