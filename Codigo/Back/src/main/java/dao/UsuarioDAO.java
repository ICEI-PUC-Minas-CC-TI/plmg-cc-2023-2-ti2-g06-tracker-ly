package dao;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.*;
import java.sql.Date;
import java.util.*;
import com.google.gson.Gson;

import objetos.Usuario;

public class UsuarioDAO extends DAO {
    public UsuarioDAO() {
        super();
    }

    public void inserirUsuario(Usuario cc) throws Exception {
        String sql = "INSERT into usuario(nome, nivel, email, nasc, senha, nick, bio, foto) values (?, ?, ?, ?, ?, ?, ?, ?)";
        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        preparedStatement.setString(1, cc.getNome());
        preparedStatement.setInt(2, cc.getNivel());
        preparedStatement.setString(3, cc.getEmail());
        preparedStatement.setDate(4, cc.getNasc());
        preparedStatement.setString(5, cc.getSenha());
        preparedStatement.setString(6, cc.getNick());
        preparedStatement.setString(7, cc.getBio());
        preparedStatement.setString(8, cc.getFoto());
        preparedStatement.executeUpdate();

    }

    public LinkedList<Usuario> getAllUsuario() throws SQLException {
        LinkedList<Usuario> usuario = new LinkedList<Usuario>();
        String sql = "SELECT * FROM usuario";
        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           usuario.add(
            new Usuario(result.getInt("id"),result.getString("nome"), result.getInt("nivel"),result.getString("email"), result.getDate("nasc"), result.getString("senha"), result.getString("nick"), result.getString("bio"), result.getString("foto"))
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
            new Usuario(result.getInt("id"),result.getString("nome"), result.getInt("nivel"),result.getString("email"), result.getDate("nasc"), result.getString("senha"), result.getString("nick"), result.getString("bio"), result.getString("foto")));
        }
        return usuario;
    }

    public void delete(Usuario hh) throws SQLException {

        String sql = "DELETE FROM usuario WHERE id= ?" + hh.getId();
        PreparedStatement ps = conexao.prepareStatement(sql);
        ps.setInt(1, hh.getId());
        ps.executeUpdate();

    }

    public Usuario autenticar(String email, String senha) throws NoSuchAlgorithmException, SQLException { // autenticacao do usuario no login com senha md5
        System.out.println("As informações recebidas pelo autenticar são" + email + " " + senha);

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

      Statement st = conexao.createStatement(
        ResultSet.TYPE_SCROLL_INSENSITIVE,
        ResultSet.CONCUR_READ_ONLY
      );

      System.out.println("Inserindo usuário no banco...");
      String sql =
        "SELECT * FROM usuario WHERE email LIKE '" +
        email +
        "' AND senha LIKE '" +
        senhaConvertida +
        "'";

      ResultSet rs = st.executeQuery(sql);
      if (rs.next()) {
        Usuario usuario = new Usuario(rs.getInt("id"),rs.getString("nome"), rs.getInt("nivel"),rs.getString("email"), rs.getDate("nasc"), rs.getString("senha"), rs.getString("nick"), rs.getString("bio"), rs.getString("foto"));
        System.out.println("Usuario inserido com sucesso");
        return usuario;
      } else  {
        System.out.println("Não foi possível inserir o usuário no banco.");
      }
      return null;
    }
}


