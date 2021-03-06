// ==========================================================================
// Project:   Todos - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Todos */

// This page describes the main user interface for your application.  
Todos.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'middleView topView bottomView'.w(),
    
    topView: SC.ToolbarView.design({
    	layout: { top: 0, left: 0, right: 0, height: 36},
    	childViews: 'labelView addButton'.w(),
    	anchorLocation: SC.ANCHOR_TOP,
    	
    	labelView: SC.LabelView.design({
		  	layout: { centerY: 0, height: 24, left: 8, width: 200 },
		  	controlSize: SC.LARGE_CONTROL_SIZE,
		  	fontWeight: SC.BOLD_WEIGHT,
		  	value: 'Todos'
		  }),
		  
		  addButton: SC.ButtonView.design({
		  	layout: { centerY: 0, height: 24, right: 12, width: 100 },
		  	title: 'Add Task',
		  	target: 'Todos.tasksController',
		  	action: 'addTask'
		  })
    }),
    
		middleView: SC.SplitView.design({
    	layout: { left: 0, top: 36, right: 0, bottom: 32 },
    	layoutDirection: SC.LAYOUT_HORIZONTAL,
    	autoresizeBehavior: SC.RESIZE_TOP_LEFT,
    	defaultThickness: 0.8,
    	// ListView in ScrollView which is in SplitView
    	topLeftView: SC.ScrollView.design({
		  	hasHorizontalScroller: NO,
		  	layout: { top: 36, bottom: 32, left: 0, right: 0 },
		  	backgroundColor: 'white',
				// no childViews: 'contentView'.w() ?
		  	contentView: SC.ListView.design({
		  		contentBinding: 'Todos.tasksController.arrangedObjects',
		  		selectionBinding: 'Todos.tasksController.selection',
		  		contentValueKey: 'description',
		  		contentCheckboxKey: 'isDone',
		  		rowHeight: 21,
		  		canEditContent: YES,
		  		canDeleteContent: YES,
		  		target: 'Todos.tasksController',
		  		action: 'toggleDone'
		  	})
    	}),
    	topLeftMinThickness: 150,
    	topLeftMaxThickness: 250,
    	dividerView: SC.SplitDividerView.design({
    		layout: {}
    	}),
    	// This view shows up on the right. It is a placeholder for now.
    	/*
    	bottomRightView: SC.LabelView.design({
    		textAlign: SC.ALIGN_CENTER,
    		valueBinding: 'Todos.taskController.description'
    	})*/
    	bottomRightView: SC.View.design({
    		classNames: 'todolabel'.w(),
    		childViews: 'prompt okButton descriptionLabel descriptionText isDoneCheckbox'.w(),
    		
    		// PROMPT
    		prompt: SC.LabelView.design({
    			layout: { top: 12, left: 20, height: 18, right: 20 },
    			value: 'Edit the task below:'
    		}),
    		
    		// INPUTS
    		
    		descriptionLabel: SC.LabelView.design({
    			layout: { top: 40, left: 20, width: 70, height: 18 },
    			textAlign: SC.ALIGN_RIGHT,
    			value: 'Description:'
    		}),
    		
    		descriptionText: SC.TextFieldView.design({
    			layout: { top: 40, left: 240, height: 80, width: 600 },
    			hint: 'Enter task description here'.loc(),
    			isTextArea: YES,
    			valueBinding: 'Todos.taskController.description'
    		}),
    		
    		isDoneCheckbox: SC.CheckboxView.design({
    			layout: { top: 146, left: 100, right: 20, height: 40 },
    			title: 'done?'.loc(),
    			valueBinding: 'Todos.taskController.isDone'
    		}),
    		
    		okButton: SC.ButtonView.design({
    			layout: { bottom: 20, right: 20, width: 90, height: 24 },
    			title: 'OK'.loc(),
    			isDefault: YES,
    			isEnabledBinding: 'Todos.taskController.isSaveOk',
    			target: 'Todos.taskController',
    			action: 'saveTask'
    		}),
    	}),
  	}),
  	
	  bottomView: SC.ToolbarView.design({
	  	layout: { bottom: 0, left: 0, right: 0, height: 32 },
	  	childViews: 'summaryView'.w(),
	  	anchorLocation: SC.ANCHOR_BOTTOM,
	  	
	  	summaryView: SC.LabelView.design({
	  		layout: { centerY: 0, height: 18, left: 20, right: 20 },
	  		textAlign: SC.ALIGN_CENTER,
	  		valueBinding: 'Todos.tasksController.summary'
	  	})
	  })
	})
});
