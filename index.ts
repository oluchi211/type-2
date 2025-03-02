interface TodoItem{
    id:number;
    task: string;
    completed: boolean;
    createdat: Date;
}
 class Todolist{
    private todos: TodoItem[]=[];
    private idcounter: number = 1;


    addTodo(task:string, createdat:Date):void{
        this.todos.push({id: this.idcounter++, task, completed:false, createdat});
        console.log(`Added: ${task} (createdat:${createdat.toDateString()})`);
    

    }
     completeTodo(id:number, createdat:Date):void{
        const todo = this.todos.filter(todos => todo.id === id);
        if(todo){
            todo.completed = true;
        } else{
            todo.completed = false;
        }
     }
       
     removeTodo(id:number):void{
        const index = this.todos.filter(todos => todos.id !== id);
        }
        listTodos(): TodoItem[]{
            return this.todos
        }
         filterTodos(completed:boolean):void{
            const filtered = this.todos.filter(todos => todos.completed === completed);
            if(filtered.length ===0){
                console.log(`No ${completed} "completed":"pending"}todos found.`);
            }else{
                console.log(`/n${completed} "completed":"pending"}todos .`);
            }
         }
           updateTodo(id:number, newtask:string ,newcreatedat:Date): void{
            const todo = this.todos.filter(todos => todos.id ===id);
            if(todo){
                console.log(`updating todo id ${id}:"${newtask}"`);
            }
           }
           clearCompleted():void{
            const completedCount = this.todos.filter(todos => todos.completed).length;
            if(completedCount ===0){
                console.log("no completed todos to clear");
                return;
            }
            this.todos = this.todos.filter(todos => !todos.completed);
            console.log(`cleared ${completedCount} completed todo(s).`);
           }
    }
      const aTodolist = new Todolist();

      aTodolist.addTodo("buy your groceries", new Date("2025 - 04 -02"));
      aTodolist.addTodo("build a to do list app",new Date("2025 - 04 -02"));

        aTodolist.listTodos();

      aTodolist.completeTodo(1, new Date("2025-04-02"));

       aTodolist.updateTodo(2,"build a simple app",new Date("2025 - 04- 02"));

       
        aTodolist.clearCompleted();

         aTodolist.filterTodos(false);
      


