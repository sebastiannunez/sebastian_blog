$(document).ready(function(){
	
	localStorage.removeItem("dni");
	localStorage.removeItem("nombre_paciente");
	localStorage.removeItem("paciente");
		
	$('#btnLogin').on('click',function(){
		
		var dni = $('#login-dni').val();
		var email = $('#login-email').val();
		
		if(dni==''){
			
			$('#login-dni').addClass('error');
			setTimeout(function(){
				$('#login-dni').removeClass('error');
			},3000)
			
		}else{
			
			var datos = {
							"accion": "login",
							"dni": dni,
							"email": email
							 
						}
			
			$.ajax({
				url: "http://54.225.110.0/php-bin/ws/ajax_turnos.php",
				data: datos,							
				type:"GET",   	
				success: function(data){
						       					
					if(data=="ok"){
						
						localStorage.setItem("dni", dni);						
						window.location.href = 'turnos_autogestion.html' ;
					}else{
						
						$('#divError').css('display','inline-block');
						setTimeout(function(){ 
							$('#divError').css('display','none');
						}, 5000);
					}
					
				}
			});	
			
		}
		
		
		
	})

})
