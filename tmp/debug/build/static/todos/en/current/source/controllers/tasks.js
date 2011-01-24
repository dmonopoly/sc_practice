// ==========================================================================
// Project:   Todos.tasksController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Todos.tasksController = SC.ArrayController.create(
	SC.CollectionViewDelegate, // adds this mixin to tasksController
	/** @scope Todos.tasksController.prototype */ {
	summary: function() {
		var len = this.get('length'), ret ;

		if (len && len > 0) {
			ret = len === 1 ? "1 task" : "%@ tasks".fmt(len);
		} else ret = "No tasks";

		return ret;
	}.property('length').cacheable(),

	// CollectionViewDelegate method called by ListView whenever it wants to delete
	collectionViewDeleteContent: function(view, content, indexes){ // indexes=instance of SC.IndexSet
		this._destroySelectedRecords(indexes);
		this._updateSelectionSet(indexes);
	},
	/* Private methods */
	_destroySelectedRecords: function(indexes){
		var records = indexes.map(function(idx){
			return this.objectAt(idx); // "this" refers to tasksController
		}, this);
		records.invoke('destroy'); // removes record from store (fixtures)
	},
	// chooses record just before first deleted item
	_updateSelectionSet: function(indexes){
		var selIndex = indexes.get('min')-1;
		if (selIndex<0) selIndex = 0;
		this.selectObject(this.objectAt(selIndex)); // so this is how you select an object...
	},
	/**
	// function to add task
	addTask: function(){
		var task;
		// create a new task in the store
		task = Todos.store.createRecord(Todos.Task, {
			"description": "New Task",
			"isDone": false
		});
		// select new task in UI
		this.selectObject(task);
		// activate inline editor once UI can repaint
		this.invokeLater(function(){
			var contentIndex = this.indexOf(task);
			
		}
	}
	*/
});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('todos');