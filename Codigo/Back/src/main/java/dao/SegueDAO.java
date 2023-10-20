package dao;
import java.sql.*;
import java.util.*;

import objetos.Segue;

public class SegueDAO extends DAO {
    SegueDAO() {
        super();
    }

    public void inserirSegue(Segue cc) throws Exception {
        String sql = "INSERT into segue(segue_id, seguido_id) values (?,?)";
        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        preparedStatement.setInt(1, cc.getSegue_id());
        preparedStatement.setInt(1, cc.getSeguido_id());
        preparedStatement.executeUpdate();

    }

    public LinkedList<Segue> getAllSegue() throws SQLException {
        LinkedList<Segue> segue = new LinkedList<Segue>();
        String sql = "SELECT * FROM segue";
        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           segue.add(
            new Segue(result.getInt("segue_id"), result.getInt("seguido_id"))
           );
        }
        return segue;
    }

    public LinkedList<Segue> getSegue(int segue_id, int seguido_id) throws SQLException {
        LinkedList<Segue> segue = new LinkedList<Segue>();
        String sql = "SELECT * FROM segue where 1=1";
        

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
           segue.add(
           new Segue(result.getInt("segue_id"), result.getInt("seguido_id"))
           );
        }
        return segue;
    }

    public void delete(Segue hh) throws SQLException {

        String sql = "DELETE FROM segue WHERE segue_id= ?" + hh.getSegue_id();
        PreparedStatement ps = conexao.prepareStatement(sql);
        ps.setInt(1, hh.getSegue_id());
        ps.executeUpdate();

    }
}
