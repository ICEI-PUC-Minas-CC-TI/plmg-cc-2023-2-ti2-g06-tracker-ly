package app;

import static spark.Spark.*;

import java.text.SimpleDateFormat;
import service.UsuarioService;
import com.google.gson.Gson;
import dao.UsuarioDAO;
import objetos.Usuario;
import java.util.Date;
import service.HabitoService;

public class Aplicacao {

    private static UsuarioDAO usuarioDAO = new UsuarioDAO();
    private static UsuarioService usuarioService = new UsuarioService();
    private static HabitoService HabitoService = new HabitoService();

    public static void main(String[] args) {
        get("/login", (request, response) -> usuarioService.login(request, response));

        //http://localhost:4567/cadastro/?user=bibs&senha=bibss&nome=Bibs&email=bibs@gmail.com&nasc=2000-01

        post("/cadastro", (request, response) -> usuarioService.cadastro(request, response));

        //http://localhost:4567/habitocadastro/?nome=bibshabituada&descr=habito+de+bibs&freq=1&hora=12:00
        post("/habitocadastro", (request, response) -> HabitoService.cadastro(request, response));
    }
}
