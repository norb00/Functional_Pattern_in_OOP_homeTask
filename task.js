let auto = function() {
    let me = {};

    publicAPI();

    //static method
    function getRequiredLicenseCategory() {
        return 'B';
    }

    function publicAPI() {
        //default values for AUTO
        me.maxSpeed = 100;
        me.speed = 0;
        me.speedUnit = 'km/h';
        me.getSpeed = function () {
            return me.speed;
        };
        me.setSpeed = function (_speed) {
            me.speed = _speed;
        };
        me.turnEngineOn = function () {
            me.isEngineOn = true;
        };
        me.turnEngineOff = function () {
            me.isEngineOn = false;
        };
        me.isEngineOn = false;
        me.pressKlaxon = function () {
            console.log('Beeeep');
        };
    }
    return me;
};

let cabriolet = function () {
    let me = auto();

    publicAPI();

    function publicAPI() {
        //extend AUTO class with some extra properties
        me.roofCollapsed = false;
        me.collapseRoof = function () {
            me.roofCollapsed = true;
        }
        me.raiseRoof = function () {
            me.roofCollapsed = false;
        }
        me.setSpeed = function (_speed) {
            me.speed = _speed;
        }

        //overriding default values in auto class
        me.speedUnit = 'mph';
        me.maxSpeed = 150;
        me.pressKlaxon = function () {
            console.log('Fancy Beeeeeeep');
        }
    }

    return me;
}

//create instances
let a = auto();
let c = cabriolet();

console.log(a);
console.log('auto Klaxon: ');
a.pressKlaxon();

console.log(c);
console.log('cabriolet Klaxon: ');
c.pressKlaxon();