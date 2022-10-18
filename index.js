class Mascota {
    constructor(nombre, dueña, raza, edad, actividades, comida, visitaAlVete, vacunas) {
        this.nombre = nombre;
        this.dueña = dueña;
        this.raza = raza;
        this.edad = edad;
        this.actividades = actividades;
        this.comida = comida;
        this.visitaAlVete = visitaAlVete;
        this.vacunas = vacunas;
    }

    get infoMascota() {
        return `La mascota de ${this.dueña} se llama ${this.nombre} y es un ${this.raza}, tiene ${this.edad} años y su actividades favoritas son ${this.actividades}, su alimento favorito es ${this.comida}. ${this.visitaAlVete} para visitar a su vete nuevamente y tiene ${this.vacunas} su calendario de vacunacion`
    }
};

let mascota1 = new Mascota("China", "Gisele", "gato", 2, ["Araña cartón", "Come demasiado", "Se trepa al alambrado del balcón", "Juega con todo lo que ruede", "Duerme con todos", "Da besos", "Rompe cartón con sus dientes"], "iams", "faltan 2 meses", "incompleto");


document.write(mascota1.infoMascota);