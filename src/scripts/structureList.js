let structureList=[
    {
        id: "sheep",
        requiring : "wheat",
        earning : 20,
        startX : 1,
        startY : 2,
        sizeX : 2,
        sizeY : 1,
        willAddContent : false,
        canBeBoughtFromShop :false,
    },
    {
        id : "cow",
        requiring : "corn",
        earning :30,
        startX : 3,
        startY : 2,
        sizeX : 2,
        sizeY : 1,
        willAddContent : true,
        contentAdded : 'milk',
        canBeBoughtFromShop : true,
    },
    {
        id : "chicken",
        requiring : "fiber",
        earning : 50,
        startX : 5,
        startY : 2,
        sizeX : 1,
        sizeY : 1,
        willAddContent : true,
        contentAdded : 'largeEgg',
        canBeBoughtFromShop : true,
    },
    {
        id : "rabbit",
        requiring : "radish",
        earing : 60,
        startX : 7,
        startY : 1,
        willAddContent : false,
        canBeBoughtFromShop : true,
    },
    {
        id : "pig",
        requiring : "apple",
        earing : 80,
        startX : 9,
        startY : 1,
        willAddContent : ture,
        contentAdded : 'truffle',
        canBeBoughtFromShop : true,
    },
    {
        id : "mayonnaiseMachine",
        requiring : "largeEgg",
        earning: 55,
        startX: 1,
        startY: 5,
        willAddContent: true,
        contentAdded : 'mayonnaise',
        canBeBoughtFromShop : true, 
    },
    {
        id : "loom",
        requiring : 'wool',
        earning : 60,
        startX : 2,
        startY : 5,
        willAddContent : true,
        contentAdded : 'cloth',
        canBeBoughtFromShop : true,
    },
    {
        id : "smileEggPress" ,
        requiring : "smile",
        earning : 80,
        startX ：3,
        startY : 5,
        willAddContent : true,
        contentAddes : 'smile',
        canBeBoughtFromShop : true,
    }
    

];
export{structureList}
