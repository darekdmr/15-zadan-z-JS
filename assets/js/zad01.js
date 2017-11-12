function jakiDzien() {
    var dzienTygodnia = ["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"];
    var d = new Date();
    x = d.getDay();
    //    x = 0; //Niedziela
    return dzienTygodnia[x];
}