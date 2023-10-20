package dao;
import java.sql.*;
import java.util.*;

import objetos.Perfil;

public class PerfilDAO extends DAO {
    PerfilDAO() {
        super();
    }

    public void inserirPerfil(Perfil cc) throws Exception {
        String sql = "INSERT into perfil(id, nick, bio, foto, user_id) values (?,?, ?, ?, ?)";
        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        preparedStatement.setInt(1, cc.getId());
        preparedStatement.setString(2, cc.getNick());
        preparedStatement.setString(3, cc.getBio());
        preparedStatement.setBytes(4, cc.getFoto());
        preparedStatement.setInt(5, cc.getUser_id());
        preparedStatement.executeUpdate();

    }

    public LinkedList<Perfil> getAllPerfil() throws SQLException {
        LinkedList<Perfil> perfil = new LinkedList<Perfil>();
        String sql = "SELECT * FROM habito";
        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           perfil.add(
            new Perfil(result.getInt("id"), result.getString("nick"), result.getString("bio"), result.getBytes("foto"), result.getInt("user_id"))
           );
        }
        return perfil;
    }

    public LinkedList<Perfil> getPerfil(int id, String nick, int user_id) throws SQLException {
        LinkedList<Perfil> perfil = new LinkedList<Perfil>();
        String sql = "SELECT * FROM perfil where 1=1";
        

        if (id > 0) {
            String addquery = "and id =" + id;
            sql += addquery;
        }
        if (!nick.equals("")) { 
            String addquery = "and nick =" + nick;
            sql += addquery;
        }
         if (user_id > 0) {
            String addquery = "and user_id =" + user_id;
            sql += addquery;
        }

        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           perfil.add(
            new Perfil(result.getInt("id"), result.getString("nick"), result.getString("bio"), result.getBytes("foto"), result.getInt("user_id"))
           );
        }
        return perfil;
    }

    public void delete(Perfil hh) throws SQLException {

        String sql = "DELETE FROM  perfil WHERE id= ?" + hh.getId();
        PreparedStatement ps = conexao.prepareStatement(sql);
        ps.setInt(1, hh.getId());
        ps.executeUpdate();

    }
}
