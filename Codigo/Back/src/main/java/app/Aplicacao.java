package app;

import static spark.Spark.*;

import java.text.SimpleDateFormat;

import com.google.gson.Gson;
import dao.UsuarioDAO;
import objetos.Usuario;
import java.util.Date;

public class Aplicacao {

    private static UsuarioDAO usuarioDAO = new UsuarioDAO();

    public static void main(String[] args) {
        path("/login", () -> {
           // get("/login", (req, res) -> "Login");
            post("/", (request, response) -> {
                String user = request.queryParams("user");
                String senha = request.queryParams("senha");
                System.out.println(senha);

                Gson gson = new Gson();
                gson = usuarioDAO.autenticar(user, senha);
                if (gson != null){
                    return gson;
                }
                else {
                    //Usuario ou senha incorretos
                    return null;
                }
            });

            post("/cadastro", (request, response) -> {

                SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");

                String nome = request.queryParams("nome");
                String email = request.queryParams("email");
                String senha = request.queryParams("senha");

                String nasc = request.queryParams("nasc");
                Date dataFormatada = formato.parse(nasc);

                // int nivel = Integer.parseInt(request.queryParams("nivel"));

                try{
                    usuarioDAO.inserirUsuario(new Usuario(-1, nome, 1, email, senha, dataFormatada));
                    return true;
                }
                catch (Exception e){
                    return e.getMessage();
                }
            });
        });
    }
}