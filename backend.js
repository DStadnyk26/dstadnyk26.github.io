let running = false;

let cashSpeed = 12 * 60 * 1000);
let cashDrain = 1.6 * 60 * 100);

let forgerySpeed = 5 * 60 * 1000);
let forgeryDrain = 1.5 * 60 * 1000);

let weedSpeed = 6 * 60 * 1000);
let weedDrain = 2 * 60 * 1000);

let methSpeed = 30 * 60 * 1000);
let methDrain = 1.5 * 60 * 1000)

let cokeSpeed = 50 * 60 * 1000);
let cokeDrain = 1.2 * 60 * 1000);

let acidSpeed = 1 * 60 * 1000);

let bunkerSpeed = 10 * 60 * 1000);

export let userInfo = {
    
    bunker: {
        owned: false,
        product: 0,
        productMax: 100,
        research: 0,
        researchMax: 60,
        supplies: 0,
        suppliesMax: 100,
        suppliesPerProduct: 1,
        suppliesPerResearch: 1,
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
        suppliesPerProduct: 1,
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
        suppliesPerProduct: 1,
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
        suppliesPerProduct: 1,
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
        suppliesPerProduct: 1,
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
        suppliesPerProduct: 24,
        upgrades: {
            equipment: false,
            staff: false,
            security: false,
        },
    },
}

function cashProduce() {
    const x = userInfo.cash;
    if(!running || !x.owned || x.supplies <= 0 || x.product >= x.productMax) return;
    x.product ++;
}

function cashConsume() {
    const x = userInfo.cash;
    if(!running || !x.owned || x.supplies <= 0 || x.product >= x.productMax) return;
}

function cashSell() {
    const x = userInfo.cash;
    x.product = 0;
}

function cashSupply() {
    const x = userInfo.cash;
    x.supplies = x.suppliesMax
}

function cashUpdate() {
    const x = userInfo.cash;
    
    //Production Rate
    if(x.upgrades.equipment && x.upgrades.staff) {
        cashSpeed = 8 * 60 * 1000;
    } else if (x.upgrades.equipment) {
        cashSpeed = 10 * 60 * 1000;
    } else if (x.uogrades.staff) {
        cashSpeed = 10 * 60 * 1000;
    }
        
}

function forgeryProduce() {
    const x = userInfo.forgery;
    if(!running || !x.owned || x.supplies <= 0 || x.product >= x.productMax) return;
    x.product ++;
}

function forgeryConsume() {
    const x = userInfo.forgery;
    if(!running || x.owned || x.supplies <= 0 || x.product >= x.productMax) return;
}

function forgerySell() {
    const x = userInfo.forgery;
    x.product = 0;
}

function forgerySupply() {
    const x = userInfo.forgery;
    x.supplies = x.suppliesMax
}

function forgeryUpdate() {
    const x = userInfo.forgery;
    
    //Production Rate
    if(x.upgrades.equipment && x.upgrades.staff) {
        forgerySpeed = 3 * 60 * 1000;
    } else if (x.upgrades.equipment) {
        forgerySpeed = 4 * 60 * 1000;
    } else if (x.uogrades.staff) {
        forgerySpeed = 4 * 60 * 1000;
    }
        
}

function bikerUpdate(const path) {
    if (!running || !path.owned || path.supplies <= 0 || path.product == path.productMax) return;
    
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