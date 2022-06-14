const datad = {
					labels: [
						'Total purchases in the UN system',
						'PAHO purchased 5,72% | 1151000 ',
					],
					datasets: [{
						data: [2800000,1151000],
						backgroundColor: [
							'rgb(54, 162, 235)',
							'rgb(242,103,39)'
						],
						hoverOffset: 4
					}]
				};

	const config = {
  type: 'doughnut',
  data: datad,
  options: {
    responsive: true,
		plugins: {
			title:{
				align:'center',
				color:'white',
				display:true,
				text: 'PAHO',
				// font: {
        //          size: 80
        //         }
			},
			legend: {
        position: 'top',
					align:'start',
				labels:{
					color:'white',
					// font: {
          //        size: 80
          //       }
				}
      }
		}
	}
};
	const myChart = new Chart(
						document.getElementById('topUnProcurement'),
						config
					);