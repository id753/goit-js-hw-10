//Imports
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault(); 
  

    const delay = Number(event.target.delay.value);
    const state = event.target.state.value;
  

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  
    // Обработка успешного или неудачного выполнения промиса
    promise
      .then((delay) => {
        iziToast.success({
          title: '✅ Ok',
          message: `Fulfilled promise in ${delay}ms`,
          position: 'topRight'
        });
      })
      .catch((delay) => {
        iziToast.error({
          title: '❌ Error',
          message: `Rejected promise in ${delay}ms`,
          position: 'topRight'
        });
      });
  });
  