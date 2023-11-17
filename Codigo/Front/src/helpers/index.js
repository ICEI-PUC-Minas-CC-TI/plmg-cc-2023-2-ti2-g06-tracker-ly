// formata string de freq, do bd
export const parseFreq = (freq) => {
  
  const splitFreq = freq.split(",");

  const resp = splitFreq.map((dia) => {
    switch (dia) {
      case "seg":
        return "Segundas ";
        break;
      case "ter":
        return "Terças ";
        break;
      case "qua":
        return "Quartas ";
        break;
      case "qui":
        return "Quintas ";
        break;
      case "sex":
        return "Sextas ";
        break;
      case "sab":
        return "Sábados ";
        break;
      case "dom":
        return "Domingos ";
        break;
      case "smp":
        return "Todos os dias";
        break;
      default:
        return "";
    }
  });

  return resp;
};