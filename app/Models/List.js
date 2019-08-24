export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        console.log('BOOM you got a list')
        this.name = data.name
        this.item = data.item || []

    }

    //This function creates the template for the tasks that are created by the user.
    getTemplate(index) {
        let template = `
    <div class="col-12 col-md-4"><br>
<div class="row">
<div class ="col-12 tasky">
<h1>${this.name} <button class='deletestyle' type=button onclick="app.controllers.listController. deleteList(${index})">Remove</button> </h1>
<ul>
`
        template += this.drawItems(index)
        template += `
</ul>
      <form onsubmit="app.controllers.listController.addItem(event, ${index})">
      <div class="form-group">
         <label for="item">Task Items</label>
        <input type="text" class="form-control"
        name="item"
                           
         placeholder="Enter Item" required>
                    </div>
                    <button type="submit" class="btn btn-primary" >Add Note</button>
                </form>
                
                </div></div></div>
                `

        return template
    }
    drawItems(listindex) {
        let itemTemplate = ''
        this.item.forEach((i, itemindex) => {
            itemTemplate += `<li class="text-left">${i}   <span class="deletestyle" onclick="app.controllers.listController.deleteItem(${listindex}, ${itemindex})">  x</span></li>
     `
        });

        return itemTemplate
    }
}


