class Persoon {
    constructor(achternaam, voornaam) {
        this.achternaam = achternaam;
        this.voornaam = voornaam;
        this.talenkennis = [];
    }

    get fullName() {
        return this.achternaam + " " + this.voornaam;
    }

    get talen() {
        return this.talenkennis;
    }

    voegTaalToe(taal) {
        this.talenkennis.push(taal)
    }
}

