function showRating (num) {
    let rating = ''
    for (i = 1; i <= Math.floor(num); ++i) {
        Math.floor(num) > i ? rating += '* ' : rating += '*'
    }
    if (!Number.isInteger(num)) {
        rating += ' .'
    }
    return rating
}

console.log(showRating(3))
console.log(showRating(4.5))
console.log(showRating(.5))

function sortLowToHigh (array) {
    return array.sort((a, b) => a - b)
}

console.log(sortLowToHigh([20, 20, 10, 30, 50, 10]))
console.log(sortLowToHigh([5, 10 , 0, -5]))
console.log(sortLowToHigh([2, 2, 1, 0]))

function sortHighToLow(array) {
    return array.sort((a, b) => b.price - a.price)
}

console.log(
    sortHighToLow([
        { id: 1, price: 50},
        { id: 2, price: 30},
        { id: 3, price: 60},
        { id: 4, price: 10},
    ])
)

async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await promise.json()
    const posts = result.filter(element => element.userId === userId)

    console.log(posts)
}

postsByUser(4)

async function incompleteToDo(completed) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await promise.json()
    const toDo = result.filter(element => element.completed === false).slice(0, 6)

    console.log(toDo)
}

incompleteToDo (false)