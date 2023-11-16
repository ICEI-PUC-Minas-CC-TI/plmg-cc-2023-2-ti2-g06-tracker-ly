package service;


import static spark.Spark.*;
import spark.Request;
import spark.Response;
import java.text.SimpleDateFormat;

import com.google.gson.Gson;
import dao.PostDAO;
import objetos.Post;
import java.util.Date;
import java.sql.Time;


public class PostService {

    public PostService(){}

    private static PostDAO post = new PostDAO();

    public Gson gson = new Gson();

    public boolean cadastro(Request request, Response response){
        // SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");

        //id, descrição, foto, habito_id, perfil_id
        String descricao = request.queryParams("descricao");;
        String foto = request.queryParams("foto");
        int habito_id = Integer.parseInt(request.queryParams("habito_id"));
        int perfil_id = Integer.parseInt(request.queryParams("perfil_id"));

        try{
            post.inserirPost(new Post(-1, descricao, foto, habito_id, perfil_id ));
            return true;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }

    public boolean delete(Request request, Response response){

        int id = Integer.parseInt(request.queryParams("id"));

        try{
            post.deletePost(id);
            return true;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }

    public boolean editar(Request request, Response response){

        int id = Integer.parseInt(request.queryParams("id"));
        String descricao = request.queryParams("descricao");
        String foto = request.queryParams("foto");
        int habito_id = Integer.parseInt(request.queryParams("habito_id"));
        int perfil_id = Integer.parseInt(request.queryParams("perfil_id"));

        try{
            post.editarPost(new Post(id, descricao, foto, habito_id, perfil_id ));
            return true;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }

    }





}