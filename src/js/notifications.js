import iziToast from 'izitoast';

const ToastConfig = {
  duration: 3000,
  showCloseButton: false,
  clickToClose: true,
  iconType: null,
  location: 'topRight',
  fadeInEffect: 'fadeInDown',
  fadeOutEffect: 'fadeOutUp',
};

export class Notifications {
  static showSuccess(msg) {
    iziToast.success({
      title: 'Success',
      titleColor: '#28a745',
      message: msg,
      messageColor: '#28a745',
      progressBarColor: '#28a745',
      ...ToastConfig,
    });
  }

  static showError(msg) {
    iziToast.error({
      title: 'Error',
      titleColor: '#dc3545',
      message: msg,
      messageColor: '#dc3545',
      progressBarColor: '#dc3545',
      ...ToastConfig,
    });
  }

  static showWarning(msg) {
    iziToast.warning({
      title: 'Warning',
      message: msg,
      titleColor: '#ffc107',
      messageColor: '#ffc107',
      progressBarColor: '#ffc107',
      ...ToastConfig,
    });
  }
}
