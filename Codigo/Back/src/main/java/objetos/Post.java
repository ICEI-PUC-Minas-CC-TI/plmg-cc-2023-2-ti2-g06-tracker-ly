package objetos;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Post {
    Integer id;
    String desc;
    String foto;
    String data;
    int habito_id;
    int user_id;

    public Post(){

    }


    public Post(Integer id, String desc, String foto, int habito_id, int user_id) {
        this.id = id;
        this.desc = desc;
        this.foto = foto;
        this.habito_id = habito_id;
        this.user_id = user_id;
        setData();
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

    public String getFoto() {
        return this.foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public int getHabito_id() {
        return this.habito_id;
    }

    public void setHabito_id(int habito_id) {
        this.habito_id = habito_id;
    }

    public int getuser_id() {
        return this.user_id;
    }

    public void setuser_id(int user_id) {
        this.user_id = user_id;
    }


    public String getData() { // aqui ele transforma a data e retorna uma string com ela
        return this.data;
    }

    public void setData() { // aqui ele seta a data do sistema operacional 
        LocalDate dataAtual = LocalDate.now();
        this.data = dataAtual.toString();
    }
}

