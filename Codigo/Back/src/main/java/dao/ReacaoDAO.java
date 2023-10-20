package dao;
import java.sql.*;
import java.util.*;

import objetos.Reacao;

public class ReacaoDAO extends DAO {
    ReacaoDAO() {
        super();
    }

    public void inserirReacao(Reacao cc) throws Exception {
        String sql = "INSERT into reacao(id,foto, post_id, perfil_id) values (?,?, ?, ?)";
        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        preparedStatement.setInt(1, cc.getId());
        preparedStatement.setBytes(2, cc.getFoto());
        preparedStatement.setInt(3, cc.getPost_id());
        preparedStatement.setInt(4, cc.getPerfil_id());
        preparedStatement.executeUpdate();

    }

    public LinkedList<Reacao> getAllReacao() throws SQLException {
        LinkedList<Reacao> reacao = new LinkedList<Reacao>();
        String sql = "SELECT * FROM reacao";
        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           reacao.add(
            new Reacao(result.getInt("id"), result.getBytes("foto"), result.getInt("post_id"), result.getInt("perfil_id"))
           );
        }
        return reacao;
    }

    public LinkedList<Reacao> getReacao(int id, int post_id, int perfil_id) throws SQLException {
        LinkedList<Reacao> reacao = new LinkedList<Reacao>();
        String sql = "SELECT * FROM reacao where 1=1";
        

        if (id > 0) {
            String addquery = "and id =" + id;
            sql += addquery;
        }
        if (post_id > 0) {
            String addquery = "and post_id =" + post_id;
            sql += addquery;
        }
        if (perfil_id > 0) {
            String addquery = "and perfil_id =" + perfil_id;
            sql += addquery;
        }
        

        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           reacao.add(
            new Reacao(result.getInt("id"), result.getBytes("foto"), result.getInt("post_id"), result.getInt("perfil_id"))
           );
        }
        return reacao;
    }

    public void delete(Reacao hh) throws SQLException {

        String sql = "DELETE FROM reacao WHERE id= ?" + hh.getId();
        PreparedStatement ps = conexao.prepareStatement(sql);
        ps.setInt(1, hh.getId());
        ps.executeUpdate();

    }
}

