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
        // Configuração de CORS para permitir conexão com o front-end hospedado em outra
        // porta/servidor
        options("/*",
                (request, response) -> {

                    String accessControlRequestHeaders = request
                            .headers("Access-Control-Request-Headers");
                    if (accessControlRequestHeaders != null) {
                        response.header("Access-Control-Allow-Headers",
                                accessControlRequestHeaders);
                    }

                    String accessControlRequestMethod = request
                            .headers("Access-Control-Request-Method");
                    if (accessControlRequestMethod != null) {
                        response.header("Access-Control-Allow-Methods",
                                accessControlRequestMethod);
                    }

                    return "OK";
                });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));
    
        path("/Presentation",()->{
            //login de usuario
            post("/login", (request, response) -> usuarioService.login(request, response));
            //cadastro de usuario
            post("/cadastro", (request, response) -> usuarioService.cadastro(request, response));
        });
        
        post("/habitocadastro", (request, response) -> HabitoService.cadastro(request, response));

        //http://localhost:4567/habitoslistar?perfil_id=7
        get("/habitoslistar", (request, response) -> HabitoService.listar(request, response));

    }
}
        //http://localhost:4567/Presentation/login?email=${data.email}&senha=${data.password}
        //http://localhost:4567/Presentation/cadastro?user=bibs&senha=bibss&nome=Bibs&email=bibs@gmail.com&nasc=2000-0101

        //http://localhost:4567/habitocadastro?nome=bibshabituada&descr=habito+de+bibs&freq=1&hora=12:00&perfil_id=1