
//---------------------------------------------------
// Data Structures
//---------------------------------------------------
// ----------- rootData -------------------
ctx.dataManager({
	rootData :
	{
		mainWorkflow : 
		{
			pendingJobs : ''
		}
		, theJob : 
		{
			input : 
			{
				id : ''
			}
			, output : 
			{
				status : ''
			}
		}
	}
});
var rootData = ctx.dataManagers.rootData.create() ;

// ----------- rootData_mainWorkflow -------------------
ctx.dataManager({
	rootData_mainWorkflow :
	{
		pendingJobs : ''
	}
});
var rootData_mainWorkflow = ctx.dataManagers.rootData_mainWorkflow.create() ;

// ----------- rootData_theJob -------------------
ctx.dataManager({
	rootData_theJob :
	{
		input : 
		{
			id : ''
		}
		, output : 
		{
			status : ''
		}
	}
});
var rootData_theJob = ctx.dataManagers.rootData_theJob.create() ;

// ----------- rootData_theJob_input -------------------
ctx.dataManager({
	rootData_theJob_input :
	{
		id : ''
	}
});
var rootData_theJob_input = ctx.dataManagers.rootData_theJob_input.create() ;

// ----------- rootData_theJob_output -------------------
ctx.dataManager({
	rootData_theJob_output :
	{
		status : ''
	}
});
var rootData_theJob_output = ctx.dataManagers.rootData_theJob_output.create() ;


//---------------------------------------------------
// Settings Structure
//---------------------------------------------------

//---------------------------------------------------
// Functional Events Declaration
//---------------------------------------------------

//---------------------------------------------------
// 
//---------------------------------------------------
