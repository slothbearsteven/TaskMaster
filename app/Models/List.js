export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        console.log('BOOM you got a list')
        this.name = data.name
        this.item = data.item || []
        
    }

    //This function creates the template for the tasks that are created by the user.
getTemplate(index){
    let template= `
    <div class ="col-12 col-md-3 tasky">
    <h1>${this.name}</h1>
    <ul>
    `
    template += this.drawItems(index)
    template+=`
    </ul>
      <form onsubmit="app.controllers.listController.addItem(event, ${index})">
        <div class="form-group">
         <label for="item">Task Items</label>
        <input type="text" class="form-control"
         name="item"
                           
         placeholder="Enter Item" required>
                    </div>
                    <button type="submit" class="btn btn-primary" >+</button>
                </form>
                <button type=button onclick="app.controllers.listController. deleteList(${index})">X</button> `
    
    return template
}
 drawItems(listindex){
 let itemTemplate=''
 this.item.forEach((i, itemindex) => {
     itemTemplate += `<li>${i}<span onclick="app.controllers.listController.deleteItem(${listindex}, ${itemindex})">X</span></li>
     `
 });

 return itemTemplate
 }
}


// NOTE Example
//   drawToppings(pizzaIndex) {
//     let toppingTemplate = ""
//     this.toppings.forEach((t, toppingIndex) => {
//       toppingTemplate += `<li>${t}<span onclick="app.controllers.pizzaController.deleteTopping(${pizzaIndex}, ${toppingIndex})">X</span></li>`
//     });
//     return toppingTemplate