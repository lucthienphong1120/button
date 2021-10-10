        //toast function
        function toast( {
            title = '',
            message = '',
            type = 'info',
            duration = 3000
        }) {
            var main = document.getElementById('toast');
            if (main) {
                var toast = document.createElement('div');
                //auto remove after time
                var autoremove = setTimeout(function(){
                    main.removeChild(toast);        //xoá thông báo
                }, duration + 1300);
                //remove when click
                toast.onclick = function(event) {
                    if(event.target.closest('.toast__close')) {
                        main.removeChild(toast);    //xoá thông báo
                        clearTimeout(autoremove);   //xoá auto remove
                    }
                };
                //call variable
                var icons = {
                    success: 'fas fa-check-circle',
                    info: 'fas fa-info-circle',
                    warning: 'fas fa-exclamation-circle',
                    error: 'fas fa-exclamation-circle'
                };
                var icon = icons[type];
                var delay = (duration / 1000);
                toast.classList.add('toast', `toast--${type}`);
                toast.style.animation = `slideInLeft linear 0.3s,fadeOut linear 1s ${delay}s forwards`;
                //add code
                toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;
                main.appendChild(toast);    //thêm thông báo
            }
        }

        function showSuccessToast() {
            toast( {
            title: 'Success!',
            message: 'Bạn đã đăng ký thành công',
            type: 'success',
            duration: 3000
            } );
        }

        function showInfoToast() {
            toast( {
            title: 'Info!',
            message: 'Ấn xem thêm để biết thêm thông tin chi tiết',
            type: 'info',
            duration: 3000
            } );
        }

        function showWarningToast() {
            toast( {
            title: 'Warn!',
            message: 'Cẩn thận, bạn đang sử dụng sai chức năng',
            type: 'warning',
            duration: 3000
            } );
        }

        function showErrorToast() {
            toast( {
            title: 'Error!',
            message: 'Thất bại, vui lòng nạp thêm tiền',
            type: 'error',
            duration: 3000
            } );
        }
