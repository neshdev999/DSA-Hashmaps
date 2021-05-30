const HashMap = require('./hashmapImplementation');
const deepEqual = require('deep-equal');



function main() {
    const lotr = new HashMap;

    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandalf');
    lotr.set('Human', 'Aragorn');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');
    lotr.set('Ent1', 'Treebeard');
    lotr.set('Ent2', 'Treebeard');
    lotr.set('Ent3', 'Treebeard');

    lotr.get('Hobbit')
    lotr.get('Maiar')

    console.log(lotr);
}

// HashMap {
//     length: 12,
//     _hashTable: [{ key: 'Ent2', value: 'Treebeard', DELETED: false },
//         { key: 'Ent3', value: 'Treebeard', DELETED: false },
//         { key: 'HalfElven', value: 'Arwen', DELETED: false },
//         { key: '', value: '', DELETED: false },
//         { key: 'LadyOfLight', value: 'Galadriel', DELETED: false },
//         { key: '', value: '', DELETED: false },
//         { key: 'Wizard', value: 'Gandalf', DELETED: false },
//         { key: 'RingBearer', value: 'Gollum', DELETED: false },
//         { key: '', value: '', DELETED: false },
//         { key: '', value: '', DELETED: false },
//         { key: '', value: '', DELETED: false },
//         { key: '', value: '', DELETED: false },
//         { key: 'Elf', value: 'Legolas', DELETED: false },
//         { key: 'Hobbit', value: 'Frodo', DELETED: false },
//         { key: '', value: '', DELETED: false },
//         { key: '', value: '', DELETED: false },
//         { key: '', value: '', DELETED: false },
//         { key: '', value: '', DELETED: false },
//         { key: '', value: '', DELETED: false },
//         { key: '', value: '', DELETED: false },
//         { key: 'Ent', value: 'Treebeard', DELETED: false },
//         { key: 'Ent1', value: 'Treebeard', DELETED: false },
//         { key: 'Human', value: 'Aragorn', DELETED: false },
//         { key: 'Maiar', value: 'Sauron', DELETED: false }
//     ],
//     _capacity: 24,
//     _deleted: 0,
//     MAX_LOAD_RATIO: 0.5,
//     SIZE_RATIO: 3
// }