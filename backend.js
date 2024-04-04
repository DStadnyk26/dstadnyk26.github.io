let running = false;

export let userInfo = {
    
    bunker: {
        owned: false,
        product: 0,
        productMax: 100,
        research: 0,
        researchMax: 0,
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
    
    
}

function bunkerUpdate() {
    let path = userInfo.bunker;
    
    if(running == true) {
        if(path.owned == true) {
            if(path.supplies > 0) {
                if(path.producing.product == true && path.producing.research == true) {
                    if(path.product < path.productMax && path.research < path.researchMax) {
                        path.product += 1;
                        path.research += 1;
                        path.supplies -= 2;
                    } else if(path.product < path.productMax && path.research !< path.researchMax) {
                        path.product += 1;
                        path.supplies -= 1;
                    } else if(path.product !< path.productMax && path.research < path.researchMax) {
                        path.research += 1;
                        path.supplies -= 1;
                    }
                } else if(path.producing.product == true && path.producing.research == false) {
                    if(path.product < path.productMax) {
                        path.product += 1;
                        path.supplies -= 1;
                    }
                } else if(path.producing.product == false && path.producing.research == true) {
                    if(path.research < path.researchMax) {
                        path.research += 1;
                        path.supplies -= 1;
                    }
                }
            }
            
            userInfo.bunker = path;
        }
    }
}

const bunkerTick = setInterval(bunkerUpdate, 5 * 60 * 100);