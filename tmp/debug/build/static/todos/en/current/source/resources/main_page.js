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
    	anchorLocation: SC.ANCHOR_TOP
    }),
    
    middleView: SC.ScrollView.design({
    	hasHorizontalScroller: NO,
    	layout: { top: 36, bottom: 32, left: 0, right: 0 },
    	backgroundColor: 'white',

    	contentView: SC.ListView.design({
    	})
    }),
    
    bottomView: SC.ToolbarView.design({
    	layout: { bottom: 0, left: 0, rght: 0, height: 32 },
    	anchorLocation: SC.ANCHOR_BOTTOM
    })
  })

});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('todos');