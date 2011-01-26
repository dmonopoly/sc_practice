Todos.taskController = SC.ObjectController.create({
	// single() transforms array into single object this controller manages
	contentBinding: SC.Binding.single('Todos.tasksController.selection'),
});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('todos');