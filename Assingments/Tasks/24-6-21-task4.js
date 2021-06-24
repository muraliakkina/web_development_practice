class UBer{
    constructor(distanceinKM,fareperKM){ 
        this.distanceinKM = distanceinKM;
        this.fareperKM = fareperKM 
    }
    calculation(){
        console.log('The Price for the Trip is'+' ' + this.distanceinKM*this.fareperKM);
    }
}
var price = new UBer(10,4);
price.calculation()
