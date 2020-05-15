
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
	var numberofJobs = 3;
	for(var n = 1; n <= 3; n++ ) {
		ctx.galaxyAPI.addJobAndWaitRun({
			scenario: GLOBAL.scenarios.theJob,
			priority: e.priority.high },
		{input: {id: n } }, //true,
		function(code, label, job) {
			if ( code == e.error.OK) {
			ctx.log("Job done for " + job.data.input.id + " with status " + job.data.output.status,
				e.logIconType.Info,
				"Main")
			} else {
			ctx.log("Job failed for " + job.data.input.id + ", reason: " + code + ", " + label ,
				e.logIconType.Warning,
				"Main")				
			}
		})
	}
	ctx.log("Scheduled " + numberofJobs + " Jobs",
		e.logIconType.Info,
		"Main")
	sc.endStep(); // end Scenario
	return;
}});
