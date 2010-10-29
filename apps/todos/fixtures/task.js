// ==========================================================================
// Project:   Todos.Task Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Todos */

sc_require('models/task');

Todos.Task.FIXTURES = [

  
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  { guid: "task-1", // each of these can also have "" surrounding them, like "guid":"1"
    description: "Build my first SproutCore app",
    isDone: false },
  
  { guid: "task-2",
    description: "Build a really awesome SproutCore app",
    isDone: false },
  
  { guid: "task-3",
    description: "Next, the world!",
    isDone: false }
		
];
