
// ----------------------------------------------------------------
//   Test menu for scenario theJob 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'theJob', 'Test theJob', '', function (ev) {
			var rootData_theJob = ctx.dataManagers.rootData_theJob.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.theJob.start(rootData_theJob);
		});
	}
});

//---------------------------------------------------
// Scenario theJob Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: theJob
// ----------------------------------------------------------------
GLOBAL.scenario({ theJob: function(ev, sc) {
	var rootData_theJob = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.returnStatus);
}}, ctx.dataManagers.rootData_theJob).setId('ea2b95c1-3ec9-44ad-9473-e668fab6cfaa') ;

// ----------------------------------------------------------------
//   Step: returnStatus
// ----------------------------------------------------------------
GLOBAL.step({ returnStatus: function(ev, sc, st) {
	var rootData_theJob = sc.data;
	ctx.workflow('theJob', 'fb2fa221-5f6a-4b9f-9ad4-13894302e015') ;
	// returnStatus
	var status = rootData_theJob.input.id % 2 == 0 ? "OK" : "ERROR";
	rootData_theJob.output.status = status;
	ctx.log("Returning job " + status + " for " + rootData_theJob.input.id, 
	  e.logIconType.Info,"Job")
	sc.endStep(); // end Scenario
	return;
}});
