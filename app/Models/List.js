export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        console.log('BOOM you got a list')
        this.name = data.name
        this.items = data.items || []
        
    }

    //This function creates the template for the tasks that are created by the user.
getTemplate(index){
    let template= `
    <div class ="col-4">
    <h1>${this.name}</h1>
    <ul>
    `
    template += this.drawItems(index)
    template+=`
    </ul>
      <form onsubmit="app.controllers.listController.addItem(event, ${index})">
                    <div class="form-group">
                        <label for="items">Task Items</label>
                        <input type="text" class="form-control" aria-describedby="items" id="items"
                            placeholder="Enter Item" required>
                    </div>
                    <button type="submit" class="btn btn-primary" >+</button>
                </form>
                <div>
                <button type=button onclick="app.controllers.listController. deleteList(${index})">X</button> 
                </div>`
    
    return template
}
 drawItems(listIndex){
 let itemTemplate=''
 this.items.forEach((i, itemIndex) => {
     itemTemplate += `<li>${i}<span onclick="app.controllers.listController.deleteItem(${listindex}, ${itemindex})">X</span></li>
     `
 });

 return itemTemplate
 }
}