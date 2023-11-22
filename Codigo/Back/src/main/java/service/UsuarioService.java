package service;

import spark.Request;
import spark.Response;

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

    public String login(Request request, Response response){
        UsuarioDAO user = new UsuarioDAO();
        response.type("application/json");
        String email = request.queryParams("email");
        String senha = request.queryParams("senha");

        Gson gson = new Gson();
        try{
            System.out.println("O erro está na função autenticar");
            Usuario u = user.autenticar(email, senha);
            System.out.println("O erro não está na função autenticar" + u.getNome());
            return gson.toJson(u);
        } catch (Exception e){
          System.out.println(e.getMessage());
        }
        return gson.toJson(null);
    }

    public boolean cadastro(Request request, Response response){
        // SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");

        String nome = request.queryParams("nome");
        String email = request.queryParams("email");
        String senha = request.queryParams("senha");
        String nasc = request.queryParams("nasc");
        String nick = request.queryParams("nick");
        String bio = request.queryParams("bio");
        byte[] foto = request.queryParams("foto").getBytes();

        //String nasc = request.queryParams("nasc");

        // Date dataFormatada = formato.parse(nasc);

        // int nivel = Integer.parseInt(request.queryParams("nivel"));

        try{
            usuarioDAO.inserirUsuario(new Usuario(-1, nome, 1, email, senha, nasc, nick, bio, foto));
            return true;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }
}
