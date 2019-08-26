import List from "../Models/List.js";

//Private
let _state = {
    lists: []
}


//Public
export default class ValuesService {
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?
    constructor() {
        console.log('hey from service')
        this.getLists()
    }

    deleteItem(listindex, itemindex) {
        _state.lists[listindex].item.splice(itemindex, 1)

        this.saveLists()
    }

    addItem(newitem, listindex) {
        _state.lists[listindex].item.push(newitem)

        this.saveLists()
    }

    deleteList(index) {
        _state.lists.splice(index, 1)
        this.saveLists()
    }

    addList(newlist) {
        _state.lists.push(new List(newlist))

        this.saveLists()
        console.log(_state.lists)
    }

    get Lists() {
        return _state.lists.map(list => new List(list))
    }

    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}

//NOTE Example
// export default class PizzaService {
//     addTopping(newTopping, pizzaIndex) {
//         _state.pizzas[pizzaIndex].toppings.push(newTopping)
//         this.savePizzas()
//     }
//     addPizza(newPizza) {
//         _state.pizzas.push(new Pizza(newPizza))
//         this.savePizzas()
//         console.log(_state.pizzas)
//     }
//     constructor() {
//         console.log("Howdy from pizza service........")
//         this.loadPizzas()

//     }
//     get Pizza() {
//         return _state.pizzas.map(pizza => new Pizza(pizza))
//     }
