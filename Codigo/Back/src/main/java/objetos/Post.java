package objetos;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Post {
    int id;
    String desc;
    byte[] foto;
    LocalDate data;
    int habito_id;
    int perfil_id;

    Post(){

    }


    public Post(int id, String desc, byte[] foto, int habito_id, int perfil_id) {
        this.id = id;
        this.desc = desc;
        this.foto = foto;
        this.habito_id = habito_id;
        this.perfil_id = perfil_id;
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

    public byte[] getFoto() {
        return this.foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }

    public int getHabito_id() {
        return this.habito_id;
    }

    public void setHabito_id(int habito_id) {
        this.habito_id = habito_id;
    }

    public int getPerfil_id() {
        return this.perfil_id;
    }

    public void setPerfil_id(int perfil_id) {
        this.perfil_id = perfil_id;
    }


    public String getData() { // aqui ele transforma a data e retorna uma string com ela
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String dataFormatada = this.data.format(formatter);
        return dataFormatada;
    }

    public void setData() { // aqui ele seta a data do sistema operacional 
        LocalDate dataAtual = LocalDate.now();
        this.data = dataAtual;
    }
}

