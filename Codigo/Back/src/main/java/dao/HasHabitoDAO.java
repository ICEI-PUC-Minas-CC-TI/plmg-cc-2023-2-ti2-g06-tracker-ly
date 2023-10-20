package dao;
import java.sql.*;
import java.util.*;

import objetos.HasHabito;

public class HasHabitoDAO extends DAO {
    HasHabitoDAO() {
        super();
    }

    public void inserirHasHabito(HasHabito cc) throws Exception {
        String sql = "INSERT into perfil_has_habito(frequencia, last_update, streak, habito_id, perfil_id) values (?,?, ?, ?, ?)";
        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        preparedStatement.setInt(1, cc.getFrequencia());
        preparedStatement.setString(2, cc.getLast_update());
        preparedStatement.setInt(3, cc.getStreak());
        preparedStatement.setInt(4, cc.getHabito_id());
        preparedStatement.setInt(5, cc.getPerfil_id());
        preparedStatement.executeUpdate();

    }

    public LinkedList<HasHabito> getAllHasHabito() throws SQLException {
        LinkedList<HasHabito> hasHabito = new LinkedList<HasHabito>();
        String sql = "SELECT * FROM perfil_has_habito";
        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           hasHabito.add(
            new HasHabito(result.getInt("frequencia"),result.getInt("streak"), result.getInt("habito_id"), result.getInt("perfil_id"))
           );
        }
        return hasHabito;
    }

    public LinkedList<HasHabito> getHasHabito(int frequencia, int streak, int habito_id, int perfil_id) throws SQLException {
        LinkedList<HasHabito> hasHabito = new LinkedList<HasHabito>();
        String sql = "SELECT * FROM perfil_has_habito where 1=1";
        

        if (frequencia > 0) {
            String addquery = "and frequencia =" + frequencia;
            sql += addquery;
        }

        if (streak > 0) {
            String addquery = "and streak =" + streak;
            sql += addquery;
        }
        if (habito_id > 0) {
            String addquery = "and habito_id =" + habito_id;
            sql += addquery;
        }
        if (perfil_id > 0) {
            String addquery = "and perfil_id =" + perfil_id;
            sql += addquery;
        }


        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           hasHabito.add(
            new HasHabito(result.getInt("frequencia"),result.getInt("streak"), result.getInt("habito_id"), result.getInt("perfil_id"))
           );
        }
        return hasHabito;
    }

    public void delete(HasHabito hh) throws SQLException {

        String sql = "DELETE FROM perfil_has_habito WHERE id= ?" + hh.getHabito_id();
        PreparedStatement ps = conexao.prepareStatement(sql);
        ps.setInt(1, hh.getHabito_id());
        ps.executeUpdate();

    }
}
