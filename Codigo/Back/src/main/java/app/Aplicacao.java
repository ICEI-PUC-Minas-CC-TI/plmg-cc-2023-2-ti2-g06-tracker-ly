package app;

import static spark.Spark.*;

import java.text.SimpleDateFormat;
import service.UsuarioService;
import com.google.gson.Gson;
import dao.UsuarioDAO;
import objetos.Usuario;
import java.util.Date;
import service.HabitoService;
import service.PostService;
import service.SegueService;

public class Aplicacao {

    private static UsuarioDAO usuarioDAO = new UsuarioDAO();
    private static UsuarioService usuarioService = new UsuarioService();
    private static HabitoService HabitoService = new HabitoService();
    private static PostService PostService = new PostService();
    private static SegueService SegueService = new SegueService();

    public static void main(String[] args) {
        // Configuração de CORS para permitir conexão com o front-end hospedado em outra
        // porta/servidor
        port(3001);
        options("/*",
                (request, response) -> {

                    String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");

                    if (accessControlRequestHeaders != null) {
                        response.header("Access-Control-Allow-Headers",accessControlRequestHeaders);
                    }

                    String accessControlRequestMethod = request.headers("Access-Control-Request-Method");

                    if (accessControlRequestMethod != null) {
                        response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
                    }

                    return "OK";
                });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        // * USUARIO ---------------------------------------------------------------------------

        path("/Presentation",()->{
            // [OK] http://localhost:4567/Presentation/login?email=${email}&senha=${password}
            post("/login", (request, response) -> usuarioService.login(request, response));

            // [OK] http://localhost:4567/Presentation/cadastro?user={data.user}&senha=bibss&nome=Bibs&email=bibs@gmail.com&nasc=2000-0101
            post("/cadastro", (request, response) -> usuarioService.cadastro(request, response));
        });

        
        // * HABITO ---------------------------------------------------------------------------

        // http://localhost:4567/habitoseditar?id=4&nome=bibshabituada&descr=teste&freq=1&hora=13:00&user_id=7
        post("/habitocadastro", (request, response) -> HabitoService.cadastro(request, response));

        // [OK] http://localhost:4567/habitoslistar?user_id=7
        get("/habitoslistar", (request, response) -> HabitoService.listar(request, response));

        // http://localhost:4567/habitosdelete?id=3
        delete("/habitosdelete", (request, response) -> HabitoService.delete(request, response));

        // http://localhost:4567/habitoseditar?id=4&nome=bibshabituada&descr=teste&freq=1&hora=13:00&user_id=7
        put("/habitoseditar", (request, response) -> HabitoService.editar(request, response));


        // * POSTS ---------------------------------------------------------------------------

        //http://localhost:4567/postcadastro?descricao=teste&foto=123&habito_id=1&user_id=7
        post("/postcadastro", (request, response) -> PostService.cadastro(request, response));

        // http://localhost:4567/postdelete?id=1
        delete("/postdelete", (request, response) -> PostService.delete(request, response));

        //http://localhost:4567/posteditar?id=1&descricao=teste&foto=teste&habito_id=1&user_id=7
        put("/posteditar", (request, response) -> PostService.editar(request, response));


        // * SEGUIR ---------------------------------------------------------------------------

        //http://localhost:4567/seguircadastro?segue_id=7&seguido_id=8
        post("/seguircadastro", (request, response) -> SegueService.seguir(request, response));

        //http://localhost:4567/seguirdelete?segue_id=7&seguido_id=8
        delete("/seguirdelete", (request, response) -> SegueService.deixarDeSeguir(request, response));
    }

    //mudar o banco de dados --> problema novo
}
        //http://localhost:4567/Presentation/login?email=${data.email}&senha=${data.password}
        //http://localhost:4567/Presentation/cadastro?user=bibs&senha=bibss&nome=Bibs&email=bibs@gmail.com&nasc=2000-0101
        //http://localhost:4567/habitocadastro?nome=bibshabituada&descr=habito+de+bibs&freq=1&hora=12:00&user_id=1
