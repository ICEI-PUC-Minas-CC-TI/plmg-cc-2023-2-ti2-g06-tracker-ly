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
        int id = Integer.parseInt(request.queryParams("perfil_id"));

        // String nasc = request.queryParams("nasc");
        // Date dataFormatada = formato.parse(nasc);
        // int nivel = Integer.parseInt(request.queryParams("nivel"));

        try{
            habito.inserirHabito(new Habito(-1, nome, descr, freq, hora, id));
            return true;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }

    public String listar(Request request, Response response){
        int id = Integer.parseInt(request.queryParams("perfil_id"));
        Gson gson = new Gson();
        try{
            return gson.toJson(habito.getHabito(id));
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return gson.toJson(null);
        }
    }

    public boolean delete(Request request, Response response){
        int id = Integer.parseInt(request.queryParams("id"));
        try{
            habito.deletarHabito(id);
            return true;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }

    public boolean editar(Request request, Response response){
        System.out.println(1);
        int id = Integer.parseInt(request.queryParams("id"));
        String nome = request.queryParams("nome");
        String descr = request.queryParams("descr");
        int freq = Integer.parseInt(request.queryParams("freq"));
        String hora = request.queryParams("hora");
        int perfil_id = Integer.parseInt(request.queryParams("perfil_id"));


        System.out.println(1);
        try{
            System.out.println(2);
            habito.editarHabito(new Habito(id, nome, descr, freq, hora, perfil_id));
            System.out.println(3);
            return true;
        }
        catch (Exception e){
            System.out.println(4);
            System.out.println(e.getMessage());
            System.out.println(5);
            return false;
        }
    }
}