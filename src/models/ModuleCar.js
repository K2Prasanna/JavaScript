export class ModuleCar
{
    constructor(id)
    {
        this.carId = id;
    }

    runCar(speed)
    {
        console.log('Module Car: Running car at ' + speed);
    }

    startCar(speed)
    {
        console.log('Module Car: Reaching the initial speed ' + speed);
    }


};