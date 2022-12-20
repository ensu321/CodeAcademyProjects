import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {

        String name = "Akejheas SASAS";
        File file = new File("src/vardas.txt");
        File outputfile = new File("src/rezultas.txt");
        writeData(name, file);
        readAndReverseLines(file, outputfile);

    }
    public static void writeData(String data, File file) throws IOException {
        if(!file.exists()) {
            file.createNewFile();
        }
        BufferedWriter bw = new BufferedWriter(new FileWriter(file));
        bw.write(data);
        bw.close();
    }

    public static void readAndReverseLines(File inputFile, File outputFile ) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader(inputFile));
        BufferedWriter bw = new BufferedWriter(new FileWriter(outputFile));

        String line = null;

        while ((line = br.readLine()) != null) {
            bw.write(new StringBuilder(line).reverse().toString());
        }
        br.close();
        bw.close();

    }



}