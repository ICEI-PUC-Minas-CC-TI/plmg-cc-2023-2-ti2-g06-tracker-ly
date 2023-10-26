package service;

import static spark.Spark.*;
import spark.Request;
import spark.Response;
import java.text.SimpleDateFormat;

import com.google.gson.Gson;
import dao.HabitoDAO;
import objetos.Habito;
import java.util.Date;
import java.sql.Time;


public class HabitoService {

    public class Resp{
    private String msg;

    public Resp(String msg){
        Habito habito = new Habito();
        this.msg = msg;
        }
    }

    public HabitoService(){}

    private static HabitoDAO habito = new HabitoDAO();

    public Gson gson = new Gson();

    public boolean cadastro(Request request, Response response){
        // SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");

        String nome = request.queryParams("nome");
        String descr = request.queryParams("descr");
        int freq = Integer.parseInt(request.queryParams("freq"));
        String hora = request.queryParams("hora");

        //String nasc = request.queryParams("nasc");

        // Date dataFormatada = formato.parse(nasc);

        // int nivel = Integer.parseInt(request.queryParams("nivel"));

        try{
            habito.inserirHabito(new Habito(-1, nome, descr, freq, hora));
            return true;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }
}