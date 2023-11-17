package dao;
import java.sql.*;
import java.util.*;

import objetos.Post;

public class PostDAO extends DAO {
    public PostDAO() {
        super();
    }

    public void inserirPost(Post cc) throws Exception {
        String sql = "INSERT into post(id, descr, foto, data, habito_id, perfil_id) values (?,?,?,?,?,?)";
        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        preparedStatement.setInt(1, cc.getId());
        preparedStatement.setString(2, cc.getDesc());
        preparedStatement.setString(3, cc.getFoto());
        preparedStatement.setString(4, cc.getData());
        preparedStatement.setInt(5, cc.getHabito_id());
        preparedStatement.setInt(6, cc.getPerfil_id());
        preparedStatement.executeUpdate();

    }

    public LinkedList<Post> getAllPost() throws SQLException {
        LinkedList<Post> post = new LinkedList<Post>();
        String sql = "SELECT * FROM post";
        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while(result.next()) {
           post.add(
            new Post(result.getInt("id"),result.getString("desc"), result.getString("foto"),result.getInt("habito_id"), result.getInt("perfil_id"))
           );
        }
        return post;
    }

    public LinkedList<Post> getPost(int id, String desc, byte[] foto, int habito_id, int perfil_id) throws SQLException {
        LinkedList<Post> post = new LinkedList<Post>();
        String sql = "SELECT * FROM post where 1=1";
        

        if (id > 0) {
            String addquery = "and id =" + id;
            sql += addquery;
        }

        if (!desc.equals("")) {
            String addquery = "and streak =" + desc;
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
           post.add(
            new Post(result.getInt("id"),result.getString("desc"), result.getString("foto"),result.getInt("habito_id"), result.getInt("perfil_id"))
           );
        }
        return post;
    }

    public void deletePost(int id) throws SQLException {

        String sql = "DELETE FROM post WHERE id= ?" + id;
        PreparedStatement ps = conexao.prepareStatement(sql);
        ps.setInt(1, id);
        ps.executeUpdate();

    }

    public void editarPost(Post p){

        String sql = "UPDATE post SET desc = ?, foto = ?, habito_id = ?, perfil_id = ? WHERE id = ?";

        try{
            PreparedStatement ps = conexao.prepareStatement(sql);
            ps.setString(1, p.getDesc());
            ps.setString(2, p.getFoto());
            ps.setInt(3, p.getHabito_id());
            ps.setInt(4, p.getPerfil_id());
            ps.setInt(5, p.getId());
            ps.executeUpdate();
        }
        catch(Exception e){
            System.out.println(e.getMessage());
        }
    }
}

