package dao;
import java.sql.*;
import java.util.*;

import objetos.Habito;

public class HabitoDAO extends DAO {
    HabitoDAO() {
        super();
    }

    public void inserirHabito(Habito cc) throws Exception {
        String sql = "INSERT into habito(id,desc, foto) values (?,?, ?)";
        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        preparedStatement.setInt(1, cc.getId());
        preparedStatement.setString(2, cc.getDesc());
        preparedStatement.setBytes(3, cc.getFoto());
        preparedStatement.executeUpdate();

    }

    public LinkedList<Habito> getAllHabito() throws SQLException {
        LinkedList<Habito> habitos = new LinkedList<Habito>();
        String sql = "SELECT * FROM habito";
        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           habitos.add(
            new Habito(result.getInt("id"), result.getString("desc"), result.getBytes("foto"))
           );
        }
        return habitos;
    }

    public LinkedList<Habito> getHabito(int id, String desc) throws SQLException {
        LinkedList<Habito> habitos = new LinkedList<Habito>();
        String sql = "SELECT * FROM habito where 1=1";
        

        if (id > 0) {
            String addquery = "and id =" + id;
            sql += addquery;
        }
        if (!desc.equals("")) { 
            String addquery = "and desc =" + desc;
            sql += addquery;
        }

        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           habitos.add(
            new Habito(result.getInt("id"), result.getString("desc"), result.getBytes("foto"))
           );
        }
        return habitos;
    }

    public void delete(Habito hh) throws SQLException {

        String sql = "DELETE FROM  habito WHERE id= ?" + hh.getId();
        PreparedStatement ps = conexao.prepareStatement(sql);
        ps.setInt(1, hh.getId());
        ps.executeUpdate();

    }
}
