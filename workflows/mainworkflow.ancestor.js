
// ----------------------------------------------------------------
//   Test menu for scenario mainWorkflow 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'mainWorkflow', 'Test mainWorkflow', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.mainWorkflow.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario mainWorkflow Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: mainWorkflow
// ----------------------------------------------------------------
GLOBAL.scenario({ mainWorkflow: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.createJobs);
}}, ctx.dataManagers.rootData).setId('24f8e253-97db-4cad-8bdd-7cabf15a14e7') ;

// ----------------------------------------------------------------
//   Step: createJobs
// ----------------------------------------------------------------
GLOBAL.step({ createJobs: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('mainWorkflow', '99582422-5f34-4583-85fa-ccd6ea09febb') ;
	// createJobs
	sc.endStep(); // end Scenario
	return;
}});
