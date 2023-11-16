package dao;
import java.sql.*;
import java.util.*;

import objetos.Habito;

public class HabitoDAO extends DAO {
    public HabitoDAO() {
        super();
    }

    public void inserirHabito(Habito cc) throws Exception {
        String sql = "INSERT into habito(nome, descr, freq, hora, perfil_id) values (?, ?, ?, ?, ?)";
        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        preparedStatement.setString(1, cc.getNome());
        preparedStatement.setString(2, cc.getdescr());
        preparedStatement.setInt(3, cc.getFreq());
        preparedStatement.setString(4, cc.getHora());
        preparedStatement.setInt(5, cc.getPerfil_id());
        preparedStatement.executeUpdate();

    }

    public LinkedList<Habito> getAllHabito() throws SQLException {
        LinkedList<Habito> habitos = new LinkedList<Habito>();
        String sql = "SELECT * FROM habito";
        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           habitos.add(
            new Habito(result.getInt("id"), result.getString("nome"), result.getString("descr"), result.getInt("freq"), result.getString("hora"), result.getInt("perfil_id"))
           );
        }
        return habitos;
    }

    public LinkedList<Habito> getHabito(int id) throws SQLException {
        LinkedList<Habito> habitos = new LinkedList<Habito>();
        String sql = "SELECT * FROM habito where 1=1";

        if (id > 0) {
            String addquery = "and perfil_id =" + id;
            sql += addquery;
        }

        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           habitos.add(
            new Habito(result.getInt("id"), result.getString("nome"), result.getString("descr"), result.getInt("freq"), result.getString("hora"), result.getInt("perfil_id"))
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
