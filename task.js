let auto = function() {
    let me = {};

    publicAPI();

    function getRequiredLicenseCategory() {
        return 'B';
    }

    function publicAPI() {
        me.maxSpeed = 100;
        me.speed = 0;
        me.speedUnit = 'km/h';
        me.getSpeed = function() {
            return me.speed;
        };
        me.setSpeed = function(_speed) {
            me.speed = _speed;
        };
        me.turnEngineOn = function() {
            me.isEngineOn = true;
        };
        me.turnEngineOff = function() {
            me.isEngineOn = false;
        };
        me.isEngineOn = false;
        me.pressKlaxon = function() {
            console.log('Beeeep');
        };
    }
    return me;
};

let cabriolet = function() {
    let me = auto();

    publicAPI();

    function publicAPI() {
        me.roofCollapsed = false;
        me.collapseRoof = function() {
            me.roofCollapsed = true;
        }
        me.raiseRoof = function() {
            me.roofCollapsed = false;
        }
        me.setSpeed = function(_speed) {
            me.speed = _speed;
        }

        me.speedUnit = 'mph';
        me.pressKlaxon = function() {
            console.log('New Beeeeeeep');
        }
    }

    return me;
}

let c = cabriolet();

console.log(c);
c.pressKlaxon();