package dao;

import java.sql.*;
import java.util.*;
import com.google.gson.Gson;
import objetos.Post;

public class PostDAO extends DAO {
    public PostDAO() {
        super();
    }

    public void inserirPost(Post cc) throws Exception {

        String sql = "INSERT into post(descr, foto, data, habito_id, user_id) values (?,?,?,?,?)";
        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        //preparedStatement.setInt(1, cc.getId());
        preparedStatement.setString(1, cc.getDesc());
        preparedStatement.setBytes(2, cc.getFoto());
        preparedStatement.setString(3, cc.getData());
        preparedStatement.setInt(4, cc.getHabito_id());
        preparedStatement.setInt(5, cc.getuser_id());
        preparedStatement.executeUpdate();

    }

    public LinkedList<Post> getAllPost() throws SQLException {

        LinkedList<Post> post = new LinkedList<Post>();
        String sql = "SELECT * FROM post";
        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while (result.next()) {
            post.add(
                    new Post(null, result.getString("desc"), result.getBytes("foto"),
                            result.getInt("habito_id"), result.getInt("user_id")));
        }
        return post;
    }

    public LinkedList<Post> getPost(int id, String desc, int habito_id, int user_id) throws SQLException {
        LinkedList<Post> post = new LinkedList<Post>();
        Gson gson = new Gson();
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
        if (user_id > 0) {
            String addquery = "and user_id =" + user_id;
            sql += addquery;
        }

        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while (result.next()) {
            post.add(
                    new Post(result.getInt("id"), result.getString("descr"), result.getBytes("foto"),
                            result.getInt("habito_id"), result.getInt("user_id")));
        }


        return post;
    }

    public void deletePost(int id) throws SQLException {

        String sql = "DELETE FROM post WHERE id= ?";
        PreparedStatement ps = conexao.prepareStatement(sql);
        ps.setInt(1, id);
        ps.executeUpdate();

    }

    public void editarPost(Post p) {

        String sql = "UPDATE post SET desc = ?, foto = ?, habito_id = ?, user_id = ? WHERE id = ?";

        try {
            PreparedStatement ps = conexao.prepareStatement(sql);
            ps.setString(1, p.getDesc());
            ps.setBytes(2, p.getFoto());
            ps.setInt(3, p.getHabito_id());
            ps.setInt(4, p.getuser_id());
            ps.setInt(5, p.getId());
            ps.executeUpdate();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public LinkedList<Post> getPostsAmigos(int user_id) throws SQLException {

        LinkedList<Post> post = new LinkedList<Post>();
        String sql = "SELECT post.* FROM usuario JOIN segue ON usuario.id = segue.segue_id JOIN post ON segue.seguido_id = post.user_id WHERE usuario.id = ";
        sql += user_id;
        PreparedStatement ps = conexao.prepareStatement(sql);
        ResultSet result = ps.executeQuery();

        while (result.next()) {
            post.add(
                    new Post(null, result.getString("descr"), result.getBytes("foto"),
                            result.getInt("habito_id"), result.getInt("user_id")));
        }
        return post;
    }
}
