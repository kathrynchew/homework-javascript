"use strict";

// Our customers are going to buy lots of melons!

let melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba'];

function countMelons(melonsToAdd) {
    // Takes in an array and returns a map with melon counts
    let melonCounts = new Map();

    for (let melon of melonsToAdd) {
        // console.log(melon);
        if (melonCounts.has(melon)) {
            // let melonNum = melonCounts.get(melon);
            melonCounts.set(melon, melonCounts.get(melon) + 1 );
            // console.log("I have this melon!");
        }
        else {
            melonCounts.set(melon, 1);
            // console.log("New melon, bro");
        }
    }
    return melonCounts;
}

console.log(countMelons(melonsToAdd));
