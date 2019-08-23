import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
    let template = ``
    let lists = _listService.Lists
    lists.forEach((list, index) => {
        template += list.getTemplate(index)
    });
    document.getElementById('tasks').innerHTML = template
}


//Public
export default class ListController {
    constructor() {
        console.log('hey from controller')
        //NOTE: When the app first starts we want to pull any potential data out of memory
        _listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _drawLists();
    }

    addList(event) {
        event.preventDefault()
        let form = event.target
        let newlist = {
            name: form.name.value
        }
        _listService.addList(newlist)
        _drawLists()
    }

    addItem(event, listindex) {
        event.preventDefault()
        let form = event.target
        let newitem = form.items.value
        _listService.addItem(newitem, listindex)
        _drawLists()
    }

    deleteList(index) {
        _listService.deleteList(index)
        _drawLists()
    }

    deleteItem(listindex, itemindex) {
        _listService.deleteItem(listindex, itemindex)
        _drawLists()
    }
}
