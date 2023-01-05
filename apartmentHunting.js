function nearestBlock(element, index) {
    let minSteps = -1;
    if(blocksDetails[index][element]) return 0;
    if(index > 0){
        for(let j = index - 1; j >= 0; j--){
            if(blocksDetails[j][element]){
                minSteps = index - j;
                break;
            }
        }
    }
    for(let j2 = index + 1 ; j2 < blocksDetails.length; j2++ ){
        if(blocksDetails[j2][element]){
            return((minSteps <= (j2 - index) && minSteps !== -1) ? minSteps : (j2 - index))
        }   
    }
    return minSteps;
}

function apartmentHunting(blocks, reqs) {
    let finalSteps = -1;
    let finalIndex = -1;
    for(let i=0; i < blocksDetails.length; i++){
        let localSteps = -1;
        requirements.forEach(element => {
            let stepsCount = nearestBlock(element, i);
            if( localSteps === -1 || localSteps < stepsCount){
                localSteps = stepsCount
            }
        })
        
        if(finalSteps === -1 || finalSteps > localSteps){
            finalSteps = localSteps;
            finalIndex = i;
        }
    }

    return finalIndex
}
exports.apartmentHunting = apartmentHunting;