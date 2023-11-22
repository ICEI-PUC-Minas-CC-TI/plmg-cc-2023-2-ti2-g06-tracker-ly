package service;

import spark.Request;
import spark.Response;

import com.google.gson.Gson;

import dao.SegueDAO;
import dao.SeguindoDAO;
import dao.UsuarioDAO;
import objetos.Segue;
import objetos.Seguindo;

import java.util.Date;

public class SegueService {

    public class Resp{

        private String msg;

        public Resp(String msg){
            this.msg = msg;
        }
    }

    public SegueService(){};

    private static SegueDAO segueDAO = new SegueDAO();
    private static SeguindoDAO seguindoDAO = new SeguindoDAO();

    public Gson gson = new Gson();

    public String seguir(Request request, Response response){

        int segue_id = Integer.parseInt(request.queryParams("segue_id"));
        int seguido_id = Integer.parseInt(request.queryParams("seguido_id"));

        try{
            Segue segue = new Segue(segue_id, seguido_id);
            segueDAO.inserirSegue(segue);
            Seguindo seguindo = new Seguindo(seguido_id, segue_id);
            seguindoDAO.inserirSeguindo(seguindo);
            return gson.toJson(new Resp("Seguindo"));
        } catch (Exception e){
            System.out.println(e.getMessage());
        }
        return gson.toJson(new Resp("Erro"));
    }

    public String deixarDeSeguir(Request request, Response response){

        int segue_id = Integer.parseInt(request.queryParams("segue_id"));
        int seguido_id = Integer.parseInt(request.queryParams("seguido_id"));

        try{
            segueDAO.delete(new Segue(segue_id, seguido_id));
            seguindoDAO.delete(new Seguindo(seguido_id, segue_id));

            return gson.toJson(new Resp("Deixou de seguir"));
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
        return gson.toJson(new Resp("Erro"));
    }


}
