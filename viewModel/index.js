

$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	// $('.modal-trigger').leanModal({
	// 	dismissible: false
	// });
	
	var login = new Vue({
		el: '#loginModal',
		data: {
			name:'admin',
			password:'123456',
			showModal: false
		},
		methods:{
			clickModal: function(){
				console.log("# showModal: "+this.name+' '+this.password)
				
				var data = {};
				data.name = this.name;
				data.password = this.password;
				
				$.ajax({
					type: 'POST',
					data: data,
			        url: '/api/v1/auth',
			        success: function(result) {
			            console.log(JSON.stringify(result));
			            if(result.error){
			            	// alert(result.error);
			            }else{
			            	// alert(JSON.stringify(result))
			            }
			        }
			    });
			}
		}
	});

	$('#loginModal').openModal({
		dismissible: false
	});
});
