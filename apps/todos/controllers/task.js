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
	
	observeRecordState: function(){
		var taskRecord = this.get('content');
		if (taskRecord.get('status') === SC.Record.READY_DIRTY ||
				taskRecord.get('status') === SC.Record.READY_NEW) {
				this.set('isSaveOk', YES);
		} else {
			this.set('isSaveOk', NO);
		}
	}.observes('*content.status'),
});
