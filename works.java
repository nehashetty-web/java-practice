class Car {
    String brand;
    int speed;

    void start() {
        System.out.println(brand + " car is starting");
    }

    void accelerate() {
        System.out.println(brand + " car is moving at " + speed + " km/h");
    }
}

public class works {
    public static void main(String[] args) {
        Car c1 = new Car();

        c1.brand = "Tesla";
        c1.speed = 120;

        c1.start();
        c1.accelerate();
    }
}