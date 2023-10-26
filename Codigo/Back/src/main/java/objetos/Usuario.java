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

    public Usuario() {
        this.id = -1;
        this.nome = "";
        this.nivel = -1;
        this.email = "";
        this.nasc = null;
        setSenha("");
    }

    public Usuario(int id, String nome, int nivel, String email, Date nasc, String senha) {
        this.id = id;
        this.nome = nome;
        this.nivel = nivel;
        this.email = email;
        this.senha = senha;
        this.nasc = nasc;
    }

    public Usuario(int id, String nome, int nivel, String email, String senha, String nasc) {
        this.id = id;
        this.nome = nome;
        this.nivel = nivel;
        this.email = email;
        this.senha = senha;
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

    public void setSenha(String senha) {
        try {
            // Crie uma instância do MessageDigest com o algoritmo MD5
            MessageDigest md = MessageDigest.getInstance("MD5");

            // Converte a senha em bytes
            byte[] senhaBytes = senha.getBytes();

            // Atualiza o MessageDigest com os bytes da senha
            md.update(senhaBytes);

            // Gere o hash MD5
            byte[] digest = md.digest();

            // Converte o hash MD5 em uma representação de string hexadecimal
            StringBuilder hashString = new StringBuilder();
            for (byte b : digest) {
                hashString.append(String.format("%02x", b));
            }

            // Retorne a representação da senha em MD5 como uma string
            this.senha = hashString.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }





}





