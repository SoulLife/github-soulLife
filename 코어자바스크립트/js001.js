window.onload = function () {    
    var outer = function(){
        var a = 1;
        var inner = function(){
            return ++a;
        };
        return inner;
    } 
    var outer2 = outer();
    console.log(outer2());//2
    console.log(outer2());//3

    var car = {
        fuel: Math.ceil(Math.random() * 10 + 10), //연료(L)
        power: Math.ceil(Math.random() * 3 + 2),//연비(Km/L)
        moved: 0, // 총 이동거리
        run:function()
        {
            var km = Math.ceil(Math.random() * 6);
            var wasteFuel = km / this.power;
            if(this.fuel < wasteFuel)
            {
                console.log("이동불가");
                return;
            }
            this.fuel -= wasteFuel;
            this.moved += km;
            console.log("%d km 이동 (총 %dkm)",km,this.moved);
        }
    };
    //이렇게 객체로 만들어서 만들게되면 맘대로 연료및 주행거리등을 조작할수있다. 그래서 클로저를 이용 내부의값은 숨기고 공개할 값만 클로저로 호출 
    var createCar = function()
    {
        var publicMembers = {
            fuel:Math.ceil(Math.random() * 10 + 10),
            power:Math.ceil(Math.random() * 3 + 2),
            moved: 0
        };
        Object.freeze(publicMembers);
        return {
            get moved()
            {
                return moved;
            },
            run: function()
            {
                var km = Math.ceil(Math.random() * 6);
                var wasteFuel = km / this.publicMembers.power;
                if(this.publicMembers.fuel < wasteFuel)
                {
                    console.log("이동불가");
                    return;
                }
                this.publicMembers.fuel -= wasteFuel;
                this.publicMembers.moved += km;
                console.log("%d km 이동 (총 %dkm)",km,moved);                
            }
        };
    };
    car = createCar();
    car.run();
    console.log(car.moved);
    console.log(car.publicMembers.fuel);
    console.log(car.publicMembers.power);
    car.publicMembers.fuel = 1000;
    console.log(car.fuel);

};
