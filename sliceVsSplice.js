const friends = ["Beau", "Isabel", "Sean", "Franz", "Callie"]

//const slicedFriends = friends.slice(1,2)

const splicedFriends = friends.splice(1,2, "Connie")

console.log(/*"Sliced:", slicedFriends, '\n', */"Spliced:", splicedFriends, '\n', "Remaining Friends Obejct:", friends)
