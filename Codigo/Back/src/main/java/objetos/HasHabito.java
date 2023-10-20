package objetos;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class HasHabito {
    int frequencia;
    LocalDate last_update;
    int streak;
    int habito_id;
    int perfil_id;


    public HasHabito() {
    }

    public HasHabito(int frequencia, int streak, int habito_id, int perfil_id) {
        this.frequencia = frequencia;
        this.streak = streak;
        this.habito_id = habito_id;
        this.perfil_id = perfil_id;
        setLast_update();
    }


    public int getFrequencia() {
        return this.frequencia;
    }

    public void setFrequencia(int frequencia) {
        this.frequencia = frequencia;
    }

    public String getLast_update() { // aqui ele transforma a data e retorna uma string com ela
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String dataFormatada = this.last_update.format(formatter);
        return dataFormatada;
    }

    public void setLast_update() { // aqui ele seta a data do sistema operacional 
        LocalDate dataAtual = LocalDate.now();
        this.last_update = dataAtual;
    }

    public int getStreak() {
        return this.streak;
    }

    public void setStreak(int streak) {
        this.streak = streak;
    }

    public int getHabito_id() {
        return this.habito_id;
    }

    public void setHabito_id(int habito_id) {
        this.habito_id = habito_id;
    }

    public int getPerfil_id() {
        return this.perfil_id;
    }

    public void setPerfil_id(int perfil_id) {
        this.perfil_id = perfil_id;
    }


}
