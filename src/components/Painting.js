import defaultImg from '../components/default.jpg';
export default function Painting(props) {
  const {
    imageUrl = defaultImg,
    title,
    profileUrl,
    authorName = 'unknown',
    price,
  } = props;
  // console.log(props);
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
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
