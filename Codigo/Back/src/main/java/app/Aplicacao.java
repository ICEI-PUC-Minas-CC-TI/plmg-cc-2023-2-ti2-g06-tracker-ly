package app;

import static spark.Spark.*;

import java.text.SimpleDateFormat;
import service.UsuarioService;
import com.google.gson.Gson;
import dao.UsuarioDAO;
import objetos.Usuario;
import java.util.Date;

public class Aplicacao {

    private static UsuarioDAO usuarioDAO = new UsuarioDAO();
    private static UsuarioService usuarioService = new UsuarioService();

    public static void main(String[] args) {
        get("/login", (request, response) -> usuarioService.login(request, response));

        // //http://localhost:4567/cadastro/?user=bibs&senha=bibs_eh_absurda&nome=Bibs&nasc=2000-01
        post("/cadastro", (request, response) -> usuarioService.cadastro(request, response));


    }
}

//