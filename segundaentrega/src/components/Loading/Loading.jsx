// //Loading
// const loaderContainer = document.querySelector('.loading');
// let inicio = new Date;

// window.addEventListener('load', () => {
    
//     let fin = new Date;
//     let segundos = (fin-inicio);

//     if(segundos < 1000){
//         setTimeout(() => {
//             loaderContainer.style.display = 'none';
//         }, 1000);
//     }else{
//         loaderContainer.style.display = 'none';
//     }
//    console.log(segundos)
    
// });
// return (
//     <div class="loading">
//     <i class="fa-solid fa-spinner"></i>
// </div>
// );

//  export default Loading;
//crl + k +c / u
//  /* Loading */
// .loading {
//     width: 100vw;
//     height: 100vh;
//     background-color: rgba(0, 0, 0, 0.507);
//     position: fixed;
//     z-index: 100;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
// .loading i {
//   font-size: 64px;
//   object-fit: cover;
//   color: rgb(217, 21, 235);
//   animation-name: rotar;
//   animation-duration: 1s;
//   animation-iteration-count: infinite;
// }
//   @keyframes rotar {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }