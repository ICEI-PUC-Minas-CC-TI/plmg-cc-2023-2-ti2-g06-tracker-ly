package objetos;

public class Reacao {
    int id;
    byte[] foto; // tem que transformar a imagem em array de byte
    int post_id;
    int perfil_id;

    Reacao() {

    }

    public Reacao(int id, byte[] foto, int post_id, int perfil_id) {
        this.id = id;
        this.foto = foto;
        this.post_id = post_id;
        this.perfil_id = perfil_id;
    }


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public byte[] getFoto() {
        return this.foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }

    public int getPost_id() {
        return this.post_id;
    }

    public void setPost_id(int post_id) {
        this.post_id = post_id;
    }

    public int getPerfil_id() {
        return this.perfil_id;
    }

    public void setPerfil_id(int perfil_id) {
        this.perfil_id = perfil_id;
    }


    

}

