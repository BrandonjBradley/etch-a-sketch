$(document).ready(function(){

	createGrid(16);
	
	$('#resetGrid').click(function(){
			resetGrid();
		});

	$('#random').click(function(){
			randomColors();
		});


	$('#trace').click(function(){
		trace();
	});

	$('#trail').click(function(){
		trail();
	});
});

	function createGrid(size){
		$('#container').append('<table border="0" cellpadding="0" cellspacing="0" id="gridTable"><tbody></tbody></table>');
		for(var i = 0; i < size; i++)
		{
			$('#gridTable > tbody:last-child').append('<tr></tr>');
			for(var j = 0; j < size; j++)
				$('#gridTable tr:last').append('<td><div class="grid"></div></td>');
		}
		trace();
	}

	function trace()
	{
		$('.grid').unbind();
		$('.grid').mouseenter(function(){

		this.style.backgroundColor= 'yellow';
		});
		$('.grid').mouseleave(function(){
		this.style.backgroundColor ='black';
		});
	}
	
	function trail()
	{
		$('.grid').unbind();
		$('.grid').mouseenter(function(){
		$(this).fadeTo( "slow", 0.01);		
		});

		$('.grid').mouseleave(function(){
		$(this).fadeTo("slow", 1);	
		});
	
	}

	function resetGrid()
	{
		newSize = prompt("How big do you want the new grid to be?");
		$('#gridTable').remove(0);
		createGrid(newSize);
	}

	function randomColors()
	{
		$('.grid').unbind();
		$('.grid').mouseenter(function() {
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			this.style.backgroundColor =('#' + randomColor);
		});
	}

