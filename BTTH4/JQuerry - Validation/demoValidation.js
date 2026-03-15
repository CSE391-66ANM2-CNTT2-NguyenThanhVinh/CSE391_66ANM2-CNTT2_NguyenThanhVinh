$().ready(function() {
	 $.validator.addMethod("validatePassword", function (value, element) {
	 	return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
	 }, "Hãy nhập password từ 8 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số");
	$("#demoForm").validate({
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		rules: {
			"user": {
				required: true,
				email:true,
				maxlength: 15
			},
			"password": {
				required: true,
				validatePassword:true,
				minlength: 8
			},
			"re-password": {
				equalTo: "#password",
				minlength: 8
				
			}
		},
		messages: {
			"user": {
				//Chuẩn bị thêm 1 tbao tiếng anh
				required: "Bắt buộc nhập username",
				email: "Vui lòng nhập email đúng định dạng.",
				maxlength: "Hãy nhập tối đa 15 ký tự"
			},
			"password": {
				required: "Bắt buộc nhập password",
				minlength: "Hãy nhập ít nhất 8 ký tự"
			},
			"re-password": {
				equalTo: "Hai password phải giống nhau",
				minlength: "Hãy nhập ít nhất 8 ký tự"
			}
		}
	});
	
});

/*Vấn đáp jq
1.làm thế nào để hiển thị lỗi khi người dùng nhập sai thông tin?
Bạn có thể sử dụng plugin jQuery Validation để hiển thị lỗi khi người dùng nhập sai thông tin. Trong đoạn mã trên, chúng ta đã thiết lập các quy tắc và thông báo lỗi cho các trường nhập liệu. Khi người dùng nhập sai thông tin, các thông báo lỗi sẽ được hiển thị dưới mỗi trường tương ứng.
2.
*/