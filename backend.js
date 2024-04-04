let running = false;

let cashSpeed = 1 * 60 * 1000);
let forgerySpeed = 1 * 60 * 1000);
let weedSpeed = 1 * 60 * 1000);
let methSpeed = 1 * 60 * 1000);
let cokeSpeed = 1 * 60 * 1000);
let acidSpeed = 1 * 60 * 1000);
let bunkerSpeed = 5 * 60 * 1000);

export let userInfo = {
    
    bunker: {
        owned: false,
        product: 0,
        productMax: 100,
        research: 0,
        researchMax: 60,
        supplies: 0,
        suppliesMax: 100,
        upgrades: {
            equipment: false,
            staff: false,
            security: false,
        },
        producing: {
            product: true,
            research: false,
        },
    },
    
    cash: {
        owned: false,
        product: 0,
        productMax: 20,
        supplies: 0,
        suppliesMax: 100,
        upgrades: {
            equipment: false,
            staff: false,
            security: false,
        },
    },
    
    forgery: {
        owned: false,
        product: 0,
        productMax: 50,
        supplies: 0,
        suppliesMax: 100,
        upgrades: {
            equipment: false,
            staff: false,
            security: false,
        },
    },
    
    weed: {
        owned: false,
        product: 0,
        productMax: 36,
        supplies: 0,
        suppliesMax: 100,
        upgrades: {
            equipment: false,
            staff: false,
            security: false,
        },
    },
    
    meth: {
        owned: false,
        product: 0,
        productMax: 8,
        supplies: 0,
        suppliesMax: 100,
        upgrades: {
            equipment: false,
            staff: false,
            security: false,
        },
    },
    
    coke: {
        owned: false,
        product: 0,
        productMax: 4,
        supplies: 0,
        suppliesMax: 100,
        upgrades: {
            equipment: false,
            staff: false,
            security: false,
        },
    },
}
function bikerUpdate(const path) {
    if (!running || path.owned || path.supplies <= 0 || path.product == path.productMax) return;
    
    path.product ++;
    path.supplies --;
    
}

function bunkerUpdate() {
    if (!running || !userInfo.bunker.owned || userInfo.bunker.supplies <= 0) return;

    const path = userInfo.bunker;

    if (path.producing.product && path.producing.research) {
        if (path.product < path.productMax && path.research < path.researchMax) {
            path.product++;
            path.research++;
            path.supplies -= 2;
        } else if (path.product < path.productMax) {
            path.product++;
            path.supplies--;
        } else if (path.research < path.researchMax) {
            path.research++;
            path.supplies--;
        }
    } else if (path.producing.product) {
        if (path.product < path.productMax) {
            path.product++;
            path.supplies--;
        }
    } else if (path.producing.research) {
        if (path.research < path.researchMax) {
            path.research++;
            path.supplies--;
        }
    }
}

const cashTick = setInterval(bikerUpdate, cashSpeed);
const forgeryTick = setInterval(bikerUpdate, forgerySpeed);
const weedTick = setInterval(bikerUpdate, weedSpeed);
const methTick = setInterval(bikerUpdate, methSpeed);
const cokeTick = setInterval(bikerUpdate, cokeSpeed);
const acidTick = setInterval(bikerUpdate, acidSpeed);
const bunkerTick = setInterval(bunkerUpdate, bunkerSpeed);