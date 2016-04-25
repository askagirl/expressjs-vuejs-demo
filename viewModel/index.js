
$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal-trigger').leanModal({
		dismissible: false
	});

	var btnModal = new Vue({
		el: '#btnModal',
		data: {
			show: false
		},
		methods:{
			showModal: function(){
				console.log("# showModal: "+this.showModal);
				$('#btnModal').hide();
			},
			hideModal: function(){
				$el.hide();
			}
		}
	});

	var login = new Vue({
		el: '#loginModal',
		data: {
			account:'admin',
			password:'123456',
			showModal: false
		},
		methods:{
			clickModal: function(){
				// btnModal.hideModal()
				$('#btnModal').hide();
				console.log("# showModal: "+this.showModal)
			}
		}
	});

	$('#loginModal').openModal({
		dismissible: false
	});
});
