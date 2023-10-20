package objetos;

public class Segue {
    int segue_id;
    int seguido_id;

    Segue() {

    }

    public Segue(int segue_id, int seguido_id) {
        this.segue_id = segue_id;
        this.seguido_id = seguido_id;
    }


    public int getSegue_id() {
        return this.segue_id;
    }

    public void setSegue_id(int segue_id) {
        this.segue_id = segue_id;
    }

    public int getSeguido_id() {
        return this.seguido_id;
    }

    public void setSeguido_id(int seguido_id) {
        this.seguido_id = seguido_id;
    }

    
    
}
