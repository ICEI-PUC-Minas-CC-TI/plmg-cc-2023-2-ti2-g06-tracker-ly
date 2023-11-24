package objetos;

import java.util.Locale;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Date;
import java.util.*;
import java.text.SimpleDateFormat;

import java.text.DateFormat;

public class Usuario {
    int id;
    String nome;
    int nivel;
    String email;
    Date nasc;
    String senha;
    String nick;
    String bio;
    String foto;

    public Usuario() {
        this.id = -1;
        this.nome = "";
        this.nivel = -1;
        this.email = "";
        this.nasc = null;
        setSenha("");
    }

    public Usuario(int id, String nome, int nivel, String email, Date nasc, String senha, String nick, String bio,
            String foto) {
        this.id = id;
        this.nome = nome;
        this.nivel = nivel;
        this.email = email;
        setSenha(senha);
        this.nasc = nasc;
    }

    public Usuario(int id, String nome, int nivel, String email, String senha, String nasc , String nick, String bio,
            String foto) {
        this.id = id;
        this.nome = nome;
        this.nivel = nivel;
        this.email = email;
        setSenha(senha);
        // try{
        // SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        // java.util.Date parsedDate = dateFormat.parse(this.nasc.toString());
        // java.sql.Date dataNasc = new java.sql.Date(parsedDate.getTime());
        // this.nasc = dataNasc;
        // }catch(Exception e){
        //     e.printStackTrace();
        //     this.nasc = null;
        // }
        this.nasc = Date.valueOf(nasc);


    }

    public Date getNasc() { // aqui ele transforma a data e retorna uma Date com ela
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String data = sdf.format(this.nasc);
        return Date.valueOf(data);
    }

    public void setNasc(Date nasc) { // aqui ele seta a data do sistema operacional
        this.nasc = nasc;
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

    public int getNivel() {
        return this.nivel;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return this.senha;
    }

    public void setSenha(String pass) {
        this.senha = toMD5(pass);
    }

    public String getNick() {
        return this.nick;
    }

    public void setNick(String nick) {
        if (nick.length() > 20) {
            this.nick = nick.substring(0, 20);
        } else {
            this.nick = nick;
        }
    }

    public String getBio() {
        return this.bio;
    }

    public void setBio(String bio) {
        if (bio.length() > 200) {
            this.bio = bio.substring(0, 200);
        } else {
            this.bio = bio;
        }
    }

    public String getFoto() {
        return this.foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public static String toMD5(String password) {
        try {
            // Crie uma instância de MessageDigest com o algoritmo MD5
            MessageDigest md = MessageDigest.getInstance("MD5");

            // Converte a senha em um array de bytes
            byte[] passwordBytes = password.getBytes();

            // Atualize o MessageDigest com os bytes da senha
            md.update(passwordBytes);

            // Calcule o hash MD5
            byte[] hashBytes = md.digest();

            // Converta os bytes do hash em uma representação hexadecimal
            StringBuilder sb = new StringBuilder();
            for (byte b : hashBytes) {
                sb.append(String.format("%02x", b));
            }

            // Retorne a representação em MD5 da senha
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            // Trate possíveis exceções
            e.printStackTrace();
            return null;
        }
    }


}





