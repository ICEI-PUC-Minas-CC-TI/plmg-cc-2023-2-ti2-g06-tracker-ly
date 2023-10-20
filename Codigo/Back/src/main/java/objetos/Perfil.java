package objetos;

public class Perfil {
    int id;
    String nick;
    String bio;
    byte[] foto;
    int user_id;

    public Perfil() {

    }


    public Perfil(int id, String nick, String bio, byte[] foto, int user_id) {
        this.id = id;
        this.nick = nick;
        this.bio = bio;
        this.foto = foto;
        this.user_id = user_id;
    }


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNick() {
        return this.nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    public String getBio() {
        return this.bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public byte[] getFoto() {
        return this.foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }

    public int getUser_id() {
        return this.user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }



}
