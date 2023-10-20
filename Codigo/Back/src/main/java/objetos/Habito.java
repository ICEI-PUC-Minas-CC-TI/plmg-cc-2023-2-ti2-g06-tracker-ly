package objetos;

public class Habito {
    int id;
    String desc;
    byte[] foto; // tem que transformar a imagem em array de byte

    Habito() {

    }

    public Habito(int id, String desc, byte[] foto) {
        this.id = id;
        this.desc = desc;
        this.foto = foto;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDesc() {
        return this.desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public byte[] getFoto() {
        return this.foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }
    

}
