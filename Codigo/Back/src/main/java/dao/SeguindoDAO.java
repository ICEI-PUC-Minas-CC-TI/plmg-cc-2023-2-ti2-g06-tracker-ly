package dao;
import java.sql.*;
import java.util.*;

import objetos.Seguindo;

public class SeguindoDAO extends DAO {
    SeguindoDAO() {
        super();
    }

    public void inserirSeguindo(Seguindo cc) throws Exception {
        String sql = "INSERT into seguindo(segue_id, seguido_id) values (?,?)";
        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        preparedStatement.setInt(1, cc.getSegue_id());
        preparedStatement.setInt(1, cc.getSeguido_id());
        preparedStatement.executeUpdate();

    }

    public LinkedList<Seguindo> getAllSeguindo() throws SQLException {
        LinkedList<Seguindo> seguindo = new LinkedList<Seguindo>();
        String sql = "SELECT * FROM seguindo";
        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           seguindo.add(
            new Seguindo(result.getInt("segue_id"), result.getInt("seguido_id"))
           );
        }
        return seguindo;
    }

    public LinkedList<Seguindo> getSeguindo(int segue_id, int seguido_id) throws SQLException {
        LinkedList<Seguindo> seguindo = new LinkedList<Seguindo>();
        String sql = "SELECT * FROM seguindo where 1=1";

        if (segue_id > 0) {
            String addquery = "and segue_id =" + segue_id;
            sql += addquery;
        }
         if (seguido_id > 0) {
            String addquery = "and seguido_id =" + seguido_id;
            sql += addquery;
        }

        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           seguindo.add(
           new Seguindo(result.getInt("segue_id"), result.getInt("seguido_id"))
           );
        }
        return seguindo;
    }

    public void delete(Seguindo hh) throws SQLException {

        String sql = "DELETE FROM seguindo WHERE seguido_id= ?" + hh.getSeguido_id();
        PreparedStatement ps = conexao.prepareStatement(sql);
        ps.setInt(1, hh.getSeguido_id());
        ps.executeUpdate();

    }
}
