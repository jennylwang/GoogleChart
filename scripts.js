// Code sample from Google Charts

// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
      	
      	var FREDDataArray = [];
      	
      	var DataObs = FREDEconData.observations; 
      	
      	for(var i=0; i<FREDEconData.observations.length; i++){
      		
      		var FREDData = [];
      		FREDData.push(DataObs[i].date);
      		FREDData.push(Number(DataObs[i].value));
      		FREDDataArray.push(FREDData);
      	}

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows(FREDDataArray);

        // Set chart options
        var options = {'title':'Economic Data Chart',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }