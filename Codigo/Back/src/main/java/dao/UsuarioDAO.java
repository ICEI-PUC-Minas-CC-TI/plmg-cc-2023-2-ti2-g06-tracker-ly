package dao;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.*;
import java.sql.Date;
import java.util.*;

import objetos.Usuario;

public class UsuarioDAO extends DAO {
    UsuarioDAO() {
        super();
    }

    public void inserirUsuario(Usuario cc) throws Exception {
        String sql = "INSERT into usuario(id, nome, nivel, email, nasc, senha) values (?,?, ?, ?, ?, ?)";
        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        preparedStatement.setInt(1, cc.getId());
        preparedStatement.setString(2, cc.getNome());
        preparedStatement.setInt(3, cc.getNivel());
        preparedStatement.setString(4, cc.getEmail());
        preparedStatement.setString(5, cc.getNasc());
        preparedStatement.setString(6, cc.getSenha());
        preparedStatement.executeUpdate();

    }

    public LinkedList<Usuario> getAllUsuario() throws SQLException {
        LinkedList<Usuario> usuario = new LinkedList<Usuario>();
        String sql = "SELECT * FROM usuario";
        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           usuario.add(
            new Usuario(result.getInt("id"),result.getString("nome"), result.getInt("nivel"),result.getString("email"), result.getDate("nasc"), result.getString("senha"))
           );
        }
        return usuario;
    }

    public LinkedList<Usuario> getUsuario(int id, String nome, int nivel, String email, Date nasc) throws SQLException {
        LinkedList<Usuario> usuario = new LinkedList<Usuario>();
        String sql = "SELECT * FROM usuario where 1=1";
        

        if (id > 0) {
            String addquery = "and id =" + id;
            sql += addquery;
        }

        if (!nome.equals("")) {
            String addquery = "and nome =" + nome;
            sql += addquery;
        }
        if (nivel >= 0) {
            String addquery = "and nivel =" + nivel;
            sql += addquery;
        }
        if (!email.equals("")) {
            String addquery = "and email =" + email;
            sql += addquery;
        }

        if (nasc != null) {
            String addquery = "and nasc =" + nasc;
            sql += addquery;
        }


        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           usuario.add(
            new Usuario(result.getInt("id"),result.getString("nome"), result.getInt("nivel"),result.getString("email"), result.getDate("nasc"), result.getString("senha"))
           );
        }
        return usuario;
    }

    public void delete(Usuario hh) throws SQLException {

        String sql = "DELETE FROM usuario WHERE id= ?" + hh.getId();
        PreparedStatement ps = conexao.prepareStatement(sql);
        ps.setInt(1, hh.getId());
        ps.executeUpdate();

    }

    public boolean autenticar(String email, String senha) throws NoSuchAlgorithmException, SQLException { // autenticacao do usuario no login com senha md5
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
            String senhaConvertida = hashString.toString();

            String sql = "SELECT * FROM usuario WHERE email=" + email + "AND senha=" + senhaConvertida;
            PreparedStatement ps = conexao.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            if (rs.toString() == "") {
                return false;
            }
            return true;
            
    }
}


