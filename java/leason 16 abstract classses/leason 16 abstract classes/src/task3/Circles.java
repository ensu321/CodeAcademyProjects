package task3;

public class Circles extends Figure{
        double circumfence;
    final double  PI = 3.14d;
    double r;

    public Circles(double r) {
        this.r = r;
    }

    @Override
    public double getArea() {
        area = PI*(this.r*this.r);
        return area;
    }

    @Override
    public double getPerimeter() {
        circumfence =  2*this.PI*this.r;
       return  circumfence;
    }
}
