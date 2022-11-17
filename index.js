// // Code your solutions in this file
// // for (let age=30; age<40; age++){
// //     console.log(`I'm ${age} years old. Happy birthday to me!`);
// // }
// const gifts = ['teddy bear', 'drone', 'doll']
// function wrapGifts(gifts){
//     for(let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//     }
//     return gifts;
// }
// wrapGifts(gifts);
function writeCards(name, eventName){
    const messageArray = [];
    for(let i=0; i< name.length; i++){
        // const msg = console.log('thankyou ' + [name[i]] + ' ' + eventName)
        const msg = `Thank you, ${name[i]}, for the wonderful ${eventName} gift!`;
        messageArray.push(msg);
    }
    return messageArray;
};
//  writeCards(['Charlie', 'Samip'], 'business');
function countDown(positiveInteger){
    while(positiveInteger >= 0){
        console.log(positiveInteger);
        positiveInteger--;
        debugger;
    }
    return positiveInteger;
}
// countDown(10);


