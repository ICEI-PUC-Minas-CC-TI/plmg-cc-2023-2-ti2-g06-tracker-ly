package service;

import static spark.Spark.*;
import spark.Request;
import spark.Response;
import java.text.SimpleDateFormat;

import com.google.gson.Gson;
import dao.UsuarioDAO;
import objetos.Usuario;
import java.util.Date;

public class UsuarioService {

    public class Resp{
    private String msg;

    public Resp(String msg){
        this.msg = msg;
        }
    }

    public UsuarioService(){};

    private static UsuarioDAO usuarioDAO = new UsuarioDAO();

    public Gson login(Request request, Response response){
        response.type("application/json");
        String user = request.queryParams("user");
        String senha = request.queryParams("senha");
        System.out.println(senha);

        Gson gson = new Gson();
        try{
            gson = usuarioDAO.autenticar(user, senha);
            return gson;
        } catch (Exception e){
            System.out.println(e);
            return gson;
        }
    }

    public boolean cadastro(Request request, Response response){
        // SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");

        String nome = request.queryParams("nome");
        String email = request.queryParams("email");
        String senha = request.queryParams("senha");

        //String nasc = request.queryParams("nasc");

        // Date dataFormatada = formato.parse(nasc);

        // int nivel = Integer.parseInt(request.queryParams("nivel"));

        try{
            usuarioDAO.inserirUsuario(new Usuario(-1, nome, 1, email, senha, "2000-01-01"));
            return true;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    };
}
