package objetos;
import java.util.Locale;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Date;
import java.util.*;
import java.text.SimpleDateFormat;

import java.text.DateFormat;
public class Habito {
    int id;
    String descr;
    String nome;
    int freq;
    String hora;
    int perfil_id;

    public Habito() {

    }

    public Habito(int id, String nome, String descr, int freq, String hora, int perfil_id) {
        this.id = id;
        this.descr = descr;
        this.nome = nome;
        this.freq = freq;
        this.hora = hora;
        this.perfil_id = perfil_id;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getdescr() {
        return this.descr;
    }

    public void setdescr(String descr) {
        this.descr = descr;
    }

    public int getFreq() {
        return this.freq;
    }

    public void setFreq(int freq) {
        this.freq = freq;
    }

    public String getHora() {
        return this.hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public int getPerfil_id() {
        return this.perfil_id;
    }

    public void setPerfil_id(int perfil_id) {
        this.perfil_id = perfil_id;
    }

}
