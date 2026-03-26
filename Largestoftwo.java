import java.util.Scanner;
public class Largestoftwo{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("enter first number:");
        int a=sc.nextInt();
        System.out.println("enter second");
        int b=sc.nextInt();
        int max=(a>b)?a:b;
        System.out.println("largest="+max);
        sc.close();
    }
}