import static spark.Spark.*;

import com.google.gson.Gson;

public class TesteSpark {
    public static void main(String[] args) {
        path("/teste", () -> {
            get("/hello", (req, res) -> "Sexo infinito");
            post("/", (request, response) -> {
                String user = request.queryParams("user");
                System.out.println(user);
                String senha = request.queryParams("senha");
                System.out.println(senha);
                return 0;
            });
        });
    }
}
