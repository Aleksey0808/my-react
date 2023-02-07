// import React from 'react'
import ReactDOM from 'react-dom';
import paintings from '../src/paintings.json';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
/////////////////////////////////////////////////////////////////////////////////////////////

// const element = React.createElement('div', {
//   a: 10,
//   b: 5,
//   children: 'hi world',
// })

// console.log(element)
// ReactDOM.render(element, document.querySelector('#root'))

// const elem1 = <span>Hi </span>;
// const elem2 = <span>world</span>;
// const element = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );
// const data = paintings[0];
// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

function Painting(props) {
  const { url, title, profileUrl, authorName, price } = props;
  console.log(props);
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Автор: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

const painting = paintings[0];
ReactDOM.render(
  <Painting
    url={painting.url}
    title={painting.title}
    authorName={painting.author.tag}
    profileUrl={painting.author.url}
    price={painting.price}
  />,
  document.querySelector('#root'),
);
