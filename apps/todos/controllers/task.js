Todos.taskController = SC.ObjectController.create({
	// single() transforms array into single object this controller manages
	contentBinding: SC.Binding.single('Todos.tasksController.selection'),
	
	// looks up record and calls commit on it
	saveTask: function(){
		var taskRecord = this.get('content');
		if (taskRecord && taskRecord.isRecord){
			taskRecord.commitRecord();
		} else {
			alert("You must select a task first"); // not very 'sproutcore'...
		}
	},
	
});
