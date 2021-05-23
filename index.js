function findMatching(drivers, string){
    const newMatching = drivers.filter(function(driver){
        return driver.toUpperCase() === string.toUpperCase()
    })
    return newMatching
} 

function fuzzyMatch(drivers, string){
    const newMatching = drivers.filter(function(driver){
        if (driver[0].toUpperCase() === string[0].toUpperCase())
        return driver
    })
    return newMatching
}

function matchName(drivers, string){
    const newMatching = drivers.filter(function(driver){
        if (driver.name === string )
        return driver.hometown
    })  
    return newMatching  
}